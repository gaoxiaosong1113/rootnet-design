import React, { useEffect, useState, useRef, useMemo, ReactNode, ReactElement } from 'react';
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
  style?: Object;
  children: ReactElement<any>;

  /**
   * @description      主体内容
   * @default           -
   */
  content: any;

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
   * @description      空白处关闭弹框回调
   * @default           -
   */
  onClose?: Function;

  /**
   * @description      确认按钮文字
   * @default           -
   */
  confirmButtonText: any;

  /**
   * @description      取消按钮文字
   * @default           -
   */
  cancelButtonText: any;

  /**
   * @description      弹出位置
   * @default           top
   */
  position?: string;
}

function Content(props: any) {
  const {
    className,
    content,
    onConfirm,
    onCancel,
    confirmButtonText = '确定',
    cancelButtonText = '取消',
    position = 'top',
    ...prop
  } = props;

  return (
    <div className={clsx(className, `${prefix}-popconfirm-warp`)}>
      <div
        className={clsx(`${prefix}-popconfirm`, {
          [`${prefix}-popconfirm-${position}`]: position,
        })}
      >
        <div className={clsx(`${prefix}-popconfirm-body`)}>
          <span>{content}</span>
        </div>
        <div className={clsx(`${prefix}-popconfirm-footer`)}>
          <Button size="sm" onClick={onCancel}>
            {cancelButtonText}
          </Button>
          <Button size="sm" type="primary" onClick={onConfirm}>
            {confirmButtonText}
          </Button>
        </div>
      </div>
    </div>
  );
}

function Popconfirm(props: PopconfirmProps) {
  const { children, onConfirm, onCancel, onClose, position = 'top', ...prop } = props;
  const [visible, setVisible] = useState(false);

  const refEl = useRef(null);

  function handleCancel(e: any) {
    e?.stopPropagation();
    setVisible(false);
    if (onCancel) {
      onCancel(e);
    }
  }

  function handleConfirm(e: any) {
    e?.stopPropagation();
    setVisible(false);
    if (onConfirm) {
      onConfirm(e);
    }
  }

  function handleClose(e: any) {
    setVisible(false);
    if (onClose) {
      onClose(e);
    }
  }

  return (
    <>
      {React.cloneElement(children, {
        onClick: (event: any) => {
          setVisible(true);
        },
        className: `${prefix}-popconfirm-target`,
        ref: refEl,
      })}
      <Popup
        onClose={handleClose}
        visible={visible}
        refEl={refEl}
        position={position}
        trigger={'click'}
        className={`${prefix}-popconfirm-popup`}
      >
        <Content {...prop} position={position} onConfirm={handleConfirm} onCancel={handleCancel} />
      </Popup>
    </>
  );
}

export default Popconfirm;
