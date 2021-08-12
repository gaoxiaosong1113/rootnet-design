// 引入react依赖
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import ReactDOM from 'react-dom';

// 引入第三方依赖
import clsx from 'clsx';

// 引入样式
import './index.less';

// 引入配置文件
import { prefix } from '../config';

// 引入组件
import { Icon, Image } from '../index';

// 引入工具类
import { uuid } from '../_util';

export interface EditorProps {
  className?: string;
  style?: Object;
  /**
   * @description      数据
   * @default           -
   */
  data?: string;

  /**
   * @description      配置项
   * @default           -
   */
  config?: Object;

  /**
   * @description      是否禁用
   * @default           -
   */
  disabled?: boolean;

  /**
   * @description      onChange
   * @default           -
   */
  onChange?: Function;

  /**
   * @description      onBlur
   * @default           -
   */
  onBlur?: Function;

  /**
   * @description      onFocus
   * @default           -
   */
  onFocus?: Function;
}

function HtmlEditor(props: EditorProps) {
  const {
    className,
    style,
    data,
    config,
    disabled,
    onChange,
    onBlur,
    onFocus,
  } = props;

  function handleChange(event: any, editor: any) {
    if (onChange) {
      const data = editor.getData();
      onChange(data);
    }
  }
  function handleBlur(event: any, editor: any) {
    if (onBlur) {
      const data = editor.getData();
      onBlur(data);
    }
  }
  function handleFocus(event: any, editor: any) {
    if (onFocus) {
      const data = editor.getData();
      onFocus(data);
    }
  }
  return (
    <div className={clsx('rootnet-htmleditor', className)} style={style}></div>
  );
}

export function HtmlViewer(props: any) {
  return (
    <div
      className={clsx('rootnet-htmlviewer ck-content', props.className)}
      style={props.style}
      dangerouslySetInnerHTML={{ __html: props.value }}
    ></div>
  );
}

HtmlEditor.HtmlViewer = HtmlViewer;

export default HtmlEditor;
