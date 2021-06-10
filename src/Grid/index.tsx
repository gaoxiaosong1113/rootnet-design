import React from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

const Row = (props) => {
  const { children, justify, wrap, gutter } = props;
  console.log(`${gutter.toString()}`);
  return (
    <div
      className={clsx({
        [`${prefix}-row`]: true,
        [`${prefix}-row-${justify}`]: justify,
        [`${prefix}-row-no-wrap`]: wrap,
      })}
      style={{ padding: '16,20' }}
    >
      {children}
    </div>
  );
};
const Col = (props) => {
  const { children, span, offset, pull, push, order } = props;
  return (
    <div
      className={clsx({
        [`${prefix}-col`]: true,
        [`${prefix}-col-${span}`]: span,
        [`${prefix}-col-offset-${offset}`]: offset,
        [`${prefix}-col-pull-${pull}`]: pull,
        [`${prefix}-col-push-${push}`]: push,
        [`${prefix}-col-order-${order}`]: order,
      })}
      style={{ padding: `0` }}
    >
      {children}
    </div>
  );
};

const Grid = {
  Row,
  Col,
};

Grid.Row = Row;
Grid.Col = Col;

export default Grid;
