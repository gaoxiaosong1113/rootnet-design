import React from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

interface NotificationProps {
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
   * @description      Notification点击事件
   * @default           -
   */
  onClick?: Function;

  /**
   * @description      Notification左右的间隔
   * @default           -
   */
  interval?: string;

  /**
   * @description      Notification的尺寸
   * @default           -
   */
  size?: string;
}

function Notification(props: NotificationProps) {
  const { type, icon, disabled, children, onClick, interval, size, ...prop } =
    props;

  function handleClick() {
    if (!disabled && onClick) {
      onClick();
    }
  }
  return (
    <Notification
      className={clsx({
        [`${prefix}-Notification`]: true,
        [`${prefix}-Notification-default`]: !type && !disabled,
        [`${prefix}-Notification-${type}`]: type,
        [`${prefix}-Notification-disabled`]: disabled,
        [`${prefix}-Notification-${size}`]: size,
      })}
      style={{ margin: interval }}
      onClick={handleClick}
      {...prop}
    >
      {icon && <Icon name={icon} />}
      <span>{children}</span>
    </Notification>
  );
}

export default Notification;
