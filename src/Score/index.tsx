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
import { Icon } from '../index';

export interface ScoreProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;
  style?: Object;

  /**
   * @description      分值
   * @default           3.5
   */
  num?: string;

  /**
   * @description      设置颜色
   * @default           #5477FF
   */
  fill?: string;
}

function Score(props: ScoreProps) {
  const { className, style, fill = '#5477FF', num = 3.5, ...prop } = props;
  const quanArr = Array.from(Array(parseInt(num)));
  const ban = num.toString().indexOf('.') == -1 ? false : true;
  const wuArr = [...Array(parseInt(5 - num)).keys()];
  return (
    <div
      className={clsx(className, `${prefix}-Score`, `Score-${num}`)}
      style={{ fill: fill, ...style }}
      {...prop}
    >
      {/* <Icon name="pingxing" className="fill"></Icon>
      <Icon name="banxing" className="ban"></Icon>
      <Icon name="pingxing" className="wu"></Icon> */}
      {quanArr.map((index) => {
        return <Icon name="pingxing" className="fill"></Icon>;
      })}
      {ban && <Icon name="banxing" className="ban"></Icon>}
      {wuArr.map((index) => {
        return <Icon name="pingxing" className="wu"></Icon>;
      })}
    </div>
  );
}

export default Score;
