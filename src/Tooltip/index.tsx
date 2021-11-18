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
  children: any;

  /**
   * @description      主体内容
   * @default           -
   */
  content: any;

  /**
   * @description      关闭回调
   * @default           -
   */
  onCancel?: Function;

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

  /**
   * @description      禁用弹出层
   * @default           false
   */
  disable?: boolean;

  /**
   * @description      箭头将指向目标元素的中心
   * @default           false
   */
  arrowPointAtCenter?: boolean;
}

function Content(props: any) {
  const { className, style, content, children, visible, position = 'top', ...prop } = props;

  return (
    <div
      className={clsx(`${prefix}-tooltip-warp`, {
        [`${className}-warp`]: className,
      })}
    >
      <div
        className={clsx(`${prefix}-tooltip`, {
          // [`${prefix}-tooltip-${position}`]: position,
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
    disable = false,
    arrowPointAtCenter = false,
    ...prop
  } = props;
  const [visible, setVisible] = useState(false);

  const refEl = useRef(null);

  useEffect(() => {
    if (disable) {
      setVisible(false);
    }
  }, [disable]);

  function handleOpen() {
    if (disable) return;
    setVisible(true);
  }
  function handleClose() {
    if (disable) return;
    setVisible(false);
    onCancel && onCancel();
  }

  function handleClick() {
    if (disable) return;
    setVisible((prevOpen) => {
      return !prevOpen;
    });
  }

  return (
    <>
      <span
        className={clsx(`${prefix}-tooltip-target`, {
          [`${className}-target`]: className,
        })}
        ref={refEl}
        onMouseOver={(event: any) => {
          if (trigger == 'hover') {
            handleOpen();
          }
        }}
        onMouseOut={(event: any) => {
          if (trigger == 'hover') {
            handleClose();
          }
        }}
      >
        {React.Children.map(children, (item: any) => {
          return (
            item &&
            React.cloneElement(item, {
              onClick: (event: any) => {
                // event.stopPropagation();
                event && event.persist();
                item.props.onClick && item.props.onClick(event);
                if (trigger == 'click') {
                  handleClick();
                }
              },
              // onMouseOver: (event: any) => {
              //   // event.stopPropagation();
              //   event && event.persist();
              //   item.props.onMouseOver && item.props.onMouseOver(event);
              //   if (trigger == 'hover') {
              //     handleOpen();
              //   }
              // },
              // onMouseOut: (event: any) => {
              //   // event.stopPropagation();
              //   event && event.persist();
              //   item.props.onMouseOut && item.props.onMouseOut(event);
              //   if (trigger == 'hover') {
              //     handleClose();
              //   }
              // },
              onFocus: (value: any, event: any) => {
                // event.stopPropagation();
                event && event.persist();
                item.props.onFocus && item.props.onFocus(event);
                if (trigger == 'focus') {
                  handleOpen();
                }
              },
              onBlur: (value: any, event: any) => {
                // event.stopPropagation();
                event && event.persist();
                item.props.onBlur && item.props.onBlur(event);
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
        arrowPointAtCenter={arrowPointAtCenter}
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
