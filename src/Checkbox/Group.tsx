import React, { useEffect, ReactNode, useMemo, useState } from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

export const GroupContext = React.createContext({} as any);

export interface GroupProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;
  style?: Object;
  children?: ReactNode;

  /**
   * @description      选中更改事件
   * @default           -
   */
  onChange?: (checked?: Array<boolean>) => void;

  /**
   * @description      选中项
   * @default           []
   */
  checked?: Array<boolean>;

  /**
   * @description      是否禁用按钮
   * @default           false
   */
  disabled?: boolean;

  /**
   * @description      标签组name值
   * @default           -
   */
  name: string;

  /**
   * @description      form中使用
   * @default           -
   */
  value?: any;
}

function Group(props: GroupProps) {
  const { className, children, onChange, value, ...prop } = props;

  const [checked, setChecked] = useState(props.checked || []);

  useEffect(() => {
    setChecked(props.checked || []);
  }, [props.checked]);

  useEffect(() => {
    setChecked(props.value || []);
  }, [props.value]);

  function handleChange(e: any, v: any) {
    let findIndex = checked.indexOf(v);
    if (!e && findIndex != -1) {
      checked.splice(findIndex, 1);
    } else {
      checked.push(v);
    }
    setChecked([...checked]);
    if (onChange) {
      onChange([...checked]);
    }
  }

  const context = {
    checked,
    disabled: props.disabled,
    name: props.name,
    onChange: handleChange,
  };

  return (
    <div className={clsx(className, `${prefix}-checkbox-group`)} {...prop}>
      <GroupContext.Provider value={context}>{children}</GroupContext.Provider>
    </div>
  );
}

export default Group;
