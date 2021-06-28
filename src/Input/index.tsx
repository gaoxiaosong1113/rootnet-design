import React, { useEffect, useState } from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

interface InputProps {
  /**
   * @description      样式命
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
   * @description      Input的尺寸
   * @default           -
   */
  label?: string;

  /**
   * @description      Input的尺寸
   * @default           -
   */
  required?: string;

  /**
   * @description      Input的尺寸
   * @default           -
   */
  horizontal?: string;

  /**
   * @description      Input的尺寸
   * @default           -
   */
  component?: string;

  /**
   * @description      Input的尺寸
   * @default           -
   */
  size?: string;

  /**
   * @description      提示文字
   * @default           -
   */
  placeholder?: string;

  /**
   * @description      input 后面的信息
   * @default           -
   */
  after?: any;

  /**
   * @description      input 前面的信息
   * @default           -
   */
  before?: any;

  /**
   * @description      change
   * @default           -
   */
  onChange?: Function;

  /**
   * @description      focus
   * @default           -
   */
  onFocus?: Function;

  /**
   * @description      blur
   * @default           -
   */
  onBlur?: Function;

  /**
   * @description      name
   * @default           -
   */
  name?: string;

  /**
   * @description      value
   * @default           -
   */
  value?: string;

  /**
   * @description      是否默认获取焦点
   * @default           -
   */
  focus?: boolean;
}

function Input(props: InputProps) {
  const {
    label,
    required,
    horizontal,
    placeholder,
    before,
    after,
    component,
    icon,
    onChange,
    onFocus,
    onBlur,
    name,
    ...prop
  } = props;

  const [value, setValue] = useState(props.value);
  const [focus, setFocus] = useState(props.focus);

  const handleChange = (e: any) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const handleFocus = (e: any) => {
    setFocus(true);
    if (onFocus) {
      onFocus(e);
    }
  };
  const handleBlur = (e: any) => {
    setFocus(false);
    if (onBlur) {
      onBlur(e);
    }
  };

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  useEffect(() => {
    setFocus(props.focus);
  }, [props.focus]);

  return (
    <div
      className={clsx({
        [`${prefix}-input`]: true,
        [`${prefix}-input-focus`]: focus,
      })}
    >
      {before && (
        <div
          className={clsx({
            [`${prefix}-input-before`]: true,
          })}
        >
          {before}
        </div>
      )}
      {icon && (
        <div
          className={clsx({
            [`${prefix}-input-icon`]: true,
          })}
        >
          {icon}
        </div>
      )}
      <div
        className={clsx({
          [`${prefix}-input-content`]: true,
        })}
      >
        <input
          type="text"
          name={name}
          value={value || ''}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder || '请输入'}
        />
      </div>

      {after && (
        <div
          className={clsx({
            [`${prefix}-input-after`]: true,
          })}
        >
          {after}
        </div>
      )}
    </div>
  );
}

export default Input;
