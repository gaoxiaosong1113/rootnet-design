import React, { useEffect, useMemo, useState } from 'react';

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
  const { type, icon, disabled, children, onChange, size, ...prop } = props;
  const [checked, setChecked] = useState(props.checked || false);
  const [value, setValue] = useState(props.value || '');

  function handleClick(e) {
    if (!disabled) {
      setChecked(e.target.checked);
      if (onChange) {
        onChange(e.target.checked, value);
      }
    }
  }

  useEffect(() => {
    setChecked(props.checked || false);
  }, [props.checked]);

  useEffect(() => {
    setValue(props.value || '');
  }, [props.value]);

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

function loopChildren(children, props, value) {
  return React.Children.map(children, (item) => {
    if (item.type.name == 'Checkbox') {
      return React.cloneElement(item, {
        ...props,
        checked: value.indexOf(item.props.value) != -1,
      });
    } else {
      if (item.props.children) {
        return React.cloneElement(item, {
          children: loopChildren(item.props.children, props, value),
        });
      }
      return item;
    }
  });
}

function Group(props) {
  const { children, onChange } = props;

  const [checked, setChecked] = useState(props.checked || []);

  function handleChange(e, v) {
    let findIndex = checked.indexOf(v);
    if (!e && findIndex != -1) {
      checked.splice(findIndex, 1);
    } else {
      checked.push(v);
    }
    setChecked([...checked]);
    if (onChange) {
      onChange([...checked]);
    }
  }

  const child = useMemo(() => {
    // 临时解决方案，最好使用context上下文解决传递值的问题
    return loopChildren(children, { onChange: handleChange }, props.checked);
  }, [props.checked]);

  return <div>{child}</div>;
}

Checkbox.Group = Group;

export default Checkbox;
