import React from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

interface ImageProps {
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
   * @description      Image点击事件
   * @default           -
   */
  onClick?: Function;

  /**
   * @description      Image左右的间隔
   * @default           -
   */
  interval?: string;

  /**
   * @description      Image的尺寸
   * @default           -
   */
  size?: string;
}

function Image(props: ImageProps) {
  const { type, icon, disabled, children, onClick, interval, size, ...prop } =
    props;

  function handleClick() {
    if (!disabled && onClick) {
      onClick();
    }
  }
  return (
    <Image
      className={clsx({
        [`${prefix}-Image`]: true,
        [`${prefix}-Image-default`]: !type && !disabled,
        [`${prefix}-Image-${type}`]: type,
        [`${prefix}-Image-disabled`]: disabled,
        [`${prefix}-Image-${size}`]: size,
      })}
      style={{ margin: interval }}
      onClick={handleClick}
      {...prop}
    >
      {icon && <Icon name={icon} />}
      <span>{children}</span>
    </Image>
  );
}

export default Image;
