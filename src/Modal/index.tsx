import React from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

interface ModalProps {
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
   * @description      Modal点击事件
   * @default           -
   */
  onClick?: Function;

  /**
   * @description      Modal左右的间隔
   * @default           -
   */
  interval?: string;

  /**
   * @description      Modal的尺寸
   * @default           -
   */
  size?: string;
}

function Modal(props: ModalProps) {
  const { type, icon, disabled, children, onClick, interval, size, ...prop } =
    props;

  function handleClick() {
    if (!disabled && onClick) {
      onClick();
    }
  }
  return (
    <Modal
      className={clsx({
        [`${prefix}-Modal`]: true,
        [`${prefix}-Modal-default`]: !type && !disabled,
        [`${prefix}-Modal-${type}`]: type,
        [`${prefix}-Modal-disabled`]: disabled,
        [`${prefix}-Modal-${size}`]: size,
      })}
      style={{ margin: interval }}
      onClick={handleClick}
      {...prop}
    >
      {icon && <Icon name={icon} />}
      <span>{children}</span>
    </Modal>
  );
}

export default Modal;
