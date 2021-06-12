import React from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

interface BreadcrumbProps {
  /**
   * @description      面包屑导航的样式名
   * @default           -
   */
  className?: string;

  /**
   * @description      面包屑导航的数据
   * @default           -
   */
  list?: array;
}

function Breadcrumb(props: BreadcrumbProps) {
  const { children, ...prop } = props;

  return (
    <div
      className={clsx({
        [`${prefix}-breadcrumb`]: true,
      })}
      {...prop}
    >
      {children}
    </div>
  );
}

interface BreadcrumbItemProps {
  /**
   * @description      面包屑导航的样式名
   * @default           -
   */
  className?: string;
}

function BreadcrumbItem(props: BreadcrumbItemProps) {
  const { children, ...prop } = props;

  function handleClick() {
    if (!disabled && onClick) {
      onClick();
    }
  }

  return (
    <div
      className={clsx({
        [`${prefix}-breadcrumb-item`]: true,
      })}
    >
      <span>{children}</span>
    </div>
  );
}

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
