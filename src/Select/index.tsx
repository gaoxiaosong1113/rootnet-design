import React from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

interface SelectProps {
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
   * @description      Select点击事件
   * @default           -
   */
  onClick?: Function;

  /**
   * @description      Select左右的间隔
   * @default           -
   */
  interval?: string;

  /**
   * @description      Select的尺寸
   * @default           -
   */
  size?: string;
}

function Select(props: SelectProps) {
  const { type, icon, disabled, children, onClick, interval, size, ...prop } =
    props;

  function handleClick() {
    if (!disabled && onClick) {
      onClick();
    }
  }
  return (
    <Select
      className={clsx({
        [`${prefix}-Select`]: true,
        [`${prefix}-Select-default`]: !type && !disabled,
        [`${prefix}-Select-${type}`]: type,
        [`${prefix}-Select-disabled`]: disabled,
        [`${prefix}-Select-${size}`]: size,
      })}
      style={{ margin: interval }}
      onClick={handleClick}
      {...prop}
    >
      {icon && <Icon name={icon} />}
      <span>{children}</span>
    </Select>
  );
}

export default Select;
