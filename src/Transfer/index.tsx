import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';
import { pavingArray } from '../_util';

import { Icon, Checkbox, Input, Tree } from '../index';

export interface TransferProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;
  style?: Object;
  children?: ReactNode;

  /**
   * @description      标题
   * @default           -
   */
  title?: any;

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
   * @description      选项在两栏之间转移时的回调函数
   * @default           -
   */
  onChange?: Function;

  /**
   * @description      选中项发生改变时的回调函数
   * @default           -
   */
  onSelectChange?: Function;

  /**
   * @description      搜索框内容时改变时的回调函数
   * @default           -
   */
  onSearch?: Function;
}

function Transfer(props: TransferProps) {
  const {
    title,
    children,
    className,
    style,
    selectRowKeys = [],
    dataSource = [],
    search = false,
    ...prop
  } = props;

  const [sourceSelectedKeys, setSourceSelectedKeys] = useState(
    [] as Array<any>,
  );
  const [targetSelectedKeys, setTargetSelectedKeys] = useState(
    [] as Array<any>,
  );

  const [sourceSearch, setSourceSearch] = useState('');
  const [targetSearch, setTargetSearch] = useState('');

  const [targetKeys, setTargetKeys] = useState(props.targetKeys || []);

  useEffect(() => {
    // setSourceSelectedKeys(selectRowKeys);
    // setTargetSelectedKeys(selectRowKeys);
  }, [selectRowKeys]);

  useEffect(() => {
    // setTargetKeys(props.targetKeys);
  }, [props.targetKeys]);

  const source = useMemo(() => {
    if (sourceSearch) {
      let newData = pavingArray(dataSource);
      return newData.filter(
        (item) =>
          targetKeys.indexOf(item.id) === -1 &&
          item.title.indexOf(sourceSearch) !== -1,
      );
    }
    return dataSource.filter((item) => targetKeys.indexOf(item.id) === -1);
  }, [dataSource, targetKeys, sourceSelectedKeys, sourceSearch]);

  const target = useMemo(() => {
    let newData = pavingArray(dataSource);
    if (targetSearch) {
      return newData.filter((item) => {
        let index = targetKeys.indexOf(item.id);
        if (
          targetKeys[index] === item.id &&
          item.title.indexOf(targetSearch) !== -1
        ) {
          return item;
        }
      });
    }
    return newData
      .filter((item) => {
        let index = targetKeys.indexOf(item.id);
        if (targetKeys[index] === item.id) {
          return item;
        }
      })
      .map((item) => ({
        id: item.id,
        title: item.title,
      }));
  }, [dataSource, targetKeys, sourceSelectedKeys, targetSearch]);

  function handleChange(value: any) {}

  function addKeys() {
    setTargetKeys(
      targetKeys.concat(
        sourceSelectedKeys.filter((item) => targetKeys.indexOf(item) == -1),
      ),
    );
    setSourceSelectedKeys([]);
    setTargetSelectedKeys([]);
  }

  function deleteKeys() {
    setTargetKeys(
      targetKeys.filter((item) => targetSelectedKeys.indexOf(item) == -1),
    );
    setSourceSelectedKeys([]);
    setTargetSelectedKeys([]);
  }

  const Title = useCallback(
    (titleProps: any) => {
      if (title === undefined) return null;

      return (
        <div className={clsx(`${prefix}-transfer-title`, {})}>
          {title instanceof Object ? title[titleProps.type] : title}
        </div>
      );
    },
    [title],
  );

  const Search = useCallback(
    ({ type }) => {
      if (!search) return null;
      return (
        <div className={clsx(`${prefix}-transfer-search`, {})}>
          <Input
            icon={<Icon color="#3A415C" name="enlarge" />}
            value={sourceSearch}
            onChange={(v: any) => {
              if (type == 'source') {
                setSourceSearch(v);
              }
              if (type == 'target') {
                setTargetSearch(v);
              }
            }}
          />
        </div>
      );
    },
    [search],
  );

  const AllCheckbox = useCallback(
    ({ type }) => {
      if (!search) return null;
      return (
        <div className={clsx(`${prefix}-transfer-allCheckbox`, {})}>
          {type == 'source' && (
            <>
              <div
                className={clsx(`${prefix}-transfer-allCheckbox-cotnent`, {})}
              >
                <Checkbox
                  checked={
                    sourceSelectedKeys.length > 0 &&
                    sourceSelectedKeys.length == source.length
                  }
                  indeterminate={
                    sourceSelectedKeys.length > 0 &&
                    sourceSelectedKeys.length < source.length
                  }
                  disabled={!source.length}
                  onChange={(v: any) => {
                    if (v) {
                      setSourceSelectedKeys(source.map((item) => item.id));
                    } else {
                      setSourceSelectedKeys([]);
                    }
                  }}
                >
                  全部
                </Checkbox>
                <div className="num">
                  {sourceSelectedKeys.length}/{source.length}
                </div>
              </div>
              <div
                className={clsx(`${prefix}-transfer-invertSelection`, {})}
                onClick={() => {
                  setSourceSelectedKeys(
                    source
                      .filter(
                        (item) => sourceSelectedKeys.indexOf(item.id) == -1,
                      )
                      .map((item) => item.id),
                  );
                }}
              >
                反选
              </div>
            </>
          )}
          {type == 'target' && (
            <>
              <div
                className={clsx(`${prefix}-transfer-allCheckbox-cotnent`, {})}
              >
                <Checkbox
                  checked={
                    targetSelectedKeys.length > 0 &&
                    targetSelectedKeys.length == target.length
                  }
                  indeterminate={
                    targetSelectedKeys.length > 0 &&
                    targetSelectedKeys.length < target.length
                  }
                  disabled={!target.length}
                  onChange={(v: any) => {
                    if (v) {
                      setTargetSelectedKeys(target.map((item) => item.id));
                    } else {
                      setTargetSelectedKeys([]);
                    }
                  }}
                >
                  全部
                </Checkbox>
                <div className="num">
                  {targetSelectedKeys.length}/{target.length}
                </div>
              </div>
              <div
                className={clsx(`${prefix}-transfer-invertSelection`, {})}
                onClick={() => {
                  setTargetSelectedKeys(
                    target
                      .filter(
                        (item) => targetSelectedKeys.indexOf(item.id) == -1,
                      )
                      .map((item) => item.id),
                  );
                }}
              >
                反选
              </div>
            </>
          )}
        </div>
      );
    },
    [search, sourceSelectedKeys, source, targetSelectedKeys, target],
  );

  return (
    <div className={clsx(className, `${prefix}-transfer`, {})} style={style}>
      <div
        className={clsx(`${prefix}-transfer-left`, {
          [`${prefix}-transfer-noData`]: source.length <= 0,
        })}
      >
        <Title type="left" />
        <Search type="source" />
        <AllCheckbox type="source" />
        <div className={clsx(`${prefix}-transfer-checkbox`, {})}>
          {children ? (
            React.Children.map(children, (item: any, index) => {
              return (
                item &&
                React.cloneElement(item, {
                  dataSource: source,
                  rowSelection: {
                    selectedRowKeys: sourceSelectedKeys,
                    onChange: (key: any) => {
                      setSourceSelectedKeys(key);
                    },
                  },
                })
              );
            })
          ) : (
            <Tree
              dataSource={source}
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
      <div className={clsx(`${prefix}-transfer-operation`, {})}>
        <div
          className={clsx(`${prefix}-transfer-operation-item`, {
            [`${prefix}-transfer-operation-item-disabled`]:
              sourceSelectedKeys.length <= 0,
          })}
        >
          <Icon
            name={'you'}
            size={14}
            color={sourceSelectedKeys.length <= 0 ? '#CFD3E3' : '#fff'}
            onClick={() => {
              if (sourceSelectedKeys.length == 0) return;
              addKeys();
            }}
          />
        </div>
        <div
          className={clsx(`${prefix}-transfer-operation-item`, {
            [`${prefix}-transfer-operation-item-disabled`]:
              targetSelectedKeys.length <= 0,
          })}
        >
          <Icon
            name={'zuo'}
            size={14}
            color={targetSelectedKeys.length <= 0 ? '#CFD3E3' : '#fff'}
            onClick={() => {
              if (targetSelectedKeys.length == 0) return;
              deleteKeys();
            }}
          />
        </div>
      </div>
      <div
        className={clsx(`${prefix}-transfer-right`, {
          [`${prefix}-transfer-noData`]: target.length <= 0,
        })}
      >
        <Title type="right" />
        <Search type="target" />
        <AllCheckbox type="target" />
        <div className={clsx(`${prefix}-transfer-checkbox`, {})}>
          {children ? (
            React.Children.map(children, (item: any, index) => {
              return (
                item &&
                React.cloneElement(item, {
                  dataSource: target,
                  rowSelection: {
                    selectedRowKeys: targetSelectedKeys,
                    onChange: (key: any) => {
                      setTargetSelectedKeys(key);
                    },
                  },
                })
              );
            })
          ) : (
            <Tree
              dataSource={target}
              rowSelection={{
                selectedRowKeys: targetSelectedKeys,
                onChange: (key: any, row: any, indeterminate: any) => {
                  setTargetSelectedKeys(key);
                },
              }}
            />
          )}

          {/* <Checkbox.Group
            onChange={(v: any) => {
              setTargetSelectedKeys(v);
            }}
            checked={targetSelectedKeys}
          >
            {target.map((item) => {
              return (
                <Checkbox value={item.id} key={item.id}>
                  {item.title}
                </Checkbox>
              );
            })}
          </Checkbox.Group> */}
        </div>
      </div>
    </div>
  );
}

export default Transfer;
