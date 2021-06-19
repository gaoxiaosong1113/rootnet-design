import React, { useEffect, useMemo, useState, useContext } from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

import { GroupContext } from './Group';

interface CheckboxProps {
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

  const checkboxGroup = useContext(GroupContext);

  function handleClick(e) {
    if (!disabled) {
      console.log(checked);
      console.log(e.target.checked);
      setChecked(e.target.checked);
      if (onChange) {
        onChange(e.target.checked, value);
      }
    }
  }

  console.log(checked);

  const checkboxProps = {
    onChange: handleClick,
    checked,
  };

  console.log(checkboxProps);

  if (checkboxGroup) {
    checkboxProps.onChange = (...args) => {
      handleClick(...args);
    };
    console.log(checkboxGroup.checked, props.value);
    checkboxProps.name = checkboxGroup.name;
    checkboxProps.checked = checkboxGroup.checked.indexOf(props.value) !== -1;
    checkboxProps.disabled = props.disabled || checkboxGroup.disabled;
  }

  useEffect(() => {
    setChecked(props.checked || false);
  }, [props.checked]);

  useEffect(() => {
    setValue(props.value || '');
  }, [props.value]);

  console.log(checkboxProps);

  return (
    <label
      className={clsx({
        [`${prefix}-checkbox`]: true,
        [`${prefix}-checkbox-default`]: !type && !disabled,
        [`${prefix}-checkbox-${type}`]: type,
        [`${prefix}-checkbox-disabled`]: disabled,
        [`${prefix}-checkbox-${size}`]: size,
        [`${prefix}-checkbox-checked`]: checkboxProps.checked,
      })}
      // onClick={handleClick}
      {...prop}
    >
      <input type="checkbox" {...checkboxProps} />
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

// function loopChildren(children, props, value) {
//   return React.Children.map(children, (item) => {
//     if (item.type.name == 'Checkbox') {
//       return React.cloneElement(item, {
//         ...props,
//         checked: value.indexOf(item.props.value) != -1,
//       });
//     } else {
//       if (item.props.children) {
//         return React.cloneElement(item, {
//           children: loopChildren(item.props.children, props, value),
//         });
//       }
//       return item;
//     }
//   });
// }

export default Checkbox;
