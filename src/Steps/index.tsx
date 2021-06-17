import React from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

interface StepsProps {
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
   * @description      Steps点击事件
   * @default           -
   */
  onClick?: Function;

  /**
   * @description      Steps左右的间隔
   * @default           -
   */
  interval?: string;

  /**
   * @description      Steps的尺寸
   * @default           -
   */
  size?: string;
}

function Steps(props: StepsProps) {
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
        [`${prefix}-Steps`]: true,
        [`${prefix}-Steps-default`]: !type && !disabled,
        [`${prefix}-Steps-${type}`]: type,
        [`${prefix}-Steps-disabled`]: disabled,
        [`${prefix}-Steps-${size}`]: size,
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

export default Steps;
