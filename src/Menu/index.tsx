// 引入react依赖
import React, {
  ReactNode,
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from 'react';
import ReactDOM from 'react-dom';

// 引入第三方依赖

import clsx from 'clsx';

// 引入样式
import './index.less';

// 引入配置文件
import { prefix } from '../config';

// 引入组件
import { Icon } from '../index';

import {
  loopData,
  checkAllData,
  farmatSelectedRowKeys,
  unchecked,
  onchecked,
} from '../_util';

function MenuItem(props: any) {
  const {
    // 层级
    layer,
    rowTitle,
    // tree行 key 的取值，可以是字符串或一个函数
    rowKey,
    // 设置行属性
    onRow,
    data,
    dataSource,
    // 是否树形结构
    isTree,
    expandable,
    setExpandable,
    index,
  } = props;

  const [open, setOpen] = useState(false);
  const [subMenuEnd, setSubMenuEnd] = useState(false);

  const subMenuRef = useRef() as any;
  const subMenuEndRef = useRef(false) as any;

  useEffect(() => {
    setOpen(expandable && expandable?.indexOf(data[rowKey]) != -1);
  }, [expandable]);

  const handleOpen = (event: Event) => {
    let targetOpen = !open;
    if (targetOpen) {
      onchecked(expandable, data[rowKey]);
    } else {
      unchecked(expandable, data[rowKey]);
    }
    setOpen(targetOpen);
    setExpandable([...expandable]);
    event.stopPropagation();
  };

  const child = useMemo(() => {
    return data.children && data.children.length > 0;
  }, [data]);

  let MenuIcon = useCallback(() => {
    if (layer > 0) {
      return null;
    }
    if (!data.icon) {
      return null;
    }
    if (React.isValidElement(data.icon)) {
      return data.icon;
    } else {
      return <div className={clsx(`iconfont icon-${data.icon}`)}>图标</div>;
    }
  }, [data, layer]);

  const handleTransitionEnd = () => {
    setSubMenuEnd(true);
  };

  useEffect(() => {
    if (!open) {
      setSubMenuEnd(false);
    }
  }, [open]);

  const height = useMemo(() => {
    if (open) {
      if (subMenuRef.current && !subMenuEnd) {
        return subMenuRef.current.getBoundingClientRect().height;
      } else {
        return 'auto';
      }
    } else {
      return 0;
    }
  }, [open, subMenuRef.current, subMenuEnd]);

  return (
    <div className={clsx(`${prefix}-menu-item`)}>
      <div
        className={clsx(
          `${prefix}-menu-row`,
          `${prefix}-menu-row-${layer + 1}`,
          {
            [`${prefix}-menu-row-open`]: open,
          },
        )}
        key={rowKey}
        style={{ paddingLeft: (layer + 2) * 16 + 8 }}
      >
        <div
          className={clsx(`${prefix}-menu-row-content`)}
          onClick={child && handleOpen}
        >
          <MenuIcon />
          {!onRow && (
            <div className={`${prefix}-menu-title`} key={data.dataIndex}>
              {data.render ? data.render(data, index) : data[rowTitle]}
            </div>
          )}
          {onRow && onRow(data)}
          {isTree && child && (
            <div className={`${prefix}-menu-collapsed-icon`}>
              <Icon name={'xia'} className={`icon`} size={16} />
            </div>
          )}
        </div>
      </div>
      {child && (
        <div
          className={clsx(`${prefix}-menu-submenu`, {
            [`${prefix}-menu-submenu-open`]: open,
            [`${prefix}-menu-submenu-close`]: !open,
          })}
          onTransitionEnd={handleTransitionEnd}
          style={{
            height,
          }}
        >
          <div ref={subMenuRef}>
            <MenuChildren
              {...props}
              key={index + layer + ''}
              data={data.children}
              layer={layer + 1}
            />
          </div>
        </div>
      )}
    </div>
  );
}

function MenuChildren(props: any) {
  const { data } = props;
  return (
    data &&
    data.map((dataItem: any, index: any) => {
      return <MenuItem {...props} index={index} key={index} data={dataItem} />;
    })
  );
}

export interface MenuProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;
  style?: Object;
  children?: ReactNode;

  /**
   * @description      Menu 的类型
   * @default           -
   */
  type?: string;

  /**
   * @description      设置行属性
   * @default           false
   */
  onRow?: any;

  /**
   * @description      Menu 的数据
   * @default           false
   */
  dataSource?: any;

  /**
   * @description      Menu的尺寸
   * @default           -
   */
  size?: string;

  /**
   * @description      配置是否展开属性
   * @default           -
   */
  expandable?: [];

  /**
   * @description      expandable更改回调
   * @default           -
   */
  onExpandableChange?: Function;

  /**
   * @description      Menu行的类名
   * @default           -
   */
  rowClassName?: string;

  /**
   * @description      Menu行 title 的取值
   * @default           title
   */
  rowTitle?: string;

  /**
   * @description      Menu行 key 的取值
   * @default           id
   */
  rowKey?: string;
}

function Menu(props: MenuProps) {
  const {
    className,
    type = 'default',
    children,
    size,
    dataSource = [],
    rowKey = 'funcCode',
    rowTitle = 'text',
    onRow,
    onExpandableChange,
    ...prop
  } = props;

  const [isTree, setIsTree] = useState(true);
  const [open, setOpen] = useState(true);
  const [expandable, setExpandable] = useState([] as any);

  useEffect(() => {
    if (!props.expandable) return;
    setExpandable(props.expandable);
  }, [props.expandable]);

  function handleChangeExpandable(keys: any) {
    setExpandable(keys);
    onExpandableChange?.(keys);
  }

  return (
    <div
      className={clsx({
        [`${prefix}-menu`]: true,
        [`${prefix}-menu-${type}`]: type,
        [`${prefix}-menu-${size}`]: size,
        [`${prefix}-menu-collapsed`]: !open,
      })}
      {...prop}
    >
      <div
        className={clsx({
          [`${prefix}-menu-collapsed-button`]: true,
        })}
        onClick={() => setOpen(!open)}
      >
        <Icon
          name={open ? 'tiaojianzhankai' : 'tiaojianshouqi'}
          className={`${prefix}-menu-collapsed-icon`}
          size={16}
        />
      </div>
      <div
        className={clsx({
          [`${prefix}-menu-list`]: true,
        })}
      >
        <MenuChildren
          {...prop}
          expandable={expandable}
          setExpandable={handleChangeExpandable}
          rowKey={rowKey}
          rowTitle={rowTitle}
          data={dataSource}
          dataSource={dataSource}
          onRow={onRow}
          layer={0}
          isTree={isTree}
        />
      </div>
    </div>
  );
}

export default Menu;
