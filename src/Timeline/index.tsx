// 引入react依赖
import React, { useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

// 引入第三方依赖

import clsx from 'clsx';

// 引入样式
import './index.less';

// 引入配置文件
import { prefix } from '../config';

// 引入组件
import { Image } from '../index';

export interface StatePointProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;
  style?: Object;

  /**
   * @description      排列方式
   * @default           vertical
   */
  type?: 'vertical' | 'horizontal';

  /**
   * @description      颜色
   * @default           -
   */
  color?: string;

  /**
   * @description      左边宽度
   * @default           80
   */
  timeWidth?: number;

  /**
   * @description      右边宽度
   * @default           -
   */
  infoWidth?: number;

  /**
   * @description      数据
   * @default          -
   */
  data: Array<{ key: string; value: string }>;
}

function Timeline(props: StatePointProps) {
  const {
    className,
    style,
    type = 'vertical',
    color,
    timeWidth = 80,
    infoWidth,
    data = [],
    ...prop
  } = props;
  return (
    <div
      className={clsx(className, `${prefix}-timeline`, `${prefix}-timeline-${type}`)}
      style={{
        ...style,
        color,
      }}
      {...prop}
    >
      {data.map((item: any, index: any) => {
        return (
          <div className={clsx(`${prefix}-timeline-item`)} key={index}>
            <div className={clsx(`${prefix}-timeline-time`)} style={{ width: timeWidth }}>
              {item.time}
            </div>
            <div className={clsx(`${prefix}-timeline-point`)}>
              <div className="point"></div>
            </div>
            <div className={clsx(`${prefix}-timeline-title`)} style={{ width: infoWidth }}>
              {item.title}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Timeline;
