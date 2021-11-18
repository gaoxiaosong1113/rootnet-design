import React, { useEffect, useState, useRef, useMemo, useCallback, ReactNode } from 'react';

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
  children?: ReactNode;

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

  /**
   * @description      箭头将指向目标元素的中心
   * @default           false
   */
  arrowPointAtCenter?: boolean;

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
    arrowPointAtCenter = false,
    ...prop
  } = props;

  const [left, setLeft] = useState(null) as any;
  const [top, setTop] = useState(null) as any;
  const [style, setStyle] = useState({});
  const [innerPosition, setInnerPosition] = useState(position);
  const parent = useGetElementParent(refEl.current);

  const ref = useRef(null as any);

  function getSizePosition() {
    if (!visible || !refEl.current || !ref.current) return null;
    let refTarget = ref.current.getBoundingClientRect();
    let refElTarget = refEl.current.getBoundingClientRect();
    let refWidth = refTarget.width;
    let refHeight = refTarget.height;
    let refElWidth = refElTarget.width;
    let refElHeight = refElTarget.height;

    return {
      refWidth,
      refHeight,
      top: {
        x: left + refElWidth / 2 - refWidth / 2,
        y: top - 12 - refHeight,
      },
      'top-left': {
        x: arrowPointAtCenter ? left - offset + refElWidth / 2 - 16 : left - offset,
        y: top - 12 - refHeight,
      },
      'top-right': {
        x: arrowPointAtCenter
          ? left + refElWidth / 2 - refWidth + 21 + offset
          : left + refElWidth - refWidth + offset,
        y: top - 12 - refHeight,
      },
      left: {
        x: left - refWidth - 12,
        y: top + refElHeight / 2 - refHeight / 2,
      },
      right: {
        x: left + refElWidth + 12,
        y: top + refElHeight / 2 - refHeight / 2,
      },
      bottom: {
        x: left + refElWidth / 2 - refWidth / 2,
        y: top + refElHeight + 12,
      },
      'bottom-left': {
        x: arrowPointAtCenter ? left - offset + refElWidth / 2 - 16 : left - offset,
        y: top + refElHeight + 12,
      },
      'bottom-right': {
        x: arrowPointAtCenter
          ? left + refElWidth / 2 - refWidth + 21 + offset
          : left + refElWidth - refWidth + offset,
        y: top + refElHeight + 12,
        width: refElWidth,
        height: refElHeight,
      },
      default: {
        x: left,
        y: top,
        width: refElWidth,
        height: refElHeight,
      },
    };
  }

  function handleRePosition() {
    let rePosition = position;

    let positionSize = getSizePosition() as any;

    if (!positionSize) return;

    if (position.indexOf('left') != -1) {
      if (positionSize[rePosition].x + positionSize.refWidth > window.innerWidth) {
        rePosition = rePosition.replace('left', 'right');
      }
    }

    if (rePosition.indexOf('right') != -1) {
      if (positionSize[rePosition].x <= 0) {
        rePosition = rePosition.replace('right', 'left');
      }
    }

    if (rePosition.indexOf('bottom') != -1) {
      if (positionSize[rePosition].y + positionSize.refHeight > window.innerHeight) {
        rePosition = rePosition.replace('bottom', 'top');
      }
    }

    if (rePosition.indexOf('top') != -1) {
      if (positionSize[rePosition].y <= 0) {
        rePosition = rePosition.replace('top', 'bottom');
      }
    }
    setInnerPosition(rePosition);
  }

  useEffect(() => {
    if (!visible) return;
    function handleStyle() {
      let positionSize = getSizePosition() as any;
      if (!positionSize) return {};
      if (innerPosition === 'default') {
        return {
          transform: `translate(${positionSize[innerPosition].x}px, ${positionSize[innerPosition].y}px)`,
          width: positionSize[innerPosition].width,
          height: positionSize[innerPosition].height,
        };
      }
      return {
        transform: `translate(${positionSize[innerPosition].x}px, ${positionSize[innerPosition].y}px)`,
      };
    }
    setStyle(handleStyle());
  }, [left, top, refEl.current, innerPosition]);

  useEffect(() => {
    handleRePosition();
  }, [top, left]);

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
    function handleResize(e: any) {
      setPosition(e.target);
    }
    if (scrollRef) {
      scrollRef.addEventListener('scroll', handleScroll);
    }

    setPosition(parent);

    parent.forEach((item: any) => {
      item.addEventListener('scroll', handleScroll);
    });

    window.addEventListener('resize', handleResize);

    return () => {
      parent.forEach((item: any) => {
        item.removeEventListener('scroll', handleScroll);
      });
      if (scrollRef) {
        scrollRef.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [parent, visible, refEl.current]);

  if (visible) {
    return ReactDOM.createPortal(
      <div
        style={style}
        className={clsx(
          `${prefix}-popup`,
          {
            [`${prefix}-popup-${innerPosition}`]: innerPosition,
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
