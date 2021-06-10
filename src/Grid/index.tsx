import React from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

const Row = (props) => {
  const { children, justify, wrap, gutter } = props;
  console.log(`${gutter.toString()}`);

  let gutterData = [];

  if (Object.prototype.toString.call(gutter) == '[object Array]') {
    if (gutter.length == 2) {
      gutterData = gutter;
    }
    if (gutter.length == 1) {
      gutterData = [gutter, gutter];
    }
  }

  return (
    <div
      className={clsx({
        [`${prefix}-row`]: true,
        [`${prefix}-row-${justify}`]: justify,
        [`${prefix}-row-no-wrap`]: wrap,
      })}
      style={{
        marginLeft: (gutterData[0] / 2) * -1,
        marginRight: (gutterData[0] / 2) * -1,
        rowGap: gutterData[1],
      }}
    >
      {React.Children.map(children, (item) => {
        return React.cloneElement(item, { gutter: gutterData });
      })}
    </div>
  );
};
const Col = (props) => {
  const { children, span, offset, pull, push, order, gutter } = props;
  console.log(gutter);
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
      style={{
        paddingLeft: gutter[0] / 2,
        paddingRight: gutter[0] / 2,
      }}
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
