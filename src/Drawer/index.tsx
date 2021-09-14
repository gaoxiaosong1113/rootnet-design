// 引入react依赖
import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
  ReactNode,
} from 'react';
import ReactDOM from 'react-dom';

// 引入第三方依赖
import clsx from 'clsx';
import { CSSTransition } from 'react-transition-group';

// 引入样式
import './index.less';

// 引入配置文件
import { prefix } from '../config';

// 引入组件
import { Icon, Button } from '../index';

export interface DrawerProps {
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
  onConfirm: () => void;

  /**
   * @description      取消按钮
   * @default           -
   */
  onCancel: () => void;

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
  footer?: ReactNode;

  /**
   * @description      抽屉的宽度
   * @default           450
   */
  width?: number;

  /**
   * @description      是否显示关闭按钮
   * @default           true
   */
  close?: boolean;
}

function DrawerContent(props: any): any {
  const {
    className,
    visible,
    title,
    children,
    position = 'left',
    onConfirm,
    onCancel,
    mask = true,
    offsetTop = 0,
    footer,
    width = 480,
    close = true,
    ...prop
  } = props;

  function handleCancel() {
    onCancel ? onCancel() : null;
  }

  function handleConfirm() {
    onConfirm ? onConfirm() : null;
  }

  const Footer = useCallback(() => {
    if (footer === null) return null;
    if (footer === undefined) {
      return (
        <div className={clsx(`${prefix}-drawer-footer`)}>
          <Button onClick={handleCancel}>取消</Button>
          <Button type="primary" onClick={handleConfirm}>
            确定
          </Button>
        </div>
      );
    }

    return <div className={clsx(`${prefix}-drawer-footer`)}>{footer}</div>;
  }, [footer]);

  return ReactDOM.createPortal(
    <>
      <div
        className={clsx(className, `${prefix}-drawer`, {
          [`${prefix}-drawer-${position}`]: position,
        })}
        style={{ top: offsetTop, width }}
      >
        <div className={clsx(`${prefix}-drawer-head`)}>
          <div className={clsx(`${prefix}-drawer-head-title`)}>{title}</div>
          {close && (
            <div
              className={clsx(`${prefix}-drawer-head-close`)}
              onClick={() => {
                onCancel ? onCancel() : null;
              }}
            >
              <Icon name="cuowu1" />
            </div>
          )}
        </div>
        <div className={clsx(`${prefix}-drawer-body`)}>{children}</div>
        <Footer />
      </div>
      {mask && (
        <div
          className={clsx(`${prefix}-drawer-mask`)}
          onClick={handleCancel}
        ></div>
      )}
    </>,
    document.body,
  );
}

function Drawer(props: DrawerProps) {
  const { className, visible, position = 'left', ...prop } = props;

  return (
    <CSSTransition
      in={visible}
      className={clsx(className, {
        [`drawer-transition-${position}`]: position,
      })}
      classNames={`drawer-transition-${position}`}
      unmountOnExit
      timeout={400}
    >
      <DrawerContent {...props} />
    </CSSTransition>
  );
}

export default Drawer;
