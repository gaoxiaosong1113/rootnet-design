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

import { getOffsetLeft, getOffsetTop, useGetElementParent } from '../_util';

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

  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [style, setStyle] = useState({});
  const parent = useGetElementParent(refEl.current);

  const ref = useRef(null as any);

  useEffect(() => {
    function handleStyle() {
      if (!visible || !refEl.current || !ref.current) return {};
      let refWidth = ref.current.offsetWidth;
      let refHeight = ref.current.offsetHeight;
      switch (position) {
        case 'top':
          return {
            transform: `translate(${
              left + refEl.current.offsetWidth / 2 - refWidth / 2
            }px, ${top - 12 - refHeight}px)`,
          };
        case 'top-left':
          return {
            transform: `translate(${
              left + refEl.current.offsetWidth - refWidth
            }px, ${top - 12 - refHeight}px)`,
          };
        case 'top-right':
          return {
            transform: `translate(${left}px, ${top - 12 - refHeight}px)`,
          };
        case 'left':
          return {
            transform: `translate(${left - refWidth - 12}px, ${
              top + refEl.current.offsetHeight / 2 - refHeight / 2
            }px)`,
          };
        case 'right':
          return {
            transform: `translate(${left + refEl.current.offsetWidth + 12}px, ${
              top + refEl.current.offsetHeight / 2 - refHeight / 2
            }px)`,
          };
        case 'bottom':
          return {
            transform: `translate(${
              left + refEl.current.offsetWidth / 2 - refWidth / 2
            }px, ${top + refEl.current.offsetHeight + 12}px)`,
          };
        case 'bottom-left':
          return {
            transform: `translate(${
              left + refEl.current.offsetWidth - refWidth
            }px, ${top + refEl.current.offsetHeight + 12}px)`,
          };
        case 'bottom-right':
          return {
            transform: `translate(${left}px, ${
              top + refEl.current.offsetHeight + 12
            }px)`,
          };
        default:
          return {
            transform: `translate(${left}px, ${top}px)`,
            width: refEl.current.offsetWidth,
            height: refEl.current.offsetHeight,
          };
      }
    }
    setStyle(handleStyle());
  }, [visible, top, left]);

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

  function setPosition(ele: any) {
    let left = getOffsetLeft(ele),
      top = getOffsetTop(ele);
    let isDocument = ele.nodeName == '#document';
    let isBody = parent.nodeName == '#document';
    if (isDocument) {
      left = isBody ? getOffsetLeft(refEl.current) : getOffsetLeft(parent);
      top = isBody ? getOffsetTop(refEl.current) : getOffsetTop(parent);
    }
    let bodyScrollLeft = document.documentElement.scrollLeft;
    let bodyScrollTop = document.documentElement.scrollTop;
    let targetScrollLeft = isDocument ? parent.scrollLeft : ele.scrollLeft;
    let targetScrollTop = isDocument ? parent.scrollTop : ele.scrollTop;
    if (isBody) {
      // body滚动
      left = left - bodyScrollLeft;
      top = top - bodyScrollTop;
    } else {
      // 局部滚动
      left = left - bodyScrollLeft - targetScrollLeft;
      top = top - bodyScrollTop - targetScrollTop;
    }
    setLeft(left);
    setTop(top);
  }

  useEffect(() => {
    function handleScroll(e: any) {
      setPosition(e.target);
    }
    function handleBodyScroll(e: any) {
      setPosition(e.target);
    }
    if (parent) {
      setPosition(parent);
      parent.addEventListener('scroll', handleScroll);
      if (parent.nodeName !== '#document') {
        document.addEventListener('scroll', handleBodyScroll);
      }
    }
    return () => {
      if (!parent) return;
      parent.removeEventListener('scroll', handleScroll);
      document.removeEventListener('scroll', handleBodyScroll);
    };
  }, [parent]);

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
        ref={ref}
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
