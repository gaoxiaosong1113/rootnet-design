import React, { useEffect, useMemo, useState, ReactNode } from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

export interface EadioProps {
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
  onChange?: (checked?: any) => void;

  /**
   * @description      选中项
   * @default           -
   */
  checked?: any;

  /**
   * @description      form中使用
   * @default           -
   */
  value?: any;

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
}

export const GroupContext = React.createContext({} as any);

function Group(props: EadioProps) {
  const { className, children, onChange } = props;

  const [checked, setChecked] = useState(props.checked === undefined ? null : props.checked);

  function handleChange(e: any, v: any) {
    setChecked(v);
    if (onChange) {
      onChange(v);
    }
  }

  useEffect(() => {
    setChecked(props.checked);
  }, [props.checked]);

  useEffect(() => {
    if (props.value !== undefined) {
      setChecked(props.value);
    }
  }, [props.value]);

  const context = {
    checked,
    disabled: props.disabled,
    name: props.name,
    onChange: handleChange,
  };

  return (
    <div className={clsx(className, `${prefix}-radio-group`, {})}>
      <GroupContext.Provider value={context}>{children}</GroupContext.Provider>
    </div>
  );
}

export default Group;
