// 引入react依赖
import React from 'react';
import ReactDOM from 'react-dom';

// 引入第三方依赖

import clsx from 'clsx';

// 引入样式
import './index.less';

// 引入配置文件
import { prefix } from '../config';

// 引入组件
import { Icon } from '../index';

export interface SpinProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;
  style?: Object;
  children?: React.ReactChild;

  /**
   * @description      Spin的尺寸
   * @default           -
   */
  size?: string;

  /**
   * @description      加载标识
   * @default           false
   */
  loading: any;
}

function Spin(props: SpinProps) {
  const { className, children, size, loading = false, ...prop } = props;

  return (
    <div
      className={clsx(className, `${prefix}-spin`, {
        [`${prefix}-spin-spinning`]: loading,
      })}
    >
      {children && (
        <div
          className={clsx(`${prefix}-spin-container`, {
            [`${prefix}-spin-blur`]: loading,
          })}
        >
          {children}
        </div>
      )}
      <div className={clsx(`${prefix}-spin-loading`, {})}>
        <span className={clsx(`${prefix}-spin-dot`, `${prefix}-spin-dot-spin`)}>
          <i className={clsx(`${prefix}-spin-dot-item`, {})}></i>
          <i className={clsx(`${prefix}-spin-dot-item`, {})}></i>
          <i className={clsx(`${prefix}-spin-dot-item`, {})}></i>
          <i className={clsx(`${prefix}-spin-dot-item`, {})}></i>
        </span>
        <p className={clsx(`${prefix}-spin-text`, {})}>加载中...</p>
      </div>
    </div>
  );
}

export default Spin;
