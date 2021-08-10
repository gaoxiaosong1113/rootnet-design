// 引入react依赖
import React, { useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

// 引入第三方依赖

import clsx from 'clsx';

// 引入样式
import './index.less';

// 引入配置文件
import { prefix } from '../config';

// 引入组件
import { Icon } from '../index';

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
    file: File,
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
    listType,
    maxCount,
    multiple,
    previewFile,
    showUploadList = true,
    onChange,
    onDrop,
    onPreview,
    onRemove,
    ...prop
  } = props;

  const uploadFile = useRef(null as any);

  const [fileList, setFileList] = useState(props.fileList || []);

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
    if (onChange) {
      onChange(event.target.files);
    }

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let uploadData = {
        name: file.name,
        percent: 0,
        status: 'uploading' as UploadFileStatus,
        thumbUrl: reader.result,
        uid: uuid(),
        file: event.target.files[0],
      };
      console.log(uploadData);
      fileList.push(uploadData);
      setFileList([...fileList]);
      handleUploadFile(uploadData);
    };
  }

  function handleUploadFile(file: any) {
    if (action) {
      let upItem = fileList.filter((item: any) => item.uuid == file.uuid)[0];
      action(file, {
        // 监听上传进度
        onUploadProgress(progressEvent: any) {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total,
          );
          upItem.percent = percentCompleted;
          setFileList([...fileList]);
          console.log(percentCompleted);
        },
      })
        .then((res: any) => {
          upItem.status = 'success';
          upItem.url = res.data;
          setFileList([...fileList]);
        })
        .catch((error: any) => {
          upItem.status = 'error';
          upItem.percent = 0;
          setFileList([...fileList]);
        });
    }
  }

  return (
    <div
      className={clsx(className, {
        [`${prefix}-upload`]: true,
        [`${prefix}-upload-default`]: !disabled,
        [`${prefix}-upload-${listType}`]: listType,
        [`${prefix}-upload-disabled`]: disabled,
      })}
      {...prop}
    >
      <div
        className={clsx({
          [`${prefix}-upload-input`]: true,
        })}
      >
        <input
          ref={uploadFile}
          type="file"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          onChange={handleChange}
        />
        {React.Children.map(children, (child: any) => {
          return React.cloneElement(child, {
            onClick: handleClick,
          });
        })}
      </div>
      {accept && (
        <div
          className={clsx({
            [`${prefix}-upload-accept`]: true,
          })}
        >
          支持扩展名{accept}
        </div>
      )}
      {showUploadList && (
        <div
          className={clsx({
            [`${prefix}-upload-uploadList`]: true,
          })}
        >
          {fileList.map((item, index) => {
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
                    [`${prefix}-upload-icon`]: true,
                  })}
                >
                  <Icon
                    size={36}
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
                <div
                  className={clsx({
                    [`${prefix}-upload-fillName`]: true,
                  })}
                >
                  {item.name}
                </div>
                <div
                  className={clsx({
                    [`${prefix}-upload-item-operation`]: true,
                  })}
                >
                  <span>
                    <Icon size={36} name="xianshi" />
                  </span>
                  <span>
                    <Icon size={36} name="shanchu" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Upload;
