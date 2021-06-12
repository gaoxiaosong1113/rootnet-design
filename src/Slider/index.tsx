import React from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

interface SliderProps {
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
   * @description      Slider点击事件
   * @default           -
   */
  onClick?: Function;

  /**
   * @description      Slider左右的间隔
   * @default           -
   */
  interval?: string;

  /**
   * @description      Slider的尺寸
   * @default           -
   */
  size?: string;
}

function Slider(props: SliderProps) {
  const { type, icon, disabled, children, onClick, interval, size, ...prop } =
    props;

  function handleClick() {
    if (!disabled && onClick) {
      onClick();
    }
  }
  return (
    <Slider
      className={clsx({
        [`${prefix}-Slider`]: true,
        [`${prefix}-Slider-default`]: !type && !disabled,
        [`${prefix}-Slider-${type}`]: type,
        [`${prefix}-Slider-disabled`]: disabled,
        [`${prefix}-Slider-${size}`]: size,
      })}
      style={{ margin: interval }}
      onClick={handleClick}
      {...prop}
    >
      {icon && <Icon name={icon} />}
      <span>{children}</span>
    </Slider>
  );
}

export default Slider;
