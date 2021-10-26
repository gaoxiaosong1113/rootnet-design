// 引入react依赖
import React, { useState, useEffect, useImperativeHandle, useRef } from 'react';
import ReactDOM from 'react-dom';

// 引入第三方依赖
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import clsx from 'clsx';

// 引入样式
import './index.less';

// 引入配置文件
import { prefix } from '../config';

// 引入工具类
import { uuid } from '../_util';

// 引入组件
import { Alert } from '../index';

export interface NotificationProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;

  /**
   * @description    组件唯一标识key
   * @default           -
   */
  key?: any;

  /**
   * @description      Notification的标题
   * @default           -
   */
  title?: string;

  /**
   * @description      Notification的内容
   * @default           -
   */
  content?: string;

  /**
   * @description      Notification的类型
   * @default           primary
   */
  type?: 'primary' | 'success' | 'warning' | 'error';

  /**
   * @description      自动关闭延时时间
   * @default           4.5
   */
  duration?: number;

  /**
   * @description      Notification右边操作区域
   * @default           -
   */
  extra?: any;

  /**
   * @description      Notification的宽度
   * @default           -
   */
  width?: number;

  /**
   * @description      弹出位置
   * @default           topRight
   */
  placement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

  /**
   * @description      是否显示关闭按钮
   * @default           false
   */
  close?: boolean;

  /**
   * @description      关闭Notification的回调
   * @default           -
   */
  onClose?: Function;
}

// 消息组件实例
let notificationInstance: any = {};

let noticeWapper: any = {};
const defaultPlacement = 'topRight';

function NotificationContent(props: any) {
  const {
    className,
    style,
    type = 'primary',
    duration = 4.5,
    onClose,
    width,
    onRemove,
    noticeKey,
    title,
    content,
    close,
    extra,
  } = props;

  useEffect(() => {
    let time: any;

    if (duration) {
      time = setTimeout(() => {
        cleartimer();
        clearTimeout(time);
      }, duration * 1000);
    }

    return () => {
      if (time) {
        clearTimeout(time);
        time = null;
      }
    };
  }, []);

  function closeAlert() {
    cleartimer();
  }

  function cleartimer() {
    onRemove(noticeKey);
    onClose && onClose();
  }

  return (
    <div
      className={clsx(className, {
        [`${prefix}-notification-item`]: true,
      })}
      style={{ width, ...style }}
    >
      <div
        className={clsx({
          [`${prefix}-notification-content`]: true,
        })}
      >
        <Alert
          title={title}
          content={content}
          type={type}
          close={close}
          extra={extra}
          closed={false}
          onClose={closeAlert}
        />
      </div>
    </div>
  );
}

export function Notification(props: NotificationProps, ref: any) {
  const { placement = defaultPlacement } = props;
  const [notices, setNotices] = useState([] as Array<any>);
  const refEl: any = useRef();

  const noticesRef: any = useRef(notices);

  useEffect(() => {
    noticesRef.current = notices;
  }, [notices]);

  useImperativeHandle(ref, () => ({
    add,
    remove,
  }));

  function add(notice: NotificationProps) {
    if (!notice.key) {
      notice.key = uuid();
    }

    let noticeKeys = noticesRef.current.map((v: any) => v.key);
    let noticeIndex = noticeKeys.indexOf(notice.key);

    if (noticeIndex > -1) {
      noticesRef.current.splice(noticeIndex, 1, notice);
    } else {
      noticesRef.current.push(notice);
    }

    setNotices([...noticesRef.current]);
  }

  function remove(key: any) {
    setNotices(noticesRef.current.filter((notice: any) => notice.key !== key));
  }

  const noticesDom = notices.map((props: NotificationProps) => {
    return (
      <CSSTransition
        key={props.key}
        classNames={clsx({
          [`${prefix}-notification-transition-${placement}`]: true,
        })}
        unmountOnExit
        timeout={500}
      >
        <NotificationContent
          noticeKey={props.key}
          {...props}
          onRemove={remove}
        />
      </CSSTransition>
    );
  });

  return (
    <div
      ref={refEl}
      className={clsx({
        [`${prefix}-notification`]: true,
        [`${prefix}-notification-${placement}`]: placement,
      })}
    >
      <TransitionGroup>{noticesDom}</TransitionGroup>
    </div>
  );
}

const InternalNotification = React.forwardRef(Notification);

function creatInstance(props: NotificationProps, callback: any) {
  const { placement = defaultPlacement } = props;

  if (noticeWapper[placement])
    document.body.removeChild(noticeWapper[placement]);

  noticeWapper[placement] = document.createElement('div');
  document.body.appendChild(noticeWapper[placement]);
  let refFlag = false;

  function ref(Notification: any) {
    if (refFlag) return;
    refFlag = true;
    callback({
      notice(props: NotificationProps) {
        Notification.add(props);
      },
      removeNotice(key: any) {
        Notification.remove(key);
      },
      destroy() {
        ReactDOM.unmountComponentAtNode(noticeWapper[placement]);
        if (noticeWapper[placement].parentNode) {
          noticeWapper[placement].parentNode.removeChild(
            noticeWapper[placement],
          );
        }

        notificationInstance[placement] = null;
        noticeWapper[placement] = null;
      },
    });
  }

  return ReactDOM.render(
    <InternalNotification {...props} ref={ref} />,
    noticeWapper[placement],
  );
}

function isNoticeProps(content: any): any {
  return Object.prototype.toString.call(content) === '[object Object]';
}

function noticeShow(props: NotificationProps) {
  const { placement = defaultPlacement } = props;

  if (notificationInstance[placement]) {
    notificationInstance[placement].notice(props);
    return;
  }

  creatInstance(props, (instace: any) => {
    notificationInstance[placement] = instace;
    instace.notice(props);
  });
}

const NotificationApi: any = {
  noticeOpen: noticeShow,
  destory(key?: React.Key) {
    Object.keys(notificationInstance).forEach((Instancekey) => {
      if (key) {
        notificationInstance[Instancekey].removeNotice(key);
      } else {
        notificationInstance[Instancekey].destroy();
      }
    });

    notificationInstance = {};
  },
};

NotificationApi['show'] = (content: any, type: string, duration: number) => {
  // 传入的是config对象
  if (isNoticeProps(content)) {
    return NotificationApi.noticeOpen({ ...content });
  }

  return NotificationApi.noticeOpen({ content, type, duration });
};

export default NotificationApi;
