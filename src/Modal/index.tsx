import React, { useEffect, useState, useRef, ReactNode } from 'react';
import ReactDOM from 'react-dom';

// 引入第三方依赖
import { CSSTransition } from 'react-transition-group';
import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon, Button } from '../index';

export interface ModalProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;
  style?: Object;
  children?: ReactNode;

  /**
   * @description      modal 的title
   * @default           -
   */
  title: any;

  /**
   * @description      modal 的内容
   * @default           -
   */
  content?: any;

  /**
   * @description      modal 是否显示
   * @default           false
   */
  visible: boolean;

  /**
   * @description      确认按钮，支持promise延迟关闭
   * @default           -
   */
  onConfirm: Function;

  /**
   * @description      确认按钮loading
   * @default           false
   */
  confirmLoading: boolean;

  /**
   * @description      取消按钮
   * @default           -
   */
  onCancel: Function;

  /**
   * @description      确认按钮文字
   * @default           -
   */
  confirmButtonText: any;

  /**
   * @description      取消按钮文字
   * @default           -
   */
  cancelButtonText: any;

  /**
   * @description      确认按钮是否可见
   * @default           true
   */
  confirmButtonVisible: boolean;

  /**
   * @description      取消按钮是否可见
   * @default           true
   */
  cancelButtonVisible: boolean;

  /**
   * @description      页脚
   * @default           -
   */
  footer: any;

  /**
   * @description      modal 宽度
   * @default           340
   */
  width: number;

  /**
   * @description      在对话框第一次显示之前创建对话框节点
   * @default           false
   */
  forceRender?: boolean;

  /**
   * @description      关闭时是否销毁内容
   * @default           false
   */
  destroyOnClose?: boolean;

  /**
   * @description      点击mask是否关闭modal
   * @default           true
   */
  maskClose?: boolean;

  /**
   * @description      是否显示 x 关闭按钮
   * @default           true
   */
  close?: boolean;

  forceVisible?: any;
}

export interface ModalContentProps extends ModalProps {
  /**
   * @description      modal 的类型
   * @default           -
   */
  type?: string;

  /**
   * @description
   * @default           -
   */
  confirm?: boolean;

  /**
   * @description
   * @default           -
   */
  onClose?: any;

  event: any;
}

