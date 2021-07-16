import React, { ReactChild, ReactChildren, ReactNode } from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

export interface BreadcrumbProps {
  /**
   * @description      面包屑导航的样式名
   * @default           -
   */
  className?: string;

  /**
   * @description      面包屑导航的数据
   * @default           -
   */
  list?: Array<any>;

  /**
   * @description      子项
   * @default           -
   */
  children?: any;
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
      {React.Children.map(children, (item: any, index) => {
        return (
          item &&
          React.cloneElement(item, {
            index,
            lastChild: children && children.length - 1 == index,
          })
        );
      })}
    </div>
  );
}

export interface BreadcrumbItemProps {
  /**
   * @description      面包屑导航的样式名
   * @default           -
   */
  className?: string;

  /**
   * @description      点击事件
   * @default           -
   */
  onClick: Function;

  /**
   * @description      当前项的索引
   * @default           -
   */
  index: number;

  /**
   * @description      是否是最后一项
   * @default           -
   */
  lastChild: boolean;

  /**
   * @description      子项
   * @default           -
   */
  children?: any;
}

function BreadcrumbItem(props: BreadcrumbItemProps) {
  const { children, index, onClick, lastChild, ...prop } = props;

  function handleClick() {
    if (onClick) {
      onClick();
    }
  }

  return (
    <div
      className={clsx({
        [`${prefix}-breadcrumb-item`]: true,
        [`${prefix}-breadcrumb-item-last`]: lastChild,
      })}
      onClick={() => handleClick()}
      {...prop}
    >
      <span>{children}</span>
    </div>
  );
}

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
