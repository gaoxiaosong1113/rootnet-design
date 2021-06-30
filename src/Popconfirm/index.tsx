import React, { useEffect, useState, useRef, useMemo } from 'react';
import ReactDOM from 'react-dom';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon, Button, Popup } from '../index';

import { getOffsetLeft, getOffsetTop } from '../_util';

interface ModalProps {
  /**
   * @description      样式命
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
   * @default           -
   */
  position?: string;

  event: any;
}

function Content(props: ModalProps) {
  const {
    content,
    children,
    onConfirm,
    onCancel,
    event,
    position = 'top',
    ...prop
  } = props;

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

function Popconfirm(props: ModalProps) {
  const { children, onConfirm, onCancel, position, ...prop } = props;
  // const { children, onCancel, trigger = 'click',position, ...prop } = props;
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
    <>
      <span
        className={clsx({
          [`${prefix}-popconfirm-target`]: true,
        })}
        onClick={(event) => {
          event.persist();
          setVisible(true);
        }}
        ref={refEl}
      >
        {children}
      </span>
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
