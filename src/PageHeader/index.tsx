import React from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

interface PageHeaderProps {
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
   * @description      PageHeader点击事件
   * @default           -
   */
  onClick?: Function;

  /**
   * @description      PageHeader左右的间隔
   * @default           -
   */
  interval?: string;

  /**
   * @description      PageHeader的尺寸
   * @default           -
   */
  size?: string;
}

function PageHeader(props: PageHeaderProps) {
  const { type, icon, disabled, children, onClick, interval, size, ...prop } =
    props;

  function handleClick() {
    if (!disabled && onClick) {
      onClick();
    }
  }
  return (
    <PageHeader
      className={clsx({
        [`${prefix}-PageHeader`]: true,
        [`${prefix}-PageHeader-default`]: !type && !disabled,
        [`${prefix}-PageHeader-${type}`]: type,
        [`${prefix}-PageHeader-disabled`]: disabled,
        [`${prefix}-PageHeader-${size}`]: size,
      })}
      style={{ margin: interval }}
      onClick={handleClick}
      {...prop}
    >
      {icon && <Icon name={icon} />}
      <span>{children}</span>
    </PageHeader>
  );
}

export default PageHeader;
