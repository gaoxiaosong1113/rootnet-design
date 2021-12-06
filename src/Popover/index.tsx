import React, { useEffect, useState, useRef, useMemo, ReactNode, ReactElement } from 'react';
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
  style?: Object;
  children: ReactElement;

  /**
   * @description      主体内容
   * @default           -
   */
  content: any;

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

  /**
   * @description      自定义弹出区域class
   * @default           false
   */
  popupClassNmae?: any;

  /**
   * @description      自定义弹出区域偏移量
   * @default           false
   */
  offset?: any;

  scrollRef?: any;
}

function Content(props: any) {
  const {
    className,
    content,
    children,
    onConfirm,
    onCancel,
    event,
    position = 'top',
    targetHidden,
    ...prop
  } = props;

  function handleCancel(event: any) {
    event.stopPropagation();
    onCancel ? onCancel() : null;
  }

  function handleConfirm(event: any) {
    event.stopPropagation();
    onConfirm ? onConfirm() : null;
  }

  return (
    <>
      <div
        className={clsx(className, `${prefix}-popover`, {
          [`${prefix}-popover-${position}`]: position,
        })}
      >
        <div className={clsx(`${prefix}-popover-body`)}>
          <span>{content}</span>
        </div>
      </div>
      <div className={clsx(`${prefix}-popover-mask`)} onClick={handleCancel} />
    </>
  );
}

function Popover(props: PopoverProps) {
  const {
    children,
    onConfirm,
    onCancel,
    position = 'top',
    targetHidden,
    popupClassNmae,
    offset,
    scrollRef,
    ...prop
  } = props;
  const [visible, setVisible] = useState(false);

  const refEl = useRef(null);

  function handleClose(e: any) {
    e.stopPropagation();
    setVisible(false);
    onCancel && onCancel(e);
  }

  return (
    <>
      {React.cloneElement(children, {
        onClick: (event: any) => {
          event.persist();
          setVisible((prevOpen) => {
            return !prevOpen;
          });
        },
        className: clsx(children.props.className, `${prefix}-popconfirm-target`),
        ref: refEl,
      })}
      <Popup
        onClose={() => {
          setVisible(false);
          onCancel && onCancel();
        }}
        scrollRef={scrollRef}
        targetHidden={targetHidden}
        visible={visible}
        refEl={refEl}
        position={position}
        trigger={'click'}
        className={popupClassNmae}
        offset={offset}
      >
        <Content {...props} onCancel={handleClose} />
      </Popup>
    </>
  );
}

export default Popover;
