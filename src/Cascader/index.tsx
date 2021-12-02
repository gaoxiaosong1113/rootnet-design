import React, { useEffect, useState, useRef, useMemo, ReactNode } from 'react';
import ReactDOM from 'react-dom';

import clsx from 'clsx';

import { prefix } from '../config';

import { Icon, Button, Tree, Popup } from '../index';
import { getOffsetLeft, getOffsetTop, findKey } from '../_util';

import './index.less';

export interface CascaderProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;
  style?: Object;
  children?: ReactNode;

  /**
   * @description      cascader 提示
   * @default           -
   */
  placeholder?: string;

  /**
   * @description      禁用 cascader
   * @default           -
   */
  disabled?: boolean;

  /**
   * @description      cascader 值更改
   * @default           -
   */
  onChange?: any;

  /**
   * @description      取消 cascader 下拉
   * @default           -
   */
  onCancel?: any;

  /**
   * @description      是否显示删除按钮
   * @default           -
   */
  close?: any;

  /**
   * @description      cascader 的值
   * @default           -
   */
  value?: any;

  /**
   * @description      cascader 选项
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

function Cascader(props: CascaderProps) {
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
  const oldValue = useRef<any>(null);
  const refSelect = useRef(null);

  function handleOnChange(data: any) {
    oldValue.current = data;
    setValue(data?.label || data);
    onChange?.(data?.value || data, data?.label || data);
  }

  useEffect(() => {
    const newData = {
      value: [],
      label: [],
      childrens: [],
    } as any;
    let nextFindData: any = [];

    props.value?.forEach((item: any) => {
      let filterData = findData(nextFindData.length > 0 ? nextFindData : props.options, item);
      nextFindData = filterData.nextFindData;
      newData.value.push(filterData.value);
      newData.label.push(filterData.label);
      newData.childrens.push(filterData.children);
    });

    setValue(newData.label);
    if (newData.childrens.length === 0) {
      newData.childrens.push(props.options);
      oldValue.current = newData;
    } else {
      oldValue.current = newData;
    }
  }, [props.value, props.options]);

  function findData(data: Array<any>, key: any) {
    let val: any = {
      value: '',
      label: '',
      children: [],
      nextFindData: [],
    };
    function find(loopData: any) {
      loopData.map((item: any) => {
        if (item.value === key) {
          val.label = item.label;
          val.value = item.value;
          val.children = loopData;
          val.nextFindData = item.children;
        }
      });
    }
    find(data);
    return val;
  }

  const isPlaceholder = useMemo(() => {
    return value === undefined || value === null || JSON.stringify(value) === '[]';
  }, [value]);

  return (
    <div
      className={clsx(className, `${prefix}-cascader-target`, {
        [`${prefix}-cascader-target-disabled`]: disabled,
        [`${prefix}-cascader-target-visible`]: visible,
        [`${prefix}-cascader-placeholder`]: isPlaceholder,
      })}
      ref={refSelect}
    >
      <div
        className={clsx(`${prefix}-cascader-target-content`, {})}
        onClick={(event) => {
          event.persist();
          if (disabled) return;
          setVisible(!visible);
          return false;
        }}
      >
        <CascaderValue {...props} value={value} />
      </div>
      {value && value != undefined && value.length > 0 && close ? (
        <div
          onClick={() => handleOnChange(null)}
          className={clsx(`${prefix}-cascader-target-close`, {})}
        >
          <Icon name="shibai" size={14} />
        </div>
      ) : (
        <div className={clsx(`${prefix}-cascader-target-arrow`, {})}>
          <Icon name="xuanzexiala" size={14} />
        </div>
      )}

      <Popup
        position="bottom-left"
        refEl={refSelect}
        visible={visible}
        trigger="click"
        onClose={() => {}}
      >
        <CascaderPopup
          {...props}
          value={oldValue}
          onChange={(value: any) => {
            setVisible(false);
            handleOnChange(value);
          }}
          onCancel={() => {
            setVisible(false);
            onCancel?.();
          }}
        />
      </Popup>
    </div>
  );
}

function CascaderPopup(props: CascaderProps) {
  const { options, onChange, onCancel, value } = props;
  const [regionData, setRegionData] = useState({
    value: [],
    label: [],
    childrens: [options],
  } as any);

  const refEl = useRef<any>(null);

  useEffect(() => {
    if (value.current) {
      setRegionData(value.current);
    } else {
      setRegionData({
        value: [],
        label: [],
        childrens: [options],
      });
    }
  }, [value]);

  const onCheckedHandel = (item: any, e: any, val: any) => {
    let copyRegionData = JSON.parse(JSON.stringify(regionData));

    if (item.children) {
      if (copyRegionData.value[val] + '') {
        copyRegionData.value.splice(val);
        copyRegionData.value[val] = item.value;
        copyRegionData.label.splice(val);
        copyRegionData.label[val] = item.label;

        copyRegionData.childrens.splice(val + 1);
        copyRegionData.childrens[val + 1] = item.children;
      } else {
        copyRegionData.value.push(item.value);
        copyRegionData.label.push(item.label);
        copyRegionData.childrens.push(item.children);
      }
    } else {
      if (copyRegionData.value[val] + '') {
        copyRegionData.value.splice(val);
        copyRegionData.value[val] = item.value;
        copyRegionData.label.splice(val);
        copyRegionData.label[val] = item.label;
      } else {
        copyRegionData.value.push(item.value);
        copyRegionData.label.push(item.label);
      }
      copyRegionData.childrens.splice(val + 1);
      onChange(copyRegionData);
    }

    setRegionData(copyRegionData);
  };

  function handleClick(e: any) {
    if (!refEl.current) return;
    if (!ReactDOM.findDOMNode(refEl.current)?.contains(e.target)) {
      onCancel();
    }
  }

  useEffect(() => {
    document.body.addEventListener('click', handleClick);
    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className={clsx(`${prefix}-cascader-menus`, {})} ref={refEl}>
      {regionData.childrens.map((element: any, i: any) => {
        return (
          <ul className={clsx(`${prefix}-cascader-menu`, {})} key={i}>
            {element.map((item: any, index: any) => {
              return (
                <li
                  className={clsx(`${prefix}-cascader-menu-item`, {
                    [`${prefix}-cascader-menu-item-active`]: regionData.value[i] == item.value,
                  })}
                  key={index}
                  onClick={(e) => onCheckedHandel(item, e, i)}
                >
                  <span className={clsx(`${prefix}-cascader-menu-item-content`, {})}>
                    {item.label}
                  </span>
                  {item.children && <Icon size={15} name="xuanzeyou" />}
                </li>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
}

function CascaderValue(props: CascaderProps) {
  const { options, value, placeholder, onChange, onCancel, target, multiple, ...prop } = props;

  if (value !== null && value?.length > 0) {
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
        return value.join('/');
      }
    }
  }
  if (placeholder) {
    return placeholder;
  }
  return '请选择';
}

export default Cascader;
