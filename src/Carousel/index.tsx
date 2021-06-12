import React from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

interface CarouselProps {
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
   * @description      Carousel点击事件
   * @default           -
   */
  onClick?: Function;

  /**
   * @description      Carousel左右的间隔
   * @default           -
   */
  interval?: string;

  /**
   * @description      Carousel的尺寸
   * @default           -
   */
  size?: string;
}

function Carousel(props: CarouselProps) {
  const { type, icon, disabled, children, onClick, interval, size, ...prop } =
    props;

  function handleClick() {
    if (!disabled && onClick) {
      onClick();
    }
  }
  return (
    <Carousel
      className={clsx({
        [`${prefix}-Carousel`]: true,
        [`${prefix}-Carousel-default`]: !type && !disabled,
        [`${prefix}-Carousel-${type}`]: type,
        [`${prefix}-Carousel-disabled`]: disabled,
        [`${prefix}-Carousel-${size}`]: size,
      })}
      style={{ margin: interval }}
      onClick={handleClick}
      {...prop}
    >
      {icon && <Icon name={icon} />}
      <span>{children}</span>
    </Carousel>
  );
}

export default Carousel;
