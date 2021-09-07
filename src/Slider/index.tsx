// 引入react依赖
import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

// 引入第三方依赖

import clsx from 'clsx';

// 引入样式
import './index.less';

// 引入配置文件
import { prefix } from '../config';

// 引入组件
import { Icon } from '../index';

export interface SliderProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;
  style?: Object;
  children?: ReactNode;

  /**
   * @description      按钮的类型
   * @default           -
   */
  type?: string;

  /**
   * @description      需要显示的图标
   * @default           -
   */
  icon?: string;

  /**
   * @description      是否禁用按钮
   * @default           false
   */
  disabled?: boolean;

  /**
   * @description      Slider点击事件
   * @default           -
   */
  onClick?: Function;

  /**
   * @description      Slider左右的间隔
   * @default           -
   */
  interval?: string;

  /**
   * @description      Slider的尺寸
   * @default           -
   */
  size?: string;
}

function Slider(props: SliderProps) {
  const {
    className,
    type,
    icon,
    disabled,
    children,
    onClick,
    interval,
    size,
    ...prop
  } = props;

  function handleClick() {
    if (!disabled && onClick) {
      onClick();
    }
  }
  return (
    <div
      className={clsx(className, `${prefix}-slider`, {
        [`${prefix}-slider-default`]: !type && !disabled,
        [`${prefix}-slider-${type}`]: type,
        [`${prefix}-slider-disabled`]: disabled,
        [`${prefix}-slider-${size}`]: size,
      })}
      style={{ margin: interval }}
      onClick={handleClick}
      {...prop}
    >
      {icon && <Icon name={icon} />}
      <span>{children}</span>
    </div>
  );
}

export default Slider;
