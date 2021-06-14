import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon, Button } from '../index';
import { getOffsetLeft, getOffsetTop } from '../_util';

interface SelectProps {
  /**
   * @description      图标的样式名
   * @default           -
   */
  className?: string;
}

var popup;

// 挂载弹窗
function handleRender(props) {
  ReactDom.render(<SelectContent {...props} />, popup);
}

// 首次挂载弹窗
function handleAppendRender(props) {
  popup = document.createElement('div');
  document.body.appendChild(popup);
  handleRender(props);
}

// 卸载弹窗
function handleUnRender(props) {
  if (popup) ReactDom.unmountComponentAtNode(popup);
}

function Select(props: SelectProps) {
  const {
    title,
    children,
    placeholder,
    disabled,
    onChange,
    onCancel,
    close,
    ...prop
  } = props;

  const [value, setValue] = useState(props.value);

  function handleOnChange(e) {
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
        [`${prefix}-select-placeholder`]: value === undefined || value === null,
      })}
    >
      <div
        onClick={(event) => {
          if (disabled) return;
          handleAppendRender({
            ...props,
            value,
            onChange: handleOnChange,
            event,
          });
        }}
        className={clsx({
          [`${prefix}-select-target-content`]: true,
        })}
      >
        <SelectValue value={value} {...props} />
      </div>
      {close && <Icon onClick={() => setValue(null)} name="sk-order" />}
    </div>
  );
}

function SelectContent(props: SelectProps) {
  const {
    options,
    multiple,
    value,
    children,
    onChange,
    onCancel,
    event,
    ...prop
  } = props;

  function handleCancel(e) {
    handleUnRender();
    onCancel ? onCancel(e) : null;
  }

  function handleChange(e) {
    handleUnRender();
    onChange ? onChange(e) : null;
  }

  return (
    <div
      className={clsx({
        [`${prefix}-select-warp`]: true,
      })}
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

function SelectValue(props) {
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
