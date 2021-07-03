// 引入react依赖
import React, { useReducer, useEffect, Fragment, useState } from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon, Checkbox } from '../index';

import {
  loopData,
  checkAllData,
  farmatSelectedRowKeys,
  unchecked,
  onchecked,
} from '../_util';

function TreeItem(props: any) {
  const {
    // 层级
    layer,
    // 配置展开属性
    expandable,
    rowTitle,
    // tree行 key 的取值，可以是字符串或一个函数
    rowKey,
    // tree行是否可选择，配置项
    rowSelection,
    // 设置行属性
    onRow,
    data,
    dataSource,
    // 是否树形结构
    isTree,
    selectedRowKeys,
    setSelectedRowKeys,
    indeterminateKeys,
    setIndeterminateKeys,
    checkable,
    value,
    setValue,
    index,
  } = props;

  const [open, setOpen] = useState(false);

  const [checked, setChecked] = useState(() => {
    return selectedRowKeys.indexOf(data[rowKey]) != -1;
  });

  const [indeterminate, setIndeterminate] = useState(false);

  useEffect(() => {
    setOpen(expandable && expandable?.indexOf(data[rowKey]) != -1);
  }, [expandable]);

  // 处理多选
  useEffect(() => {
    if (data.children) {
      let checkData = loopData(data.children, selectedRowKeys, rowKey);
      let allChildrenData = checkAllData(data.children, rowKey);
      if (checkData.length > 0) {
        if (checkData.length === allChildrenData.length) {
          setIndeterminate(false);
          unchecked(indeterminateKeys, data[rowKey]);
        } else {
          onchecked(indeterminateKeys, data[rowKey]);
          setIndeterminate(true);
        }
      } else {
        unchecked(indeterminateKeys, data[rowKey]);
        setIndeterminate(false);
      }
    }
    setIndeterminateKeys(indeterminateKeys);
    setChecked(selectedRowKeys.indexOf(data[rowKey]) != -1);
  }, [selectedRowKeys]);

  const handleOpen = () => {
    setOpen(!open);
  };

  let child: any = data.children && data.children.length > 0;

  // 处理选中事件
  function checkChildren(data: any, value: any) {
    setChecked(value);

    let childrenKeys = [];

    // 获取所有的子项
    if (data.children) {
      childrenKeys = checkAllData(data.children, rowKey);
    }

    childrenKeys.push(data[rowKey]);

    // 判断是否选中
    if (value) {
      childrenKeys.forEach((item: any) => {
        onchecked(selectedRowKeys, item);
      });
    } else {
      childrenKeys.forEach((item: any) => {
        unchecked(selectedRowKeys, item);
      });
    }
    farmatSelectedRowKeys(dataSource, selectedRowKeys, rowKey);
    return selectedRowKeys;
  }

  return (
    <>
      <div
        className={clsx({
          [`${prefix}-tree-row`]: true,
          [`${prefix}-tree-row-checked`]: checked || value == data[rowKey],
        })}
        key={rowKey}
        style={{ marginLeft: layer * 20 }}
      >
        {isTree && child && (
          <div
            className={`${prefix}-tree-collapsed`}
            onClick={child && handleOpen}
          >
            <Icon
              name={open ? 'xuanzexiala' : 'xuanzeyou'}
              className={`${prefix}-tree-collapsed-icon`}
              size={16}
            />
          </div>
        )}
        {rowSelection && (
          <div className={`${prefix}-tree-checkbox`}>
            <Checkbox
              checked={checked}
              indeterminate={indeterminate}
              onChange={(v: any) => {
                if (rowSelection.onSelect) {
                  rowSelection.onSelect(data[rowKey], data);
                }
                setSelectedRowKeys([...checkChildren(data, v)]);
              }}
            />
          </div>
        )}
        {!onRow && (
          <div
            className={`${prefix}-tree-title`}
            key={data.dataIndex}
            onClick={() => {
              if (checkable) {
                setValue(data[rowKey]);
              }
            }}
          >
            {data.render ? data.render(data, index) : data[rowTitle]}
          </div>
        )}
        {onRow && onRow(data)}
      </div>
      {open && child && (
        <TreeChildren
          {...props}
          key={index + layer + ''}
          data={data.children}
          layer={layer + 1}
        />
      )}
    </>
  );
}

