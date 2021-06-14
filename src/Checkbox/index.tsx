import React, { useEffect, useState } from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

interface CheckboxProps {
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
   * @description      Checkbox点击事件
   * @default           -
   */
  onClick?: Function;

  /**
   * @description      Checkbox左右的间隔
   * @default           -
   */
  interval?: string;

  /**
   * @description      Checkbox的尺寸
   * @default           -
   */
  size?: string;
}

function Checkbox(props: CheckboxProps) {
  const { type, icon, disabled, children, onChage, size, ...prop } = props;
  const [checked, setChecked] = useState(props.checked || null);

  function handleClick(e) {
    console.log(e);
    if (!disabled) {
      setChecked(e.target.checked);
      if (onChage) onChage(e.target.checked);
    }
  }

  useEffect(() => {
    setChecked(checked);
  }, [props.checked]);

  return (
    <label
      className={clsx({
        [`${prefix}-checkbox`]: true,
        [`${prefix}-checkbox-default`]: !type && !disabled,
        [`${prefix}-checkbox-${type}`]: type,
        [`${prefix}-checkbox-disabled`]: disabled,
        [`${prefix}-checkbox-${size}`]: size,
        [`${prefix}-checkbox-checked`]: checked,
      })}
      // onClick={handleClick}
      {...prop}
    >
      <input type="checkbox" checked={checked} onChange={handleClick} />
      <span
        className={clsx({
          [`${prefix}-checkbox-icon`]: true,
        })}
      ></span>
      <span
        className={clsx({
          [`${prefix}-checkbox-content`]: true,
        })}
      >
        {children}
      </span>
    </label>
  );
}

function loopChildren(children, props) {
  return React.Children.map(children, (item) => {
    console.log(item.type.name == 'Checkbox');
    if (item.type.name == 'Checkbox') {
      return React.cloneElement(item, {
        ...props,
      });
    } else {
      if (item.props.children) {
        return React.cloneElement(item, {
          children: loopChildren(item.props.children),
        });
      }
      return item;
    }
  });
}

function Group(props) {
  const { children, onChange } = props;
  function handleChange(e) {
    console.log(e);
  }
  console.log(loopChildren(children, { onChange: handleChange }));
  return <div>{children}</div>;
}

Checkbox.Group = Group;

export default Checkbox;
