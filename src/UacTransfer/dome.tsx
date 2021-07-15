import React, { useEffect, useState } from 'react';
import {
  UacTransfer,
  Checkbox,
  Icon,
  Button,
  Grid,
  Table,
  util,
} from 'rootnet-design';

const { onchecked, unchecked, farmatSelectedRowKeys, checkAllData, loopData } =
  util;

const { Row, Col } = Grid;

const dataSource = [
  {
    id: '001',
    productName: '系统基础',
    productStatus: '1',
    children: [
      {
        id: '0011',
        productName: '交易市场',
        productStatus: '1',
        pm: [
          {
            id: '00111',
            stkIndustryNames: '新增',
            productStatus: '1',
            // 禁用的
            disabled: true,
            // 临时授权不可转
            temporary: true,
          },
          {
            id: '00112',
            stkIndustryNames: '编辑',
            productStatus: '1',
          },
          {
            id: '00113',
            stkIndustryNames: '删除',
            productStatus: '1',
          },
        ],
      },
      {
        id: '0012',
        productName: '市场交易日',
        productStatus: '1',
        pm: [
          {
            id: '00121',
            stkIndustryNames: '新增',
            productStatus: '1',
          },
          {
            id: '00122',
            stkIndustryNames: '编辑',
            productStatus: '1',
          },
          {
            id: '00123',
            stkIndustryNames: '删除',
            productStatus: '1',
          },
        ],
      },
    ],
  },
  {
    id: '002',
    productName: '系统基础',
    productStatus: '1',
    children: [
      {
        id: '0021',
        productName: '交易市场',
        productStatus: '1',
        pm: [
          {
            id: '00211',
            stkIndustryNames: '新增',
            productStatus: '1',
          },
          {
            id: '00212',
            stkIndustryNames: '编辑',
            productStatus: '1',
          },
          {
            id: '00213',
            stkIndustryNames: '删除',
            productStatus: '1',
          },
        ],
      },
      {
        id: '0022',
        productName: '市场交易日',
        productStatus: '1',
        pm: [
          {
            id: '00221',
            stkIndustryNames: '新增',
            productStatus: '1',
          },
          {
            id: '00222',
            stkIndustryNames: '编辑',
            productStatus: '1',
          },
          {
            id: '00223',
            stkIndustryNames: '删除',
            productStatus: '1',
          },
        ],
      },
    ],
  },
];

function columns(props) {
  return [
    {
      title: (
        <Checkbox
          checked={props.menuAllChecked}
          indeterminate={props.menuAllindeterminate}
          onChange={props.menuChange}
        >
          {'菜单列表'}
        </Checkbox>
      ),
      dataIndex: 'productName',
      width: 105,
      render: (r) => {
        if (r.productName) {
          return (
            <Checkbox
              disabled={r.disabled || r.temporary}
              checked={props.selectedRowKeys.indexOf(r.id) != -1}
              onChange={(v) => props.menuItemChange(v, r)}
              indeterminate={props.isMenuIndeterminate(r)}
            >
              {r.productName}
            </Checkbox>
          );
        }
      },
    },
    {
      title: (
        <Checkbox
          checked={props.codeAllChecked}
          indeterminate={props.codeAllindeterminate}
          onChange={props.codeChange}
        >
          {'功能列表'}
        </Checkbox>
      ),
      dataIndex: 'pm',
      width: 200,
      render: (r, index, columns) => {
        if (r.children) {
          return null;
        } else {
          return r.pm.map((item, index) => {
            return (
              <Checkbox
                key={index}
                disabled={item.disabled || item.temporary}
                checked={props.selectedRowKeys.indexOf(item.id) != -1}
                onChange={(v) => props.codeItemChange(v, item, r)}
              >
                {item.stkIndustryNames}
              </Checkbox>
            );
          });
        }
      },
    },
    {
      title: '',
      dataIndex: '',
    },
  ];
}

