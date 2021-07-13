import React, { useEffect, useState, useRef, useMemo } from 'react';
import ReactDOM from 'react-dom';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon, Button, Popup } from '../index';

import { getOffsetLeft, getOffsetTop } from '../_util';

export interface PopconfirmProps {
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
  onConfirm?: Function;

  /**
   * @description      取消按钮回调
   * @default           -
   */
  onCancel?: Function;

  /**
   * @description      弹出位置
   * @default           top
   */
  position?: string;
}

function Content(props: any) {
  const { content, onConfirm, onCancel, position = 'top', ...prop } = props;

  function handleCancel() {
    onCancel ? onCancel() : null;
  }

  function handleConfirm() {
    onConfirm ? onConfirm() : null;
  }

  return (
    <div
      className={clsx({
        [`${prefix}-popconfirm-warp`]: true,
      })}
    >
      <div
        className={clsx({
          [`${prefix}-popconfirm`]: true,
          [`${prefix}-popconfirm-${position}`]: position,
        })}
      >
        <div
          className={clsx({
            [`${prefix}-popconfirm-body`]: true,
          })}
        >
          <span>{content}</span>
        </div>
        <div
          className={clsx({
            [`${prefix}-popconfirm-footer`]: true,
          })}
        >
          <Button onClick={handleCancel}>取消</Button>
          <Button type="primary" onClick={handleConfirm}>
            确定
          </Button>
        </div>
      </div>
      <div
        className={clsx({
          [`${prefix}-popconfirm-mask`]: true,
        })}
        onClick={handleCancel}
      ></div>
    </div>
  );
}

function Popconfirm(props: PopconfirmProps) {
  const { children, onConfirm, onCancel, position = 'top', ...prop } = props;
  const [visible, setVisible] = useState(false);

  const refEl = useRef(null);

  function handleClose() {
    setVisible(false);
    onCancel && onCancel();
  }

  return (
    <>
      {React.cloneElement(children, {
        onClick: (event) => {
          event.persist();
          setVisible(true);
        },
        className: `${prefix}-popconfirm-target`,
        ref: refEl,
      })}
      <Popup
        onClose={() => {
          setVisible(false);
          onCancel && onCancel();
        }}
        visible={visible}
        refEl={refEl}
        position={position}
        trigger={'click'}
      >
        <Content {...props} onCancel={handleClose} />
      </Popup>
    </>
  );
}

export default Popconfirm;
