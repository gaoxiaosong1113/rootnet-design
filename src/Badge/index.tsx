import React, { useEffect, useState, useRef, useMemo, ReactNode } from 'react';
import ReactDOM from 'react-dom';

import clsx from 'clsx';

import { prefix } from '../config';

import { Icon, Button, Tree, Popup } from '../index';

import './index.less';

export interface BadgeProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;
  style?: Object;
  children?: ReactNode;

  /**
   * @description      自定义小圆点的颜色
   * @default           -
   */
  color?: string;

  /**
   * @description      展示的数字，大于 overflowCount 时显示为 ${overflowCount}+，为 0 时隐藏
   * @default           -
   */
  count?: any;

  /**
   * @description      展示封顶的数字值
   * @default           99
   */
  overflowCount?: number;

  /**
   * @description      当数值为 0 时，是否展示 Badge
   * @default           false
   */
  showZero?: boolean;

  /**
   * @description      不展示数字，只有一个小红点
   * @default           false
   */
  dot?: boolean;
}

function Badge(props: BadgeProps) {
  const {
    children,
    className,
    color,
    count,
    overflowCount,
    showZero,
    style,
    dot,
  } = props;

  const [viewNum, setViewNum] = useState('0' as any);

  const [countType, setCountType] = useState(() => {
    return Object.prototype.toString.call(count) === '[object Object]';
  });

  useEffect(() => {
    if (countType) {
      setViewNum(count);
    } else {
      if (!!overflowCount) {
        if (count > overflowCount) {
          setViewNum(`${overflowCount}+`);
        } else {
          setViewNum(`${count}`);
        }
      } else {
        if (count > 99) {
          setViewNum(`99+`);
        } else {
          setViewNum(`${count}`);
        }
      }
    }
  }, [count, overflowCount]);

  return (
    <div className={clsx(className, `${prefix}-badge`, {})}>
      <div className={clsx(`${prefix}-badge-container`, {})}>
        {children}
        {countType ? (
          <div className={clsx(`${prefix}-badge-sub-dom`)}>{viewNum}</div>
        ) : (
          (Number(count) > 0 || showZero) && (
            <div
              className={clsx(`${prefix}-badge-sub`)}
              style={{ backgroundColor: color, ...style }}
            >
              <span className={clsx(`${prefix}-badge-sub-num`)}>{viewNum}</span>
            </div>
          )
        )}
        {dot && (
          <div
            className={clsx(
              `${prefix}-badge-sub-dot`,
              `${prefix}-badge-sub-dom`,
            )}
          ></div>
        )}
      </div>
    </div>
  );
}

export default Badge;
