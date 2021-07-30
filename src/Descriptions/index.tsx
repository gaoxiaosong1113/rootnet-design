import React, { useMemo } from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Grid } from '../index';

const { Row, Col } = Grid;

export interface DescriptionsProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;

  /**
   * @description      描述的标题
   * @default           -
   */
  title?: string;

  children?: any;

  /**
   * @description      间隔
   * @default           -
   */
  gutter?: Array<any> | number;

  /**
   * @description      是否显示边框
   * @default           false
   */
  border?: boolean;

  /**
   * @description      label宽度
   * @default           120
   */
  labelWidth?: any;

  /**
   * @description      table label 占据列宽
   * @default           -
   */
  labelSpan?: any;

  /**
   * @description      table value 占据列宽
   * @default           -
   */
  valueSpan?: any;

  /**
   * @description      一行的列数
   * @default           3
   */
  column?: number;
}

function Descriptions(props: DescriptionsProps) {
  const {
    title,
    children,
    border,
    gutter,
    labelWidth = 120,
    labelSpan,
    valueSpan,
    column = 3,
    ...prop
  } = props;

  const newGutter = useMemo(() => {
    if (border) {
      return [0, 0];
    }
    return gutter;
  }, [gutter]);

  const child = useMemo(() => {
    return React.Children.map(children, (item) => {
      return (
        item &&
        React.cloneElement(item, {
          labelWidth,
          labelSpan,
          valueSpan,
          border,
          gutter,
          column,
        })
      );
    });
  }, [children]);

  function getFilledItem(
    node: React.ReactElement,
    span: number | undefined,
    rowRestCol: number,
  ): React.ReactElement {
    let clone = React.cloneElement(node, {
      span,
      labelWidth,
      labelSpan,
      valueSpan,
      border,
      gutter,
      column,
    });

    if (span === undefined || span > rowRestCol) {
      clone = React.cloneElement(node, {
        span: rowRestCol,
        labelWidth,
        labelSpan,
        valueSpan,
        border,
        gutter,
        column,
      });
    }

    return clone;
  }

  const childBorder = useMemo(() => {
    if (!border) return;
    // 所有的子节点
    const childNodes = React.Children.toArray(children).filter((n) => n);
    // 总行
    const rows: React.ReactElement[][] = [];
    // 行内元素
    let tmpRow: React.ReactElement[] = [];
    // 一行总列
    let rowRestCol = column;

    childNodes.forEach((node: any, index) => {
      const span: number | undefined = node.props?.span;
      const mergedSpan = span || 1;

      // 最后一个
      if (index === childNodes.length - 1) {
        tmpRow.push(getFilledItem(node, span, rowRestCol));
        rows.push(tmpRow);
        return;
      }

      if (mergedSpan < rowRestCol) {
        rowRestCol -= mergedSpan;
        tmpRow.push(
          React.cloneElement(node, {
            labelWidth,
            labelSpan,
            valueSpan,
            border,
            column,
            gutter,
          }),
        );
      } else {
        tmpRow.push(getFilledItem(node, mergedSpan, rowRestCol));
        rows.push(tmpRow);
        rowRestCol = column;
        tmpRow = [];
      }
    });

    return rows.map((item: any, index: any) => {
      return <tr key={index}>{item}</tr>;
    });
  }, [children, column, border]);

  return (
    <div
      className={clsx({
        [`${prefix}-descriptions`]: true,
        [`${prefix}-descriptions-border`]: border,
      })}
      {...prop}
    >
      {title && (
        <div
          className={clsx({
            [`${prefix}-descriptions-title`]: true,
          })}
        >
          {title}
        </div>
      )}
      {children && (
        <div
          className={clsx({
            [`${prefix}-descriptions-content`]: true,
          })}
        >
          {border && (
            <table>
              <tbody>{childBorder}</tbody>
            </table>
          )}
          {!border && <Row gutter={newGutter}>{child}</Row>}
        </div>
      )}
    </div>
  );
}

Descriptions.Item = ({
  children,
  span,
  label,
  gutter,
  background,
  fontColor,
  labelWidth,
  labelSpan,
  valueSpan,
  border,
  column,
}: any) => {
  if (border) {
    console.log(labelSpan, valueSpan);
    console.log(label);
    return (
      <>
        <th
          style={{
            width: labelSpan ? (labelSpan / 24) * 100 + '%' : 'auto',
          }}
        >
          {label}
        </th>
        <td
          colSpan={(span || 0) * 2 - 1}
          style={{
            width: valueSpan ? (valueSpan / 24) * 100 + '%' : 'auto',
            background,
            color: fontColor,
          }}
        >
          {children}
        </td>
      </>
    );
  }
  return (
    <Col gutter={gutter} span={span}>
      <div
        className={clsx({
          [`${prefix}-descriptions-item`]: true,
        })}
      >
        <div
          className={clsx({
            [`${prefix}-descriptions-item-label`]: true,
          })}
          style={{
            width: labelWidth,
            flex: `0 0 ${labelWidth}px`,
          }}
        >
          {label}
        </div>
        <div
          className={clsx({
            [`${prefix}-descriptions-item-content`]: true,
          })}
          style={{
            background,
            color: fontColor,
          }}
        >
          {children}
        </div>
      </div>
    </Col>
  );
};

export default Descriptions;
