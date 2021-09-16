// 引入react依赖
import React, {
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
  useRef,
} from 'react';
import ReactDOM from 'react-dom';

// 引入第三方依赖
import {
  SwitchTransition,
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import clsx from 'clsx';

// 引入样式
import './index.less';

// 引入配置文件
import {
  prefix,
  primaryColor,
  successColor,
  warningColor,
  errorColor,
} from '../config';

// 引入工具类
import { uuid } from '../_util';

// 引入组件
import { Icon } from '../index';

export interface MessageProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;

  /**
   * @description      组件唯一标识key
   * @default           -
   */
  key?: any;

  /**
   * @description      提示内容
   * @default           -
   */
  content?: any;

  /**
   * @description      提示类型
   * @default           -
   */
  type?: string;

  /**
   * @description      自动关闭延时时间
   * @default           -
   */
  duration?: number;

  /**
   * @description      是否显示 x 关闭按钮
   * @default           -
   */
  close?: boolean;

  /**
   * @description      提示信息销毁后回调
   * @default           -
   */
  onClose?: any;
}

// 消息组件实例
let messageInstance: any;

let messageWarp: any;

function MessageContent(props: any): any {
  const {
    className,
    style,
    content,
    type = 'primary',
    duration = 3,
    onClose,
    onRemove,
    messageKey,
    close = false,
  } = props;

  useEffect(() => {
    let time: any;
    if (duration) {
      time = window.setTimeout(() => {
        handleClose();
        clearTimeout(time);
      }, duration * 1000);
    }

    return () => {
      clearTimeout(time);
    };
  }, []);

  function handleClose() {
    onRemove(messageKey);
    onClose && onClose();
  }

  return (
    <div
      className={clsx(className, {
        [`${prefix}-message-item`]: true,
      })}
      style={style}
    >
      <div
        className={clsx({
          [`${prefix}-message-content`]: true,
        })}
      >
        <div
          className={clsx({
            [`${prefix}-message-text`]: true,
            [`${prefix}-message-${type}`]: type,
          })}
        >
          <div
            className={clsx({
              [`${prefix}-message-icon`]: true,
            })}
          >
            <Icon name={'jinggao'} />
          </div>
          <span>{content || ''}</span>
          {close && (
            <div
              className={clsx(`${prefix}-message-close`)}
              onClick={() => {
                handleClose();
              }}
            >
              <Icon name="cuowu1" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function Message(props: MessageProps, ref: any) {
  const [messages, setMessages] = useState([] as Array<any>);

  const refEl: any = useRef();

  const messagesRef: any = useRef(messages);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  useImperativeHandle(ref, () => ({
    add,
    remove,
  }));

  function add(message: MessageProps) {
    if (!message.key) {
      message.key = uuid();
    }

    let messageKeys = messagesRef.current.map((v: any) => v.key);
    let messageIndex = messageKeys.indexOf(message.key);
    if (messageIndex > -1) {
      messagesRef.current.splice(messageIndex, 1, message);
    } else {
      messagesRef.current.push(message);
    }

    setMessages([...messagesRef.current]);
  }

  function remove(key: any) {
    setMessages(
      messagesRef.current.filter((message: any) => message.key !== key),
    );
  }

  const messageDom = messages.map((props: MessageProps) => {
    return (
      <CSSTransition
        key={props.key}
        classNames={clsx({
          [`${prefix}-message-transition`]: true,
        })}
        unmountOnExit
        timeout={500}
      >
        <MessageContent messageKey={props.key} {...props} onRemove={remove} />
      </CSSTransition>
    );
  });

  return (
    <div
      ref={refEl}
      className={clsx({
        [`${prefix}-message`]: true,
      })}
    >
      <TransitionGroup>{messageDom}</TransitionGroup>
    </div>
  );
}

const InternalMessage = React.forwardRef(Message);

function createInstance(props: MessageProps, callback: any) {
  if (messageWarp) document.body.removeChild(messageWarp);

  messageWarp = document.createElement('div');
  document.body.appendChild(messageWarp);
  let refFlag = false;

  function ref(Message: any) {
    if (refFlag) return;
    refFlag = true;
    callback({
      message(props: MessageProps) {
        Message.add(props);
      },
      removeMessage(key: any) {
        Message.remove(key);
      },
      destroy() {
        ReactDOM.unmountComponentAtNode(messageWarp);
        if (messageWarp.parentNode) {
          messageWarp.parentNode.removeChild(messageWarp);
        }
        messageInstance = null;
        messageWarp = null;
      },
    });
  }

  return ReactDOM.render(<InternalMessage {...props} ref={ref} />, messageWarp);
}

function isMessageProps(content: any): any {
  return Object.prototype.toString.call(content) === '[object Object]';
}

function messageShow(props: MessageProps) {
  if (messageInstance) {
    messageInstance.message(props);
    return;
  }

  createInstance(props, (instace: any) => {
    messageInstance = instace;
    instace.message(props);
  });
}

const MessageApi: any = {
  messageOpen: messageShow,
  destory(key?: React.Key) {
    if (messageInstance) {
      if (key) {
        messageInstance.removeMessage(key);
      } else {
        messageInstance.destroy();
        messageInstance = null;
      }
    }
  },
};

MessageApi['show'] = (content: any, type: string, duration: number) => {
  // 传入的是config对象
  if (isMessageProps(content)) {
    return MessageApi.messageOpen({ ...content });
  }

  return MessageApi.messageOpen({ content, type, duration });
};

export default MessageApi;
