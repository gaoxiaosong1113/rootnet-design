import React, { useEffect, useState } from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

interface RadioProps {
  /**
   * @description      图标的样式名
   * @default           -
   */
  className?: string;

  /**
   * @description      按钮的类型
   * @default           -
   */
  type?: string;

  /**
   * @description      需要显示的图标
   * @default           -
   */
  icon?: string;

  /**
   * @description      是否禁用按钮
   * @default           false
   */
  disabled?: boolean;

  children?: React.ReactChild;

  /**
   * @description      Radio点击事件
   * @default           -
   */
  onClick?: Function;

  /**
   * @description      Radio左右的间隔
   * @default           -
   */
  interval?: string;

  /**
   * @description      Radio的尺寸
   * @default           -
   */
  size?: string;
}

function Radio(props: RadioProps) {
  const { type, icon, disabled, children, onChage, size, ...prop } = props;
  const [checked, setChecked] = useState(props.checked || null);

  function handleClick(e) {
    if (!disabled) {
      setChecked(e.target.checked);
      if (onChage) onChage(e.target.checked);
    }
  }

  useEffect(() => {
    setChecked(checked);
  }, [props.checked]);

  return (
    <div
      className={clsx({
        [`${prefix}-radio`]: true,
        [`${prefix}-radio-default`]: !type && !disabled,
        [`${prefix}-radio-${type}`]: type,
        [`${prefix}-radio-disabled`]: disabled,
        [`${prefix}-radio-${size}`]: size,
        [`${prefix}-radio-checked`]: checked,
      })}
      onClick={handleClick}
      {...prop}
    >
      <input type="radio" checked={checked} onChange={handleClick} />
      <span
        className={clsx({
          [`${prefix}-radio-icon`]: true,
        })}
      ></span>
      <span
        className={clsx({
          [`${prefix}-radio-content`]: true,
        })}
      >
        {children}
      </span>
    </div>
  );
}

export default Radio;
