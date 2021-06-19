import React from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

interface TagProps {
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
   * @description      Tag点击事件
   * @default           -
   */
  onClick?: Function;

  /**
   * @description      Tag左右的间隔
   * @default           -
   */
  interval?: string;

  /**
   * @description      Tag的尺寸
   * @default           -
   */
  size?: string;
}

function Tag(props: TagProps) {
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
        [`${prefix}-Tag`]: true,
        [`${prefix}-Tag-default`]: !type && !disabled,
        [`${prefix}-Tag-${type}`]: type,
        [`${prefix}-Tag-disabled`]: disabled,
        [`${prefix}-Tag-${size}`]: size,
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

export default Tag;
