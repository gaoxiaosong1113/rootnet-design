// 引入react依赖
import React, { useEffect, useState, useRef, useMemo } from 'react';
import ReactDOM from 'react-dom';

// 引入第三方依赖
import clsx from 'clsx';

// 引入样式
import './index.less';

// 引入配置文件
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
}

function Content(props: any) {
  const {
    content,
    children,
    onConfirm,
    onCancel,
    event,
    position = 'top',
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
  const { children, onConfirm, onCancel, position = 'top', ...prop } = props;
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
      {React.Children.map(children, (item) => {
        return React.cloneElement(item, {
          onClick: (event) => {
            event.persist();
            setVisible(true);
          },
          ref: refEl,
        });
      })}
      {/* <span
        className={clsx({
          [`${prefix}-popover-target`]: true,
        })}
        onClick={(event) => {
          event.persist();
          setVisible(true);
        }}
        ref={refEl}
      >
        {children}
      </span> */}
      <Popup
        onClose={() => {
          setVisible(false);
          onCancel && onCancel();
        }}
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
