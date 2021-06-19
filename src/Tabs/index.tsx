import React from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

interface TabsProps {
  /**
   * @description      样式命
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
   * @description      Tabs点击事件
   * @default           -
   */
  onClick?: Function;

  /**
   * @description      Tabs左右的间隔
   * @default           -
   */
  interval?: string;

  /**
   * @description      Tabs的尺寸
   * @default           -
   */
  size?: string;
}

function Tabs(props: TabsProps) {
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
        [`${prefix}-Tabs`]: true,
        [`${prefix}-Tabs-default`]: !type && !disabled,
        [`${prefix}-Tabs-${type}`]: type,
        [`${prefix}-Tabs-disabled`]: disabled,
        [`${prefix}-Tabs-${size}`]: size,
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

export default Tabs;
