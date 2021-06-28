import React from 'react';

import ReactDOM from 'react-dom';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon, Button } from '../index';

interface DrawerProps {
  /**
   * @description      drawer 的样式名
   * @default           -
   */
  className?: string;

  /**
   * @description      drawer 的title
   * @default           -
   */
  title: any;

  /**
   * @description      drawer 的内容
   * @default           -
   */
  content?: any;

  children: any;

  /**
   * @description      drawer 的类型
   * @default           -
   */
  type: string;

  /**
   * @description      drawer 是否显示
   * @default           false
   */
  visible: boolean;

  /**
   * @description      确认按钮
   * @default           -
   */
  onConfirm: Function;

  /**
   * @description      取消按钮
   * @default           -
   */
  onCancel: Function;

  /**
   * @description      取消按钮
   * @default           -
   */
  position?: string;

  /**
   * @description      是否显示遮罩
   * @default           true
   */
  mask?: boolean;

  /**
   * @description      抽屉到顶部的距离
   * @default           0
   */
  offsetTop?: number;

  /**
   * @description      自定义页脚
   * @default           -
   */
  footer?: any;

  /**
   * @description      抽屉的宽度
   * @default           -
   */
  width?: number;

  /**
   * @description      是否显示关闭按钮
   * @default           true
   */
  close?: boolean;
}

function Drawer(props: DrawerProps): any {
  const {
    visible,
    title,
    children,
    position = 'left',
    onConfirm,
    onCancel,
    mask = true,
    offsetTop = 0,
    footer,
    width,
    close = true,
    ...prop
  } = props;

  function handleCancel() {
    onCancel ? onCancel() : null;
  }

  function handleConfirm() {
    onConfirm ? onConfirm() : null;
  }
  return ReactDOM.createPortal(
    <div
      className={clsx({
        [`${prefix}-drawer-warp`]: true,
        [`${prefix}-drawer-visible`]: visible,
      })}
    >
      <div
        className={clsx({
          [`${prefix}-drawer`]: true,
          [`${prefix}-drawer-${position}`]: position,
        })}
        style={{ top: offsetTop, width }}
      >
        <div
          className={clsx({
            [`${prefix}-drawer-head`]: true,
          })}
        >
          <div
            className={clsx({
              [`${prefix}-drawer-head-title`]: true,
            })}
          >
            {title}
          </div>
          {close && (
            <div
              className={clsx({
                [`${prefix}-drawer-head-close`]: true,
              })}
              onClick={() => {
                onCancel ? onCancel() : null;
              }}
            >
              <Icon name="cuowu" />
            </div>
          )}
        </div>
        <div
          className={clsx({
            [`${prefix}-drawer-body`]: true,
          })}
        >
          <span>{children}</span>
        </div>
        {footer ? (
          <div
            className={clsx({
              [`${prefix}-drawer-footer`]: true,
            })}
          >
            {footer}
          </div>
        ) : (
          <div
            className={clsx({
              [`${prefix}-drawer-footer`]: true,
            })}
          >
            <Button onClick={handleCancel}>取消</Button>
            <Button type="primary" onClick={handleConfirm}>
              确定
            </Button>
          </div>
        )}
      </div>
      {mask && (
        <div
          className={clsx({
            [`${prefix}-drawer-mask`]: true,
          })}
          onClick={handleCancel}
        ></div>
      )}
    </div>,
    document.body,
  );
}

export default Drawer;
