// 引入react依赖
import React from 'react';
import ReactDOM from 'react-dom';

// 引入第三方依赖
import { CSSTransitionGroup } from 'react-transition-group'; // ES6
import clsx from 'clsx';

// 引入样式
import './index.less';

// 引入配置文件
import { prefix } from '../config';

// 引入组件
import { Icon } from '../index';

export interface ButtonProps {
  /**
   * @description      按钮的样式名
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

function Button(props: ButtonProps) {
  const {
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

  function handleClick() {
    if (!disabled && onClick) {
      onClick();
    }
  }
  return (
    <button
      className={clsx({
        [`${prefix}-button`]: true,
        [`${prefix}-button-default`]: !type && !disabled,
        [`${prefix}-button-${type}`]: type,
        [`${prefix}-button-disabled`]: disabled,
        [`${prefix}-button-${size}`]: size,
      })}
      style={{ margin: interval }}
      onClick={handleClick}
      type={htmlType || 'button'}
      {...prop}
    >
      {icon && <Icon name={icon} />}
      <span>{children}</span>
    </button>
  );
}

export default Button;
