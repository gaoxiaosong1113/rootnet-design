import React from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

export interface CardProps {
  /**
   * @description      卡片的样式名
   * @default           -
   */
  className?: string;

  children?: React.ReactChild;

  /**
   * @description      卡片标题
   * @default           -
   */
  title?: any;

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
  extra?: any;

  /**
   * @description      页签标题列表
   * @default           -
   */
  tabList?: any;

  /**
   * @description      当前激活页签的 key
   * @default           -
   */
  activeTabKey?: number;

  /**
   * @description      切换 tab key时触发
   * @default           -
   */
  changeTabKey?: Function;
}

export default function Card(props: CardProps) {
  const {
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
      className={clsx({
        [`${prefix}-card`]: true,
      })}
      style={{ width, height }}
      {...prop}
    >
      <div
        className={clsx({
          [`${prefix}-card-head`]: true,
        })}
      >
        <div
          className={clsx({
            [`${prefix}-card-head-content`]: true,
          })}
        >
          {title && (
            <div
              className={clsx({
                [`${prefix}-card-title`]: true,
              })}
            >
              <span>{title}</span>
            </div>
          )}
          {tabList && (
            <div
              className={clsx({
                [`${prefix}-card-tabs`]: true,
              })}
            >
              {tabList.map((item: any, index: number) => {
                return (
                  <div
                    className={clsx({
                      [`${prefix}-card-tabs-item`]: true,
                      [`${prefix}-card-tabs-item-disabled`]: item.disabled,
                      [`${prefix}-card-tabs-item-active`]:
                        activeTabKey == index,
                    })}
                    onClick={() =>
                      changeTabKey && !item.disabled
                        ? changeTabKey(index, item.key)
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
        <div
          className={clsx({
            [`${prefix}-card-extra`]: true,
          })}
        >
          {extra}
        </div>
      </div>
      <div
        className={clsx({
          [`${prefix}-card-body`]: true,
        })}
      >
        {tabList
          ? React.Children.map(children, (item, index) => {
              return (
                <div
                  className={clsx({
                    [`${prefix}-card-tab-item`]: true,
                    [`${prefix}-card-tab-item-active`]: index == activeTabKey,
                  })}
                >
                  {item}
                </div>
              );
            })
          : children}
      </div>
      <div
        className={clsx({
          [`${prefix}-card-footer`]: true,
        })}
      ></div>
    </div>
  );
}
