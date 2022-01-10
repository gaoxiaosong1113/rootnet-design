import React, { useEffect, useState, useRef, useMemo, ReactNode } from 'react';
import ReactDOM from 'react-dom';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon, Button, Tree, Popup, Checkbox } from '../index';
import { getOffsetLeft, getOffsetTop, findKey } from '../_util';

import noData from './noData.svg';

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

  /**
   * @description      开启搜索
   * @default           false
   */
  search?: boolean;

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
    search = false,
    options = [],
    ...prop
  } = props;

  const [value, setValue] = useState(props.value || (multiple ? [] : null));
  const [searchValue, setSearchValue] = useState('');
  const [searchFocus, setSearchFocus] = useState(false);
  const [visible, setVisible] = useState(false);
  const [select, setSelect] = useState(false);

  const refEl = useRef(null);
  const refInput = useRef() as any;
  const popupRef = useRef() as any;

  function handleOnChange(e: any) {
    setValue(e);
    if (onChange) onChange(e);
  }

  const fullOptions = useMemo(() => {
    let allCheck = [] as any;
    if (search && searchValue.length > 0 && options.length > 0) {
      return allCheck.concat(
        options.filter((item) => {
          return item.label.indexOf(searchValue) != -1;
        }),
      );
    }
    return options;
  }, [searchValue, options]);

  useEffect(() => {
    return () => {
      if (search && refInput.current) {
        refInput.current.value = '';
      }
    };
  }, []);

  useEffect(() => {
    setValue(props.value);
    if (!searchFocus) {
      setSearchInputValue(props.value);
    }
    if (multiple) {
      setSelect(props.value && fullOptions.length > 0 && props.value.length >= fullOptions.length);
    }
  }, [props.value]);

  useEffect(() => {
    if (!visible) {
      setSearchInputValue(value);
      if (!getValue()) {
        setSearchValue('');
      }
    }
  }, [visible]);

  const inputPlaceholder = useMemo(() => {
    return SelectValue({
      options: options,
      value,
      placeholder,
      multiple,
    });
  }, [searchFocus, options, value, placeholder, multiple]);

  const isPlaceholder = useMemo(() => {
    return value === '' || value === undefined || value === null || JSON.stringify(value) === '[]';
  }, [value]);

  const setSearchInputValue = (v: any) => {
    if (search && refInput.current) {
      refInput.current.value = SelectValue({
        options: options,
        value: v,
        placeholder,
        multiple,
      });
    }
  };

  const getValue = () => {
    if (value instanceof Array) {
      return value.length > 0;
    }
    return !!value;
  };

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
        {search ? (
          <input
            ref={refInput}
            placeholder={inputPlaceholder}
            onFocus={(e) => {
              if (disabled) return;
              setSearchFocus(true);
              e.target.value = searchValue;
            }}
            onClick={(e) => {}}
            onBlur={() => setSearchFocus(false)}
            onChange={(e) => {
              if (disabled) return;
              setSelect(false);
              handleOnChange(multiple ? [] : null);
              setSearchValue(e.target.value);
            }}
            onKeyDown={(e: any) => {
              if (e.keyCode === 13) {
                e.target.blur();
                setSearchFocus(false);
                setVisible(false);
              }
            }}
          />
        ) : (
          <SelectValue {...props} value={value} />
        )}
      </div>
      {value && getValue() && close ? (
        <div
          onClick={() => {
            if (multiple) {
              setSelect(false);
            }
            if (search) {
              setSearchValue('');
              refInput.current.value = '';
            }
            handleOnChange(multiple ? [] : null);
          }}
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
        disPositionSize={search}
        interval={4}
        scrollRef={scrollRef}
        targetHidden={false}
        visible={visible}
        refEl={refEl}
        ref={popupRef}
        position={'bottom-left'}
        trigger={'click'}
        className={clsx(`${prefix}-select-popup`, {
          [`${className}-popup`]: className,
        })}
      >
        <SelectContent
          {...props}
          options={fullOptions}
          className={clsx({ [`${className}-warp`]: className })}
          target={refEl}
          value={value}
          setSelect={(v: any) => {
            setSelect(v);
            if (v) {
              handleOnChange(fullOptions.map((item: any) => item.value));
            } else {
              handleOnChange([]);
            }
          }}
          select={select}
          onCancel={() => {
            if (!searchFocus) {
              setVisible(false);
              onCancel && onCancel();
            }
          }}
          onChange={(v: any) => {
            if (!multiple) {
              setVisible(false);
            }
            setSelect(v.length >= fullOptions.length);
            handleOnChange(v);
          }}
        />
      </Popup>
    </div>
  );
}

function SelectContent(props: any) {
  const {
    className,
    options,
    value,
    multiple,
    onChange,
    onCancel,
    target,
    search,
    setSelect,
    select,
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
          {search && multiple && options.length > 0 && (
            <div className={clsx(`${prefix}-select-all`, {})}>
              <Checkbox checked={select} onChange={(v: any) => setSelect(v)}>
                全选
              </Checkbox>
            </div>
          )}
          {(!options || options.length == 0) && (
            <div className={clsx(`${prefix}-select-noData`, {})}>
              <img src={noData} alt="" />
              <p>暂无数据</p>
            </div>
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
  const { options, value, placeholder, multiple } = props;
  if (value !== undefined && value !== '' && value !== null) {
    if (multiple) {
      if (value.length > 0) {
        return value
          .map((item: any, index: any) => {
            let itemData = findKey(options, item);
            if (itemData && itemData.label) {
              return itemData.label + (index + 1 < value.length ? '' : '');
            }
            return '';
          })
          .join('，');
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
