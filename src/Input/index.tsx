import React from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

interface InputProps {
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
   * @description      Input点击事件
   * @default           -
   */
  onClick?: Function;

  /**
   * @description      Input左右的间隔
   * @default           -
   */
  interval?: string;

  /**
   * @description      Input的尺寸
   * @default           -
   */
  size?: string;
}

function Input(props: InputProps) {
  const { type, icon, disabled, children, onClick, interval, size, ...prop } =
    props;

  function handleClick() {
    if (!disabled && onClick) {
      onClick();
    }
  }
  return (
    <div
      className={clsx({
        [`${prefix}-Input`]: true,
        [`${prefix}-Input-default`]: !type && !disabled,
        [`${prefix}-Input-${type}`]: type,
        [`${prefix}-Input-disabled`]: disabled,
        [`${prefix}-Input-${size}`]: size,
      })}
      style={{ margin: interval }}
      onClick={handleClick}
      {...prop}
    >
      {icon && <Icon name={icon} />}
      <span>{children}</span>
    </div>
  );
}

export default Input;
