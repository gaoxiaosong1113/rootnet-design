import React from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

interface LayoutProps {
  /**
   * @description      类名
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
   * @description      Layout点击事件
   * @default           -
   */
  onClick?: Function;

  /**
   * @description      Layout左右的间隔
   * @default           -
   */
  interval?: string;

  /**
   * @description      Layout的尺寸
   * @default           -
   */
  size?: string;
}

function Layout(props: LayoutProps) {
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
        [`${prefix}-Layout`]: true,
        [`${prefix}-Layout-default`]: !type && !disabled,
        [`${prefix}-Layout-${type}`]: type,
        [`${prefix}-Layout-disabled`]: disabled,
        [`${prefix}-Layout-${size}`]: size,
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

export default Layout;
