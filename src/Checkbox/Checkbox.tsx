import React, {
  useEffect,
  ReactNode,
  useMemo,
  useState,
  useContext,
} from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

import { GroupContext } from './Group';

export interface CheckboxProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;
  style?: Object;
  children?: ReactNode;

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

  /**
   * @description      Checkbox 更改事件
   * @default           -
   */
  onChange?: (checked: boolean, value: string) => undefined;

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

  /**
   * @description      半选
   * @default           -
   */
  indeterminate?: boolean;
}

function Checkbox(props: CheckboxProps): any {
  const {
    className,
    type,
    icon,
    disabled,
    children,
    onChange,
    size,
    indeterminate,
    ...prop
  } = props;
  const [checked, setChecked] = useState(props.checked ? true : false);
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
    checkboxProps.checked =
      (checkboxGroup.checked &&
        checkboxGroup.checked.indexOf(props.value) !== -1) ||
      false;
    checkboxProps.disabled = props.disabled || checkboxGroup.disabled || false;
  }

  useEffect(() => {
    setChecked(props.checked ? true : false);
  }, [props.checked]);

  useEffect(() => {
    setValue(props.value || '');
  }, [props.value]);

  return (
    <label
      className={clsx(className, `${prefix}-checkbox`, {
        [`${prefix}-checkbox-default`]: !type && !disabled,
        [`${prefix}-checkbox-${type}`]: type,
        [`${prefix}-checkbox-disabled`]: disabled,
        [`${prefix}-checkbox-${size}`]: size,
        [`${prefix}-checkbox-indeterminate`]: indeterminate,
        [`${prefix}-checkbox-checked`]: !indeterminate && checkboxProps.checked,
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
