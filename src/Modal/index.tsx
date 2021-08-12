import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon, Button } from '../index';

export interface ModalProps {
  className?: string;
  children: any;

  /**
   * @description      modal 的title
   * @default           -
   */
  title: any;

  /**
   * @description      modal 的内容
   * @default           -
   */
  content?: any;

  /**
   * @description      modal 是否显示
   * @default           false
   */
  visible: boolean;

  /**
   * @description      确认按钮
   * @default           -
   */
  onConfirm: Function;

  /**
   * @description      取消按钮
   * @default           -
   */
  onCancel: Function;

  /**
   * @description      页脚
   * @default           -
   */
  footer: any;

  /**
   * @description      modal 宽度
   * @default           340
   */
  width: number;

  /**
   * @description      关闭时是否销毁内容
   * @default           false
   */
  destroyOnClose?: boolean;

  /**
   * @description      点击mask是否关闭modal
   * @default           true
   */
  maskClose?: boolean;

  /**
   * @description      是否显示 x 关闭按钮
   * @default           true
   */
  close?: boolean;

  isFastOpen?: any;
}

export interface ModalContentProps extends ModalProps {
  /**
   * @description      modal 的类型
   * @default           -
   */
  type?: string;

  event: any;
}

function ModalContent(props: ModalContentProps) {
  const {
    title,
    content,
    children,
    type,
    visible,
    onConfirm,
    onCancel,
    footer,
    width,
    maskClose = true,
    close = true,
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
        [`${prefix}-modal-warp`]: true,
        [`${prefix}-modal-visible`]: visible,
      })}
    >
      <div
        className={clsx({
          [`${prefix}-modal`]: true,
          [`${prefix}-modal-${type}`]: type,
        })}
        style={{ width }}
      >
        <div
          className={clsx({
            [`${prefix}-modal-head`]: true,
          })}
        >
          <div
            className={clsx({
              [`${prefix}-modal-head-title`]: true,
            })}
          >
            {title}
          </div>
          {close && (
            <div
              className={clsx({
                [`${prefix}-modal-head-close`]: true,
              })}
              onClick={() => {
                handleCancel();
              }}
            >
              <Icon name="cuowu1" />
            </div>
          )}
        </div>
        <div
          className={clsx({
            [`${prefix}-modal-body`]: true,
          })}
        >
          <span>{type ? content : children}</span>
        </div>
        {footer !== null && (
          <div
            className={clsx({
              [`${prefix}-modal-footer`]: true,
            })}
          >
            {footer ? (
              footer
            ) : (
              <>
                <Button onClick={handleCancel}>取消</Button>
                <Button type="primary" onClick={handleConfirm}>
                  确定
                </Button>
              </>
            )}
          </div>
        )}
      </div>
      <div
        className={clsx({
          [`${prefix}-modal-mask`]: true,
        })}
        onClick={() => maskClose && handleCancel()}
      ></div>
    </div>
  );
}

function Modal(props: ModalProps) {
  const {
    title,
    children,
    visible,
    onConfirm,
    onCancel,
    destroyOnClose = false,
    ...prop
  } = props;

  // 判断是否已经挂载
  const [isFastOpen, setIsFastOpen] = useState(props.isFastOpen || false);
  const [ev, setEv] = useState<any>();

  useEffect(() => {
    if (!visible && destroyOnClose) {
      setIsFastOpen(false);
      return;
    }
    if (!visible) return;

    if (!isFastOpen) {
      setIsFastOpen(true);
    }
  }, [visible]);

  return (
    isFastOpen &&
    ReactDOM.createPortal(
      <ModalContent
        {...props}
        visible={visible}
        event={ev}
        onCancel={() => {
          onCancel && onCancel();
        }}
        onConfirm={() => {
          onConfirm && onConfirm();
        }}
      />,
      document.body,
    )
  );
}

Modal.confirm = (props: ModalContentProps) => {
  const { onCancel, onConfirm } = props;

  const div = document.createElement('div');
  document.body.appendChild(div);

  function handleClick(callback: any) {
    ReactDOM.unmountComponentAtNode(div);
    document.body.removeChild(div);
    callback();
  }

  return ReactDOM.render(
    <ModalContent
      {...props}
      type="confirm"
      visible={true}
      isFastOpen={true}
      onCancel={() => handleClick(() => onCancel && onCancel())}
      onConfirm={() => handleClick(() => onConfirm && onConfirm())}
    />,
    div,
  );
};
export default Modal;
