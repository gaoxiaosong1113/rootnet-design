import React, { useEffect, useState } from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

export interface TabsProps {
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

  /**
   * @description      tab 布局
   * @default           vertical
   */
  layout?: 'horizontal' | 'vertical' | 'inline';
}

export default function Tabs(props: TabsProps) {
  const {
    className,
    children,
    title,
    width,
    height,
    tabList,
    extra,
    layout = 'vertical',
    activeTabKey,
    changeTabKey,
    ...prop
  } = props;
  const [activeKey, setActiveKey] = useState(
    props.activeTabKey || tabList[0].key,
  );

  useEffect(() => {
    setActiveKey(props.activeTabKey || tabList[0].key);
  }, [props.activeTabKey]);

  function handleChange(key: any, index: any) {
    setActiveKey(key);
    changeTabKey && changeTabKey(key, index);
  }

  return (
    <div
      className={clsx(
        {
          [`${prefix}-tabs`]: true,
          [`${prefix}-tabs-${layout}`]: layout,
        },
        className,
      )}
      style={{ width, height }}
      {...prop}
    >
      <div
        className={clsx({
          [`${prefix}-tabs-head`]: true,
        })}
      >
        <div
          className={clsx({
            [`${prefix}-tabs-head-content`]: true,
          })}
        >
          {tabList && (
            <div
              className={clsx({
                [`${prefix}-tabs-nav`]: true,
              })}
            >
              {tabList.map((item: any, index: number) => {
                return (
                  <div
                    className={clsx({
                      [`${prefix}-tabs-nav-item`]: true,
                      [`${prefix}-tabs-nav-item-disabled`]: item.disabled,
                      [`${prefix}-tabs-nav-item-active`]: activeKey == item.key,
                    })}
                    onClick={() =>
                      !item.disabled ? handleChange(item.key, index) : null
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
            [`${prefix}-tabs-extra`]: true,
          })}
        >
          {extra}
        </div>
      </div>
      <div
        className={clsx({
          [`${prefix}-tabs-body`]: true,
        })}
      >
        {React.Children.map(children, (item, index) => {
          return (
            <div
              className={clsx({
                [`${prefix}-tabs-tab-item`]: true,
                [`${prefix}-tabs-tab-item-active`]:
                  tabList[index].key == activeKey,
              })}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div
        className={clsx({
          [`${prefix}-tabs-footer`]: true,
        })}
      ></div>
    </div>
  );
}
