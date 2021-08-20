// 引入react依赖
import React, { useRef, useImperativeHandle } from 'react';
import ReactDOM from 'react-dom';

// 引入第三方依赖
import clsx from 'clsx';

// 引入样式
import './index.less';

// 引入配置文件
import { prefix } from '../config';

// 引入组件
import { Icon } from '../index';

export interface ButtonProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;
  style?: Object;
  children?: any;

  /**
   * @description      ref
   * @default           -
   */
  ref?: any;

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
   * @description      button点击事件
   * @default           -
   */
  onClick?: Function;

  /**
   * @description      button左右的间隔
   * @default           -
   */
  interval?: string;

  /**
   * @description      button的尺寸
   * @default           -
   */
  size?: string;

  /**
   * @description      按钮的类型
   * @default           -
   */
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
}

function Button(props: ButtonProps, ref: any) {
  const {
    className,
    style,
    type,
    icon,
    disabled,
    children,
    onClick,
    interval,
    size,
    htmlType,
    ...prop
  } = props;

  function handleClick(event: any) {
    if (!disabled && onClick) {
      onClick(event);
    }
  }

  const eleRef = useRef();

  useImperativeHandle(ref, () => eleRef.current);

  return (
    <button
      className={clsx(className, `${prefix}-button`, {
        [`${prefix}-button-default`]: !type && !disabled,
        [`${prefix}-button-${type}`]: type,
        [`${prefix}-button-disabled`]: disabled,
        [`${prefix}-button-${size}`]: size,
      })}
      style={{ margin: interval, ...style }}
      onClick={handleClick}
      type={htmlType || 'button'}
      ref={eleRef}
      {...prop}
    >
      {icon && <Icon name={icon} />}
      <span>{children}</span>
    </button>
  );
}

export default React.forwardRef(Button);
