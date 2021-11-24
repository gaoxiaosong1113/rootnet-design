// 引入react依赖
import React, { ReactNode, useState, useRef, useEffect, useImperativeHandle } from 'react';
import ReactDOM from 'react-dom';

// 引入第三方依赖

import clsx from 'clsx';

// 引入样式
import './index.less';

// 引入配置文件
import { prefix } from '../config';

// 引入组件
import { Icon, Input } from '../index';

export interface InputNumberProps {
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
   * @description      name
   * @default           -
   */
  name?: string;

  /**
   * @description      输入框内容
   * @default           -
   */
  value?: number;

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
   * @description      启用自动完成功能的表单
   * @default           -
   */
  autoComplete?: string;

  /**
   * @description      步长
   * @default           1
   */
  step?: number;
}

function InputNumber(props: InputNumberProps, ref: any) {
  const {
    className,
    style,
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
    step = 1,
    ...prop
  } = props;

  const [value, setValue] = useState(props.value || '');
  const [focus, setFocus] = useState(props.focus);

  const refEl = useRef(null) as any;

  useImperativeHandle(ref, () => refEl.current);

  const handleChange = (e: any) => {
    let val = e.target.value;
    if (isNaN(Number(val))) return;
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
    setFocus(false);
    if (onInput) {
      onInput(value, e);
    }
  };

  const handleUp = () => {
    if (disabled) return;
    setValue(Number(value) + step);
  };

  const handleDown = () => {
    if (disabled) return;
    setValue(Number(value) - step);
  };

  useEffect(() => {
    if (isNaN(Number(props.value))) return;
    setValue(props.value || '');
  }, [props.value]);

  useEffect(() => {
    setFocus(props.focus);
  }, [props.focus]);

  return (
    <div
      className={clsx(className, `${prefix}-inputNumber`, {
        [`${prefix}-inputNumber-focus`]: focus,
        [`${prefix}-inputNumber-disabled`]: disabled,
      })}
      style={style}
    >
      {before && <div className={clsx(`${prefix}-inputNumber-before`)}>{before}</div>}
      {icon && <div className={clsx(`${prefix}-inputNumber-icon`)}>{icon}</div>}
      <div className={clsx(`${prefix}-inputNumber-content`)}>
        <input
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
          autoComplete="off"
        />
      </div>
      <div className={clsx(`${prefix}-inputNumber-handler`)}>
        <span
          className={clsx(`${prefix}-inputNumber-handler-btn`, `${prefix}-inputNumber-handler-up`)}
          onClick={handleUp}
        >
          <Icon size={10} name="shang" />
        </span>
        <span
          className={clsx(
            `${prefix}-inputNumber-handler-btn`,
            `${prefix}-inputNumber-handler-down`,
          )}
          onClick={handleDown}
        >
          <Icon size={10} name="xia" />
        </span>
      </div>
      {affterIcon && <div className={clsx(`${prefix}-inputNumber-affterIcon`)}>{affterIcon}</div>}
      {after && <div className={clsx(`${prefix}-inputNumber-after`)}>{after}</div>}
    </div>
  );
}

export default React.forwardRef(InputNumber);
