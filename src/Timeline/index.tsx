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
   * @default           column
   */
  type?: 'column' | 'row';

  /**
   * @description      颜色
   * @default           -
   */
  color?: string;

  /**
   * @description      数据
   * @default          -
   */
  arr?: Array<{ key: string; value: string }>;
}

function Timeline(props: StatePointProps) {
  const { className, style, type, color, arr, ...prop } = props;
  return (
    <div
      className={clsx(className, `${prefix}-Timeline`, `${prefix}-Timeline-${type}`)}
      style={style}
      {...prop}
    >
      {arr.map((item: any, index: any) => {
        return (
          <>
            {index != 0 && type != 'row' && <div className="line"></div>}
            <div className="con">
              <div className="time">{item.time}</div>
              {type != 'row' && <b style={{ borderColor: color }}></b>}
              {type == 'row' && (
                <div>
                  <span className={index == 0 ? 'line-left-first' : 'line-left'}></span>
                  <b className="radius" style={{ borderColor: color }}></b>
                  <span
                    className={index == arr.length - 1 ? 'line-right-last' : 'line-right'}
                  ></span>
                </div>
              )}
              <div className="title">{item.title}</div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Timeline;
