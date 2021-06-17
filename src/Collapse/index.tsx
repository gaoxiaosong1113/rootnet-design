import React from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

interface CollapseProps {
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
   * @description      Collapse点击事件
   * @default           -
   */
  onClick?: Function;

  /**
   * @description      Collapse左右的间隔
   * @default           -
   */
  interval?: string;

  /**
   * @description      Collapse的尺寸
   * @default           -
   */
  size?: string;
}

function Collapse(props: CollapseProps) {
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
        [`${prefix}-Collapse`]: true,
        [`${prefix}-Collapse-default`]: !type && !disabled,
        [`${prefix}-Collapse-${type}`]: type,
        [`${prefix}-Collapse-disabled`]: disabled,
        [`${prefix}-Collapse-${size}`]: size,
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

export default Collapse;
