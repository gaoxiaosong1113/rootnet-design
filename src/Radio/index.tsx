import React from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

interface RadioProps {
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
   * @description      Radio点击事件
   * @default           -
   */
  onClick?: Function;

  /**
   * @description      Radio左右的间隔
   * @default           -
   */
  interval?: string;

  /**
   * @description      Radio的尺寸
   * @default           -
   */
  size?: string;
}

function Radio(props: RadioProps) {
  const { type, icon, disabled, children, onClick, interval, size, ...prop } =
    props;

  function handleClick() {
    if (!disabled && onClick) {
      onClick();
    }
  }
  return (
    <Radio
      className={clsx({
        [`${prefix}-Radio`]: true,
        [`${prefix}-Radio-default`]: !type && !disabled,
        [`${prefix}-Radio-${type}`]: type,
        [`${prefix}-Radio-disabled`]: disabled,
        [`${prefix}-Radio-${size}`]: size,
      })}
      style={{ margin: interval }}
      onClick={handleClick}
      {...prop}
    >
      {icon && <Icon name={icon} />}
      <span>{children}</span>
    </Radio>
  );
}

export default Radio;
