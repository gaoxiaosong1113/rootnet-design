import React from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

interface ButtonProps {
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
}

function Button(props: ButtonProps) {
  const { type, icon, disabled, children, onClick, interval, size, ...prop } =
    props;

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
      {icon && <Icon name={icon} />}
      <span>{children}</span>
    </button>
  );
}

export default Button;
