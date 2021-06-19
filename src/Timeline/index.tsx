import React from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

interface TimelineProps {
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
   * @description      Timeline点击事件
   * @default           -
   */
  onClick?: Function;

  /**
   * @description      Timeline左右的间隔
   * @default           -
   */
  interval?: string;

  /**
   * @description      Timeline的尺寸
   * @default           -
   */
  size?: string;
}

function Timeline(props: TimelineProps) {
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
        [`${prefix}-Timeline`]: true,
        [`${prefix}-Timeline-default`]: !type && !disabled,
        [`${prefix}-Timeline-${type}`]: type,
        [`${prefix}-Timeline-disabled`]: disabled,
        [`${prefix}-Timeline-${size}`]: size,
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

export default Timeline;
