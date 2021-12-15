// 引入react依赖
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import ReactDOM from 'react-dom';

// 引入第三方依赖
import clsx from 'clsx';

// 引入样式
import './index.less';

// 引入配置文件
import { prefix } from '../config';

// 引入组件
import { Select } from '../index';

export interface PaginationProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;
  /*
    props参数枚举
    total 总页数  number
    totalNum 总条数 number
    onChange 页码或 pageSize 改变的回调，参数是改变后的页码及每页条数 fun
    onSizeChange 每页显示多少条回调 参数是改变后的页码及每页条数 fun
    prev 上一页(组件、字符串)
    next 下一页(组件、字符串)
    simple 简单分页 boolean 默认false
    pageSizeShow 是否展示 pageSize 切换器 boolean 默认true
    toPageShow 是否可以快速跳转至某页 boolean 默认true
    totalShow 数据总量是否展示 boolean 默认true
    disabled 禁用分页 boolean 默认false
    size 当为 small 时，是小尺寸分页
    */
  /**
   * @description      总条数
   * @default           100
   */
  total: number;

  /**
   * @description      每页显示多少条
   * @default           20
   */
  pageSize: number;

  /**
   * @description      页码或 pageSize 改变的回调，参数是改变后的页码及每页条数
   * @default           -
   */
  onChange?: Function;

  /**
   * @description      每页显示多少条回调 参数是改变后的页码及每页条数
   * @default           100
   */
  onSizeChange?: Function;

  /**
   * @description      上一页(组件、字符串)
   * @default           <
   */
  prev?: any;

  /**
   * @description      下一页(组件、字符串)
   * @default           >
   */
  next?: any;
  /**
   * @description      简单分页
   * @default           false
   */
  simple?: boolean;

  /**
   * @description      是否展示 pageSize 切换器(简单分页不展示)
   * @default           true
   */
  pageSizeShow?: boolean;

  /**
   * @description      是否可以快速跳转至某页(简单分页不展示)
   * @default           true
   */
  toPageShow?: boolean;

  /**
   * @description      数据总量是否展示(简单分页不展示)
   * @default           true
   */
  totalShow?: boolean;

  /**
   * @description      禁用分页
   * @default           false
   */
  disabled?: boolean;

  /**
   * @description      Pagination的尺寸(小尺寸small)
   * @default           正常(32px)
   */
  size?: string;

  /**
   * @description      条数配置选择器，支持boolean类型【启用默认选择器】、array类型【自定义选择器】
   * @default           true
   */
  selector?: Array<number>;

  /**
   * @description      数据总数显示
   * @default           null
   */
  renderTotal?: Function;

  children?: React.ReactChild;
}

