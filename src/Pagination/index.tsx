// 引入react依赖
import React, { useState, useEffect, useCallback } from 'react';
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
    totalPage 总页数  number
    totalNum 总条数 number
    onChange 页码或 pageSize2 改变的回调，参数是改变后的页码及每页条数 fun
    onSizeChange 每页显示多少条回调 参数是改变后的页码及每页条数 fun
    prev 上一页(组件、字符串)
    next 下一页(组件、字符串)
    simple 简单分页 boolean 默认false
    pageSizeShow 是否展示 pageSize 切换器 boolean 默认true
    toPageShow 是否可以快速跳转至某页 boolean 默认true
    totalNumShow 数据总量是否展示 boolean 默认true
    disabled 禁用分页 boolean 默认false
    size 当为 small 时，是小尺寸分页
    */
  /**
   * @description      总页数
   * @default           100
   */
  totalPage: number;

  /**
   * @description      总条数
   * @default           -
   */
  totalNum: number;

  /**
   * @description      每页显示多少条
   * @default           20
   */
  pageSize: number;

  /**
   * @description      页码或 pageSize2 改变的回调，参数是改变后的页码及每页条数
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
  totalNumShow?: boolean;

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
  totalDOM?: Function;

  children?: React.ReactChild;
}

function Pagination(props: PaginationProps) {
  const {
    className,
    totalPage,
    totalNum,
    pageSize,
    onChange,
    onSizeChange,
    simple = false,
    pageSizeShow = true,
    toPageShow = true,
    totalNumShow = true,
    disabled,
    size,
    selector,
    totalDOM,
  } = props;
  const [now, setNow] = useState(1); //*当前页码
  const [leftStepper, setLeftStepper] = useState(false); //*左侧的省略号
  const [rightStepper, setRightStepper] = useState(false); //*右侧的省略号
  const [node, setNode] = useState([] as any); //*节点渲染数组
  const [pageSize2, setPageSize2] = useState(pageSize || 10); //每页显示多少条
  const [toPage, setToPage] = useState(null as any); //跳至多少页
  // const pageSizeRecent = useRef(''); // 最新pageSize值
  // 指定数组
  const list = (len: any) => [...new Array(len + 1).keys()];

  useEffect(
    function () {
      watcher(now);
    },
    [totalPage],
  );

  // 渲染展示的分页
  const watcher = useCallback(
    (now) => {
      setLeftStepper(now - 4 > 0 && totalPage > 5);
      setRightStepper(now + 4 < totalPage && totalPage > 6);

      // 不够5页时显示
      if (totalPage < 6) {
        setNode(list(totalPage).splice(2));
        return;
      }
      // 只有一页时显示
      if (totalPage <= 1) {
        setNode([]);
        return;
      }

      if (now < 4) {
        setNode([2, 3, 4, 5]);
      } else if (now > totalPage - 4) {
        setNode([
          totalPage - 5,
          totalPage - 4,
          totalPage - 3,
          totalPage - 2,
          totalPage - 1,
        ]);
      } else {
        setNode([now - 2, now - 1, now, now + 1, now + 2]);
      }
    },
    [totalPage],
  );

  // 页数change
  const pageChanging = useCallback(
    (num) => {
      setNow(num);
      watcher(num);
      onChange && onChange(num, pageSize2);
    },
    [now, totalPage],
  );

  // 上一页
  const onPrev = useCallback(() => {
    if (now - 1 < 1) return;
    pageChanging(now - 1);
  }, [now]);

  // 下一页
  const onNext = useCallback(() => {
    if (now + 1 > totalPage) return;
    pageChanging(now + 1);
  }, [now, totalPage]);

  // 左右展开跳组事件
  const onSetStep = useCallback(
    (distance) => {
      if (now + distance <= 1) {
        pageChanging(1);
      } else if (now + distance > totalPage) {
        pageChanging(totalPage);
      } else {
        pageChanging(now + distance);
      }
    },
    [now],
  );

  // 每页多少条
  const pageSizeChange = useCallback(
    (value) => {
      setPageSize2(+value);
      onChange && onChange(now, +value);
      onSizeChange && onSizeChange(now, +value);
    },
    [pageSize2],
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
    setNow(toPage);
    pageChanging(toPage);
    onChange && onChange(toPage, pageSize2);
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
          className="c-pagination-item c-pagination-prev"
          disabled={now == 1 || disabled}
        >
          {props.prev || '<'}
        </button>
      </li>
      {/* 第一页 */}
      <li>
        <button
          onClick={pageChanging.bind(null, 1)}
          className={
            now == 1
              ? 'c-pagination-item c-pagination-active'
              : 'c-pagination-item'
          }
          disabled={disabled}
        >
          1
        </button>
      </li>
      {/* 左侧展开前进 */}
      {leftStepper && (
        <li>
          <button
            className="c-pagination-item c-pagination-point-prev c-pagination-left"
            onClick={() => onSetStep(-5)}
            disabled={disabled}
          ></button>
        </li>
      )}
      {/* 显示的页码 */}
      {node.map(function (num: any, index: any) {
        return (
          <li key={index}>
            <button
              className={
                now == num
                  ? 'c-pagination-item c-pagination-active'
                  : 'c-pagination-item'
              }
              key={index}
              onClick={pageChanging.bind(null, num)}
              disabled={disabled}
            >
              {num}
            </button>
          </li>
        );
      })}
      {/* 右侧展开前进 */}
      {rightStepper && (
        <li>
          <button
            className="c-pagination-item c-pagination-point-next c-pagination-right"
            onClick={() => onSetStep(5)}
            disabled={disabled}
          ></button>
        </li>
      )}
      {/* 尾页 */}
      {totalPage > 5 && (
        <li>
          <button
            onClick={pageChanging.bind(null, totalPage)}
            className={
              now == totalPage
                ? 'c-pagination-item c-pagination-active'
                : 'c-pagination-item'
            }
            disabled={disabled}
          >
            {totalPage}
          </button>
        </li>
      )}
      {/* 下一页 */}
      <li onClick={onNext}>
        <button
          className="c-pagination-item c-pagination-next"
          disabled={now == totalPage || disabled}
        >
          {props.next || '>'}
        </button>
      </li>
      {/* 每页显示多少条 */}
      {!simple && pageSizeShow && (
        <li className="c-pagination-pageSize">
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
              className="c-pagination-item c-pagination-select"
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
              className="c-pagination-item c-pagination-select"
              placeholder={`${pageSize}条/页`}
              disabled={disabled}
              onChange={pageSizeChange}
            />
          )}
        </li>
      )}
      {/* 跳转页码 */}
      {!simple && toPageShow && totalPage != 1 && (
        <li className="c-pagination-toPage">
          跳至
          <input
            className="c-pagination-item"
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
      {!simple && totalNumShow && !totalDOM && (
        <li className="c-pagination-totalNum">共 {totalNum || '0'} 条</li>
      )}
      {/* 数据总条数 */}
      {!simple && totalNumShow && totalDOM && (
        <li className="c-pagination-totalNum">{totalDOM()}</li>
      )}
    </ul>
  );
}

export default Pagination;
