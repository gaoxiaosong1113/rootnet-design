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
   * @description      状态名称
   * @default           默认
   */
  text?: string;

  /**
   * @description      状态类型
   * @default           -
   */
  type?: 'primary' | 'success' | 'warning' | 'error';
  /**
   * @description      状态点颜色
   * @default           -
   */
  radiusColor?: string;
  /**
   * @description      字体颜色
   * @default           -
   */
  fontColor?: string;
}

function StatePoint(props: StatePointProps) {
  const { className, style, text = '', type, fontColor, radiusColor, ...prop } = props;
  return (
    <div
      className={clsx(className, `${prefix}-statePoint`, `${prefix}-statePoint-${type}`)}
      style={{ color: fontColor }}
      {...prop}
    >
      <em style={{ backgroundColor: radiusColor }}></em>
      <span>{text}</span>
    </div>
  );
}

export default StatePoint;
