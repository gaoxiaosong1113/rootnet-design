import React from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

interface PopoverProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;

  /**
   * @description      Popover的类型
   * @default           -
   */
  type?: string;

  /**
   * @description      需要显示的图标
   * @default           -
   */
  icon?: string;

  /**
   * @description      是否禁用Popover
   * @default           false
   */
  disabled?: boolean;

  children?: React.ReactChild;

  /**
   * @description      Popover点击事件
   * @default           -
   */
  onClick?: Function;

  /**
   * @description      Popover左右的间隔
   * @default           -
   */
  interval?: string;

  /**
   * @description      Popover的尺寸
   * @default           -
   */
  size?: string;
}

function Popover(props: PopoverProps) {
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
        [`${prefix}-Popover`]: true,
        [`${prefix}-Popover-default`]: !type && !disabled,
        [`${prefix}-Popover-${type}`]: type,
        [`${prefix}-Popover-disabled`]: disabled,
        [`${prefix}-Popover-${size}`]: size,
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

export default Popover;
