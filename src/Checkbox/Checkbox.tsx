import React, { useEffect, useMemo, useState, useContext } from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

import { GroupContext } from './Group';

interface CheckboxProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;

  /**
   * @description      按钮的类型
   * @default           -
   */
  type?: string;

  /**
   * @description      需要显示的图标
   * @default           -
   */
  icon?: string;

  /**
   * @description      是否禁用按钮
   * @default           false
   */
  disabled?: boolean;

  children?: React.ReactChild;

  /**
   * @description      Checkbox 更改事件
   * @default           -
   */
  onChange?: Function;

  /**
   * @description      是否选中
   * @default           -
   */
  checked?: boolean;

  /**
   * @description      Checkbox 的值
   * @default           -
   */
  value?: string;

  /**
   * @description      Checkbox的尺寸
   * @default           -
   */
  size?: string;

  Group?: any;
  indeterminate?: boolean;
}

function Checkbox(props: CheckboxProps): any {
  const {
    type,
    icon,
    disabled,
    children,
    onChange,
    size,
    indeterminate,
    ...prop
  } = props;
  const [checked, setChecked] = useState(props.checked || false);
  const [value, setValue] = useState(props.value || '');

  const checkboxGroup = useContext(GroupContext);

  function handleChange(e: any) {
    if (!disabled) {
      setChecked(e.target.checked);
      if (onChange) {
        onChange(e.target.checked, value);
      }
    }
  }

  const checkboxProps: any = {
    onChange: handleChange,
    checked,
  };

  // 被group包裹走group的props
  if (JSON.stringify(checkboxGroup) !== '{}') {
    checkboxProps.onChange = (e: any) => {
      if (!disabled) {
        setChecked(e.target.checked);
        if (checkboxGroup.onChange) {
          checkboxGroup.onChange(e.target.checked, value);
        }
      }
    };
    checkboxProps.name = checkboxGroup.name;
    checkboxProps.checked = checkboxGroup.checked.indexOf(props.value) !== -1;
    checkboxProps.disabled = props.disabled || checkboxGroup.disabled;
  }

  useEffect(() => {
    setChecked(props.checked || false);
  }, [props.checked]);

  useEffect(() => {
    setValue(props.value || '');
  }, [props.value]);

  return (
    <label
      className={clsx({
        [`${prefix}-checkbox`]: true,
        [`${prefix}-checkbox-default`]: !type && !disabled,
        [`${prefix}-checkbox-${type}`]: type,
        [`${prefix}-checkbox-disabled`]: disabled,
        [`${prefix}-checkbox-${size}`]: size,
        [`${prefix}-checkbox-indeterminate`]:
          !checkboxProps.checked && indeterminate,
        [`${prefix}-checkbox-checked`]: checkboxProps.checked,
      })}
      // onClick={handleChange}
      {...prop}
    >
      <input type="checkbox" {...checkboxProps} />
      <span
        className={clsx({
          [`${prefix}-checkbox-icon`]: true,
        })}
      ></span>
      <span
        className={clsx({
          [`${prefix}-checkbox-content`]: true,
        })}
      >
        {children}
      </span>
    </label>
  );
}

export default Checkbox;
