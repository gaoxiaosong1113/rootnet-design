import React, { useEffect, useMemo, useState, useContext, ReactNode } from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

import { GroupContext } from './Group';

export interface RadioProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;
  style?: Object;
  children?: ReactNode;

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

  /**
   * @description      Radio 更改事件
   * @default           -
   */
  onChange?: Function;

  /**
   * @description      是否选中
   * @default           -
   */
  checked?: boolean;

  /**
   * @description      Radio 的值
   * @default           -
   */
  value?: string;

  /**
   * @description      Radio的尺寸
   * @default           -
   */
  size?: string;

  Group?: any;
}

function Radio(props: RadioProps) {
  const { className, type, icon, disabled, children, onChange, size, ...prop } = props;
  const [checked, setChecked] = useState(props.checked || false);
  const [value, setValue] = useState(props.value || '');

  const radioGroup = useContext(GroupContext);

  function handleChange(e: any) {
    if (!disabled) {
      setChecked(e.target.checked);
      if (onChange) {
        onChange(e.target.checked, value);
      }
    }
  }

  const radioProps: any = {
    onChange: handleChange,
    checked,
  };

  // 被group包裹走group的props
  if (JSON.stringify(radioGroup) !== '{}') {
    radioProps.onChange = (e: any) => {
      if (!disabled) {
        setChecked(e.target.checked);
        if (radioGroup.onChange) {
          radioGroup.onChange(e.target.checked, value);
        }
      }
    };
    radioProps.name = radioGroup.name;
    radioProps.checked = radioGroup.checked === props.value;
    radioProps.disabled = props.disabled || radioGroup.disabled;
  }

  useEffect(() => {
    setChecked(props.checked || false);
  }, [props.checked]);

  useEffect(() => {
    if (props.value !== undefined) {
      setValue(props.value || '');
    }
  }, [props.value]);

  return (
    <label
      className={clsx(className, `${prefix}-radio`, {
        [`${prefix}-radio-default`]: !type && !disabled,
        [`${prefix}-radio-${type}`]: type,
        [`${prefix}-radio-disabled`]: disabled,
        [`${prefix}-radio-${size}`]: size,
        [`${prefix}-radio-checked`]: radioProps.checked,
      })}
      // onClick={handleChange}
      {...prop}
    >
      <input type="radio" {...radioProps} />
      <span className={clsx(`${prefix}-radio-icon`, {})}></span>
      <span className={clsx(`${prefix}-radio-content`, {})}>{children}</span>
    </label>
  );
}

export default Radio;
