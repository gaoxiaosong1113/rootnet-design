import React from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

interface DropdownProps {
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
   * @description      Dropdown点击事件
   * @default           -
   */
  onClick?: Function;

  /**
   * @description      Dropdown左右的间隔
   * @default           -
   */
  interval?: string;

  /**
   * @description      Dropdown的尺寸
   * @default           -
   */
  size?: string;
}

function Dropdown(props: DropdownProps) {
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
        [`${prefix}-Dropdown`]: true,
        [`${prefix}-Dropdown-default`]: !type && !disabled,
        [`${prefix}-Dropdown-${type}`]: type,
        [`${prefix}-Dropdown-disabled`]: disabled,
        [`${prefix}-Dropdown-${size}`]: size,
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

export default Dropdown;
