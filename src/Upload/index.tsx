import React from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

interface UploadProps {
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
   * @description      Upload点击事件
   * @default           -
   */
  onClick?: Function;

  /**
   * @description      Upload左右的间隔
   * @default           -
   */
  interval?: string;

  /**
   * @description      Upload的尺寸
   * @default           -
   */
  size?: string;
}

function Upload(props: UploadProps) {
  const { type, icon, disabled, children, onClick, interval, size, ...prop } =
    props;

  function handleClick() {
    if (!disabled && onClick) {
      onClick();
    }
  }
  return (
    <Upload
      className={clsx({
        [`${prefix}-Upload`]: true,
        [`${prefix}-Upload-default`]: !type && !disabled,
        [`${prefix}-Upload-${type}`]: type,
        [`${prefix}-Upload-disabled`]: disabled,
        [`${prefix}-Upload-${size}`]: size,
      })}
      style={{ margin: interval }}
      onClick={handleClick}
      {...prop}
    >
      {icon && <Icon name={icon} />}
      <span>{children}</span>
    </Upload>
  );
}

export default Upload;
