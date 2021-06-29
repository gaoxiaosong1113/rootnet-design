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

interface TableItemProps {
  /**
   * @description      样式命
   * @default           -
   */
  className?: string;

  /**
   * @description      层级
   * @default           -
   */
  layer: number;

  /**
   * @description      是否显示索引
   * @default           false
   */
  indexEq?: string;

  /**
   * @description      配置是否展开属性
   * @default           false
   */
  expandable?: any;

  /**
   * @description      设置tree内各类浮层的渲染节点，如筛选菜单
   * @default           false
   */
  getPopupContainer?: string;

  /**
   * @description      tree行的类名
   * @default           false
   */
  rowClassName?: string;

  /**
   * @description      tree行 key 的取值，可以是字符串或一个函数
   * @default           false
   */
  rowKey: string;

  /**
   * @description      tree行是否可选择，配置项
   * @default           false
   */
  rowSelection?: any;

  /**
   * @description      tree大小	default | middle | small
   * @default           default
   */
  size?: string;

  /**
   * @description      tree的头部
   * @default           false
   */
  onHeaderRow?: string;

  /**
   * @description      设置行属性
   * @default           false
   */
  onRow?: any;

  /**
   * @description      tree的数据
   * @default           false
   */
  data?: any;

  /**
   * @description      是否树形结构
   * @default           false
   */
  isTree?: string;

  /**
   * @description      当前行的索引值
   * @default           false
   */
  index: number;

  /**
   * @description      选中
   * @default           []
   */
  selectedRowKeys: Array<any>;

  /**
   * @description      修改选中
   * @default           -
   */
  setSelectedRowKeys: any;

  /**
   * @description      选中行
   * @default           []
   */
  selectedRows: Array<any>;

  /**
   * @description      修改选中行
   * @default           -
   */
  setSelectedRows: any;

  dataSource: any;
}

function TableItem(props: TableItemProps) {
  const {
    // 层级
    layer,
    // 配置展开属性
    expandable,
    // 设置tree内各类浮层的渲染节点，如筛选菜单
    getPopupContainer,
    // tree行的类名
    rowClassName,
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
    selectedRows,
    setSelectedRows,
    index,
  } = props;

  const [open, setOpen] = useState(() => {
    if (!expandable) return false;
    return expandable?.indexOf(data[rowKey]) != -1;
  });

  const [checked, setChecked] = useState(() => {
    return selectedRowKeys.indexOf(data[rowKey]) != -1;
  });
  const [indeterminate, setIndeterminate] = useState(false);

  // 处理多选
  useEffect(() => {
    if (data.children) {
      let checkData = loopData(data.children, selectedRowKeys, rowKey);
      let allChildrenData = checkAllData(data.children, rowKey);
      if (checkData.length > 0) {
        if (checkData.length === allChildrenData.length) {
          setIndeterminate(true);
        } else {
          setIndeterminate(true);
        }
      } else {
        setIndeterminate(false);
      }
    }
    setChecked(selectedRowKeys.indexOf(data[rowKey]) != -1);
  }, [selectedRowKeys]);

  const handleOpen = () => {
    setOpen(!open);
  };

  let child: any = data.children && data.children.length > 0;

  // 处理选中事件
  function checkChildren(data: any, value: any) {
    console.log(value);
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
        className={`${prefix}-tree-row`}
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
              style={{ transform: `rotate(${open ? 0 : -180}deg)` }}
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
          <div className={`${prefix}-tree-title`} key={data.dataIndex}>
            {data.render ? data.render(data, index) : data.title}
          </div>
        )}
        {onRow && onRow(data)}
      </div>
      {open && child && (
        <TableChildren
          {...props}
          key={index + layer + ''}
          data={data.children}
          layer={layer + 1}
        />
      )}
    </>
  );
}

function TableChildren(props: any) {
  const { data } = props;
  return (
    data &&
    data.map((dataItem: any, index: any) => {
      return <TableItem {...props} index={index} key={index} data={dataItem} />;
    })
  );
}

export default function Table(props: any) {
  const {
    // 数据数组
    dataSource = [],
    // 配置展开属性
    expandable = [],
    // tree行 key 的取值，可以是字符串或一个函数
    rowKey = 'id',
    // tree行是否可选择，配置项
    rowSelection,
  } = props;

  const [isTree, setIsTree] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState(() => {
    if (rowSelection && rowSelection.selectedRowKeys) {
      return rowSelection.selectedRowKeys;
    }
    return [];
  });
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    for (let i = 0; i < dataSource.length; i++) {
      if (dataSource[i].children && dataSource[i].children.length > 0) {
        setIsTree(true);
        break;
      }
    }
  }, []);

  useEffect(() => {
    if (rowSelection && rowSelection.onChange) {
      rowSelection.onChange(selectedRowKeys, selectedRows);
    }
  }, [selectedRows]);

  useEffect(() => {
    if (selectedRowKeys.length == 0) return;
    setSelectedRows(loopData(dataSource, selectedRowKeys, rowKey));
  }, [selectedRowKeys]);

  return (
    <div className={`${prefix}-trees`}>
      <TableChildren
        {...props}
        selectedRowKeys={selectedRowKeys}
        setSelectedRowKeys={setSelectedRowKeys}
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
        data={dataSource}
        layer={0}
        isTree={isTree}
      />
    </div>
  );
}
