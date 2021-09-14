// 引入react依赖
import React, {
  useEffect,
  useState,
  ReactNode,
  useImperativeHandle,
} from 'react';
import ReactDOM from 'react-dom';

// 引入第三方依赖

import clsx from 'clsx';

// 引入样式
import './index.less';

// 引入配置文件
import { prefix } from '../config';

// 引入组件
import { Icon } from '../index';

export interface SwitchProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;
  style?: Object;
  children?: ReactNode;

  /**
   * @description       指定当前是否选中
   * @default           false
   */
  checked?: boolean;

  /**
   * @description       选中时的内容
   * @default           -
   */
  checkedChildren?: React.ReactNode;

  /**
   * @description       	初始是否选中
   * @default           false
   */
  defaultChecked?: boolean;

  /**
   * @description       	是否禁用
   * @default           false
   */
  disabled?: boolean;

  /**
   * @description       加载中的开关
   * @default           false
   */
  loading?: boolean;

  /**
   * @description       开关大小，可选值：default small
   * @default           default
   */
  size?: string;

  /**
   * @description       非选中时的内容	ReactNode
   * @default           -
   */
  unCheckedChildren?: React.ReactNode;

  /**
   * @description       变化时回调函数	function(checked: boolean, event: Event)
   * @default           -
   */
  onChange?: Function;

  /**
   * @description       	点击时回调函数	function(checked: boolean, event: Event)
   * @default           -
   */
  onClick?: Function;
}

function Switch(props: SwitchProps, ref: any) {
  const {
    className,
    checked,
    checkedChildren,
    defaultChecked,
    disabled,
    loading,
    size,
    unCheckedChildren,
    onChange,
    onClick,
    ...prop
  } = props;

  const [innerChecked, setInnerChecked] = useState(defaultChecked);

  useEffect(() => {
    setInnerChecked(checked);
  }, [checked]);

  function handleClick(event: any) {
    if (disabled) return;
    handleChange(event);
    onClick?.(innerChecked, event);
  }

  function handleChange(event: any) {
    if (disabled) return;
    let value = !innerChecked;
    setInnerChecked(value);
    onChange?.(value, event);
  }

  useImperativeHandle(ref, () => ({
    checked: innerChecked,
  }));

  return (
    <button
      className={clsx(className, `${prefix}-switch`, {
        [`${prefix}-switch-${size}`]: size,
        [`${prefix}-switch-checked`]: innerChecked,
        [`${prefix}-switch-disabled`]: disabled,
      })}
      type="button"
      onClick={handleClick}
    >
      <div className={clsx(`${prefix}-switch-handle`)}></div>
      <div className={clsx(`${prefix}-switch-inner`)}>
        {innerChecked ? checkedChildren : unCheckedChildren}
      </div>
    </button>
  );
}

export default React.forwardRef(Switch);
