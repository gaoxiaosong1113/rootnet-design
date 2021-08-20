import React, { useMemo, useState } from 'react';

import clsx from 'clsx';

import './index.less';

import {
  prefix,
  primaryColor,
  successColor,
  warningColor,
  errorColor,
} from '../config';

import { Icon } from '../index';

export interface AlertProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;
  style?: Object;
  children?: React.ReactChild;

  /**
   * @description      alert的标题
   * @default           default
   */
  title?: string;

  /**
   * @description      alert的内容
   * @default           default
   */
  content?: string;

  /**
   * @description      alert的类型
   * @default           default
   */
  type?: string;

  /**
   * @description      是否显示关闭按钮
   * @default           false
   */
  close?: boolean;

  /**
   * @description      alert右边操作区域
   * @default           -
   */
  extra?: any;

  /**
   * @description      alert的宽度
   * @default           -
   */
  width?: number;

  /**
   * @description      关闭alert的回调
   * @default           -
   */
  onClose?: Function;
}

export default function Alert(props: AlertProps) {
  const {
    className,
    style,
    title,
    content,
    type = 'primary',
    close,
    extra,
    width,
    onClose,
    ...prop
  } = props;
  const [closed, setClosed] = useState(false);

  const color = useMemo(() => {
    const colorObj: any = {
      primaryColor,
      successColor,
      warningColor,
      errorColor,
    };
    return colorObj[type + 'Color'];
  }, [type]);

  return (
    <div
      className={clsx(className, `${prefix}-alert`, {
        [`${prefix}-alert-lg`]: title,
        [`${prefix}-alert-${type}`]: type,
        [`${prefix}-alert-closed`]: closed,
      })}
      style={{
        width,
        ...style,
      }}
      {...prop}
    >
      <div className={clsx(`${prefix}-alert-head`)}>
        <Icon name={'jinggao'} color={color} />
      </div>
      <div className={clsx(`${prefix}-alert-body`)}>
        {title && <div className={clsx(`${prefix}-alert-title`)}>{title}</div>}
        {content && (
          <div className={clsx(`${prefix}-alert-content`)}>{content}</div>
        )}
      </div>
      {close && (
        <div
          className={clsx(`${prefix}-alert-close`)}
          onClick={() => {
            setClosed(true);
            onClose ? onClose() : null;
          }}
        >
          <Icon name={'cuowu1'} />
        </div>
      )}
      <div className={clsx(`${prefix}-alert-footer`)}>{extra}</div>
    </div>
  );
}
