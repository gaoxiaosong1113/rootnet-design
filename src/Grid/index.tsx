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

const Row = (props: RowProps) => {
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
  offset?: boolean;

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
}

const Col = (props: ColProps) => {
  const { className, children, span, offset, pull, push, order, gutter } =
    props;

  let newGutter: Array<any> = useMemo(() => {
    if (!gutter) {
      return [0, 0];
    }
    if (typeof gutter == 'number') {
      return [0, gutter];
    }
    return gutter;
  }, [gutter]);

  return (
    <div
      className={clsx(className, `${prefix}-col`, {
        [`${prefix}-col-${span}`]: span,
        [`${prefix}-col-offset-${offset}`]: offset,
        [`${prefix}-col-pull-${pull}`]: pull,
        [`${prefix}-col-push-${push}`]: push,
        [`${prefix}-col-order-${order}`]: order,
      })}
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
