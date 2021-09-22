import React, { ReactChild, ReactChildren, ReactNode } from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

export interface BreadcrumbProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;
  style?: Object;
  children?: ReactNode[];

  // /**
  //  * @description      面包屑导航的数据
  //  * @default           -
  //  */
  // list?: Array<any>;
}

function Breadcrumb(props: BreadcrumbProps) {
  const { className, children, ...prop } = props;

  return (
    <div className={clsx(className, `${prefix}-breadcrumb`)} {...prop}>
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
   * @description      类名
   * @default           -
   */
  className?: string;
  style?: Object;
  children?: ReactNode;

  /**
   * @description      点击事件
   * @default           -
   */
  onClick: Function;

  /**
   * @description      当前项的索引, 内部使用
   * @default           -
   */
  index: number;

  /**
   * @description      是否是最后一项, 内部使用
   * @default           -
   */
  lastChild: boolean;
}

export function Item(props: BreadcrumbItemProps) {
  const { className, children, index, onClick, lastChild, ...prop } = props;

  function handleClick() {
    if (onClick) {
      onClick();
    }
  }

  return (
    <div
      className={clsx(className, `${prefix}-breadcrumb-item`, {
        [`${prefix}-breadcrumb-item-last`]: lastChild,
      })}
      onClick={() => handleClick()}
      {...prop}
    >
      <span>{children}</span>
    </div>
  );
}

Breadcrumb.Item = Item;

export default Breadcrumb;
