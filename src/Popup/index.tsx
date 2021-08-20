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
  style?: Object;
  children?: any;

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

  /**
   * @description      点击弹出区域是否消失
   * @default           false
   */
  targetHidden?: boolean;

  /**
   * @description      自定义偏移量
   * @default           0
   */
  offset?: any;

  scrollRef?: any;
}

function Popup(props: PopupProps): any {
  const {
    className,
    children,
    visible,
    refEl,
    position = 'content',
    onClose,
    trigger,
    targetHidden = false,
    offset = 0,
    scrollRef,
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
      let refTarget = ref.current.getBoundingClientRect();
      let refElTarget = refEl.current.getBoundingClientRect();
      let refWidth = refTarget.width;
      let refHeight = refTarget.height;
      let refElWidth = refElTarget.width;
      let refElHeight = refElTarget.height;
      switch (position) {
        case 'top':
          return {
            transform: `translate(${left + refElWidth / 2 - refWidth / 2}px, ${
              top - 12 - refHeight
            }px)`,
          };
        case 'top-right':
          return {
            transform: `translate(${left + refElWidth - refWidth + offset}px, ${
              top - 12 - refHeight
            }px)`,
          };
        case 'top-left':
          return {
            transform: `translate(${left - offset}px, ${
              top - 12 - refHeight
            }px)`,
          };
        case 'left':
          return {
            transform: `translate(${left - refWidth - 12}px, ${
              top + refElHeight / 2 - refHeight / 2
            }px)`,
          };
        case 'right':
          return {
            transform: `translate(${left + refElWidth + 12}px, ${
              top + refElHeight / 2 - refHeight / 2
            }px)`,
          };
        case 'bottom':
          return {
            transform: `translate(${left + refElWidth / 2 - refWidth / 2}px, ${
              top + refElHeight + 12
            }px)`,
          };
        case 'bottom-left':
          return {
            transform: `translate(${left - offset}px, ${
              top + refElHeight + 12
            }px)`,
          };
        case 'bottom-right':
          return {
            transform: `translate(${left + refElWidth - refWidth + offset}px, ${
              top + refElHeight + 12
            }px)`,
          };
        default:
          return {
            transform: `translate(${left}px, ${top}px)`,
            width: refElWidth,
            height: refElHeight,
          };
      }
    }
    setStyle(handleStyle());
  }, [top, left, refEl.current]);

  useEffect(() => {}, [refEl.current]);

  useEffect(() => {
    function handleClick(e: any) {
      if (!visible) return;

      if (!refEl.current) return;
      if (!ref.current) return;
      // 判断选定区域

      if (targetHidden) {
        if (!ReactDOM.findDOMNode(refEl.current)?.contains(e.target)) {
          onClose && onClose();
        }
      } else {
        if (
          !ReactDOM.findDOMNode(refEl.current)?.contains(e.target) &&
          !ReactDOM.findDOMNode(ref.current)?.contains(e.target)
        ) {
          onClose && onClose();
        }
      }
    }
    if (trigger == 'click' && visible) {
      document.addEventListener('click', handleClick);
    }
    return () => {
      if (trigger == 'click') {
        document.removeEventListener('click', handleClick);
      }
    };
  }, [visible]);

  function setPosition(ele: any) {
    let offset = refEl.current.getBoundingClientRect();
    let left = offset.left;
    let top = offset.top;
    setLeft(left);
    setTop(top);
  }

  useEffect(() => {
    if (!visible) return;
    if (!refEl.current) return;
    function handleScroll(e: any) {
      setPosition(e.target);
    }
    if (scrollRef) {
      scrollRef.addEventListener('scroll', handleScroll);
    }
    setPosition(parent);
    parent.forEach((item: any) => {
      item.addEventListener('scroll', handleScroll);
    });
    // parent.addEventListener('scroll', handleScroll);
    // if (parent.nodeName !== '#document') {
    //   document.addEventListener('scroll', handleBodyScroll);
    // }
    // document.documentElement.addEventListener('scroll', handleScroll);
    return () => {
      parent.forEach((item: any) => {
        item.removeEventListener('scroll', handleScroll);
      });
      if (scrollRef) {
        scrollRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, [parent, visible, refEl.current]);

  if (visible) {
    return ReactDOM.createPortal(
      <div
        style={style}
        className={clsx(
          `${prefix}-popup`,
          {
            [`${prefix}-popup-${position}`]: position,
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