function ModalContent(props: ModalContentProps) {
  const {
    className,
    title,
    content,
    children,
    type,
    visible,
    onConfirm,
    onCancel,
    confirmButtonText = '确定',
    cancelButtonText = '取消',
    confirmButtonVisible = true,
    cancelButtonVisible = true,
    onClose,
    footer,
    width,
    maskClose = true,
    close = true,
    forceRender,
    confirm = false,
    destroyOnClose,
    confirmLoading = false,
    ...prop
  } = props;

  const [animatedVisible, setAnimatedVisible] = React.useState(visible);

  const modalElRef = useRef(null);

  useEffect(() => {
    setAnimatedVisible(visible);
    return () => {};
  }, [visible]);

  function handleClose() {
    setAnimatedVisible(false);
    let time = setTimeout(() => {
      clearTimeout(time);
      onClose ? onClose() : null;
    }, 300);
  }

  function handleCancel() {
    onCancel ? onCancel() : null;
    handleClose();
  }

  function handleConfirm() {
    if (confirmLoading) {
      return;
    }
    if (onConfirm) {
      let confirm = onConfirm();
      if (confirm instanceof Promise) {
        confirm.then((res) => {
          if (res !== false) {
            handleClose();
          }
        });
        return;
      }
      if (confirm === false) {
        return;
      }
      handleClose();
      return;
    }
    handleClose();
  }

  if (forceRender || visible || modalElRef.current) {
    return (
      <CSSTransition
        in={animatedVisible}
        classNames={clsx({
          [`${prefix}-modal-transition`]: true,
        })}
        onEnter={() => {
          // console.log('进入');
        }}
        unmountOnExit={destroyOnClose}
        appear
        mountOnEnter
        timeout={200}
      >
        <div
          ref={modalElRef}
          className={clsx(className, `${prefix}-modal-warp`, {
            [`${prefix}-modal-confirm`]: confirm && type,
            [`${prefix}-modal-confirm-${type}`]: confirm && type,
          })}
        >
          <div className={clsx(`${prefix}-modal`, {})} style={{ width }}>
            <div className={clsx(`${prefix}-modal-head`)}>
              {confirm && (
                <div
                  className={clsx({
                    [`${prefix}-modal-icon`]: true,
                  })}
                >
                  <Icon name={'jinggao'} />
                </div>
              )}
              <div className={clsx(`${prefix}-modal-head-title`)}>{title}</div>
              {close && (
                <div
                  className={clsx(`${prefix}-modal-head-close`)}
                  onClick={() => {
                    handleCancel();
                  }}
                >
                  <Icon name="cuowu1" />
                </div>
              )}
            </div>
            <div className={clsx(`${prefix}-modal-body`)}>
              <div>{type ? content : children}</div>
            </div>
            {footer !== null && (
              <div className={clsx(`${prefix}-modal-footer`)}>
                {footer ? (
                  footer
                ) : (
                  <>
                    {cancelButtonVisible && (
                      <Button onClick={handleCancel}>{cancelButtonText}</Button>
                    )}
                    {confirmButtonVisible && (
                      <Button type="primary" onClick={handleConfirm} loading={confirmLoading}>
                        {confirmButtonText}
                      </Button>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
          <div
            className={clsx(`${prefix}-modal-mask`)}
            onClick={() => maskClose && handleCancel()}
          ></div>
        </div>
      </CSSTransition>
    );
  }

  return null;
}

export function Modal(props: ModalProps): any {
  const {
    title,
    children,
    visible = false,
    onConfirm,
    onCancel,
    forceRender = false,
    destroyOnClose = false,
    ...prop
  } = props;

  // 判断是否已经挂载
  const [ev, setEv] = useState<any>();
  const [isLoad, setIsLoad] = useState<any>(false);

  const [animatedVisible, setAnimatedVisible] = useState<boolean>(visible);

  useEffect(() => {
    if (visible) {
      setAnimatedVisible(true);
    }
  }, [visible]);

  useEffect(() => {
    setIsLoad(true);
    // document.addEventListener('click', (e) => {
    //   // console.log(e)
    //   e.pageX;
    //   e.pageY;
    //   setEv(e);
    //   return false;
    // });
  }, []);

  // if (!forceRender && destroyOnClose && !animatedVisible) {
  //   // console.log('卸载');
  //   return null;
  // }

  if (!isLoad) {
    return null;
  }

  return ReactDOM.createPortal(
    <ModalContent
      {...props}
      visible={visible}
      event={ev}
      onClose={() => {
        setAnimatedVisible(false);
      }}
    />,
    document.body,
  );
}

function ModalConfirm(props: ModalContentProps) {
  const { type = 'primary', width, onCancel, onConfirm, onClose } = props;

  const [animatedVisible, setAnimatedVisible] = useState<boolean>(false);

  useEffect(() => {
    setAnimatedVisible(true);
  }, []);

  return (
    <ModalContent
      {...props}
      type={type}
      visible={animatedVisible}
      confirm={true}
      onClose={() => {
        onClose && onClose();
      }}
    />
  );
}

Modal.confirm = (props: ModalContentProps) => {
  const div = document.createElement('div');
  document.body.appendChild(div);

  function unmountComponent() {
    ReactDOM.unmountComponentAtNode(div);
    document.body.removeChild(div);
  }

  return (
    <>
      {ReactDOM.render(
        <ModalConfirm
          {...props}
          onClose={() => {
            unmountComponent();
          }}
        />,
        div,
      )}
    </>
  );
};

Modal.success = (props: ModalContentProps) => {
  return Modal.confirm({
    ...props,
    type: 'success',
  });
};

Modal.error = (props: ModalContentProps) => {
  return Modal.confirm({
    ...props,
    type: 'error',
  });
};

Modal.warning = (props: ModalContentProps) => {
  return Modal.confirm({
    ...props,
    type: 'warning',
  });
};

export default Modal;
