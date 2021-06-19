import React from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

interface InputProps {
  /**
   * @description      样式命
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
   * @description      Input的尺寸
   * @default           -
   */
  label?: string;

  /**
   * @description      Input的尺寸
   * @default           -
   */
  required?: string;

  /**
   * @description      Input的尺寸
   * @default           -
   */
  horizontal?: string;

  /**
   * @description      Input的尺寸
   * @default           -
   */
  component?: string;

  /**
   * @description      Input的尺寸
   * @default           -
   */
  size?: string;
}

function Input(props: InputProps) {
  const { label, required, horizontal, component, ...prop } = props;
  return (
    <div
      className={clsx({
        [`${prefix}-input`]: true,
        horizontal: horizontal,
      })}
    >
      <div
        className={clsx({
          label: true,
        })}
      >
        {required && <span className="label-required">*</span>}
        {label}
      </div>
      <div className="content">
        <input type="text" placeholder="请输入" />
      </div>
    </div>
  );
}

export default Input;
