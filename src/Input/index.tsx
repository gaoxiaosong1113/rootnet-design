import React, {
  useEffect,
  useState,
  ReactNode,
  useRef,
  useImperativeHandle,
} from 'react';

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

function Input(props: InputProps, ref: any) {
  const {
    className,
    placeholder,
    before,
    after,
    icon,
    onChange,
    onFocus,
    onBlur,
    name,
    disabled,
    ...prop
  } = props;

  const [value, setValue] = useState(props.value || '');
  const [focus, setFocus] = useState(props.focus);

  const refEl = useRef(null);

  useImperativeHandle(ref, () => refEl.current);

  const handleChange = (e: any) => {
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
          type="text"
          name={name}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          placeholder={placeholder || '请输入'}
          ref={refEl}
        />
      </div>

      {after && <div className={clsx(`${prefix}-input-after`)}>{after}</div>}
    </div>
  );
}

export default React.forwardRef(Input);
