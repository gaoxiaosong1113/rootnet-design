import React, { useEffect, useState, useRef, useMemo } from 'react';
import ReactDOM from 'react-dom';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon, Button, Popup } from '../index';

import { getOffsetLeft, getOffsetTop } from '../_util';

export interface PopoverProps {
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

  /**
   * @description      确认按钮回调
   * @default           -
   */
  onConfirm?: Function;

  /**
   * @description      取消按钮回调
   * @default           -
   */
  onCancel?: Function;

  /**
   * @description      弹出位置
   * @default           top
   */
  position?: string;

  /**
   * @description      点击弹出区域是否消失
   * @default           false
   */
  targetHidden?: boolean;
}

function Content(props: any) {
  const {
    content,
    children,
    onConfirm,
    onCancel,
    event,
    position = 'top',
    targetHidden,
    ...prop
  } = props;

  function handleCancel() {
    onCancel ? onCancel() : null;
  }

  function handleConfirm() {
    onConfirm ? onConfirm() : null;
  }

  return (
    <div
      className={clsx({
        [`${prefix}-popover-warp`]: true,
      })}
    >
      <div
        className={clsx({
          [`${prefix}-popover`]: true,
          [`${prefix}-popover-${position}`]: position,
        })}
      >
        <div
          className={clsx({
            [`${prefix}-popover-body`]: true,
          })}
        >
          <span>{content}</span>
        </div>
      </div>
      <div
        className={clsx({
          [`${prefix}-popover-mask`]: true,
        })}
        onClick={handleCancel}
      ></div>
    </div>
  );
}

function Popover(props: PopoverProps) {
  const {
    children,
    onConfirm,
    onCancel,
    position = 'top',
    targetHidden,
    ...prop
  } = props;
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
      {React.cloneElement(children, {
        onClick: (event) => {
          event.persist();
          setVisible(true);
        },
        className: `${prefix}-popconfirm-target`,
        ref: refEl,
      })}
      <Popup
        onClose={() => {
          setVisible(false);
          onCancel && onCancel();
        }}
        targetHidden={targetHidden}
        visible={visible}
        refEl={refEl}
        position={position}
        trigger={'click'}
      >
        <Content {...props} onCancel={handleClose} />
      </Popup>
    </>
  );
}

export default Popover;
