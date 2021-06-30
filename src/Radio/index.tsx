import React, { useEffect, useState } from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

import Group from './Group';
import InternalRadio from './Radio';

interface CompoundedComponent extends React.ForwardRefExoticComponent<any> {
  Group: typeof Group;
}

const Radio = InternalRadio as CompoundedComponent;

Radio.Group = Group;

export default Radio;

// interface RadioProps {
//   /**
//    * @description      类名
//    * @default           -
//    */
//   className?: string;

//   /**
//    * @description      按钮的类型
//    * @default           -
//    */
//   type?: string;

//   /**
//    * @description      需要显示的图标
//    * @default           -
//    */
//   icon?: string;

//   /**
//    * @description      是否禁用按钮
//    * @default           false
//    */
//   disabled?: boolean;

//   children?: React.ReactChild;

//   /**
//    * @description      Radio更改事件
//    * @default           -
//    */
//   onChange?: Function;

//   /**
//    * @description      Radio的尺寸
//    * @default           -
//    */
//   size?: string;

//   /**
//    * @description      是否选中
//    * @default           false
//    */
//   checked?: boolean;

//   value?: boolean;
// }

// function Radio(props: RadioProps) {
//   const { type, icon, disabled, children, onChange, size, ...prop } = props;
//   const [checked, setChecked] = useState(props.checked || false);

//   function handleClick(e: any) {
//     if (!disabled) {
//       console.log(e.target.checked)
//       setChecked(e.target.checked);
//       if (onChange) onChange(e.target.checked);
//     }
//   }

//   useEffect(() => {
//     setChecked(props.checked || false);
//   }, [props.checked]);

//   useEffect(() => {
//     if (props.value !== undefined) {
//       setChecked(props.value || false);
//     }
//   }, [props.value]);

//   return (
//     <label
//       className={clsx({
//         [`${prefix}-radio`]: true,
//         [`${prefix}-radio-default`]: !type && !disabled,
//         [`${prefix}-radio-${type}`]: type,
//         [`${prefix}-radio-disabled`]: disabled,
//         [`${prefix}-radio-${size}`]: size,
//         [`${prefix}-radio-checked`]: checked,
//       })}
//       {...prop}
//     >
//       <input type="radio" checked={checked} onChange={handleClick} />
//       <span
//         className={clsx({
//           [`${prefix}-radio-icon`]: true,
//         })}
//       ></span>
//       <span
//         className={clsx({
//           [`${prefix}-radio-content`]: true,
//         })}
//       >
//         {children}
//       </span>
//     </label>
//   );
// }
