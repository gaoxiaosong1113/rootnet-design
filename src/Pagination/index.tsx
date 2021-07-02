import React from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

export interface PaginationProps {
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
   * @description      Pagination点击事件
   * @default           -
   */
  onClick?: Function;

  /**
   * @description      Pagination左右的间隔
   * @default           -
   */
  interval?: string;

  /**
   * @description      Pagination的尺寸
   * @default           -
   */
  size?: string;
}

function Pagination(props: PaginationProps) {
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
        [`${prefix}-Pagination`]: true,
        [`${prefix}-Pagination-default`]: !type && !disabled,
        [`${prefix}-Pagination-${type}`]: type,
        [`${prefix}-Pagination-disabled`]: disabled,
        [`${prefix}-Pagination-${size}`]: size,
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

export default Pagination;
