import React, { useEffect, useMemo, useState } from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

interface CheckboxProps {}

export const GroupContext = React.createContext(null);

function Group(props) {
  const { children, onChange } = props;

  const [checked, setChecked] = useState(props.checked || []);

  function handleChange(e, v) {
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
  };

  return (
    <div>
      <GroupContext.Provider value={context}>{children}</GroupContext.Provider>
    </div>
  );
}

export default Group;
