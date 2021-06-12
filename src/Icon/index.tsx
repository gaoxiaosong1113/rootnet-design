import React from 'react';

import './index.less';

import { prefix } from '../config';

export interface IconProps {
  /**
   * @description 图标的样式名
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
}

function Icon(props: IconProps) {
  const { name, size, color, ...prop } = props;
  return (
    <span
      className={`${prefix}-iconfont iconfont icon-${name}`}
      style={{ fontSize: size || 16, color }}
      {...prop}
    />
  );
}

export default Icon;
