import React, { useEffect, useMemo, ReactNode } from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

export interface RowProps {
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
  justify?: string;

  /**
   * @description      是否换行
   * @default           false
   */
  wrap?: boolean;

  /**
   * @description      栅格的间隔
   * @default           -
   */
  gutter?: any;
}

export const Row = (props: RowProps) => {
  const { className, children, justify, wrap, gutter } = props;

  let gutterData: Array<any> = [];

  if (gutter && Object.prototype.toString.call(gutter) == '[object Array]') {
    if (gutter.length == 2) {
      gutterData = gutter;
    }
    if (gutter.length == 1) {
      gutterData = [gutter, gutter];
    }
  }
  return (
    <div
      className={clsx(className, `${prefix}-row`, {
        [`${prefix}-row-${justify}`]: justify,
        [`${prefix}-row-no-wrap`]: wrap,
      })}
      style={{
        marginLeft: (gutterData[0] / 2) * -1,
        marginRight: (gutterData[0] / 2) * -1,
        rowGap: gutterData[1],
      }}
    >
      {React.Children.map(children, (item: any) => {
        return item && React.cloneElement(item, { gutter: gutterData });
      })}
    </div>
  );
};

export interface ColProps {
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
  span?: number;

  /**
   * @description      抵消
   * @default           -
   */
  offset?: number;

  /**
   * @description      缩进
   * @default           -
   */
  pull?: number;

  /**
   * @description      推进
   * @default           -
   */
  push?: number;

  /**
   * @description      栅格排序
   * @default           -
   */
  order?: number;

  /**
   * @description      栅格的间隔
   * @default           -
   */
  gutter?: any;

  /**
   * @description      屏幕 < 576px 响应式栅格，可为栅格数或一个包含其他属性的对象
   * @default           -
   */
  xs?: any;

  /**
   * @description      屏幕 ≥ 576px 响应式栅格，可为栅格数或一个包含其他属性的对象
   * @default           -
   */
  sm?: any;

  /**
   * @description      屏幕 ≥ 768px 响应式栅格，可为栅格数或一个包含其他属性的对象
   * @default           -
   */
  md?: any;

  /**
   * @description      屏幕 ≥ 992px 响应式栅格，可为栅格数或一个包含其他属性的对象
   * @default           -
   */
  lg?: any;

  /**
   * @description      屏幕 ≥ 1200px 响应式栅格，可为栅格数或一个包含其他属性的对象
   * @default           -
   */
  xl?: any;

  /**
   * @description      屏幕 ≥ 1600px 响应式栅格，可为栅格数或一个包含其他属性的对象
   * @default           -
   */
  xxl?: any;

  [key: string]: any;
}

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

export const Col = (props: ColProps) => {
  const { className, children, span, offset, pull, push, order, gutter } = props;

  let newGutter: Array<any> = useMemo(() => {
    if (!gutter) {
      return [0, 0];
    }
    if (typeof gutter == 'number') {
      return [0, gutter];
    }
    return gutter;
  }, [gutter]);

  let sizeClassObj = {};
  sizes.forEach((size: string) => {
    let sizeProps = {} as any;
    const propSize = props[size];
    if (typeof propSize === 'number') {
      sizeProps.span = propSize;
    }

    sizeClassObj = {
      ...sizeClassObj,
      [`${prefix}-col-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
      [`${prefix}-col-${size}-order-${sizeProps.order}`]: sizeProps.order || sizeProps.order === 0,
      [`${prefix}-col-${size}-offset-${sizeProps.offset}`]:
        sizeProps.offset || sizeProps.offset === 0,
      [`${prefix}-col-${size}-push-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
      [`${prefix}-col-${size}-pull-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0,
    };
  });

  return (
    <div
      className={clsx(
        className,
        `${prefix}-col`,
        {
          [`${prefix}-col-${span}`]: span !== undefined,
          [`${prefix}-col-offset-${offset}`]: offset,
          [`${prefix}-col-pull-${pull}`]: pull,
          [`${prefix}-col-push-${push}`]: push,
          [`${prefix}-col-order-${order}`]: order,
        },
        sizeClassObj,
      )}
      style={{
        paddingLeft: newGutter[0] / 2,
        paddingRight: newGutter[0] / 2,
      }}
    >
      {children}
    </div>
  );
};

export default {
  Row,
  Col,
};
