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

  onCancel: Function;

  event: any;

  /**
   * @description      弹出位置
   * @default           -
   */
  position?: string;

  /**
   * @description      弹出方式
   * @default           -
   */
  trigger?: string;

  visible: any;
}

function ModalContent(props: ModalProps) {
  const {
    content,
    children,
    visible,
    onCancel,
    event,
    position = 'top',
    ...prop
  } = props;

  const refEl = useRef<any>(null);

  useEffect(() => {
    function handleClick(e: any) {
      if (!refEl.current) return;
      if (!ReactDOM.findDOMNode(refEl.current)?.contains(e.target)) {
        handleCancel(e);
      }
    }

    document.body.addEventListener('click', handleClick);
    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, []);

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
          top: getOffsetTop(event.target),
        };
    }
  }, [position]);

  function handleCancel(e: any) {
    onCancel ? onCancel(e) : null;
  }

  return (
    <div
      className={clsx({
        [`${prefix}-tooltip-warp`]: true,
      })}
    >
      <div
        className={clsx({
          [`${prefix}-tooltip`]: true,
          [`${prefix}-tooltip-${position}`]: position,
          [`${prefix}-tooltip-visible`]: visible,
        })}
        style={style}
        ref={refEl}
      >
        <div
          className={clsx({
            [`${prefix}-tooltip-body`]: true,
          })}
        >
          <span>{content}</span>
        </div>
      </div>
    </div>
  );
}

function Popconfirm(props: ModalProps) {
  const { children, onCancel, trigger = 'click', ...prop } = props;
  const [isFastOpen, setIsFastOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [ev, setEv] = useState<any>();
  const refEl = useRef<any>(null);

  function handleOpen(event: any) {
    setIsFastOpen(true);
    setVisible(true);
    setEv(event);
  }
  function handleClose() {
    setIsFastOpen(false);
    setVisible(false);
    onCancel && onCancel();
  }

  return (
    <>
      <span
        className={clsx({
          [`${prefix}-tooltip-target`]: true,
        })}
        ref={refEl}
      >
        {React.Children.map(children, (item) => {
          return React.cloneElement(item, {
            onClick: (event: any) => {
              if (trigger == 'click') {
                setIsFastOpen(true);
                setVisible((prevOpen) => {
                  return !prevOpen;
                });
                setEv(event);
              }
            },
            onMouseOver: (event: any) => {
              if (trigger == 'hover') {
                handleOpen(event);
              }
            },
            onMouseOut: (event: any) => {
              if (trigger == 'hover') {
                handleClose();
              }
            },
            onFocus: (event: any) => {
              if (trigger == 'focus') {
                handleOpen(event);
              }
            },
            onBlur: (event: any) => {
              if (trigger == 'focus') {
                handleClose();
              }
            },
          });
        })}
      </span>
      {isFastOpen &&
        ReactDOM.createPortal(
          <ModalContent
            {...props}
            visible={visible}
            event={ev}
            onCancel={(e: any) => {
              if (!ReactDOM.findDOMNode(refEl.current)?.contains(e.target)) {
                setVisible(false);
                onCancel && onCancel();
              }
            }}
          />,
          document.body,
        )}
    </>
  );
}

export default Popconfirm;
