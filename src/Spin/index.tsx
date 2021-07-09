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
  const { children, size, loading = false, ...prop } = props;

  return (
    <div
      className={clsx({
        [`${prefix}-spin`]: true,
        [`${prefix}-spin-spinning`]: loading,
      })}
    >
      {children && (
        <div
          className={clsx({
            [`${prefix}-spin-container`]: true,
            [`${prefix}-spin-blur`]: loading,
          })}
        >
          {children}
        </div>
      )}
      <div
        className={clsx({
          [`${prefix}-spin-loading`]: true,
        })}
      >
        <span
          className={clsx({
            [`${prefix}-spin-dot`]: true,
            [`${prefix}-spin-dot-spin`]: true,
          })}
        >
          <i
            className={clsx({
              [`${prefix}-spin-dot-item`]: true,
            })}
          ></i>
          <i
            className={clsx({
              [`${prefix}-spin-dot-item`]: true,
            })}
          ></i>
          <i
            className={clsx({
              [`${prefix}-spin-dot-item`]: true,
            })}
          ></i>
          <i
            className={clsx({
              [`${prefix}-spin-dot-item`]: true,
            })}
          ></i>
        </span>
        <p
          className={clsx({
            [`${prefix}-spin-text`]: true,
          })}
        >
          加载中...
        </p>
      </div>
    </div>
  );
}

export default Spin;
