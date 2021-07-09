import React, { useCallback, useEffect, useMemo, useState } from 'react';

import clsx from 'clsx';

// import './index.less';

import { prefix } from '../config';
import { pavingArray } from '../_util';

import { Icon, Checkbox, Input, Tree } from '../index';

export interface UacTransferProps {
  children: any;
  /**
   * @description      类名
   * @default           -
   */
  className?: string;

  /**
   * @description      左标题
   * @default           -
   */
  leftTitle?: string;

  /**
   * @description      右标题
   * @default           -
   */
  rightTitle?: string;

  /**
   * @description      样式
   * @default           -
   */
  style?: any;

  /**
   * @description      开启搜索
   * @default           false
   */
  search?: boolean;

  /**
   * @description      穿梭框的数据
   * @default           -
   */
  dataSource?: Array<any>;

  /**
   * @description      穿梭框选中项
   * @default           -
   */
  selectRowKeys?: Array<any>;

  /**
   * @description      穿梭框右侧数据
   * @default           -
   */
  targetKeys?: Array<any>;

  /**
   * @description      授权
   * @default           -
   */
  onAuth?: Function;

  /**
   * @description      取消授权
   * @default           -
   */
  onCancel?: Function;
}

function UacTransfer(props: UacTransferProps) {
  const {
    leftTitle,
    rightTitle,
    children,
    className,
    style,
    selectRowKeys = [],
    dataSource = [],
    search = false,
    onAuth,
    onCancel,
    ...prop
  } = props;

  const [sourceSelectedKeys, setSourceSelectedKeys] = useState(
    [] as Array<any>,
  );
  const [targetSelectedKeys, setTargetSelectedKeys] = useState(
    [] as Array<any>,
  );

  function handleChange(value: any) {}

  function addKeys() {
    // console.log('给权限');
    setTargetSelectedKeys(sourceSelectedKeys.concat([]));
    onAuth && onAuth(sourceSelectedKeys.concat([]));
  }

  function deleteKeys() {
    // console.log('去权限');
    onCancel && onCancel(targetSelectedKeys.concat([]));
  }

  const LTitle = useCallback(() => {
    if (!leftTitle) return null;
    return (
      <div
        className={clsx({
          [`${prefix}-transfer-title`]: true,
        })}
      >
        {leftTitle}
      </div>
    );
  }, [leftTitle]);

  const RTitle = useCallback(() => {
    if (!rightTitle) return null;
    return (
      <div
        className={clsx({
          [`${prefix}-transfer-title`]: true,
        })}
      >
        {rightTitle}
      </div>
    );
  }, [rightTitle]);

  return (
    <div
      className={clsx(
        {
          [`${prefix}-transfer`]: true,
        },
        className,
      )}
      style={style}
    >
      <div
        className={clsx({
          [`${prefix}-transfer-left`]: true,
          [`${prefix}-transfer-container`]: true,
          [`${prefix}-transfer-noData`]: dataSource.length <= 0,
        })}
      >
        <LTitle />
        <div
          className={clsx({
            [`${prefix}-transfer-checkbox`]: true,
          })}
        >
          {children ? (
            React.Children.map(children, (item: any, index) => {
              return React.cloneElement(item, {
                dataSource: dataSource,
                key: 'left',
                type: 'left',
                rowSelection: {
                  selectedRowKeys: sourceSelectedKeys,
                  onChange: (key: any) => {
                    setSourceSelectedKeys(key);
                  },
                },
              });
            })
          ) : (
            <Tree
              dataSource={dataSource}
              rowSelection={{
                selectedRowKeys: sourceSelectedKeys,
                onChange: (key: any, row: any, indeterminate: any) => {
                  setSourceSelectedKeys(key);
                },
              }}
            />
          )}
        </div>
      </div>
      <div
        className={clsx({
          [`${prefix}-transfer-operation`]: true,
        })}
      >
        <div
          className={clsx({
            [`${prefix}-transfer-operation-item`]: true,
            [`${prefix}-transfer-operation-item-disabled`]:
              sourceSelectedKeys.length <= 0,
          })}
          onClick={() => {
            if (sourceSelectedKeys.length == 0) return;
            addKeys();
          }}
        >
          <Icon
            name={'you'}
            size={14}
            color={sourceSelectedKeys.length <= 0 ? '#CFD3E3' : '#fff'}
          />
        </div>
        <div
          className={clsx({
            [`${prefix}-transfer-operation-item`]: true,
            [`${prefix}-transfer-operation-item-disabled`]:
              targetSelectedKeys.length <= 0,
          })}
          onClick={() => {
            if (targetSelectedKeys.length == 0) return;
            deleteKeys();
          }}
        >
          <Icon
            name={'zuo'}
            size={14}
            color={targetSelectedKeys.length <= 0 ? '#CFD3E3' : '#fff'}
          />
        </div>
      </div>
      <div
        className={clsx({
          [`${prefix}-transfer-right`]: true,
          [`${prefix}-transfer-container`]: true,
          [`${prefix}-transfer-noData`]: dataSource.length <= 0,
        })}
      >
        <RTitle />
        <div
          className={clsx({
            [`${prefix}-transfer-checkbox`]: true,
          })}
        >
          {children ? (
            React.Children.map(children, (item: any, index) => {
              return React.cloneElement(item, {
                dataSource: dataSource,
                key: 'right',
                type: 'right',
                rowSelection: {
                  selectedRowKeys: targetSelectedKeys,
                  onChange: (key: any) => {
                    setTargetSelectedKeys(key);
                  },
                },
              });
            })
          ) : (
            <Tree
              dataSource={dataSource}
              rowSelection={{
                selectedRowKeys: targetSelectedKeys,
                onChange: (key: any, row: any, indeterminate: any) => {
                  setTargetSelectedKeys(key);
                },
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default UacTransfer;