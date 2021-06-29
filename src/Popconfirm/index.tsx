import React, { useEffect, useState, useRef, useMemo } from 'react';
import ReactDOM from 'react-dom';

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

  /**
   * @description      弹出位置
   * @default           -
   */
  position?: string;

  event: any;
}

function ModalContent(props: ModalProps) {
  const {
    content,
    children,
    onConfirm,
    onCancel,
    event,
    position = 'top',
    ...prop
  } = props;

  const popconfirmEl = useRef<any>(null);

  useEffect(() => {
    function handleClick(e: any) {
      if (!popconfirmEl.current) return;
      if (!ReactDOM.findDOMNode(popconfirmEl.current)?.contains(e.target)) {
        handleCancel();
      }
    }

    document.body.addEventListener('click', handleClick);
    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, []);

  function handleCancel() {
    handleUnRender();
    onCancel ? onCancel() : null;
  }

  function handleConfirm() {
    handleUnRender();
    onConfirm ? onConfirm() : null;
  }

  const style = useMemo(() => {
    switch (position) {
      case 'top':
        return {
          left: getOffsetLeft(event.target) + event.target.offsetWidth / 2,
          top: getOffsetTop(event.target) - 5,
        };
      case 'left':
        return {
          left: getOffsetLeft(event.target) - 12,
          top: getOffsetTop(event.target) + event.target.offsetHeight / 2,
        };
      case 'right':
        return {
          left: getOffsetLeft(event.target) + event.target.offsetWidth + 12,
          top: getOffsetTop(event.target) + event.target.offsetHeight / 2,
        };
      case 'bottom':
        return {
          left: getOffsetLeft(event.target) + event.target.offsetWidth / 2,
          top: getOffsetTop(event.target) + event.target.offsetHeight + 12,
        };
    }
  }, [position]);

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
        style={style}
        ref={popconfirmEl}
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
  ReactDOM.render(<ModalContent {...props} />, popup);
}

// 首次挂载弹窗
function handleAppendRender(props: any) {
  popup = document.createElement('div');
  document.body.appendChild(popup);
  handleRender(props);
}

// 卸载弹窗
function handleUnRender(props?: any) {
  if (popup) ReactDOM.unmountComponentAtNode(popup);
}

function Popconfirm(props: ModalProps) {
  const { children, onConfirm, onCancel, ...prop } = props;

  return (
    <span
      className={clsx({
        [`${prefix}-popconfirm-target`]: true,
      })}
      onClick={(event) => {
        event.persist();
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
