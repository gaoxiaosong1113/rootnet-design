import React from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

export interface TreeSelectProps {
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
   * @description      TreeSelect点击事件
   * @default           -
   */
  onClick?: Function;

  /**
   * @description      TreeSelect左右的间隔
   * @default           -
   */
  interval?: string;

  /**
   * @description      TreeSelect的尺寸
   * @default           -
   */
  size?: string;
}

function TreeSelect(props: TreeSelectProps) {
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
        [`${prefix}-TreeSelect`]: true,
        [`${prefix}-TreeSelect-default`]: !type && !disabled,
        [`${prefix}-TreeSelect-${type}`]: type,
        [`${prefix}-TreeSelect-disabled`]: disabled,
        [`${prefix}-TreeSelect-${size}`]: size,
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

export default TreeSelect;
