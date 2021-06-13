import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon, Button } from '../index';

interface ModalProps {
  /**
   * @description      图标的样式名
   * @default           -
   */
  className?: string;
}

function ModalContent(props: ModalProps) {
  const {
    title,
    content,
    children,
    type,
    visible,
    onConfirm,
    onCancel,
    ...prop
  } = props;

  function handleCancel() {
    if (type) handleUnRender();
    onCancel ? onCancel() : null;
  }

  function handleConfirm() {
    if (type) handleUnRender();
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
          <div
            className={clsx({
              [`${prefix}-modal-head-close`]: true,
            })}
            onClick={() => {
              onCancel ? onCancel() : null;
            }}
          >
            <Icon name="sk-order" />
          </div>
        </div>
        <div
          className={clsx({
            [`${prefix}-modal-body`]: true,
          })}
        >
          <span>{type ? content : children}</span>
        </div>
        <div
          className={clsx({
            [`${prefix}-modal-footer`]: true,
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
          [`${prefix}-modal-mask`]: true,
        })}
        onClick={handleCancel}
      ></div>
    </div>
  );
}

var popup;

// 挂载弹窗
function handleRender(props) {
  ReactDom.render(<ModalContent {...props} />, popup);
}

// 首次挂载弹窗
function handleAppendRender(props) {
  popup = document.createElement('div');
  document.body.appendChild(popup);
  handleRender(props);
}

// 卸载弹窗
function handleUnRender(props) {
  if (popup) ReactDom.unmountComponentAtNode(popup);
}

function Modal(props: ModalProps) {
  const { title, children, visible, onConfirm, onCancel, ...prop } = props;

  // 判断是否已经挂载
  const [append, setAppend] = useState(false);

  useEffect(() => {
    if (visible) {
      if (append) {
        handleRender(props);
      } else {
        handleAppendRender(props);
        setAppend(true);
      }
    } else {
      if (popup) {
        console.log('关闭');
        handleRender(props);
      }
    }
    return () => {
      handleUnRender();
    };
  }, [visible]);

  return null;
}

Modal.confirm = (props) =>
  handleAppendRender({
    ...props,
    visible: true,
    type: 'confirm',
  });

export default Modal;
