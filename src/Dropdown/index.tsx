import React, { useEffect, useState, useRef, useMemo, ReactNode } from 'react';
import ReactDOM from 'react-dom';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon, Button, Tree, Popup } from '../index';
import { getOffsetLeft, getOffsetTop, findKey } from '../_util';

export interface DropdownProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;
  style?: Object;
  children?: ReactNode;

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

  scrollRef?: any;

  target?: any;
}

function Select(props: DropdownProps) {
  const {
    className,
    placeholder,
    disabled,
    onChange,
    onCancel,
    close,
    multiple,
    scrollRef,
    ...prop
  } = props;

  const [value, setValue] = useState(props.value || '');
  const [visible, setVisible] = useState(false);

  const refEl = useRef(null);

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
      className={clsx(className, `${prefix}-select-target`, {
        [`${prefix}-select-target-disabled`]: disabled,
        [`${prefix}-select-target-visible`]: visible,
        [`${prefix}-select-placeholder`]: !value,
      })}
      ref={refEl}
    >
      <div
        className={clsx(`${prefix}-select-target-content`, {})}
        onClick={(event) => {
          event.persist();
          if (disabled) return;
          setVisible(true);
          return false;
        }}
      >
        <SelectValue value={value} {...props} />
      </div>
      {value && value != undefined && close ? (
        <div
          onClick={() => setValue(null)}
          className={clsx(`${prefix}-select-target-close`, {})}
        >
          <Icon name="shibai" size={14} />
        </div>
      ) : (
        <div className={clsx(`${prefix}-select-target-arrow`, {})}>
          <Icon name="xuanzexiala" size={14} />
        </div>
      )}
      <Popup
        onClose={() => {
          setVisible(false);
          onCancel && onCancel();
        }}
        scrollRef={scrollRef}
        targetHidden={false}
        visible={visible}
        refEl={refEl}
        position={'bottom-left'}
        trigger={'click'}
        className={clsx(`${prefix}-select-popup`, {
          [`${className}-popup`]: className,
        })}
      >
        <SelectContent
          {...props}
          className={clsx({ [`${className}-warp`]: className })}
          target={refEl}
          value={value}
          onCancel={() => {
            setVisible(false);
            onCancel && onCancel();
          }}
          onChange={(v: any) => {
            if (!multiple) {
              setVisible(false);
            }
            handleOnChange(v);
          }}
        />
      </Popup>
    </div>
  );
}

function SelectContent(props: DropdownProps) {
  const {
    className,
    options,
    value,
    multiple,
    onChange,
    onCancel,
    target,
    ...prop
  } = props;

  const refEl = useRef<any>(null);

  function handleClick(e: any) {
    if (!refEl.current) return;
    if (!ReactDOM.findDOMNode(refEl.current)?.contains(e.target)) {
      handleCancel(e);
    }
  }

  useEffect(() => {
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
    <div className={clsx(`${prefix}-select-warp`, className)} ref={refEl}>
      <div
        className={clsx(`${prefix}-select`, {})}
        style={{
          minWidth: target.current.offsetWidth,
        }}
      >
        <div className={clsx(`${prefix}-select-body`, {})}>
          {multiple ? (
            <Tree
              checkable={!multiple}
              onCheck={(v: any) => {
                handleChange(v);
              }}
              dataSource={options}
              rowSelection={{
                selectedRowKeys: value,
                onChange: (key: any) => {
                  handleChange(key);
                },
              }}
              rowTitle="label"
              rowKey="value"
            />
          ) : (
            <Tree
              checkable={!multiple}
              onCheck={(v: any) => {
                handleChange(v);
              }}
              dataSource={options}
              rowTitle="label"
              rowKey="value"
            />
          )}
        </div>
      </div>
      <div
        className={clsx(`${prefix}-select-mask`, {})}
        onClick={handleCancel}
      ></div>
    </div>
  );
}

function SelectValue(props: DropdownProps) {
  const {
    options,
    value,
    placeholder,
    onChange,
    onCancel,
    target,
    multiple,
    ...prop
  } = props;
  if (value) {
    if (multiple) {
      if (value.length > 0) {
        return value.map(
          (item: any, index: any) =>
            findKey(options, item).label +
            (index + 1 < value.length ? '，' : ''),
        );
      }
    } else {
      if (value !== undefined && value !== null) {
        return findKey(options, value).label;
      }
    }
  }
  if (placeholder) {
    return placeholder;
  }
  return '请选择';
}

export default Select;
