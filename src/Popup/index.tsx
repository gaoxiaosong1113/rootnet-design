import React, { useEffect, useState, useRef, useMemo } from 'react';

import ReactDOM from 'react-dom';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon, Button } from '../index';

import { getOffsetLeft, getOffsetTop } from '../_util';

export interface PopupProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;

  children: any;

  /**
   * @description      弹层触发关闭
   * @default           -
   */
  onClose: Function;

  /**
   * @description      弹出位置
   * @default           -
   */
  position?: string;

  /**
   * @description      是否显示
   * @default           false
   */
  visible: boolean;
  /**
   * @description      触发的元素
   * @default           -
   */
  refEl: any;

  /**
   * @description      触发的方式
   * @default           click
   */
  trigger: string;
}

function Popup(props: PopupProps): any {
  const {
    className,
    children,
    visible,
    refEl,
    position,
    onClose,
    trigger,
    ...prop
  } = props;

  const style = useMemo(() => {
    if (!visible || !refEl.current) return {};
    switch (position) {
      case 'top':
        return {
          left: getOffsetLeft(refEl.current) + refEl.current.offsetWidth / 2,
          top: getOffsetTop(refEl.current) - 12,
        };
      case 'top-left':
        return {
          left: getOffsetLeft(refEl.current) + refEl.current.offsetWidth,
          top: getOffsetTop(refEl.current) - 12,
        };
      case 'top-right':
        return {
          left: getOffsetLeft(refEl.current),
          top: getOffsetTop(refEl.current) - 12,
        };
      case 'left':
        return {
          left: getOffsetLeft(refEl.current) - 12,
          top: getOffsetTop(refEl.current) + refEl.current.offsetHeight / 2,
        };
      case 'right':
        return {
          left: getOffsetLeft(refEl.current) + refEl.current.offsetWidth + 12,
          top: getOffsetTop(refEl.current) + refEl.current.offsetHeight / 2,
        };
      case 'bottom':
        return {
          left: getOffsetLeft(refEl.current) + refEl.current.offsetWidth / 2,
          top: getOffsetTop(refEl.current) + refEl.current.offsetHeight + 12,
        };
      case 'bottom-left':
        return {
          left: getOffsetLeft(refEl.current) + refEl.current.offsetWidth,
          top: getOffsetTop(refEl.current) + refEl.current.offsetHeight + 12,
        };
      case 'bottom-right':
        return {
          left: getOffsetLeft(refEl.current),
          top: getOffsetTop(refEl.current) + refEl.current.offsetHeight + 12,
        };
      default:
        return {
          left: getOffsetLeft(refEl.current),
          top: getOffsetTop(refEl.current),
          width: refEl.current.offsetWidth,
          height: refEl.current.offsetHeight,
        };
    }
  }, [position, refEl.current, visible]);

  useEffect(() => {
    function handleClick(e: any) {
      if (!refEl.current) return;
      if (!ReactDOM.findDOMNode(refEl.current)?.contains(e.target)) {
        onClose && onClose();
      }
      // return false
    }
    if (trigger == 'click') {
      document.addEventListener('click', handleClick);
    }
    return () => {
      if (trigger == 'click') {
        document.removeEventListener('click', handleClick);
      }
    };
  }, []);

  if (visible) {
    return ReactDOM.createPortal(
      <div
        style={style}
        className={clsx(
          {
            [`${prefix}-popup`]: true,
            [`${prefix}-popup-${position}`]: true,
          },
          className,
        )}
        {...prop}
      >
        {children}
      </div>,
      document.body,
    );
  }
  return null;
}

export default Popup;
