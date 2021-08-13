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
import { Icon, Image, Progress } from '../index';

// 引入工具类
import { uuid } from '../_util';

export type UploadFileStatus =
  | 'error'
  | 'success'
  | 'done'
  | 'uploading'
  | 'removed';
export interface UploadFile {
  /**
   * @description      文件名
   * @default           -
   */
  name?: string;

  /**
   * @description      上传进度
   * @default           -
   */
  percent?: number;

  /**
   * @description      上传状态，不同状态展示颜色也会有所不同
   * @default           -
   */
  status?: UploadFileStatus;

  /**
   * @description      缩略图地址
   * @default           -
   */
  thumbUrl?: any;

  /**
   * @description      唯一标识符，不设置时会自动生成
   * @default           -
   */
  uid: string;

  /**
   * @description      上传的文件
   * @default           -
   */
  file?: File;

  /**
   * @description      文件地址
   * @default           -
   */
  url?: string;
}

export interface UploadProps {
  className?: string;
  children?: React.ReactChild;

  /**
   * @description      接受上传的文件类型
   * @default           -
   */
  accept?: string;

  /**
   * @description      上传的地址
   * @default           -
   */
  action?: Function;

  /**
   * @description      默认已经上传的文件列表
   * @default           false
   */
  defaultFileList?: Array<{}>;

  /**
   * @description      是否禁用
   * @default           -
   */
  disabled?: boolean;

  /**
   * @description      已经上传的文件列表（受控）
   * @default           -
   */
  fileList?: Array<UploadFile>;

  /**
   * @description      自定义上传列表项
   * @default           -
   */
  itemRender?: (
    file: UploadFile,
    fileList: Array<{}>,
    index: number,
  ) => React.ReactNode;

  /**
   * @description      上传列表的内建样式 text, picture, picture-card
   * @default           text
   */
  listType?: string;

  /**
   * @description      限制上传数量。当为 1 时，始终用最新上传的文件代替当前文件
   * @default           -
   */
  maxCount?: number;

  /**
   * @description      是否支持多选文件
   * @default           false
   */
  multiple?: boolean;

  /**
   * @description      是否显示上传类型
   * @default           true
   */
  showAccept?: boolean;

  /**
   * @description      自定义文件预览逻辑
   * @default           -
   */
  previewFile?: (file: File | Blob) => Promise<string>;

  /**
   * @description      是否展示文件列表
   * @default           true
   */
  showUploadList?: boolean;

  /**
   * @description      上传文件改变时的状态
   * @default           -
   */
  onChange?: Function;

  /**
   * @description      当文件被拖入上传区域时执行的回调功能
   * @default           -
   */
  onDrop?: Function;

  /**
   * @description      启用拖拽上传
   * @default           false
   */
  drag?: boolean;

  /**
   * @description      点击文件链接或预览图标时的回调
   * @default           -
   */
  onPreview?: Function;

  /**
   * @description      点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除
   * @default           -
   */
  onRemove?: (file: File) => boolean | Promise<any>;
}