function UACTable(props: any) {
  // 选中项
  const [selectedRowKeys, setSelectedRowKeys] = useState(
    props.rowSelection.selectedRowKeys,
  );

  // 所有菜单权限keys
  const [menuKeys, setMenuKeys] = useState(findMenu(dataSource));
  // 菜单全选
  const [menuAllChecked, setMenuAllChecked] = useState(false);
  // 功能权限keys
  const [codeKeys, setCodeKeys] = useState(findCode(dataSource));
  // 功能全选
  const [codeAllChecked, setCodeAllChecked] = useState(false);
  // 菜单半选
  const [menuAllindeterminate, setMenuAllindeterminate] = useState(false);
  // 功能半选
  const [codeAllindeterminate, setCodeAllindeterminate] = useState(false);
  // 半选集合
  const [indeterminateKeys, setIndeterminateKeys] = useState([]);

  useEffect(() => {
    props.rowSelection.onChange(selectedRowKeys, indeterminateKeys);
  }, [selectedRowKeys]);

  useEffect(() => {
    setMenuKeys(findMenu(dataSource));
  }, [dataSource]);

  // 通过选中项判断是否全选了
  useEffect(() => {
    if (props.rowSelection.selectedRowKeys.length == 0) {
      setCodeAllindeterminate(false);
      setMenuAllindeterminate(false);
    }

    // 找到所有选中的菜单权限
    let menuSelectedKeys = props.rowSelection.selectedRowKeys.filter(
      (item) => menuKeys.indexOf(item) != -1,
    );
    setMenuAllindeterminate(
      menuSelectedKeys.length != 0 && menuKeys.length > menuSelectedKeys.length,
    );
    setMenuAllChecked(menuKeys.length == menuSelectedKeys.length);

    // 找到所有选中的功能权限
    let codeSelectedKeys = props.rowSelection.selectedRowKeys.filter(
      (item) => codeKeys.indexOf(item) != -1,
    );
    setCodeAllindeterminate(
      codeSelectedKeys.length != 0 && codeKeys.length > codeSelectedKeys.length,
    );
    setCodeAllChecked(codeKeys.length == codeSelectedKeys.length);

    setSelectedRowKeys(props.rowSelection.selectedRowKeys);
  }, [props.rowSelection.selectedRowKeys]);

  // 处理菜单全选
  function menuChange(value) {
    menuKeys.map((item) => {
      if (item.disabled || item.temporary) return;
      if (value) {
        onchecked(selectedRowKeys, item);
      } else {
        unchecked(selectedRowKeys, item);
      }
    });

    setSelectedRowKeys([...selectedRowKeys]);
  }

  // 处理菜单项选择
  function menuItemChange(value, row) {
    let childrenKeys = [];

    // 获取所有的子项
    if (row.children) {
      childrenKeys = checkAllData(row.children, 'id');
    }

    childrenKeys.push(row.id);

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
    farmatSelectedRowKeys(dataSource, selectedRowKeys, 'id');
    setSelectedRowKeys([...selectedRowKeys]);
  }

  // 处理功能权限全选
  function codeChange(value) {
    codeKeys.map((item) => {
      if (value) {
        onchecked(selectedRowKeys, item);
      } else {
        unchecked(selectedRowKeys, item);
      }
    });
    setSelectedRowKeys([...selectedRowKeys]);
  }

  // 处理功能项选中
  function codeItemChange(value, row, parent) {
    if (value) {
      onchecked(selectedRowKeys, parent.id);
      onchecked(selectedRowKeys, row.id);
    } else {
      unchecked(selectedRowKeys, row.id);
    }
    setSelectedRowKeys([...selectedRowKeys]);
  }

  // 判断当前项是否为半选
  function isMenuIndeterminate(row) {
    if (selectedRowKeys.length == 0) return false;
    if (row.children) {
      let checkData = loopData(row.children, selectedRowKeys, 'id');
      let allChildrenData = checkAllData(row.children, 'id');
      if (checkData.length > 0) {
        if (checkData.length === allChildrenData.length) {
          unchecked(indeterminateKeys, row.id);
          return false;
        } else {
          onchecked(indeterminateKeys, row.id);
          return true;
        }
      } else {
        unchecked(indeterminateKeys, row.id);
        return false;
      }
    }
  }

  return (
    <Table
      columns={columns({
        ...props,
        menuAllChecked,
        menuAllindeterminate,
        menuChange,
        menuItemChange,
        codeAllChecked,
        codeAllindeterminate,
        codeChange,
        codeItemChange,
        selectedRowKeys,
        indeterminateKeys,
        isMenuIndeterminate,
      })}
      dataSource={dataSource}
    />
  );
}

// 查找菜单数据
function findMenu(data: Array<any>) {
  let menuKeys: any = [];
  function find(loopData: any) {
    loopData.map((item: any) => {
      if (item.children) {
        find(item.children);
      }
      if (item.disabled || item.temporary) return;
      menuKeys.push(item.id);
    });
  }
  find(data);
  return menuKeys;
}

// 查找菜单数据
function findCode(data: Array<any>) {
  let menuKeys: any = [];
  function find(loopData: any) {
    loopData.map((item: any) => {
      if (item.children) {
        find(item.children);
      }
      if (item.pm) {
        item.pm.map((pmItem) => {
          if (pmItem.disabled || pmItem.temporary) return;
          menuKeys.push(pmItem.id);
        });
      }
    });
  }
  find(data);
  return menuKeys;
}

export default () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          {/* <UacTransfer
            leftTitle="我是标题"
            rightTitle="我是右边标题"
            dataSource={dataSource}
            onCancel={(key) => {
              console.log(key, '取消授权');
            }}
            onAuth={(key) => {
              console.log(key, '给授权');
            }}
          > */}
          <UACTable
            rowSelection={{
              selectedRowKeys,
              onChange: (keys, indeterminateKeys) => {
                setSelectedRowKeys(keys);
                console.log(keys, indeterminateKeys);
              },
            }}
          />
          {/* </UacTransfer> */}
        </Col>
      </Row>
    </div>
  );
};
