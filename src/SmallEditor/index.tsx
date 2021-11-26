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
   * @description      是否禁用输入框
   * @default           false
   */
  disabled?: boolean;

  /**
   * @description      提示文字
   * @default           -
   */
  placeholder?: string;

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
   * @description      输入框失去焦点的回调
   * @default           -
   */
  onBlur?: Function;

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
}

function SmallEditor(props: InputProps, ref: any) {
  const { className, placeholder, onChange, onFocus, onBlur, name, disabled, ...prop } = props;

  const [focus, setFocus] = useState(props.focus);

  const refEl = useRef(null) as any;
  const refElValue = useRef(null) as any;

  useImperativeHandle(ref, () => refEl.current);

  const handleFocus = (e: any) => {
    setFocus(true);
    if (onFocus) {
      onFocus(refElValue.current, e);
    }
    return false;
  };
  const handleBlur = (e: any) => {
    setFocus(false);
    if (onBlur) {
      onBlur(refElValue.current, e);
    }
  };

  const handleInput = (e: any) => {
    refElValue.current = e.target.innerHTML;
    if (onChange) {
      onChange(e.target.innerHTML, e);
    }
  };

  useEffect(() => {
    refElValue.current = props.value || '';
  }, [props.value]);

  useEffect(() => {
    setFocus(props.focus);
  }, [props.focus]);

  return (
    <div
      className={clsx(className, `${prefix}-smallEditor`, {
        [`${prefix}-smallEditor-focus`]: focus,
        [`${prefix}-smallEditor-disabled`]: disabled,
      })}
    >
      <pre
        className={clsx(`${prefix}-smallEditor-content`)}
        contentEditable
        suppressContentEditableWarning
      >
        <p>1213123123123</p>
      </pre>
    </div>
  );
}

export default React.forwardRef(SmallEditor);
