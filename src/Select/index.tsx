import React, { useEffect, useState, useRef, useMemo, ReactNode } from 'react';
import ReactDOM from 'react-dom';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon, Button, Tree, Popup } from '../index';
import { getOffsetLeft, getOffsetTop, findKey } from '../_util';

export interface SelectProps {
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

function Select(props: SelectProps) {
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

  const [value, setValue] = useState(props.value || multiple ? [] : null);
  const [visible, setVisible] = useState(false);

  const refEl = useRef(null);

  function handleOnChange(e: any) {
    setValue(e);
    if (onChange) onChange(e);
  }

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const isPlaceholder = useMemo(() => {
    return value === undefined || value === null || JSON.stringify(value) === '[]';
  }, [value]);

  return (
    <div
      className={clsx(className, `${prefix}-select-target`, {
        [`${prefix}-select-target-disabled`]: disabled,
        [`${prefix}-select-target-visible`]: visible,
        [`${prefix}-select-placeholder`]: isPlaceholder,
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
        <SelectValue {...props} value={value} />
      </div>
      {value && value != undefined && close ? (
        <div
          onClick={() => handleOnChange(null)}
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

function SelectContent(props: SelectProps) {
  const { className, options, value, multiple, onChange, onCancel, target, ...prop } = props;

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
          {(!options || options.length == 0) && (
            <div className={clsx(`${prefix}-select-noData`, {})}>暂无数据</div>
          )}
          {options && multiple && (
            <Tree
              checkable={!multiple}
              onCheck={(v: any) => {
                handleChange(v);
              }}
              dataSource={options}
              rowSelection={{
                selectedRowKeys: value as Array<Number | String>,
                onChange: (key: any) => {
                  handleChange(key);
                },
              }}
              rowTitle="label"
              rowKey="value"
            />
          )}

          {options && !multiple && (
            <Tree
              checkable={!multiple}
              onCheck={(v: any) => {
                handleChange(v);
              }}
              value={value}
              dataSource={options}
              rowTitle="label"
              rowKey="value"
            />
          )}
        </div>
      </div>
      <div className={clsx(`${prefix}-select-mask`, {})} onClick={handleCancel}></div>
    </div>
  );
}

function SelectValue(props: SelectProps) {
  const { options, value, placeholder, onChange, onCancel, target, multiple, ...prop } = props;
  if (value !== undefined && value !== '' && value !== null) {
    if (multiple) {
      if (value.length > 0) {
        return value.map((item: any, index: any) => {
          let itemData = findKey(options, item);
          if (itemData && itemData.label) {
            return itemData.label + (index + 1 < value.length ? '，' : '');
          }
          return '';
        });
      }
    } else {
      if (value !== undefined && value !== null) {
        let itemData = findKey(options, value);
        if (itemData && itemData.label) {
          return itemData.label;
        }
        return '';
      }
    }
  }
  if (placeholder) {
    return placeholder;
  }
  return '请选择';
}

export default Select;
