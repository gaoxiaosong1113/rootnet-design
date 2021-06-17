import React from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

interface DatePickerProps {
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
   * @description      DatePicker点击事件
   * @default           -
   */
  onClick?: Function;

  /**
   * @description      DatePicker左右的间隔
   * @default           -
   */
  interval?: string;

  /**
   * @description      DatePicker的尺寸
   * @default           -
   */
  size?: string;
}

function DatePicker(props: DatePickerProps) {
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
        [`${prefix}-DatePicker`]: true,
        [`${prefix}-DatePicker-default`]: !type && !disabled,
        [`${prefix}-DatePicker-${type}`]: type,
        [`${prefix}-DatePicker-disabled`]: disabled,
        [`${prefix}-DatePicker-${size}`]: size,
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

export default DatePicker;
