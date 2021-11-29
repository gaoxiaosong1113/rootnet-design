// 引入react依赖
import React, { ReactNode, useMemo, useRef, useImperativeHandle } from 'react';
import ReactDOM from 'react-dom';

// 引入第三方依赖

import clsx from 'clsx';

// 引入样式
import './index.less';

// 引入配置文件
import { prefix, primaryColor, fullBrightColor } from '../config';

// 引入组件
import { Icon } from '../index';

export interface StepsProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;
  style?: Object;
  children?: any;

  /**
   * @description      节点样式的类型
   * @default           default
   */
  type?: 'default' | 'dot' | 'navigation';

  /**
   * @description      显示方向
   * @default           horizontal
   */
  direction?: 'vertical' | 'horizontal';

  /**
   * @description      当前步骤数
   * @default           1
   */
  current?: number;

  /**
   * @description      点击步骤回调
   * @default           -
   */
  onChange?: string;

  /**
   * @description      Steps的尺寸
   * @default           -
   */
  size?: string;

  /**
   * @description      是否自定义节点前内容
   * @default           false
   */
  customDotStatus?: Boolean;
}

export interface StepProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;
  style?: Object;
  index?: any;
  current?: any;
  type?: any;
  onClick?: Function;
  direction?: any;
  customDotStatus?: Boolean;

  /**
   * @description      onChange 回调中作为参数。
   * @default           -
   */
  id?: string;

  /**
   * @description      当前节点状态 未设置时根据index和current判断
   * @default           -
   */
  status?: 'wait' | 'process' | 'finish' | 'error';

  /**
   * @description      节点标题
   * @default           -
   */
  title?: string;

  /**
   * @description      节点描述
   * @default           -
   */
  description?: string;

  /**
   * @description      当前节点被被禁用
   * @default           false
   */
  disabled?: boolean;

  /**
   * @description      自定义节点icon
   * @default           -
   */
  icon?: any;

  /**
   * @description      自定义节点前内容，如自定义必须将customDotStatus改为true
   * @default           -
   */
  customDot?: any;
}

function Steps(props: StepsProps) {
  const {
    className,
    style,
    children,
    type = 'default',
    size,
    current,
    onChange,
    direction = 'horizontal',
    customDotStatus = false,
    ...prop
  } = props;

  return (
    <div
      className={clsx(className, `${prefix}-steps`, {
        [`${prefix}-steps-${direction}`]: direction,
        [`${prefix}-steps-${type}`]: type,
        [`${prefix}-steps-click`]: typeof onChange === 'function',
        [`${prefix}-steps-${size}`]: size,
      })}
      style={style}
    >
      {React.Children.map(children, (item: any, index) => {
        index += 1;
        return (
          item &&
          React.cloneElement(item, {
            type,
            index,
            current,
            direction,
            customDotStatus,
            onClick: onChange,
          })
        );
      })}
    </div>
  );
}

export function Item(props: StepProps, ref: any) {
  const {
    className,
    style,
    id,
    title,
    description,
    status,
    index,
    current,
    disabled,
    onClick,
    type,
    icon,
    direction,
    customDotStatus,
    customDot,
  } = props;

  const refEl = useRef(null);

  const currentStatus = useMemo(() => {
    if (status) return status;
    if (current < index) return 'wait';
    if (current === index) return 'process';
    if (current > index) return 'finish';
    return 'error';
  }, [index, current]);

  useImperativeHandle(ref, () => refEl.current);

  function renderIconNode(currentStatus: any) {
    if (type === 'dot') return null;

    let iconContent = index;

    if (icon) {
      iconContent = icon;
    } else if (currentStatus === 'finish') {
      iconContent = <Icon color={primaryColor} name="zhengque1" />;
    } else if (currentStatus === 'error') {
      iconContent = <Icon color={fullBrightColor} name="cuowu1" />;
    }

    return <div className={`${prefix}-step-item-icon-i`}>{iconContent}</div>;
  }

  const iconNode = renderIconNode(currentStatus);

  function handelStep() {
    onClick && !disabled && index !== current && onClick(index, id);
  }

  return (
    <div
      ref={refEl}
      className={clsx(className, `${prefix}-step-item`, `${prefix}-step-item-${currentStatus}`, {
        [`${prefix}-step-item-disabled`]: disabled,
        [`${prefix}-step-item-active`]: index === current,
      })}
      style={style}
    >
      {customDotStatus && <div style={{ minWidth: '24px' }}>{customDot}</div>}
      <div style={{ display: 'flex', position: 'relative' }}>
        {direction === 'vertical' && <div className={`${prefix}-step-item-line`}></div>}
        <div className={`${prefix}-step-item-icon`}>{iconNode}</div>
        <div className={`${prefix}-step-item-content`} onClick={handelStep}>
          <div className={`${prefix}-step-item-title`}>{title}</div>
          {description && <div className={`${prefix}-step-item-description`}>{description}</div>}
        </div>
      </div>
    </div>
  );
}

Steps.Item = React.forwardRef(Item);

export default Steps;
