// 引入react依赖
import React, { useReducer, useEffect, Fragment, useState } from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

interface TableItemProps {
  /**
   * @description      图标的样式名
   * @default           -
   */
  className?: string;

  /**
   * @description      层级
   * @default           -
   */
  layer?: string;

  /**
   * @description      是否显示索引
   * @default           false
   */
  indexEq?: string;

  /**
   * @description      表格列的配置
   * @default           false
   */
  columns?: string;

  /**
   * @description      配置是否展开属性
   * @default           false
   */
  expandable?: string;

  /**
   * @description      设置表格内各类浮层的渲染节点，如筛选菜单
   * @default           false
   */
  getPopupContainer?: string;

  /**
   * @description      表格行的类名
   * @default           false
   */
  rowClassName?: string;

  /**
   * @description      表格行 key 的取值，可以是字符串或一个函数
   * @default           false
   */
  rowKey?: string;

  /**
   * @description      表格行是否可选择，配置项
   * @default           false
   */
  rowSelection?: string;

  /**
   * @description      表格大小	default | middle | small
   * @default           default
   */
  size?: string;

  /**
   * @description      表格的头部
   * @default           false
   */
  onHeaderRow?: string;

  /**
   * @description      设置行属性
   * @default           false
   */
  onRow?: string;

  /**
   * @description      表格的数据
   * @default           false
   */
  data?: Array<any>;

  /**
   * @description      是否树形结构
   * @default           false
   */
  isTree?: string;

  /**
   * @description      当前行的索引值
   * @default           false
   */
  index?: string;
}

function TableItem(props: TableItemProps) {
  const {
    // 层级
    layer,
    // 是否显示索引
    indexEq = true,
    // 表格列的配置描述
    columns = [],
    // 配置展开属性
    expandable,
    // 设置表格内各类浮层的渲染节点，如筛选菜单
    getPopupContainer,
    // 表格行的类名
    rowClassName,
    // 表格行 key 的取值，可以是字符串或一个函数
    rowKey,
    // 表格行是否可选择，配置项
    rowSelection,
    // 表格大小	default | middle | small
    size = 'default',
    onHeaderRow,
    // 设置行属性
    onRow,
    data,
    // 是否树形结构
    isTree,
    index,
  } = props;

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  let child = data.childList && data.childList.length > 0;

  return (
    <>
      <tr className={`${prefix}-table-row`} key={rowKey}>
        {isTree && (
          <td
            className={`${prefix}-table-td ${prefix}-table-collapsed`}
            style={{ width: '40px' }}
            onClick={child && handleOpen}
          >
            {child && (
              <Icon
                name="dropdown"
                className={`${prefix}-table-collapsed-icon`}
                style={{ transform: `rotate(${open ? 0 : -95}deg)` }}
                size={10}
              />
            )}
          </td>
        )}
        {indexEq && (
          <td
            className={`${prefix}-table-td ${prefix}-table-index`}
            style={{ width: '40px' }}
          >
            {layer == 0 && index + 1}
          </td>
        )}
        {columns &&
          columns.map((item, index) => {
            return (
              <td
                className={`${prefix}-table-td ${item.className || ''}`}
                key={item.dataIndex}
                style={{ width: item.width || 'auto' }}
              >
                {item.render
                  ? item.render(data, index, columns)
                  : data[item.dataIndex]}
              </td>
            );
          })}
      </tr>
      {open && child && (
        <TableChildren
          {...props}
          key={index + layer + ''}
          data={data.childList}
          layer={layer + 1}
        />
      )}
    </>
  );
}

function TableChildren(props) {
  const { data } = props;

  return (
    data &&
    data.map((dataItem, index) => {
      return <TableItem {...props} index={index} key={index} data={dataItem} />;
    })
  );
}

export default function Table(props) {
  const {
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
    // 配置展开属性
    expandable,
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
    rowKey,
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
  } = props;

  const [isTree, setIsTree] = useState(false);

  // useEffect(() => {
  //     // dataSource.map(item=>{})
  //     for (let i = 0; i < dataSource.length; i++) {
  //         if (dataSource[i].childList && dataSource[i].childList.length > 0) {
  //             setIsTree(true)
  //             break;
  //         }
  //     }
  // }, [dataSource])
  useEffect(() => {
    // dataSource.map(item=>{})
    console.log(dataSource);
    for (let i = 0; i < dataSource.length; i++) {
      if (dataSource[i].childList && dataSource[i].childList.length > 0) {
        setIsTree(true);
        break;
      }
    }
  }, []);

  return (
    <div className={`${prefix}-tables`}>
      <table
        className={clsx({
          [`${prefix}-table`]: true,
          [`${prefix}-table-border`]: bordered,
        })}
      >
        {showHeader && (
          <thead className={`${prefix}-table-thead`}>
            <tr className={`${prefix}-table-row`}>
              {isTree && (
                <th
                  className={`${prefix}-table-th ${prefix}-table-collapsed`}
                  style={{ width: '40px' }}
                >
                  <Icon
                    name="dropdown"
                    className={`${prefix}-table-collapsed-icon`}
                    size={10}
                  />
                </th>
              )}
              {indexEq && (
                <th
                  className={`${prefix}-table-th ${prefix}-table-index`}
                  style={{ width: '40px' }}
                >
                  #
                </th>
              )}
              {columns &&
                columns.map((item, index) => {
                  return (
                    <th
                      className={clsx(
                        {
                          [`${prefix}-table-th`]: true,
                        },
                        item.className,
                      )}
                      key={item.dataIndex}
                      style={{ width: item.width || 'auto' }}
                    >
                      {item.title}
                    </th>
                  );
                })}
            </tr>
          </thead>
        )}
        <tbody className={`${prefix}-table-body`}>
          <TableChildren
            {...props}
            data={dataSource}
            layer={0}
            isTree={isTree}
          />
        </tbody>
      </table>
      {/* {loading && <Loader fill />} */}
    </div>
  );
}
