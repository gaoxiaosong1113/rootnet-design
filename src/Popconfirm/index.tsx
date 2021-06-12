import React from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

interface PopconfirmProps {
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
   * @description      Popconfirm点击事件
   * @default           -
   */
  onClick?: Function;

  /**
   * @description      Popconfirm左右的间隔
   * @default           -
   */
  interval?: string;

  /**
   * @description      Popconfirm的尺寸
   * @default           -
   */
  size?: string;
}

function Popconfirm(props: PopconfirmProps) {
  const { type, icon, disabled, children, onClick, interval, size, ...prop } =
    props;

  function handleClick() {
    if (!disabled && onClick) {
      onClick();
    }
  }
  return (
    <Popconfirm
      className={clsx({
        [`${prefix}-Popconfirm`]: true,
        [`${prefix}-Popconfirm-default`]: !type && !disabled,
        [`${prefix}-Popconfirm-${type}`]: type,
        [`${prefix}-Popconfirm-disabled`]: disabled,
        [`${prefix}-Popconfirm-${size}`]: size,
      })}
      style={{ margin: interval }}
      onClick={handleClick}
      {...prop}
    >
      {icon && <Icon name={icon} />}
      <span>{children}</span>
    </Popconfirm>
  );
}

export default Popconfirm;
