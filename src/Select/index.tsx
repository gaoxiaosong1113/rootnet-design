import React, { useEffect, useState, useRef } from 'react';
import ReactDom from 'react-dom';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon, Button } from '../index';
import { getOffsetLeft, getOffsetTop } from '../_util';

interface SelectProps {
  /**
   * @description      样式命
   * @default           -
   */
  className?: string;

  /**
   * @description      select 提示
   * @default           -
   */
  placeholder?: string;

  /**
   * @description      禁用 select
   * @default           -
   */
  disabled?: boolean;

  /**
   * @description      select 值更改
   * @default           -
   */
  onChange?: any;

  /**
   * @description      取消 select 下拉
   * @default           -
   */
  onCancel?: any;

  /**
   * @description      是否显示删除按钮
   * @default           -
   */
  close?: any;

  /**
   * @description      select 的值
   * @default           -
   */
  value?: any;

  /**
   * @description      select 选项
   * @default           -
   */
  options: Array<any>;

  /**
   * @description      开启多选
   * @default           false
   */
  multiple?: boolean;

  event?: any;
}

function Select(props: SelectProps) {
  const { placeholder, disabled, onChange, onCancel, close, ...prop } = props;

  const [value, setValue] = useState(props.value || '');
  const [open, setOpen] = useState(false);
  const [ev, setEv] = useState<any>();

  function handleOnChange(e: any) {
    // onChange
    setValue(e);
    if (onChange) onChange(e);
  }

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  return (
    <div
      className={clsx({
        [`${prefix}-select-target`]: true,
        [`${prefix}-select-target-disabled`]: disabled,
        [`${prefix}-select-placeholder`]: !value,
      })}
    >
      <div
        onClick={(event) => {
          if (disabled) return;
          console.log(event);
          setOpen(true);
          setEv(event);
          return false;
        }}
        className={clsx({
          [`${prefix}-select-target-content`]: true,
        })}
      >
        <SelectValue value={value} {...props} />
      </div>
      {close && <Icon onClick={() => setValue(null)} name="sk-order" />}
      {open &&
        ReactDom.createPortal(
          <SelectContent
            {...props}
            event={ev}
            onCancel={() => {
              setOpen(false);
              onCancel && onCancel();
            }}
            onChange={(v: any) => {
              setOpen(false);
              handleOnChange(v);
            }}
          />,
          document.body,
        )}
    </div>
  );
}

function SelectContent(props: SelectProps) {
  const { options, multiple, value, onChange, onCancel, event, ...prop } =
    props;

  const refEl = useRef<any>(null);

  useEffect(() => {
    function handleClick(e: any) {
      if (!refEl.current) return;
      if (!ReactDom.findDOMNode(refEl.current)?.contains(e.target)) {
        handleCancel(e);
      }
    }

    document.body.addEventListener('click', handleClick);
    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, []);

  function handleCancel(e: any) {
    onCancel();
  }

  function handleChange(v: any) {
    onChange(v);
  }

  return (
    <div
      className={clsx({
        [`${prefix}-select-warp`]: true,
      })}
      ref={refEl}
    >
      <div
        className={clsx({
          [`${prefix}-select`]: true,
        })}
        style={{
          minWidth: event.target.offsetWidth,
          left: getOffsetLeft(event.target),
          top: getOffsetTop(event.target) + event.target.offsetHeight,
        }}
      >
        <div
          className={clsx({
            [`${prefix}-select-body`]: true,
          })}
        >
          {options.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => handleChange(item.value)}
                className={clsx({
                  [`${prefix}-select-item`]: true,
                  [`${prefix}-select-item-active`]: item.value === value,
                })}
              >
                {multiple}
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
        {/* <div
          className={clsx({
            [`${prefix}-select-footer`]: true,
          })}
        >
          <Button onClick={() => {}}>取消</Button>
          <Button type="primary" onClick={handleChange}>
            确定
          </Button>
        </div> */}
      </div>
      <div
        className={clsx({
          [`${prefix}-select-mask`]: true,
        })}
        onClick={handleCancel}
      ></div>
    </div>
  );
}

function SelectValue(props: SelectProps) {
  const { options, value, placeholder, onChange, onCancel, event, ...prop } =
    props;
  if (value) {
    if (value !== undefined && value !== null) {
      return options.filter((item) => item.value === value)[0].label;
    }
  }
  if (placeholder) {
    return placeholder;
  }
  return '请选择';
}

export default Select;
