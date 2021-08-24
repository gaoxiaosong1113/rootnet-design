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

function TableItem(props: any) {
  const {
    // 层级
    layer,
    // 是否显示索引
    indexEq = true,
    // 表格列的配置描述
    columns = [],
    // 设置表格内各类浮层的渲染节点，如筛选菜单
    getPopupContainer,
    // 表格行的类名
    rowClassName,
    // 表格行 key 的取值，可以是字符串或一个函数
    rowKey = 'id',
    // 表格行是否可选择，配置项
    rowSelection,
    // 表格大小	default | middle | small
    size = 'default',
    onHeaderRow,
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
    expandable,
    setExpandable,
    index,
  } = props;

  const [open, setOpen] = useState(false);

  const [checked, setChecked] = useState(() => {
    return selectedRowKeys.indexOf(data[rowKey]) != -1;
  });
  const [indeterminate, setIndeterminate] = useState(false);

  useEffect(() => {
    if (expandable != undefined) {
      setOpen(expandable?.indexOf(data[rowKey]) != -1);
    }
  }, [expandable]);

  // 处理多选
  useEffect(() => {
    if (data.children) {
      let checkData = loopData(data.children, selectedRowKeys, rowKey);
      let allChildrenData = checkAllData(data.children, rowKey);
      if (checkData.length > 0) {
        if (checkData.length === allChildrenData.length) {
          setIndeterminate(false);
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
    let targetOpen = !open;
    if (targetOpen) {
      onchecked(expandable, data[rowKey]);
    } else {
      unchecked(expandable, data[rowKey]);
    }
    setOpen(targetOpen);
    setExpandable([...expandable]);
  };

  let child: any = data.children && data.children.length > 0;
  // let isExpandable = expandable?.indexOf(data[rowKey]) != -1;

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
    farmatSelectedRowKeys(props.dataSource, selectedRowKeys, rowKey);
    return selectedRowKeys;
  }

  return (
    <>
      <tr className={clsx(`${prefix}-table-row`, rowClassName)} key={rowKey}>
        {rowSelection && (
          <td
            className={clsx(`${prefix}-table-td`, `${prefix}-table-checkbox`)}
            style={{ width: '40px' }}
          >
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
          </td>
        )}
        {indexEq && (
          <td
            className={clsx(`${prefix}-table-td`, `${prefix}-table-index`)}
            style={{ width: '40px' }}
          >
            {layer == 0 && index + 1}
          </td>
        )}
        {columns &&
          !onRow &&
          columns.map((item: any, indexs: any) => {
            let collapsed = indexs == 0 && isTree && child;

            let component = item.render
              ? item.render(data, index, columns)
              : data[item.dataIndex];

            let componentProps = {
              children: component,
            };

            let tdProps = {} as any;

            if (
              Object.prototype.toString.call(component) === '[object Object]' &&
              !component.$$typeof
            ) {
              const { rowSpan, colSpan, ...innerProps } = component.props || {};
              tdProps.rowSpan = rowSpan;
              tdProps.colSpan = colSpan;

              componentProps = {
                ...innerProps,
                ...componentProps,
                children: component.children,
              };
            }

            if (tdProps.rowSpan === 0 || tdProps.colSpan === 0) {
              return null;
            }

            return (
              <td
                className={clsx(
                  `${prefix}-table-td`,
                  {
                    [`${prefix}-table-collapsed`]: collapsed,
                  },
                  item.className,
                )}
                key={item.dataIndex}
                style={{
                  width: item.width || 'auto',
                }}
                {...tdProps}
              >
                <span
                  style={{
                    paddingLeft: isTree ? layer * 17 : 0,
                  }}
                >
                  {collapsed && (
                    <Icon
                      name={open ? 'biaogeshouqi1' : 'biaogezhankai1'}
                      className={`${prefix}-table-collapsed-icon`}
                      style={{ transform: `rotate(${open ? 0 : -180}deg)` }}
                      size={16}
                      onClick={child && handleOpen}
                    />
                  )}
                  <span {...componentProps}></span>
                </span>
              </td>
            );
          })}
        {columns && onRow && onRow(data)}
      </tr>
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
    className,
    // 是否显示索引
    indexEq = true,
    // 是否展示外边框和列边框
    bordered = true,
    // 表格列的配置描述
    columns = [],
    // 覆盖默认的 table 元素
    components,
    // 数据数组
    dataSource = [],
    // 表格尾部
    footer,
    // 设置表格内各类浮层的渲染节点，如筛选菜单
    getPopupContainer,
    // 页面是否加载中
    loading = false,
    // 默认文案设置，目前包括排序、过滤、空数据文案
    locale,
    // 分页器，参考配置项或 pagination 文档，设为 false 时不展示和进行分页
    pagination,
    // 表格行的类名
    rowClassName,
    // 表格行 key 的取值，可以是字符串或一个函数
    rowKey = 'id',
    // 表格行是否可选择，配置项
    rowSelection,
    // 表格是否可滚动，也可以指定滚动区域的宽、高，配置项
    scroll = false,
    // 是否显示表头
    showHeader = true,
    // 表头是否显示下一次排序的 tooltip 提示
    showSorterTooltip,
    // 表格大小	default | middle | small
    size = 'default',
    // 支持的排序方式
    sortDirections,
    // 设置粘性头部和滚动条
    sticky,
    // 总结栏
    summary,
    // 表格元素的 table-layout 属性，设为 fixed 表示内容不会影响列的布局
    tableLayout,
    // 固定表头/列或使用了 column.ellipsis 时，默认值为 fixed
    // 表格标题
    title,
    // 分页、排序、筛选变化时触发
    onChange,
    // 设置头部行属性
    onHeaderRow,
    // 设置行属性
    onRow,
    onExpandableChange,
  } = props;

  const [isTree, setIsTree] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState(() => {
    if (rowSelection && rowSelection.selectedRowKeys) {
      return rowSelection.selectedRowKeys;
    }
    return [];
  });
  const [selectedRows, setSelectedRows] = useState([]);
  const [checkAll, setCheckAll] = useState(false);
  const [expandable, setExpandable] = useState([]);

  useEffect(() => {
    // 判断是否为树形结构
    for (let i = 0; i < dataSource.length; i++) {
      if (dataSource[i].children && dataSource[i].children.length > 0) {
        setIsTree(true);
        break;
      }
    }
  }, []);

  function handleCheckAll(value: any) {
    setCheckAll(value);
    if (value) {
      setSelectedRowKeys(checkAllData(dataSource, rowKey));
    } else {
      setSelectedRowKeys([]);
    }
  }

  function handleChange(key: any) {
    let loopRows = loopData(dataSource, key, rowKey);

    if (key.length === 0) {
      setCheckAll(false);
    } else if (key.length === checkAllData(dataSource, rowKey).length) {
      setCheckAll(true);
    }

    if (rowSelection && rowSelection.onChange) {
      rowSelection.onChange(key, loopRows);
    }

    setSelectedRowKeys(key);
    setSelectedRows(loopRows);
  }

  function handleChangeExpandable(keys: any) {
    setExpandable(keys);
    if (onExpandableChange) {
      onExpandableChange(keys);
    }
  }

  useEffect(() => {
    if (rowSelection && rowSelection.selectedRowKeys != undefined) {
      setSelectedRowKeys(rowSelection.selectedRowKeys || []);
    }
  }, [rowSelection?.selectedRowKeys]);

  useEffect(() => {
    if (!props.expandable) return;
    setExpandable(props.expandable);
  }, [props.expandable]);

  return (
    <div className={clsx(className, `${prefix}-tables`)}>
      <table
        className={clsx(`${prefix}-table`, {
          [`${prefix}-table-border`]: bordered,
        })}
      >
        {showHeader && (
          <thead className={clsx(`${prefix}-table-thead`)}>
            <tr className={clsx(`${prefix}-table-row`)}>
              {rowSelection && (
                <th
                  className={clsx(
                    `${prefix}-table-th`,
                    `${prefix}-table-checkbox`,
                  )}
                  style={{ width: '40px' }}
                >
                  <Checkbox
                    checked={checkAll}
                    onChange={(v: any) => {
                      handleCheckAll(v);
                    }}
                  />
                </th>
              )}
              {indexEq && (
                <th
                  className={clsx(
                    `${prefix}-table-th`,
                    `${prefix}-table-index`,
                  )}
                  style={{ width: '40px' }}
                >
                  #
                </th>
              )}
              {columns &&
                columns.map((item: any, index: any) => {
                  return (
                    <th
                      className={clsx(`${prefix}-table-th`, item.className)}
                      key={item.dataIndex}
                      style={{ width: item.width || 'auto' }}
                    >
                      {onHeaderRow ? onHeaderRow(item, index) : item.title}
                    </th>
                  );
                })}
            </tr>
          </thead>
        )}
        <tbody className={clsx(`${prefix}-table-body`)}>
          <TableChildren
            {...props}
            selectedRowKeys={selectedRowKeys}
            setSelectedRowKeys={handleChange}
            selectedRows={selectedRows}
            setSelectedRows={setSelectedRows}
            expandable={expandable}
            setExpandable={handleChangeExpandable}
            data={dataSource}
            layer={0}
            rowKey={rowKey}
            isTree={isTree}
          />
        </tbody>
      </table>
    </div>
  );
}
