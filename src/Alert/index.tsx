import React, { useState } from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

export interface AlertProps {
  /**
   * @description      alert的样式名
   * @default           -
   */
  className?: string;

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
    title,
    content,
    type = 'info',
    close,
    extra,
    width,
    onClose,
    ...prop
  } = props;
  const [closed, setClosed] = useState(false);

  return (
    <div
      className={clsx({
        [`${prefix}-alert`]: true,
        [`${prefix}-alert-lg`]: title,
        [`${prefix}-alert-${type}`]: type,
        [`${prefix}-alert-closed`]: closed,
      })}
      style={{
        width,
      }}
      {...prop}
    >
      <div
        className={clsx({
          [`${prefix}-alert-head`]: true,
        })}
      >
        <Icon name={'jinggao'} color="red" />
      </div>
      <div
        className={clsx({
          [`${prefix}-alert-body`]: true,
        })}
      >
        {title && (
          <div
            className={clsx({
              [`${prefix}-alert-title`]: true,
            })}
          >
            {title}
          </div>
        )}
        {content && (
          <div
            className={clsx({
              [`${prefix}-alert-content`]: true,
            })}
          >
            {content}
          </div>
        )}
      </div>
      {close && (
        <div
          className={clsx({
            [`${prefix}-alert-close`]: true,
          })}
          onClick={() => {
            setClosed(true);
            onClose ? onClose() : null;
          }}
        >
          <Icon name={'cuowu1'} />
        </div>
      )}
      <div
        className={clsx({
          [`${prefix}-alert-footer`]: true,
        })}
      >
        {extra}
      </div>
    </div>
  );
}
