import React from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

interface TooltipProps {
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
   * @description      Tooltip点击事件
   * @default           -
   */
  onClick?: Function;

  /**
   * @description      Tooltip左右的间隔
   * @default           -
   */
  interval?: string;

  /**
   * @description      Tooltip的尺寸
   * @default           -
   */
  size?: string;
}

function Tooltip(props: TooltipProps) {
  const { type, icon, disabled, children, onClick, interval, size, ...prop } =
    props;

  function handleClick() {
    if (!disabled && onClick) {
      onClick();
    }
  }
  return (
    <Tooltip
      className={clsx({
        [`${prefix}-Tooltip`]: true,
        [`${prefix}-Tooltip-default`]: !type && !disabled,
        [`${prefix}-Tooltip-${type}`]: type,
        [`${prefix}-Tooltip-disabled`]: disabled,
        [`${prefix}-Tooltip-${size}`]: size,
      })}
      style={{ margin: interval }}
      onClick={handleClick}
      {...prop}
    >
      {icon && <Icon name={icon} />}
      <span>{children}</span>
    </Tooltip>
  );
}

export default Tooltip;
