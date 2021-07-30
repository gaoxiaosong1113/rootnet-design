import React, { useEffect, useMemo, useState } from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

export interface CheckboxProps {}

export const GroupContext = React.createContext({} as any);

function Group(props: any) {
  const { children, onChange } = props;

  const [checked, setChecked] = useState(
    props.checked === undefined ? null : props.checked,
  );

  function handleChange(e: any, v: any) {
    setChecked(v);
    if (onChange) {
      onChange(v);
    }
  }

  useEffect(() => {
    setChecked(props.checked);
  }, [props.checked]);

  const context = {
    checked,
    disabled: props.disabled,
    name: props.name,
    onChange: handleChange,
  };

  return (
    <div
      className={clsx({
        [`${prefix}-radio-group`]: true,
      })}
    >
      <GroupContext.Provider value={context}>{children}</GroupContext.Provider>
    </div>
  );
}

export default Group;
