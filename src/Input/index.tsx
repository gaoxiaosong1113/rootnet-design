import React, { useEffect, useState, ReactNode, useRef, useImperativeHandle } from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

export interface InputProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;
  style?: Object;
  children?: ReactNode;

  /**
   * @description      需要显示的图标
   * @default           -
   */
  icon?: any;

  /**
   * @description      input 后面需要显示的图标
   * @default           -
   */
  affterIcon?: any;

  /**
   * @description      是否禁用输入框
   * @default           false
   */
  disabled?: boolean;

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
   * @description      带标签的 input，设置后置标签
   * @default           -
   */
  after?: any;

  /**
   * @description      带标签的 input，设置前置标签
   * @default           -
   */
  before?: any;

  /**
   * @description      输入框内容变化时的回调
   * @default           -
   */
  onChange?: Function;

  /**
   * @description      输入框获取焦点的回调
   * @default           -
   */
  onFocus?: Function;

  /**
   * @description      输入框触发事件的回调
   * @default           -
   */
  onInput?: Function;

  /**
   * @description      输入框失去焦点的回调
   * @default           -
   */
  onBlur?: Function;

  /**
   * @description      是否显示关闭按钮
   * @default           -
   */
  close?: boolean;

  /**
   * @description      name
   * @default           -
   */
  name?: string;

  /**
   * @description      输入框内容
   * @default           -
   */
  value?: string;

  /**
   * @description      是否默认获取焦点
   * @default           -
   */
  focus?: boolean;

  /**
   * @description      是否设置最大长度
   * @default           -
   */
  maxLength?: number;

  /**
   * @description      设置类型
   * @default           -
   */
  type?: string;

  /**
   * @description      启用自动完成功能的表单
   * @default           -
   */
  autoComplete?: string;
}

function Input(props: InputProps, ref: any) {
  const {
    className,
    placeholder,
    before,
    after,
    icon,
    affterIcon,
    onChange,
    onFocus,
    onBlur,
    name,
    disabled,
    maxLength,
    onInput,
    type = 'text',
    close = false,
    autoComplete,
    ...prop
  } = props;

  const [value, setValue] = useState(props.value || '');
  const [focus, setFocus] = useState(props.focus);

  const refEl = useRef(null) as any;

  useImperativeHandle(ref, () => refEl.current);

  const handleChange = (e: any) => {
    let val = e.target.value;
    if (maxLength && val.length > maxLength) e.target.value = val.slice(0, maxLength);
    setValue(e.target.value);
    if (onChange) {
      onChange(e.target.value, e);
    }
  };

  const handleFocus = (e: any) => {
    setFocus(true);
    if (onFocus) {
      onFocus(value, e);
    }
    return false;
  };
  const handleBlur = (e: any) => {
    setFocus(false);
    if (onBlur) {
      onBlur(value, e);
    }
  };
  const handleInput = (e: any) => {
    if (onInput) {
      onInput(e.target.value, e);
    }
  };

  useEffect(() => {
    setValue(props.value || '');
  }, [props.value]);

  useEffect(() => {
    setFocus(props.focus);
  }, [props.focus]);

  return (
    <div
      className={clsx(className, `${prefix}-input`, {
        [`${prefix}-input-focus`]: focus,
        [`${prefix}-input-disabled`]: disabled,
      })}
    >
      {before && <div className={clsx(`${prefix}-input-before`)}>{before}</div>}
      {icon && <div className={clsx(`${prefix}-input-icon`)}>{icon}</div>}
      <div className={clsx(`${prefix}-input-content`)}>
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onInput={handleInput}
          disabled={disabled}
          maxLength={maxLength}
          placeholder={placeholder || '请输入'}
          ref={refEl}
          autoComplete={autoComplete}
        />
      </div>
      {value && value != undefined && close && (
        <div
          onClick={() => {
            refEl.current.value = '';
            setValue('');
            handleChange({ target: refEl.current });
          }}
          className={clsx(`${prefix}-input-close`, {})}
        >
          <Icon name="shibai" size={14} />
        </div>
      )}
      {affterIcon && <div className={clsx(`${prefix}-input-affterIcon`)}>{affterIcon}</div>}
      {after && <div className={clsx(`${prefix}-input-after`)}>{after}</div>}
    </div>
  );
}

export default React.forwardRef(Input);
