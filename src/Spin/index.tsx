import React from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

interface SpinProps {
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
   * @description      Spin点击事件
   * @default           -
   */
  onClick?: Function;

  /**
   * @description      Spin左右的间隔
   * @default           -
   */
  interval?: string;

  /**
   * @description      Spin的尺寸
   * @default           -
   */
  size?: string;
}

function Spin(props: SpinProps) {
  const { type, icon, disabled, children, onClick, interval, size, ...prop } =
    props;

  function handleClick() {
    if (!disabled && onClick) {
      onClick();
    }
  }
  return (
    <Spin
      className={clsx({
        [`${prefix}-Spin`]: true,
        [`${prefix}-Spin-default`]: !type && !disabled,
        [`${prefix}-Spin-${type}`]: type,
        [`${prefix}-Spin-disabled`]: disabled,
        [`${prefix}-Spin-${size}`]: size,
      })}
      style={{ margin: interval }}
      onClick={handleClick}
      {...prop}
    >
      {icon && <Icon name={icon} />}
      <span>{children}</span>
    </Spin>
  );
}

export default Spin;
