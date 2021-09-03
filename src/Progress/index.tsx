// 引入react依赖
import React, { useMemo, ReactNode } from 'react';
import ReactDOM from 'react-dom';

// 引入第三方依赖

import clsx from 'clsx';

// 引入样式
import './index.less';

// 引入配置文件
import { prefix } from '../config';

// 引入组件
import { Icon } from '../index';

export interface ProgressProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;
  style?: Object;
  children?: ReactNode;

  /**
   * @description      类型，可选 line circle
   * @default           line
   */
  type?: string;

  /**
   * @description      小尺寸进度条
   * @default           -
   */
  small?: boolean;

  /**
   * @description      细尺寸进度条
   * @default           -
   */
  minimum?: boolean;

  /**
   * @description      状态，可选：success error primary(仅限 line)
   * @default           primary
   */
  status?: string;

  /**
   * @description      是否显示进度数值或状态图标
   * @default           	true
   */
  showInfo?: boolean;

  /**
   * @description      百分比
   * @default           0
   */
  percent: number;

  /**
   * @description      	进度条的色彩
   * @default           -
   */
  strokeColor?: string;

  /**
   * @description      未完成的分段的颜色
   * @default           -
   */
  trailColor?: string;
}

function Progress(props: ProgressProps) {
  const {
    className,
    type = 'line',
    small,
    minimum,
    status = 'primary',
    showInfo,
    percent,
    strokeColor,
    trailColor,
    ...prop
  } = props;

  // function handleClick() {
  //   if (!disabled && onClick) {
  //     onClick();
  //   }
  // }

  const displayPercent = useMemo(() => {
    if (percent < 0) return 0;
    if (percent > 100) return 100;
    return percent;
  }, [percent]);

  return (
    <div
      className={clsx(className, `${prefix}-progress`, {
        [`${prefix}-progress-${type}`]: type,
        [`${prefix}-progress-${status}`]: status,
        [`${prefix}-progress-small`]: small,
        [`${prefix}-progress-minimum`]: minimum,
      })}
      {...prop}
    >
      <div className={clsx(`${prefix}-progress-outer`, {})}>
        <div
          className={clsx(`${prefix}-progress-inner`, {})}
          style={{ width: displayPercent + '%' }}
        ></div>
      </div>

      <div className={clsx(`${prefix}-progress-text`, {})}>
        {displayPercent < 100 && <span>{displayPercent}%</span>}
        {displayPercent == 100 && status == 'error' && <Icon name="shibai" />}
        {displayPercent == 100 && status != 'error' && (
          <Icon name="chenggong" />
        )}
      </div>
    </div>
  );
}

export default Progress;