function Pagination(props: PaginationProps) {
  const {
    className,
    total,
    onChange,
    onSizeChange,
    simple = false,
    pageSizeShow = true,
    toPageShow = true,
    totalShow = true,
    disabled,
    size,
    selector,
    renderTotal,
  } = props;
  const [pageIndex, setPageIndex] = useState(1); //*当前页码
  const [pageSize, setPageSize] = useState(props.pageSize || 10); //每页显示多少条
  const [toPage, setToPage] = useState(null as any); //跳至多少页
  const [showItem, setShowItem] = useState(7); // 最多显示多少个

  const totalPage = useMemo(() => {
    return Math.ceil(total / pageSize);
  }, [pageSize, total]);

  const list = useMemo(() => {
    if (typeof total !== 'number') {
      console.warn('total 必须为number类型');
      return [];
    }
    if (totalPage <= showItem) {
      return Array.from(Array(totalPage), (v, k) => k + 1);
    }
    let all = Array.from(Array(totalPage), (v, k) => k + 1) as any;

    if (totalPage > showItem && pageIndex <= 5) {
      return all
        .slice(0, 5)
        .concat([
          {
            type: 'next',
            scope: all.slice(5, -1),
          },
        ])
        .concat(all.slice(-1));
    }
    if (totalPage > showItem && pageIndex + 3 < all.slice(-1)[0]) {
      return all
        .slice(0, 1)
        .concat([
          {
            type: 'prev',
            scope: all.slice(1, pageIndex - 2),
          },
        ])
        .concat(all.slice(pageIndex - 2, pageIndex + 1))
        .concat([
          {
            type: 'next',
            scope: all.slice(pageIndex + 2, -2),
          },
        ])
        .concat(all.slice(-1));
    }
    if (totalPage > showItem && pageIndex + 3 >= all.slice(-1)[0]) {
      return all
        .slice(0, 1)
        .concat([
          {
            type: 'prev',
            scope: all.slice(1, pageIndex - 2),
          },
        ])
        .concat(all.slice(all.length - 5));
    }
  }, [pageIndex, pageSize, total, totalPage]);

  // 页数change
  const pageChanging = useCallback(
    (num) => {
      setPageIndex(num);
      onChange?.(num, pageSize);
    },
    [pageIndex, pageSize, total],
  );

  // 上一页
  const onPrev = useCallback(() => {
    if (pageIndex - 1 < 1) return;
    pageChanging(pageIndex - 1);
  }, [pageIndex]);

  // 下一页
  const onNext = useCallback(() => {
    if (pageIndex + 1 > totalPage) return;
    pageChanging(pageIndex + 1);
  }, [pageIndex, total]);

  // 左右展开跳组事件
  const onSetStep = useCallback(
    (distance) => {
      console.log(pageIndex, totalPage);
      if (pageIndex + distance <= 1) {
        pageChanging(1);
      } else if (pageIndex + distance > totalPage) {
        pageChanging(totalPage);
      } else {
        pageChanging(pageIndex + distance);
      }
    },
    [pageIndex],
  );

  // 每页多少条
  const pageSizeChange = useCallback(
    (value) => {
      setPageSize(+value);
      onChange && onChange(pageIndex, +value);
      onSizeChange && onSizeChange(pageIndex, +value);
    },
    [pageSize],
  );

  // 跳页处理
  const toPageInput = useCallback(
    (e: any) => {
      e.target.value = e.target.value.replace(/[^\d]/g, '');
      e.target.value = +e.target.value > totalPage ? totalPage : e.target.value;
      setToPage(+e.target.value || '');
    },
    [toPage],
  );

  // 跳转页数失去焦点事件
  const toPageBlur = useCallback(() => {
    if (!toPage) return;
    setPageIndex(toPage);
    pageChanging(toPage);
    onChange && onChange(toPage, pageSize);
  }, [toPage]);

  return (
    <ul
      className={clsx(className, `${prefix}-pagination`, {
        [`${prefix}-pagination-disabled`]: disabled,
        [`${prefix}-pagination-${size}`]: size,
      })}
    >
      {/* 上一页 */}
      <li onClick={onPrev}>
        <button
          className={clsx(`${prefix}-pagination-item`, `${prefix}-pagination-prev`)}
          disabled={pageIndex == 1 || disabled}
        >
          {props.prev || '<'}
        </button>
      </li>
      {list.map((item: any, index: any) =>
        typeof item === 'number' ? (
          <li key={index}>
            <button
              className={clsx(`${prefix}-pagination-item`, `${prefix}-pagination-page-item`, {
                [`${prefix}-pagination-active`]: pageIndex == item,
              })}
              key={index}
              onClick={() => pageChanging(item)}
              disabled={disabled}
            >
              {item}
            </button>
          </li>
        ) : (
          <li key={index}>
            <button
              className={clsx(
                `${prefix}-pagination-item`,
                `${prefix}-pagination-page-item`,
                `${prefix}-pagination-point-${item.type}`,
              )}
              onClick={() => onSetStep(item.type === 'next' ? +5 : -5)}
              disabled={disabled}
            ></button>
          </li>
        ),
      )}
      {/* 下一页 */}
      <li onClick={onNext}>
        <button
          className={clsx(`${prefix}-pagination-item`, `${prefix}-pagination-next`)}
          disabled={pageIndex == totalPage || disabled}
        >
          {props.next || '>'}
        </button>
      </li>
      {/* 每页显示多少条 */}
      {!simple && pageSizeShow && (
        <li className={clsx(`${prefix}-pagination-pageSize`)}>
          {!Array.isArray(selector) && (
            <Select
              options={[
                {
                  label: '10条/页',
                  value: 10,
                },
                {
                  label: '20条/页',
                  value: 20,
                },
                {
                  label: '50条/页',
                  value: 50,
                },
                {
                  label: '100条/页',
                  value: 100,
                },
              ]}
              className={clsx(`${prefix}-pagination-item`, `${prefix}-pagination-select`)}
              placeholder={`${pageSize}条每页`}
              disabled={disabled}
              onChange={pageSizeChange}
            />
          )}
          {Array.isArray(selector) && (
            <Select
              options={selector.map((item, index) => {
                return {
                  label: `${item}条/页`,
                  value: item,
                };
              })}
              className={clsx(`${prefix}-pagination-item`, `${prefix}-pagination-select`)}
              placeholder={`${pageSize}条/页`}
              disabled={disabled}
              onChange={pageSizeChange}
            />
          )}
        </li>
      )}
      {/* 跳转页码 */}
      {!simple && toPageShow && (
        <li className={clsx(`${prefix}-pagination-toPage`)}>
          <span>跳至</span>
          <input
            className={clsx(`${prefix}-pagination-item`)}
            type="text"
            value={toPage || ''}
            onBlur={toPageBlur}
            onInput={(e) => {
              toPageInput(e);
            }}
            disabled={disabled}
          />
          页
        </li>
      )}
      {/* 数据总条数 */}
      {!simple && totalShow && !renderTotal && (
        <li className={clsx(`${prefix}-pagination-totalNum`)}>共 {total || '0'} 条</li>
      )}
      {/* 数据总条数 */}
      {!simple && totalShow && renderTotal && (
        <li className={clsx(`${prefix}-pagination-totalNum`)}>{renderTotal()}</li>
      )}
    </ul>
  );
}

export default Pagination;
