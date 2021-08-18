// 引入react依赖
import React, {
  useCallback,
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
import BraftEditor from 'braft-editor';
// 引入编辑器样式

// 引入样式
import 'braft-editor/dist/index.css';
import './index.less';

// 引入配置文件
import { prefix } from '../config';

// 引入组件
import { Icon, Upload, Button } from '../index';

// 引入工具类
import { uuid } from '../_util';

export interface EditorProps {
  className?: string;
  style?: Object;

  /**
   * @description      自定义工具栏
   * @default           -
   */
  controls?: Array<any>;

  /**
   * @description      工具栏样式配置
   * @default           -
   */
  contentStyle?: any;

  /**
   * @description      增加扩展控件
   * @default           -
   */
  extendControls?: any;

  /**
   * @description      媒体库  [{ id: uuid, type: 'IMAGE' || 'AUDIO', url: string }]
   * @default           -
   */
  media?: any;

  /**
   * @description      数据
   * @default           -
   */
  value?: string;

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

  /**
   * @description      自定义预览
   * @default           -
   */
  onPreview?: any;
}

const defaultControls = [
  'undo',
  'redo',
  'separator',
  'font-size',
  'line-height',
  'letter-spacing',
  'separator',
  'text-color',
  'bold',
  'italic',
  'underline',
  'strike-through',
  'separator',
  'superscript',
  'subscript',
  'remove-styles',
  'emoji',
  'separator',
  'text-indent',
  'text-align',
  'separator',
  'headings',
  'list-ul',
  'list-ol',
  'blockquote',
  'code',
  'separator',
  'link',
  'separator',
  'hr',
  'separator',
  'media',
  'separator',
  'clear',
];

function Editor(props: EditorProps, ref: any) {
  const {
    className,
    style,
    media,
    controls,
    contentStyle,
    extendControls,
    config,
    disabled,
    defaultValue,
    onChange,
    onBlur,
    onFocus,
    onPreview,
    ...prop
  } = props;

  // const [editorState, setEditorState] = useState(
  //   BraftEditor.createEditorState(defaultValue || null),
  // );

  const editorRef = useRef(null);

  useImperativeHandle(ref, () => editorRef.current);

  const [extendControlsConfig, setExtendControlsConfig] = useState(
    extendControls || [],
  );

  const [value, setValue] = useState(
    BraftEditor.createEditorState(defaultValue || null),
  );

  const previewConfig = useMemo(() => {
    return {
      key: 'preview',
      type: 'button',
      text: '预览',
      onClick: () => onPreview(value.toHTML()),
    };
  }, []);

  useEffect(() => {
    if (onPreview === undefined) return;
    if (extendControlsConfig.indexOf(previewConfig) == -1) {
      extendControlsConfig.push(previewConfig);
    }
  }, [onPreview, extendControls]);

  useEffect(() => {
    setExtendControlsConfig(extendControls);
  }, [extendControls]);

  useEffect(() => {
    setValue(BraftEditor.createEditorState(props.value));
  }, [props.value]);

  function handleChange(editorState: any) {
    setValue(editorState);
    if (onChange) {
      onChange(editorState.toHTML());
    }
  }

  function handleBlur(editorState: any) {
    setValue(editorState);
    if (onChange) {
      onChange(editorState.toHTML());
    }
  }

  function handleFocus(editorState: any) {
    setValue(editorState);
    if (onChange) {
      onChange(editorState.toHTML());
    }
  }

  return (
    <div className={clsx('rootnet-editor', className)} style={style}>
      <BraftEditor
        value={value}
        ref={editorRef}
        controls={controls || defaultControls}
        contentStyle={contentStyle}
        extendControls={extendControlsConfig}
        media={media}
        onChange={handleChange}
        {...prop}
        // onSave={this.submitContent}
      />
    </div>
  );
}

export function EditorViewer(props: any) {
  return (
    <div
      className={clsx('rootnet-editorViewer', props.className)}
      style={props.style}
      dangerouslySetInnerHTML={{ __html: props.value }}
    ></div>
  );
}

Editor.EditorViewer = EditorViewer;
// Editor.BraftEditor = BraftEditor;

export default React.forwardRef(Editor);