function TreeChildren(props: any) {
  const { data } = props;
  return (
    data &&
    data.map((dataItem: any, index: any) => {
      return <TreeItem {...props} index={index} key={index} data={dataItem} />;
    })
  );
}

export interface TreeProps2 {}

export interface TreeProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;

  /**
   * @description      配置是否展开属性
   * @default           -
   */
  expandable?: Array<any>;

  /**
   * @description      tree行的类名
   * @default           -
   */
  rowClassName?: string;

  /**
   * @description      tree行 title 的取值
   * @default           title
   */
  rowTitle?: string;

  /**
   * @description      tree行 key 的取值
   * @default           id
   */
  rowKey?: string;

  /**
   * @description      tree行是否可选择，配置项
   * @default           false
   */
  rowSelection?: {
    /**
     * @description      选中的key
     * @default           -
     */

    selectedRowKeys: Array<any>;

    /**
     * @description      选中更改 (selectedRowKeys, selectedRows, indeterminateKeys) => {}
     * @default           -
     */

    onChange?: Function;

    /**
     * @description      某一行选择
     * @default           -
     */

    onSelect?: Function;
  };

  /**
   * @description      设置行属性
   * @default           false
   */
  onRow?: any;

  /**
   * @description      tree 的数据
   * @default           false
   */
  dataSource?: any;

  /**
   * @description      开启单选
   * @default           false
   */
  checkable?: boolean;

  /**
   * @description      单选回调
   * @default           -
   */
  onCheck?: Function;

  /**
   * @description      单选值
   * @default           -
   */
  value?: any;
}

export default function Tree(props: TreeProps) {
  const {
    className,
    // 数据数组
    dataSource = [],
    rowKey = 'id',
    rowTitle = 'title',
    rowSelection,
    onRow,
    onCheck,
    ...prop
  } = props;

  const [isTree, setIsTree] = useState(true);
  const [selectedRowKeys, setSelectedRowKeys] = useState(() => {
    if (rowSelection && rowSelection.selectedRowKeys) {
      return rowSelection.selectedRowKeys;
    }
    return [];
  });
  const [selectedRows, setSelectedRows] = useState([]);
  const [indeterminateKeys, setIndeterminateKeys] = useState([]);
  const [value, setValue] = useState();

  useEffect(() => {
    for (let i = 0; i < dataSource.length; i++) {
      if (dataSource[i].children && dataSource[i].children.length > 0) {
        setIsTree(true);
        break;
      }
    }
  }, []);

  useEffect(() => {
    // debugger
    // if(!selectedRows) return
    // if (rowSelection && rowSelection.onChange) {
    //   rowSelection.onChange(selectedRowKeys, selectedRows, indeterminateKeys);
    // }
  }, [selectedRows]);

  useEffect(() => {
    let loopRows = loopData(dataSource, selectedRowKeys, rowKey);
    if (loopRows.length == 0 && selectedRows.length == 0) {
      // 无变化
    } else {
      setSelectedRows(loopRows);
      if (rowSelection && rowSelection.onChange) {
        rowSelection.onChange(selectedRowKeys, loopRows, indeterminateKeys);
      }
    }
  }, [selectedRowKeys]);

  useEffect(() => {
    if (rowSelection) {
      setSelectedRowKeys(rowSelection.selectedRowKeys || []);
    }
  }, [rowSelection?.selectedRowKeys]);

  useEffect(() => {
    if (!value) return;
    if (value == props.value) return;
    if (onCheck) {
      onCheck(value);
    }
  }, [value]);

  useEffect(() => {
    if (props.value) {
      setValue(props.value);
    }
  }, [props.value]);

  return (
    <div className={clsx(`${prefix}-trees`, className)}>
      <TreeChildren
        {...prop}
        rowKey={rowKey}
        rowTitle={rowTitle}
        indeterminateKeys={indeterminateKeys}
        setIndeterminateKeys={setIndeterminateKeys}
        selectedRowKeys={selectedRowKeys}
        setSelectedRowKeys={setSelectedRowKeys}
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
        data={dataSource}
        dataSource={dataSource}
        rowSelection={rowSelection}
        onRow={onRow}
        value={value}
        setValue={setValue}
        layer={0}
        isTree={isTree}
      />
    </div>
  );
}
