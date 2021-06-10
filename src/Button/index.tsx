import React from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

interface ButtonProps {
  /**
   * @description      图标的样式名
   * @default           -
   */
  className?: string;

  /**
   * @description      按钮的类型
   * @default           -
   */
  type?: string;

  /**
   * @description      是否禁用按钮
   * @default           -
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
}

function Button(props: ButtonProps) {
  const { type, disabled, children, onClick, interval, size, ...prop } = props;

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
      {...prop}
    >
      {children}
    </button>
  );
}

export default Button;
