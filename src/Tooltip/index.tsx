import React, {
  useEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
  ReactNode,
  ReactElement,
} from 'react';
import ReactDOM from 'react-dom';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon, Button, Popup } from '../index';

import { getOffsetLeft, getOffsetTop } from '../_util';

export interface TooltipProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;
  style?: Object;
  children: ReactElement[];

  /**
   * @description      主体内容
   * @default           -
   */
  content: any;

  /**
   * @description      关闭回调
   * @default           -
   */
  onCancel: Function;

  /**
   * @description      弹出位置
   * @default           -
   */
  position?: string;

  /**
   * @description      弹出方式 click | hover | focus
   * @default           -
   */
  trigger?: string;
}

function Content(props: any) {
  const {
    className,
    style,
    content,
    children,
    visible,
    position = 'top',
    ...prop
  } = props;

  return (
    <div
      className={clsx(`${prefix}-tooltip-warp`, {
        [`${className}-warp`]: className,
      })}
    >
      <div
        className={clsx(`${prefix}-tooltip`, {
          [`${prefix}-tooltip-${position}`]: position,
          [`${prefix}-tooltip-visible`]: visible,
        })}
      >
        <div className={clsx(`${prefix}-tooltip-body`, {})} style={style}>
          <span>{content}</span>
        </div>
      </div>
    </div>
  );
}

function Tooltip(props: TooltipProps) {
  const {
    className,
    children,
    onCancel,
    trigger = 'click',
    position = 'top',
    ...prop
  } = props;
  const [visible, setVisible] = useState(false);

  const refEl = useRef(null);

  function handleOpen() {
    setVisible(true);
  }
  function handleClose() {
    setVisible(false);
    onCancel && onCancel();
  }

  return (
    <>
      <span
        className={clsx(`${prefix}-tooltip-target`, {
          [`${className}-target`]: className,
        })}
        ref={refEl}
      >
        {React.Children.map(children, (item) => {
          return (
            item &&
            React.cloneElement(item, {
              onClick: (event: any) => {
                event.stopPropagation();
                event && event.persist();
                if (trigger == 'click') {
                  setVisible((prevOpen) => {
                    return !prevOpen;
                  });
                }
              },
              onMouseOver: (event: any) => {
                event.stopPropagation();
                event && event.persist();
                if (trigger == 'hover') {
                  handleOpen();
                }
              },
              onMouseOut: (event: any) => {
                event.stopPropagation();
                event && event.persist();
                if (trigger == 'hover') {
                  handleClose();
                }
              },
              onFocus: (value: any, event: any) => {
                event.stopPropagation();
                event && event.persist();
                if (trigger == 'focus') {
                  handleOpen();
                }
              },
              onBlur: (value: any, event: any) => {
                event.stopPropagation();
                event && event.persist();
                if (trigger == 'focus') {
                  handleClose();
                }
              },
            })
          );
        })}
      </span>
      <Popup
        onClose={() => {
          setVisible(false);
          onCancel && onCancel();
        }}
        visible={visible}
        refEl={refEl}
        position={position}
        trigger={trigger}
        className={clsx({
          [`${className}-popup`]: className,
        })}
      >
        <Content {...props} visible={visible} />
      </Popup>
    </>
  );
}

export default Tooltip;
