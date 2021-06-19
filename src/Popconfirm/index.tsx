import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon, Button } from '../index';

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

  event: any;
}

function ModalContent(props: ModalProps) {
  const { content, children, onConfirm, onCancel, event, ...prop } = props;

  console.log(props);

  function handleCancel() {
    handleUnRender();
    onCancel ? onCancel() : null;
  }

  function handleConfirm() {
    handleUnRender();
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
        })}
        style={{
          left: getOffsetLeft(event.target) + event.target.offsetWidth / 2,
          top: getOffsetTop(event.target) - event.target.offsetHeight,
        }}
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

var popup: any;

// 挂载弹窗
function handleRender(props: any) {
  ReactDom.render(<ModalContent {...props} />, popup);
}

// 首次挂载弹窗
function handleAppendRender(props: any) {
  popup = document.createElement('div');
  document.body.appendChild(popup);
  handleRender(props);
}

// 卸载弹窗
function handleUnRender(props?: any) {
  if (popup) ReactDom.unmountComponentAtNode(popup);
}

function Popconfirm(props: ModalProps) {
  const { children, onConfirm, onCancel, ...prop } = props;

  return (
    <span
      className={clsx({
        [`${prefix}-popconfirm-target`]: true,
      })}
      onClick={(event) => {
        console.log(event);
        handleAppendRender({
          ...props,
          event,
        });
      }}
    >
      {children}
    </span>
  );
}

export default Popconfirm;
