import React, { useEffect, useState, useRef, useMemo, useImperativeHandle, ReactNode } from 'react';
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
  children?: ReactNode;
}

function Item(props: any, ref: any) {
  const { className, disabled, select, children, onClick, active, ...prop } = props;

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

export interface OperationPopupProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;
  style?: Object;
  children?: ReactNode;

  /**
   * @description      弹出位置
   * @default           bottom
   */
  position?: string;

  /**
   * @description      触发元素
   * @default           -
   */
  component?: any;
}

export function OperationPopup(props: OperationPopupProps) {
  const { children, position = 'bottom', component, ...prop } = props;
  return (
    <Popover
      popupClassNmae={clsx(`${prefix}-operation-poop`, {})}
      offset={13}
      position={position}
      targetHidden={true}
      content={<div className={clsx(`${prefix}-operation-popover`, {})}>{children}</div>}
      {...prop}
    >
      <div>{component || <Icon name="gengduo2" color="#5477ff" />}</div>
    </Popover>
  );
}

function Operation(props: OperationProps) {
  const { className, children, ...prop } = props;
  const [visible, setVisible] = useState(false);

  const refEl = useRef(null);

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
