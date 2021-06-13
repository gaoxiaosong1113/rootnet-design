import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon, Button } from '../index';

var getOffsetLeft = function (obj) {
  var tmp = obj.offsetLeft;
  var node = obj.offsetParent;
  while (node != null) {
    tmp += node.offsetLeft;
    node = node.offsetParent;
  }
  return tmp;
};
var getOffsetTop = function (obj) {
  var tmp = obj.offsetTop;
  var node = obj.offsetParent;
  while (node != null) {
    tmp += node.offsetTop;
    node = node.offsetParent;
  }
  return tmp;
};

interface ModalProps {
  /**
   * @description      图标的样式名
   * @default           -
   */
  className?: string;
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
  console.log(event.target);
  console.log(getOffsetLeft(event.target));
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

function Popconfirm(props: ModalProps) {
  const { title, children, visible, onConfirm, onCancel, ...prop } = props;

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
