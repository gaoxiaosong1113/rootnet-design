import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';

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
}

// 第一次渲染，不显示

// 不是第一次渲染，渲染dom，根据visible是否显示

function DrawerContent(props: DrawerProps) {
  const {
    visible,
    title,
    children,
    position = 'left',
    onConfirm,
    onCancel,
    ...prop
  } = props;

  function handleCancel() {
    onCancel ? onCancel() : null;
  }

  function handleConfirm() {
    onConfirm ? onConfirm() : null;
  }
  console.log(position);
  return (
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
          <div
            className={clsx({
              [`${prefix}-drawer-head-close`]: true,
            })}
            onClick={() => {
              onCancel ? onCancel() : null;
            }}
          >
            <Icon name="sk-order" />
          </div>
        </div>
        <div
          className={clsx({
            [`${prefix}-drawer-body`]: true,
          })}
        >
          <span>{children}</span>
        </div>
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
      </div>
      <div
        className={clsx({
          [`${prefix}-drawer-mask`]: true,
        })}
        onClick={handleCancel}
      ></div>
    </div>
  );
}

function Drawer(props: DrawerProps) {
  const { visible, title, children, position, onConfirm, onCancel, ...prop } =
    props;

  if (!visible) {
    return null;
  }

  return ReactDom.createPortal(<DrawerContent {...props} />, document.body);
}

export default Drawer;
