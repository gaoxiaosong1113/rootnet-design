// 引入react依赖
import React, {
  useCallback,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import ReactDOM from 'react-dom';

// 引入第三方依赖
import clsx from 'clsx';
// 引入编辑器组件
import CKEditor from '@ckeditor/ckeditor5-react';
import CustomEditor from 'ckeditor5-custom';

import './index.less';

// 引入配置文件
import { prefix } from '../config';

// 引入组件
import { Icon, Upload, Button } from '../index';

// 引入工具类
import { uuid, fileUpload } from '../_util';

export interface EditorProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;
  style?: Object;
  children?: ReactNode;

  /**
   * @description      自定义工具栏
   * @default           -
   */
  controls?: Array<any>;

  /**
   * @description      数据
   * @default           -
   */
  value?: string;

  /**
   * @description      上传的地址
   * @default           -
   */
  action?: (form?: FormData, config?: Object) => Promise<any>;

  /**
   * @description      数据
   * @default           -
   */
  defaultValue?: string;

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
  onChange?: (value?: string) => void;

  /**
   * @description      onBlur
   * @default           -
   */
  onBlur?: (value?: string) => void;

  /**
   * @description      onFocus
   * @default           -
   */
  onFocus?: () => void;

  /**
   * @description      自定义预览
   * @default           -
   */
  onPreview?: (value?: string) => void;

  /**
   * @description      自适应高度
   * @default           true
   */
  full?: boolean;
}

export class MyUploadAdapter {
  constructor(props: any, action: any) {
    this.loader = props;
    this.action = action;
  }

  loader;

  action;

  upload() {
    return new Promise(async (resolve, reject) => {
      this.loader.file.then((res: any) => {
        let form = new FormData();
        form.append('file', res);
        form.append('fileName', res.name);
        form.append('fileType', res.name.split('.')[1]);
        this.action(form)
          .then((res: any) => {
            resolve({ default: res });
          })
          .catch((error: any) => {
            reject(error);
          });
      });
    });
  }
}

export function Editor(props: EditorProps, ref: any) {
  const {
    className,
    defaultValue,
    value,
    style,
    controls,
    config,
    disabled,
    onChange,
    onBlur,
    onFocus,
    onPreview,
    action,
    full = true,
    ...prop
  } = props;

  const [internalValue, setInternalValue] = useState(defaultValue);

  const editorRef = useRef(null) as any;

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  useImperativeHandle(ref, () => editorRef.current);

  function handleChange(e: any, editorState: any) {
    let data = editorState.getData();
    setInternalValue(data);
    if (onChange) {
      onChange(data);
    }
  }

  function handleBlur(e: any, editorState: any) {
    let data = editorState.getData();
    setInternalValue(data);
    if (onBlur) {
      onBlur(data);
    }
  }

  function UploadAdapterPlugin(editor: any) {
    editor.plugins.get('FileRepository').createUploadAdapter = (
      loader: any,
    ) => {
      return new MyUploadAdapter(loader, action);
    };
  }

  return (
    <div
      className={clsx(className, `${prefix}-editor`, {
        [`${prefix}-editor-full`]: full,
      })}
      style={style}
    >
      <CKEditor
        disabled={disabled}
        data={internalValue}
        config={{
          extraPlugins: [UploadAdapterPlugin],
          ...config,
        }}
        editor={CustomEditor}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </div>
  );
}

export interface EditorViewerProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;
  style?: Object;

  /**
   * @description      预览html内容
   * @default           -
   */
  value: string;
}

export function EditorViewer(props: EditorViewerProps) {
  return (
    <div
      className={clsx(
        `${prefix}-editorViewer`,
        'braft-output-content',
        props.className,
      )}
      style={props.style}
      dangerouslySetInnerHTML={{ __html: props.value }}
    ></div>
  );
}

interface CompoundedComponent extends React.ForwardRefExoticComponent<any> {
  EditorViewer: any;
}

const InternalEditor = React.forwardRef(Editor) as CompoundedComponent;

InternalEditor.EditorViewer = EditorViewer;

export default InternalEditor;
