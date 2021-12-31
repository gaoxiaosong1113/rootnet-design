import React, { useEffect, useState, ReactNode, useRef, useImperativeHandle, useMemo } from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

export interface MoneyInputProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;
  style?: Object;
  children?: ReactNode;

  /**
   * @description      需要显示的图标
   * @default           -
   */
  icon?: any;

  /**
   * @description      input 后面需要显示的图标
   * @default           -
   */
  affterIcon?: any;

  /**
   * @description      是否禁用输入框
   * @default           false
   */
  disabled?: boolean;

  /**
   * @description      Input的尺寸
   * @default           -
   */
  size?: string;

  /**
   * @description      提示文字
   * @default           -
   */
  placeholder?: string;

  /**
   * @description      带标签的 input，设置后置标签
   * @default           -
   */
  after?: any;

  /**
   * @description      带标签的 input，设置前置标签
   * @default           ￥
   */
  before?: any;

  /**
   * @description      输入框内容变化时的回调
   * @default           -
   */
  onChange?: Function;

  /**
   * @description      输入框获取焦点的回调
   * @default           -
   */
  onFocus?: Function;

  /**
   * @description      输入框触发事件的回调
   * @default           -
   */
  onInput?: Function;

  /**
   * @description      输入框失去焦点的回调
   * @default           -
   */
  onBlur?: Function;

  /**
   * @description      超出金额校验回调
   * @default           -
   */
  beyondMoney?: Function;

  /**
   * @description      是否显示关闭按钮
   * @default           -
   */
  close?: boolean;

  /**
   * @description      name
   * @default           -
   */
  name?: string;

  /**
   * @description      输入框内容
   * @default           -
   */
  value?: string;

  /**
   * @description      是否默认获取焦点
   * @default           -
   */
  focus?: boolean;

  /**
   * @description      是否设置最金额
   * @default           999999999999
   */
  maxMoney?: number;
}

function MoneyInput(props: MoneyInputProps, ref: any) {
  const {
    style,
    className,
    before = '￥',
    icon,
    onChange,
    onFocus,
    onBlur,
    maxMoney = 999999999999,
    beyondMoney,
    disabled,
    onInput,
    placeholder,
    close,
    ...prop
  } = props;

  const [value, setValue] = useState(props.value || '');
  const [focus, setFocus] = useState(props.focus);

  const refEl = useRef(null) as any;

  const moneyUnit = ['万', '十万', '百万', '千万', '亿', '十亿', '百亿', '千亿', '万亿'];

  useImperativeHandle(ref, () => refEl.current);

  const isTooltip = useMemo(() => {
    let val = parseInt(value);
    return val > 9999;
  }, [value]);

  const formatMoney = useMemo(() => {
    if (!value) return value;
    let intAry = value.split('.');
    let int = intAry[0]
      .split('')
      .reverse()
      .reduce((prev, next, index) => {
        return (index % 3 ? next : next + ',') + prev;
      });

    return int + (intAry[1] ? '.' + intAry[1] : '');
  }, [value]);

  const getMoneyUnit = (money: any) => {
    money = parseInt(money);
    if (money > 9999 && money <= 99999) {
      return moneyUnit[0];
    }
    if (money > 99999 && money <= 999999) {
      return moneyUnit[1];
    }
    if (money > 999999 && money <= 9999999) {
      return moneyUnit[2];
    }
    if (money > 9999999 && money <= 99999999) {
      return moneyUnit[3];
    }
    if (money > 99999999 && money <= 999999999) {
      return moneyUnit[4];
    }
    if (money > 999999999 && money <= 9999999999) {
      return moneyUnit[5];
    }
    if (money > 9999999999 && money <= 99999999999) {
      return moneyUnit[6];
    }
    if (money > 99999999999 && money <= 999999999999) {
      return moneyUnit[7];
    }
    if (money > 999999999999) {
      return moneyUnit[8];
    }
    return '';
  };

  const handleChange = (e: any) => {
    let val = e.target.value;
    let decimal = val.split('.')[1];
    if (decimal && decimal.length > 2) {
      setValue(value);
      beyondMoney?.('最多精确至1分钱');
      return;
    }
    if (typeof maxMoney === 'number' && val > maxMoney) {
      beyondMoney?.('不支持输入金额过', getMoneyUnit(val));
      return;
    }
    setValue(val);
    if (onChange) {
      onChange(val);
    }
  };

  const handleFocus = (e: any) => {
    setFocus(true);
    if (onFocus) {
      onFocus(value, e);
    }
    return false;
  };

  const handleBlur = (e: any) => {
    setFocus(false);
    if (onBlur) {
      onBlur(value, e);
    }
  };
  const handleInput = (e: any) => {
    if (onInput) {
      onInput(value, e);
    }
  };

  useEffect(() => {
    setValue(props.value || '');
  }, [props.value]);

  useEffect(() => {
    setFocus(props.focus);
  }, [props.focus]);

  return (
    <div
      className={clsx(className, `${prefix}-moneyInput`, {
        [`${prefix}-moneyInput-focus`]: focus,
        [`${prefix}-moneyInput-disabled`]: disabled,
      })}
      style={style}
    >
      {before && <div className={clsx(`${prefix}-moneyInput-before`)}>{before}</div>}
      {icon && <div className={clsx(`${prefix}-moneyInput-icon`)}>{icon}</div>}
      <div className={clsx(`${prefix}-moneyInput-content`)}>
        <input
          type={focus ? 'number' : 'text'}
          value={focus ? value : formatMoney}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onInput={handleInput}
          disabled={disabled}
          ref={refEl}
          placeholder={placeholder || '请输入'}
          autoComplete={'off'}
        />
        {isTooltip && (
          <div className={clsx(`${prefix}-moneyInput-tooltip`)}>{getMoneyUnit(value)}</div>
        )}
      </div>
      {value != undefined && close && (
        <div
          onClick={() => {
            refEl.current.value = '';
            setValue('');
            handleChange({ target: refEl.current });
          }}
          className={clsx(`${prefix}-moneyInput-close`, {})}
        >
          <Icon name="shibai" size={14} />
        </div>
      )}
    </div>
  );
}

export default React.forwardRef(MoneyInput);
