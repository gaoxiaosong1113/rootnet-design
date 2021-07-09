import React, { useEffect, useState, useRef, useMemo } from 'react';
import ReactDOM from 'react-dom';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon, Button, Popover } from '../index';

import { getOffsetLeft, getOffsetTop } from '../_util';

export interface OperationProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;

  /**
   * @description      主体内容
   * @default           -
   */
  content: any;

  children: any;

  /**
   * @description      确认按钮回调
   * @default           -
   */
  onConfirm: Function;

  /**
   * @description      取消按钮回调
   * @default           -
   */
  onCancel: Function;

  /**
   * @description      弹出位置
   * @default           top
   */
  position?: string;

  event: any;
}

function Item(props: any) {
  const { children, ...prop } = props;

  return (
    <div
      className={clsx({
        [`${prefix}-operation-item`]: true,
      })}
      {...prop}
    >
      {children}
    </div>
  );
}

function OperationPopup(props: any) {
  const { children, position = 'top', ...prop } = props;

  return (
    <Popover
      position={position}
      content={
        <div
          className={clsx({
            [`${prefix}-operation-popover`]: true,
          })}
          onClick={(event) => {}}
        >
          {children}
        </div>
      }
    >
      <div
        className={clsx({
          [`${prefix}-operation-item`]: true,
          [`${prefix}-operation-item-more`]: true,
        })}
        onClick={(event) => {}}
      >
        ...
      </div>
    </Popover>
  );
}

function Operation(props: OperationProps) {
  const { children, onConfirm, onCancel, position = 'top', ...prop } = props;
  const [visible, setVisible] = useState(false);

  const refEl = useRef(null);
  function handleOpen() {
    setVisible(true);
  }
  function handleClose() {
    setVisible(false);
    onCancel && onCancel();
  }

  return (
    <div
      className={clsx({
        [`${prefix}-operation`]: true,
      })}
      onClick={(event) => {
        event.persist();
        setVisible(true);
      }}
      ref={refEl}
    >
      {children}
    </div>
  );
}

Operation.Item = Item;
Operation.Popup = OperationPopup;

export default Operation;