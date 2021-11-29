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
   * @description      当前分值
   * @default           0
   */
  value?: number;

  /**
   * @description      总分值
   * @default           0
   */
  count?: string;

  /**
   * @description      设置颜色
   * @default           #5477FF
   */
  color?: string;
}

function Rote(props: ScoreProps) {
  const { className, style, color = '#5477FF', value = 0, count = 5, ...prop } = props;

  const innerCount = useMemo(() => {
    let ary = [];

    for (let i = 0; i < count; i++) {
      if (i + 1 - value < 1 && i + 1 - value > 0) {
        ary.push('second');
        continue;
      }

      if (value > i) {
        ary.push('full');
        continue;
      }

      ary.push('zero');
    }

    return ary;
  }, [value, count]);

  return (
    <div className={clsx(className, `${prefix}-rate`)} style={{ fill: color, ...style }} {...prop}>
      {innerCount.map((item, index) => {
        return (
          <Icon
            name={item == 'second' ? 'banxing' : 'pingxing'}
            className={clsx(className, `${prefix}-rate-${item}`)}
            key={index}
          ></Icon>
        );
      })}
    </div>
  );
}

export default Rote;
