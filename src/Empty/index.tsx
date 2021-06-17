import React from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

interface EmptyProps {
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
   * @description      Empty点击事件
   * @default           -
   */
  onClick?: Function;

  /**
   * @description      Empty左右的间隔
   * @default           -
   */
  interval?: string;

  /**
   * @description      Empty的尺寸
   * @default           -
   */
  size?: string;
}

function Empty(props: EmptyProps) {
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
        [`${prefix}-Empty`]: true,
        [`${prefix}-Empty-default`]: !type && !disabled,
        [`${prefix}-Empty-${type}`]: type,
        [`${prefix}-Empty-disabled`]: disabled,
        [`${prefix}-Empty-${size}`]: size,
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

export default Empty;
