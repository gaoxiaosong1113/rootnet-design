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

export interface SpaceProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;
  style?: Object;
  children?: any;

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
   * @description      Space点击事件
   * @default           -
   */
  onClick?: Function;

  /**
   * @description      Space左右的间隔
   * @default           -
   */
  interval?: string;

  /**
   * @description      Space的尺寸
   * @default           -
   */
  size?: string;
}

function Space(props: SpaceProps) {
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
      className={clsx(className, `${prefix}-space`, {
        [`${prefix}-space-default`]: !type && !disabled,
        [`${prefix}-space-${type}`]: type,
        [`${prefix}-space-disabled`]: disabled,
        [`${prefix}-space-${size}`]: size,
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

export default Space;
