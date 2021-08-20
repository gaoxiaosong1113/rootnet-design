import React, {
  useEffect,
  useState,
  useRef,
  useMemo,
  useImperativeHandle,
} from 'react';
import ReactDOM from 'react-dom';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon, Button, Popover } from '../index';

import { getOffsetLeft, getOffsetTop } from '../_util';

export interface OperationProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;
  style?: Object;
  children?: any;

  /**
   * @description      主体内容
   * @default           -
   */
  content: any;

  /**
   * @description      确认按钮回调
   * @default           -
   */
  onConfirm: Function;

  /**
   * @description      取消按钮回调
   * @default           -
   */
  onCancel: Function;

  /**
   * @description      弹出位置
   * @default           top
   */
  position?: string;

  event: any;
}

function Item(props: any, ref: any) {
  const { className, disabled, select, children, onClick, ...prop } = props;

  const refEl = useRef(null);

  useImperativeHandle(ref, () => refEl.current);

  return (
    <>
      <div
        className={clsx(
          className,
          `${prefix}-operation-item`,
          {
            [`${prefix}-operation-item-disabled`]: disabled,
            [`${prefix}-operation-item-select`]: select,
          },
          className,
        )}
        onClick={(e: any) => {
          if (!disabled && onClick) {
            onClick(e);
          }
        }}
        {...prop}
        ref={refEl}
      >
        {children}
      </div>
      <div className="line"></div>
    </>
  );
}

function OperationPopup(props: any) {
  const { children, position = 'top', component, scrollRef, ...prop } = props;

  return (
    <Popover
      popupClassNmae={clsx(`${prefix}-operation-poop`, {})}
      offset={13}
      position={position}
      targetHidden={true}
      scrollRef={scrollRef}
      content={
        <div
          className={clsx(`${prefix}-operation-popover`, {})}
          onClick={(event) => {}}
        >
          {children}
        </div>
      }
    >
      <div>{component || <Icon name="gengduo2" color="#5477ff" />}</div>
    </Popover>
  );
}

function Operation(props: OperationProps) {
  const {
    className,
    children,
    onConfirm,
    onCancel,
    position = 'top',
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
    <div
      className={clsx(className, `${prefix}-operation`)}
      onClick={(event) => {
        event.persist();
        setVisible(true);
      }}
      ref={refEl}
    >
      {children}
    </div>
  );
}

Operation.Item = React.forwardRef(Item);
Operation.Popup = OperationPopup;

export default Operation;
