// 引入react依赖
import React, { ReactNode, useMemo } from 'react';
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
  children?: ReactNode;

  /**
   * @description      对齐方式
   * @default           -
   */
  align?: 'start' | 'end' | 'center' | 'baseline';

  /**
   * @description      间距方向
   * @default           horizontal
   */
  direction?: 'vertical' | 'horizontal';

  /**
   * @description      间距大小
   * @default          small
   */
  size?: 'small' | 'middle' | 'large' | number | Array<any>;

  /**
   * @description      是否自动换行，仅在 horizontal 时有效
   * @default           false
   */
  wrap?: boolean;

  /**
   * @description      设置拆分
   * @default           -
   */
  split?: ReactNode;
}

function Space(props: SpaceProps) {
  const {
    className,
    align = 'center',
    direction = 'horizontal',
    size = 'small',
    wrap,
    children,
    split,
    ...prop
  } = props;

  const style = useMemo(() => {
    let innerStyle = {} as any;

    if (typeof size === 'number') {
      innerStyle.gap = size;
    }
    if (typeof size === 'string') {
      switch (size) {
        case 'small':
          innerStyle.gap = '8px';
          break;
        case 'middle':
          innerStyle.gap = '16px';
          break;
        case 'large':
          innerStyle.gap = '24px';
          break;
      }
    }

    if (wrap) {
      innerStyle.flexWrap = 'wrap';
    }

    if (Object.prototype.toString.call(size) === '[object Array]') {
      if (typeof size === 'object') {
        if (size.length == 1) {
          innerStyle.gap = `${size[0]}px`;
        }
        if (size.length == 2) {
          innerStyle.gap = `${size[0]}px ${size[1]}px`;
        }
      }
    }

    return innerStyle;
  }, [size, wrap]);

  let innerChildren = useMemo(() => {
    let newChildren = [] as any;
    if (split) {
      React.Children.forEach(children, (item, index) => {
        newChildren.push(item);
        newChildren.push(split);
      });
      newChildren.splice(-1);
      return newChildren;
    }
    return children;
  }, [children]);

  return (
    <div
      className={clsx(className, `${prefix}-space`, {
        [`${prefix}-space-${direction}`]: direction,
        [`${prefix}-space-${align}`]: align,
        [`${prefix}-space-${wrap}`]: wrap,
      })}
      style={style}
    >
      {React.Children.map(innerChildren, (item, index) =>
        React.cloneElement(item, {
          key: index,
        }),
      )}
    </div>
  );
}

export default Space;
