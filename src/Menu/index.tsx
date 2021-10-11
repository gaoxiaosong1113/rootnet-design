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
import { Icon, Tooltip } from '../index';

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
    setChecked,
    checked,
    collapsed,
  } = props;

  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0) as any;

  const subMenuRef = useRef() as any;

  // useEffect(()=>{
  //   if(collapsed){
  //     setHeight('auto')
  //   }
  // },[collapsed])

  useEffect(() => {
    let targetOpen = expandable.indexOf(data[rowKey]) != -1;
    // handleCloseAn(targetOpen);
    if (!targetOpen) {
      if (collapsed) {
        setHeight('auto');
      } else {
        setHeight(0);
      }
    }
    setOpen(targetOpen);
  }, [expandable, collapsed]);

  const handleClick = (event: any): any => {
    if (child) {
      if (collapsed) {
        return;
      }

      let targetOpen = !open;
      if (targetOpen) {
        onchecked(expandable, data[rowKey]);
      } else {
        unchecked(expandable, data[rowKey]);
      }
      handleCloseAn(targetOpen);
      setOpen(targetOpen);
      setExpandable([...expandable]);
    } else {
      setChecked(data[rowKey], data);
    }
    event.stopPropagation();
  };

  const handleCloseAn = (targetOpen: any) => {
    if (!subMenuRef.current) return;
    setHeight(subMenuRef.current.getBoundingClientRect().height);
    if (targetOpen) {
      let time = setTimeout(() => {
        clearTimeout(time);
        setHeight('auto');
      }, 350);
    } else {
      let time = setTimeout(() => {
        clearTimeout(time);
        setHeight(0);
      }, 5);
    }
  };

  const child = useMemo(() => {
    return data.children && data.children.length > 0;
  }, [data]);

  const MenuIcon = useCallback(() => {
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

  const Title = useCallback(
    (titleProps) => {
      const content = (
        <div
          className={clsx(
            `${prefix}-menu-row`,
            `${prefix}-menu-row-${layer + 1}`,
            {
              [`${prefix}-menu-row-open`]: open,
              [`${prefix}-menu-row-checked`]: checked === data[rowKey],
            },
          )}
          key={rowKey}
          style={{ paddingLeft: collapsed ? 0 : (layer + 1) * 16 }}
        >
          {titleProps.children}
        </div>
      );
      if (collapsed && !child && layer == 0) {
        return (
          <Tooltip
            trigger={'hover'}
            position={'right'}
            content={data[rowTitle]}
          >
            {content}
          </Tooltip>
        );
      }
      return content;
    },
    [collapsed, checked],
  );

  return (
    <div
      className={clsx(`${prefix}-menu-item`, {
        [`${prefix}-menu-item-collapsed`]: collapsed,
      })}
      onMouseOver={() => {
        if (collapsed && child) {
          setOpen(true);
        }
      }}
      onMouseOut={() => {
        if (collapsed && child) {
          setOpen(false);
        }
      }}
    >
      <Title>
        <div
          className={clsx(`${prefix}-menu-row-content`)}
          onClick={(event) => handleClick(event)}
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
      </Title>

      {child && (
        <div
          className={clsx(`${prefix}-menu-submenu`, {
            [`${prefix}-menu-submenu-open`]: open,
            [`${prefix}-menu-submenu-close`]: !open,
          })}
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

  /**
   * @description      展开收起
   * @default           false
   */
  collapsed?: boolean;

  /**
   * @description      展开收起的回调
   * @default           -
   */
  onCollapsed?: Function;

  /**
   * @description      选中的回调
   * @default           -
   */
  onChecked?: Function;
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
    onCollapsed,
    onChecked,
    ...prop
  } = props;

  const [checked, setChecked] = useState(null);
  const [expandable, setExpandable] = useState(props.expandable || []);
  const [collapsed, setCollapsed] = useState(props.collapsed || false) as any;

  useEffect(() => {
    if (props.expandable !== undefined) setExpandable(props.expandable);
  }, [props.expandable]);

  useEffect(() => {
    if (props.collapsed !== undefined) setCollapsed(props.collapsed);
  }, [props.collapsed]);

  function handleChangeExpandable(keys: any) {
    setExpandable(keys);
    onExpandableChange?.(keys);
  }

  function handleClose() {
    setCollapsed(!collapsed);
    setExpandable([]);
    onExpandableChange?.([]);
  }

  function handleChecked(v: any, d: any) {
    onChecked?.(v, d);
    setChecked(v);
  }

  return (
    <div
      className={clsx(className, {
        [`${prefix}-menu`]: true,
        [`${prefix}-menu-${type}`]: type,
        [`${prefix}-menu-${size}`]: size,
        [`${prefix}-menu-collapsed`]: collapsed,
      })}
    >
      <div
        className={clsx({
          [`${prefix}-menu-collapsed-button`]: true,
        })}
        onClick={handleClose}
      >
        <Icon
          name={collapsed ? 'tiaojianshouqi' : 'tiaojianzhankai'}
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
          isTree={true}
          checked={checked}
          setChecked={handleChecked}
          collapsed={collapsed}
        />
      </div>
    </div>
  );
}

export default Menu;
