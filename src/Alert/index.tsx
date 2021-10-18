import React, { ReactNode, useMemo, useState } from 'react';

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
  children?: ReactNode;

  /**
   * @description      alert的标题
   * @default           default
   */
  title?: ReactNode;

  /**
   * @description      alert的内容
   * @default           default
   */
  content?: ReactNode;

  /**
   * @description      alert的类型
   * @default           default
   */
  type?: string;

  /**
   * @description      alert 是否关闭
   * @default           false
   */
  closed: boolean;

  /**
   * @description      是否显示关闭按钮
   * @default           false
   */
  close?: boolean;

  /**
   * @description      alert右边操作区域
   * @default           -
   */
  extra?: ReactNode;

  /**
   * @description      alert的宽度
   * @default           -
   */
  width?: number;

  /**
   * @description      关闭alert的回调
   * @default           -
   */
  onClose?: () => void;
}

export default function Alert(props: AlertProps) {
  const {
    className,
    style,
    title,
    content,
    type = 'primary',
    closed,
    close,
    extra,
    width,
    onClose,
    ...prop
  } = props;

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
