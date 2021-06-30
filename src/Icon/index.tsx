import React from 'react';

import './index.less';

import './resources/iconfont.js';

import { prefix } from '../config';

export interface IconProps {
  /**
   * @description 类名
   * @default -
   */
  className?: string;

  /**
   * @description 图标的名称
   * @default -
   */
  name?: string;

  /**
   * @description 图标的颜色
   * @default #000
   */
  color?: string;

  /**
   * @description 图标的尺寸
   * @default 16
   */
  size?: number;

  /**
   * @description 点击事件
   * @default -
   */
  onClick?: Function | undefined;

  /**
   * @description 样式
   * @default -
   */
  style?: Object;
}

function Icon(props: IconProps) {
  const { name, size, color, onClick, style, ...prop } = props;
  return (
    <span
      className={`${prefix}-iconfont iconfont`}
      style={{
        fontSize: size || 16,
        color,
        width: size || 16,
        height: size || 16,
        ...style,
      }}
      onClick={() => (onClick ? onClick() : null)}
      {...prop}
    >
      <svg className="icon" aria-hidden="true">
        <use xlinkHref={`#icon-${name}`}></use>
      </svg>
    </span>
  );
}

export default Icon;
