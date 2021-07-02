import React, { useEffect, useMemo, useState } from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

export const GroupContext = React.createContext({} as any);

function Group(props: any): any {
  const { children, onChange } = props;

  const [checked, setChecked] = useState(props.checked || []);

  useEffect(() => {
    setChecked(props.checked);
  }, [props.checked]);

  function handleChange(e: any, v: any) {
    console.log(e, v);
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
    <div
      className={clsx({
        [`${prefix}-checkbox-group`]: true,
      })}
    >
      <GroupContext.Provider value={context}>{children}</GroupContext.Provider>
    </div>
  );
}

export default Group;
