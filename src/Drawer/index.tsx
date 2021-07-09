// 引入react依赖
import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from 'react';
import ReactDOM from 'react-dom';

// 引入第三方依赖
import clsx from 'clsx';
import { Transition } from 'react-transition-group';
import gsap from 'gsap';

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

  // 判断是否已经挂载
  const [isFastOpen, setIsFastOpen] = useState(false);
  const drawerRef = useRef(null);
  const containerRef = useRef(null);
  const maskRef = useRef(null);

  function handleCancel() {
    onCancel ? onCancel() : null;
  }

  function handleConfirm() {
    onConfirm ? onConfirm() : null;
  }

  useEffect(() => {
    const drawer = drawerRef.current;
    const container = containerRef.current;
    const mRef = maskRef.current;

    // anim(drawer, 'animate-open', {
    //   start: () => {
    //     container.style.width = '100%';
    //     mRef.classList.add('animate-open');
    //     mRef.style.opacity = visible ? 0 : 1;
    //   },
    //   active: () => {
    //     drawer.style.transform = visible
    //       ? 'translateX(0%)'
    //       : props.position === 'left'
    //       ? 'translateX(-100%)'
    //       : 'translateX(100%)';
    //     mRef.style.opacity = visible ? 1 : 0;
    //   },
    //   end: () => {
    //     container.style.width = visible ? '100%' : '0%';
    //     mRef.classList.remove('animate-open');
    //   },
    // });
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    if (!isFastOpen) {
      setIsFastOpen(true);
    }
  }, [visible]);

  const Footer = useCallback(() => {
    if (footer === null) return null;
    if (footer === undefined) {
      return (
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
      );
    }

    return (
      <div
        className={clsx({
          [`${prefix}-drawer-footer`]: true,
        })}
      >
        {footer}
      </div>
    );
  }, [footer]);

  const animation = (target, dur, type) => {
    if (type == 'open') {
      gsap.to(target, { rotation: 0, x: 100, duration: dur });
    } else {
      gsap.to(target, { rotation: 0, x: 0, duration: dur });
    }
  };

  return (
    <Transition
      in={visible}
      onEnter={(node) => {
        animation(node, 400, 'open');
      }}
      onExit={(node) => {
        animation(node, 400, 'close');
      }}
      unmountOnExit
      timeout={400}
    >
      <div>
        {ReactDOM.createPortal(
          <div
            className={clsx({
              [`${prefix}-drawer-warp`]: true,
              [`${prefix}-drawer-visible`]: visible,
            })}
            ref={containerRef}
          >
            <div
              className={clsx({
                [`${prefix}-drawer`]: true,
                [`${prefix}-drawer-${position}`]: position,
              })}
              style={{ top: offsetTop, width }}
              ref={drawerRef}
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
                    <Icon name="cuowu1" />
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
              <Footer />
            </div>
            {mask && (
              <div
                className={clsx({
                  [`${prefix}-drawer-mask`]: true,
                })}
                onClick={handleCancel}
                ref={maskRef}
              ></div>
            )}
          </div>,
          document.body,
        )}
      </div>
    </Transition>
  );
}

// function Drawer(){

// }

export default Drawer;
