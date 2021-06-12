import React from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

interface DescriptionsProps {
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
   * @description      Descriptions点击事件
   * @default           -
   */
  onClick?: Function;

  /**
   * @description      Descriptions左右的间隔
   * @default           -
   */
  interval?: string;

  /**
   * @description      Descriptions的尺寸
   * @default           -
   */
  size?: string;
}

function Descriptions(props: DescriptionsProps) {
  const { type, icon, disabled, children, onClick, interval, size, ...prop } =
    props;

  function handleClick() {
    if (!disabled && onClick) {
      onClick();
    }
  }
  return (
    <Descriptions
      className={clsx({
        [`${prefix}-Descriptions`]: true,
        [`${prefix}-Descriptions-default`]: !type && !disabled,
        [`${prefix}-Descriptions-${type}`]: type,
        [`${prefix}-Descriptions-disabled`]: disabled,
        [`${prefix}-Descriptions-${size}`]: size,
      })}
      style={{ margin: interval }}
      onClick={handleClick}
      {...prop}
    >
      {icon && <Icon name={icon} />}
      <span>{children}</span>
    </Descriptions>
  );
}

export default Descriptions;
