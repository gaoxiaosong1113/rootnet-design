import React, { ReactNode } from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

export interface CardProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;
  style?: Object;
  children?: ReactNode;

  /**
   * @description      卡片标题
   * @default           -
   */
  title?: ReactNode;

  /**
   * @description      卡片宽度
   * @default           -
   */
  width?: number;

  /**
   * @description      卡片高度
   * @default           -
   */
  height?: number;

  /**
   * @description      卡片右上角的操作区域
   * @default           -
   */
  extra?: ReactNode;

  /**
   * @description      页签标题列表
   * @default           -
   */
  tabList?: Array<{ key: string; name: string }>;

  /**
   * @description      当前激活页签的 key
   * @default           -
   */
  activeTabKey?: string;

  /**
   * @description      切换 tab key时触发
   * @default           -
   */
  changeTabKey?: (key?: any, index?: number) => void;
}

export default function Card(props: CardProps) {
  const {
    className,
    style,
    children,
    title,
    width,
    height,
    tabList,
    activeTabKey,
    extra,
    changeTabKey,
    ...prop
  } = props;
  return (
    <div
      className={clsx(className, `${prefix}-card`)}
      style={{ width, height, ...style }}
      {...prop}
    >
      <div className={clsx(`${prefix}-card-head`)}>
        <div className={clsx(`${prefix}-card-head-content`)}>
          {title && (
            <div className={clsx(`${prefix}-card-title`)}>
              <span>{title}</span>
            </div>
          )}
          {tabList && (
            <div className={clsx(`${prefix}-card-tabs`)}>
              {tabList.map((item: any, index: number) => {
                return (
                  <div
                    className={clsx(`${prefix}-card-tabs-item`, {
                      [`${prefix}-card-tabs-item-disabled`]: item.disabled,
                      [`${prefix}-card-tabs-item-active`]:
                        activeTabKey == item.key,
                    })}
                    onClick={() =>
                      changeTabKey && !item.disabled
                        ? changeTabKey(item.key, index)
                        : null
                    }
                    key={index}
                  >
                    {item.name}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className={clsx(`${prefix}-card-extra`)}>{extra}</div>
      </div>
      <div className={clsx(`${prefix}-card-body`)}>
        {tabList
          ? React.Children.map(children, (item, index) => {
              return (
                <div
                  className={clsx(`${prefix}-card-tab-item`, {
                    [`${prefix}-card-tab-item-active`]:
                      tabList[index].key === activeTabKey,
                  })}
                >
                  {item}
                </div>
              );
            })
          : children}
      </div>
      <div className={clsx(`${prefix}-card-footer`)}></div>
    </div>
  );
}