function Upload(props: UploadProps) {
  const {
    className,
    children,
    accept,
    action,
    defaultFileList,
    disabled,
    itemRender,
    listType = 'text',
    showAccept = true,
    maxCount,
    multiple = false,
    previewFile,
    showUploadList = true,
    onChange,
    onDrop,
    onPreview,
    onRemove,
    drag,
    ...prop
  } = props;

  const uploadFile = useRef(null as any);
  const uploadFileArea = useRef(null as any);

  const [fileList, setFileList] = useState(props.fileList || []);

  const operation = useCallback(
    (uploadItem) => {
      return (
        <div
          className={clsx({
            [`${prefix}-upload-item-operation`]: true,
          })}
        >
          {uploadItem.status == 'success' && (
            <span onClick={() => handlePreview(uploadItem)}>
              <Icon name="xianshi" />
            </span>
          )}
          <span onClick={() => handleDelete(uploadItem)}>
            <Icon name="shanchu" />
          </span>
        </div>
      );
    },
    [fileList],
  );

  const fileListJSX = useMemo(() => {
    return fileList.map((item, index) => {
      if (itemRender) {
        return itemRender(item, fileList, index);
      }
      return (
        <div
          className={clsx({
            [`${prefix}-upload-item`]: true,
            [`${prefix}-upload-item-${item.status}`]: item.status,
          })}
          key={index}
        >
          <div
            className={clsx({
              [`${prefix}-upload-item-context`]: true,
            })}
          >
            {listType == 'text' && (
              <div
                className={clsx({
                  [`${prefix}-upload-icon`]: true,
                })}
              >
                <Icon
                  name="lianjie"
                  color={clsx({
                    '#F5221B': item.status == 'error',
                    '#1890FF': item.status == 'uploading',
                    '#3A415C':
                      item.status == 'removed' ||
                      item.status == 'success' ||
                      item.status == 'done',
                  })}
                />
              </div>
            )}
            {listType !== 'text' && (
              <div
                className={clsx({
                  [`${prefix}-upload-picture-img`]: true,
                })}
              >
                <Image src={item.thumbUrl} mode="aspectFit" />
              </div>
            )}
            {listType !== 'picture-card' && (
              <div
                className={clsx({
                  [`${prefix}-upload-fillName`]: true,
                })}
              >
                {item.name}
              </div>
            )}
            {operation(item)}
          </div>
          {item.percent && (
            <div
              className={clsx({
                [`${prefix}-upload-progress`]: true,
              })}
            >
              <Progress
                percent={item.percent as any}
                status={item.status}
                minimum
              />
            </div>
          )}
        </div>
      );
    });
  }, [fileList]);

  async function handlePreview(data: any) {
    if (previewFile) {
      data.url = await previewFile(data);
      // .then((res) => {
      //   console.log(res);
      //   console.log('展示的内容');
      // });
    }
    if (onPreview) {
      onPreview(data);
    }
  }

  function handleDelete(data: any) {
    let newFileList = [...fileList];
    let index = newFileList.indexOf(data);
    newFileList.splice(index, 1);
    setFileList(newFileList);
    uploadFile.current.value = null;
    if (onRemove) {
      onRemove({ ...data });
    }
    if (onChange) {
      onChange(newFileList);
    }
  }

  function handleClick(event: any) {
    uploadFile.current.click();
  }

  function handleChange(event: any) {
    console.log(event);
    console.log(event.target.files[0]);
    let file = event.target.files[0];
    // 超出数量不做任何处理
    if (maxCount !== undefined) {
      if (fileList.length > maxCount) {
        return;
      }
    }
    handleFileListAdd(file);
  }

  function handleFileListAdd(file: any) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let uploadData = {
        name: file.name,
        percent: 0,
        status: 'uploading' as UploadFileStatus,
        thumbUrl: reader.result,
        uid: uuid(),
        file: file,
      };
      fileList.push(uploadData);
      setFileList([...fileList]);
      handleUploadFile(uploadData);
    };
  }

  function handleUploadFile(file: any) {
    if (action) {
      let newFileList = [...fileList];
      let upItem = newFileList.filter((item: any) => item.uuid == file.uuid)[0];
      upItem.status = 'uploading';
      action(file, {
        // 监听上传进度
        onUploadProgress(progressEvent: any) {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total,
          );
          upItem.percent = percentCompleted;
          setFileList(newFileList);
          console.log(percentCompleted);
        },
      })
        .then((res: any) => {
          upItem.status = 'success';
          upItem.url = res.data;
          setFileList(newFileList);
          if (onChange) {
            onChange(newFileList);
          }
        })
        .catch((error: any) => {
          upItem.status = 'error';
          upItem.percent = 0;
          setFileList(newFileList);
          if (onChange) {
            onChange(newFileList);
          }
        });
    }
  }

  useEffect(() => {
    if (!drag) return;
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
      uploadFileArea.current.addEventListener(
        eventName,
        preventDefaults,
        false,
      );
      document.body.addEventListener(eventName, preventDefaults, false);
    });

    ['dragenter', 'dragover'].forEach((eventName) => {
      uploadFileArea.current.addEventListener(eventName, highlight, false);
    });
    ['dragleave', 'drop'].forEach((eventName) => {
      uploadFileArea.current.addEventListener(eventName, unhighlight, false);
    });

    uploadFileArea.current.addEventListener('drop', handleDrop, false);

    function handleDrop(e: any) {
      const files = e.dataTransfer.files;
      console.log(files);
      files.forEach((file: any) => {
        handleFileListAdd(file);
        // previewImage(file, imgPreviewEle);
      });
      // 省略文件上传代码
    }

    function preventDefaults(e: any) {
      e.preventDefault();
      e.stopPropagation();
    }

    // 添加高亮样式
    function highlight(e: any) {
      uploadFileArea.current.classList.add('highlighted');
    }

    // 移除高亮样式
    function unhighlight(e: any) {
      uploadFileArea.current.classList.remove('highlighted');
    }
  }, []);

  return (
    <div
      className={clsx(className, {
        [`${prefix}-upload`]: true,
        [`${prefix}-upload-default`]: !disabled,
        [`${prefix}-upload-${listType}`]: listType,
        [`${prefix}-upload-disabled`]: disabled,
        [`${prefix}-upload-drag`]: drag,
      })}
      {...prop}
    >
      <div
        className={clsx({
          [`${prefix}-upload-input`]: true,
        })}
        ref={uploadFileArea}
        onClick={(e) => drag && handleClick(e)}
      >
        <input
          ref={uploadFile}
          type="file"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          onChange={handleChange}
        />
        <div
          className={clsx({
            [`${prefix}-upload-target`]: true,
          })}
        >
          {React.Children.map(children, (child: any) => {
            return React.cloneElement(child, {
              onClick: (e: any) => !drag && handleClick(e),
              disabled: disabled,
              style: { ...child.props.style, cursor: 'pointer' },
            });
          })}
        </div>

        {drag && (
          <div
            className={clsx({
              [`${prefix}-upload-drag-info`]: true,
            })}
          >
            单击或拖动文件到该区域以上传
          </div>
        )}
        {accept && showAccept && (
          <div
            className={clsx({
              [`${prefix}-upload-accept`]: true,
            })}
          >
            支持扩展名{accept}
          </div>
        )}
      </div>

      {(showUploadList || listType == 'picture-card') && (
        <div
          className={clsx({
            [`${prefix}-upload-uploadList`]: true,
          })}
        >
          {fileListJSX}
          {listType == 'picture-card' &&
            (maxCount != undefined ? fileList.length < maxCount : true) && (
              <div
                className={clsx({
                  [`${prefix}-upload-item`]: true,
                  [`${prefix}-upload-item-add`]: true,
                })}
                onClick={handleClick}
              >
                <Icon size={24} name="jiahao" />
                <p>上传照片</p>
              </div>
            )}
        </div>
      )}
    </div>
  );
}

export default Upload;
