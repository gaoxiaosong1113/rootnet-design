import React, { useState } from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

interface TagProps {
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

  /**
   * @description      Tag的颜色
   * @default           -
   */
  color?: string;

  /**
   * @description      是否可以关闭
   * @default           -
   */
  close?: any;

  /**
   * @description      是否新增
   * @default           -
   */
  add?: any;

  /**
   * @description      是否新增
   * @default           -
   */
  onClose?: Function;
}

function Tag(props: TagProps) {
  const {
    type = 'default',
    disabled,
    children,
    onClick,
    interval,
    size,
    color,
    close,
    add,
    onClose,
    ...prop
  } = props;

  const [isClose, setIsClose] = useState(false);

  function handleClick() {
    if (!disabled && onClick) {
      onClick();
      if (onClose) {
        onClose();
      }
    }
  }

  function handleClose() {
    if (!disabled) {
      setIsClose(true);
      onClose && onClose();
    }
  }

  if (close && isClose) {
    return null;
  }

  return (
    <div
      className={clsx({
        [`${prefix}-tag`]: true,
        [`${prefix}-tag-${type}`]: type,
        [`${prefix}-tag-disabled`]: disabled,
        [`${prefix}-tag-${size}`]: size,
        [`${prefix}-tag-color-${color}`]: color,
      })}
      style={{ margin: interval }}
      onClick={handleClick}
      {...prop}
    >
      {add && <Icon name={'cuowu'} size={14} />}
      <span>{children}</span>
      {close && <Icon name={'cuowu'} size={14} onClick={() => handleClose()} />}
    </div>
  );
}

export default Tag;
