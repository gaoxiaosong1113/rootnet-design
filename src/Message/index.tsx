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
   * @description      提示信息销毁后回调
   * @default           -
   */
  onClose?: any;
}

let seed = 0;
const now = Date.now();

function getUuid() {
  const id = seed;
  seed += 1;
  return `rootnet_message_${now}_${id}`;
}

const colorObj: any = {
  primaryColor,
  successColor,
  warningColor,
  errorColor,
};

// 消息组件实例
let messageInstance: any;

function MessageContent(props: any): any {
  const {
    className,
    style,
    content,
    type,
    duration,
    onClose,
    onRemove,
    messageKey,
  } = props;

  const color = colorObj[type + 'Color'];

  let closeTimer: any = useRef(); // 定时器

  useEffect(() => {
    if (duration) {
      closeTimer.current = window.setTimeout(() => {
        onRemove(messageKey);

        onClose && onClose();

        clearTimeout(closeTimer.current);
      }, duration * 1000);
    }

    return () => {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);

        closeTimer.current = null;
      }
    };
  }, []);

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
            <Icon name={'jinggao'} color={color} />
          </div>
          <span>{content || ''}</span>
        </div>
      </div>
    </div>
  );
}

MessageContent.defaultProps = {
  type: 'primary',
  duration: 3,
  onClose() {},
};

function Message(props: MessageProps, ref: any) {
  const [messages, setMessages] = useState([] as Array<any>);
  const eleRef: any = useRef();

  let messagesRef: any = useRef();
  messagesRef.current = messages;

  useImperativeHandle(ref, () => ({
    add,
    remove,
  }));

  function add(message: MessageProps) {
    let messageKey = (message.key = message.key || getUuid());
    let updateMessages = messagesRef.current.concat();
    const messageIndex = messagesRef.current
      .map((v: any) => v.key)
      .indexOf(messageKey);

    message.key = messageKey;

    if (messageIndex > -1) {
      updateMessages.splice(messageIndex, 1, message);
    } else {
      updateMessages.push(message);
    }

    setMessages(updateMessages);
  }

  function remove(key: any) {
    const newMessages = messagesRef.current.filter(
      (message: any) => message.key !== key,
    );

    setMessages(newMessages);
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
      ref={eleRef}
      className={clsx({
        [`${prefix}-message`]: true,
      })}
    >
      <TransitionGroup>{messageDom}</TransitionGroup>
    </div>
  );
}

const Ms = React.forwardRef(Message);

Message.newInstance = function newNotificationInstance(
  props: MessageProps,
  callback: any,
) {
  const div = document.createElement('div');
  document.body.appendChild(div);
  let refFlag = false;
  function ref(Message: any) {
    if (refFlag) {
      return;
    }
    refFlag = true;

    callback({
      message(props: MessageProps) {
        Message.add(props);
      },
      removeMessage(key: any) {
        Message.remove(key);
      },
      destroy() {
        ReactDOM.unmountComponentAtNode(div);
        if (div.parentNode) {
          div.parentNode.removeChild(div);
        }
      },
    });
  }

  return ReactDOM.render(<Ms {...props} ref={ref} />, div);
};

function isMessageProps(content: any): any {
  return Object.prototype.toString.call(content) === '[object Object]';
}

function messageShow(props: MessageProps) {
  if (messageInstance) {
    messageInstance.message(props);

    return;
  }

  Message.newInstance(props, (instace: any) => {
    if (messageInstance) {
      messageInstance.message(props);

      return;
    }

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
