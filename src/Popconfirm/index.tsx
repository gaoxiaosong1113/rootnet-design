import React, {
  useEffect,
  useState,
  useRef,
  useMemo,
  ReactNode,
  ReactElement,
} from 'react';
import ReactDOM from 'react-dom';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon, Button, Popup } from '../index';

import { getOffsetLeft, getOffsetTop } from '../_util';

export interface PopconfirmProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;
  style?: Object;
  children: ReactElement<any>;

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
}

function Content(props: any) {
  const {
    className,
    content,
    onConfirm,
    onCancel,
    position = 'top',
    ...prop
  } = props;

  return (
    <div className={clsx(className, `${prefix}-popconfirm-warp`)}>
      <div
        className={clsx(`${prefix}-popconfirm`, {
          [`${prefix}-popconfirm-${position}`]: position,
        })}
      >
        <div className={clsx(`${prefix}-popconfirm-body`)}>
          <span>{content}</span>
        </div>
        <div className={clsx(`${prefix}-popconfirm-footer`)}>
          <Button onClick={onCancel}>取消</Button>
          <Button type="primary" onClick={onConfirm}>
            确定
          </Button>
        </div>
      </div>
    </div>
  );
}

function Popconfirm(props: PopconfirmProps) {
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

  function handleCancel(e: any) {
    e?.stopPropagation();
    setVisible(false);
    if (onCancel) {
      onCancel(e);
    }
  }

  function handleConfirm(e: any) {
    e?.stopPropagation();
    setVisible(false);
    if (onConfirm) {
      onConfirm(e);
    }
  }

  return (
    <>
      {React.cloneElement(children, {
        onClick: (event: any) => {
          setVisible(true);
          event.stopPropagation();
        },
        className: `${prefix}-popconfirm-target`,
        ref: refEl,
      })}
      <Popup
        onClose={handleCancel}
        visible={visible}
        refEl={refEl}
        position={position}
        trigger={'click'}
      >
        <Content
          {...prop}
          position={position}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      </Popup>
    </>
  );
}

export default Popconfirm;
