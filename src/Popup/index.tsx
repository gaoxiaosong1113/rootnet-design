import React, {
  useEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
} from 'react';
import ReactDOM from 'react-dom';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon, Button } from '../index';

import { getOffsetLeft, getOffsetTop } from '../_util';

interface PopupProps {
  /**
   * @description      样式命
   * @default           -
   */
  className?: string;

  children: any;

  onClose: Function;

  /**
   * @description      弹出位置
   * @default           -
   */
  position?: string;

  /**
   * @description      是否显示
   * @default           -
   */
  visible: any;
  /**
   * @description      触发的元素
   * @default           -
   */
  refEl: any;

  /**
   * @description      触发的方式
   * @default           -
   */
  trigger: any;
}

function Popup(props: PopupProps) {
  const {
    children,
    visible,
    refEl,
    position = 'top',
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
          top: getOffsetTop(refEl.current) - 5,
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
        className={clsx({
          [`${prefix}-popup`]: true,
        })}
      >
        {children}
      </div>,
      document.body,
    );
  }
  return null;
}

export default Popup;
