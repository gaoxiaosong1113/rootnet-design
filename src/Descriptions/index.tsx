import React, { useMemo } from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Grid } from '../index';

const { Row, Col } = Grid;

interface DescriptionsProps {
  /**
   * @description      样式命
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
  labelWidth?: number;
}

function Descriptions(props: DescriptionsProps) {
  const { title, children, border, gutter, labelWidth, ...prop } = props;

  const newGutter = useMemo(() => {
    if (border) {
      return [0, 0];
    }
    return gutter;
  }, [gutter]);

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
      <div
        className={clsx({
          [`${prefix}-descriptions-content`]: true,
        })}
      >
        <Row gutter={newGutter}>
          {React.Children.map(children, (item) => {
            return React.cloneElement(item, {
              labelWidth,
            });
          })}
        </Row>
      </div>
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
}: any) => {
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
