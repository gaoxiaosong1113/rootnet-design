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

import { Icon, Button, Popup } from '../index';

import { getOffsetLeft, getOffsetTop } from '../_util';

export interface ModalProps {
  /**
   * @description      类名
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

function Content(props: ModalProps) {
  const { content, children, visible, position = 'top', ...prop } = props;

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

function Tooltip(props: ModalProps) {
  const { children, onCancel, trigger = 'click', position, ...prop } = props;
  const [visible, setVisible] = useState(false);

  const refEl = useRef(null);

  function handleOpen() {
    setVisible(true);
  }
  function handleClose() {
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
              event.persist();
              if (trigger == 'click') {
                setVisible((prevOpen) => {
                  return !prevOpen;
                });
              }
            },
            onMouseOver: (event: any) => {
              event.persist();
              if (trigger == 'hover') {
                handleOpen();
              }
            },
            onMouseOut: (event: any) => {
              event.persist();
              if (trigger == 'hover') {
                handleClose();
              }
            },
            onFocus: (event: any) => {
              event.persist();
              if (trigger == 'focus') {
                handleOpen();
              }
            },
            onBlur: (event: any) => {
              event.persist();
              if (trigger == 'focus') {
                handleClose();
              }
            },
          });
        })}
      </span>
      <Popup
        onClose={() => {
          setVisible(false);
          onCancel && onCancel();
        }}
        visible={visible}
        refEl={refEl}
        position={position}
        trigger={trigger}
      >
        <Content {...props} visible={visible} />
      </Popup>
    </>
  );
}

export default Tooltip;
