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
   * @description      Radio更改事件
   * @default           -
   */
  onChange?: Function;

  /**
   * @description      Radio的尺寸
   * @default           -
   */
  size?: string;

  /**
   * @description      是否选中
   * @default           false
   */
  checked?: boolean;
}

function Radio(props: RadioProps) {
  const { type, icon, disabled, children, onChange, size, ...prop } = props;
  const [checked, setChecked] = useState(props.checked || false);

  function handleClick(e: any) {
    if (!disabled) {
      setChecked(e.target.checked);
      if (onChange) onChange(e.target.checked);
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
