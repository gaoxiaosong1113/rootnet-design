---
nav:
  title: 组件
  path: /components
group:
  title: Table 表格
  order: 38
---

## Table 表格

示例:

```tsx
import React from 'react';
import { Table } from 'rootnet-design';

const columns = [
  {
    title: '产品代码',
    dataIndex: 'id',
    width: 105,
  },
  {
    title: '产品简称',
    dataIndex: 'productName',
    width: 200,
  },
  {
    title: '所属分组',
    dataIndex: 'stkIndustryNames',
    width: 251,
  },
  {
    title: '产品状态',
    dataIndex: 'productStatus',
    width: 107,
    render: (r) => {
      if (r.productStatus == 1) {
        return '上市';
      }
      if (r.productStatus == 2) {
        return '注销';
      }
    },
  },
  {
    title: '',
    dataIndex: '',
  },
];

const dataSource = [
  {
    id: 'a001',
    productName: '我是产品名称',
    stkIndustryNames: '私募产品',
    productStatus: '1',
  },
  {
    id: 'a001',
    productName: '我是产品名称',
    stkIndustryNames: '私募产品',
    productStatus: '2',
  },
  {
    id: 'a001',
    productName: '我是产品名称',
    stkIndustryNames: '私募产品',
    productStatus: '1',
  },
];

export default () => <Table columns={columns} dataSource={dataSource} />;
```

折叠 table:

```tsx
import React from 'react';
import { Table, Checkbox } from 'rootnet-design';

const columns = [
  {
    title: <Checkbox>{'菜单列表'}</Checkbox>,
    dataIndex: 'productName',
    width: 105,
    render: (r) => {
      if (r.productName) {
        return <Checkbox>{r.productName}</Checkbox>;
      }
    },
  },
  {
    title: <Checkbox>{'功能列表'}</Checkbox>,
    dataIndex: 'pm',
    width: 200,
    render: (r, index, columns) => {
      if (r.children) {
        return null;
      } else {
        return r.pm.map((item, index) => {
          return (
            <Checkbox
              onChange={(v) => {
                console.log(v);
              }}
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

const dataSource = [
  {
    id: 'a001',
    productName: '系统基础',
    productStatus: '1',
    children: [
      {
        id: 'a001',
        productName: '交易市场',
        productStatus: '1',
        pm: [
          {
            id: 'a001',
            stkIndustryNames: '新增',
            productStatus: '1',
          },
          {
            id: 'a001',
            stkIndustryNames: '编辑',
            productStatus: '1',
          },
          {
            id: 'a001',
            stkIndustryNames: '删除',
            productStatus: '1',
          },
        ],
      },
      {
        id: 'a001',
        productName: '市场交易日',
        productStatus: '1',
        pm: [
          {
            id: 'a001',
            stkIndustryNames: '新增',
            productStatus: '1',
          },
          {
            id: 'a001',
            stkIndustryNames: '编辑',
            productStatus: '1',
          },
          {
            id: 'a001',
            stkIndustryNames: '删除',
            productStatus: '1',
          },
        ],
      },
    ],
  },
];

export default () => <Table columns={columns} dataSource={dataSource} />;
```

默认展开:

```tsx
import React from 'react';
import { Table, Checkbox } from 'rootnet-design';

const columns = [
  {
    title: <Checkbox>{'菜单列表'}</Checkbox>,
    dataIndex: 'productName',
    width: 105,
    render: (r) => {
      if (r.productName) {
        return <Checkbox>{r.productName}</Checkbox>;
      }
    },
  },
  {
    title: <Checkbox>{'功能列表'}</Checkbox>,
    dataIndex: 'pm',
    width: 200,
    render: (r, index, columns) => {
      if (r.children) {
        return null;
      } else {
        return r.pm.map((item, index) => {
          return (
            <Checkbox
              onChange={(v) => {
                console.log(v);
              }}
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
            id: 'a001',
            stkIndustryNames: '新增',
            productStatus: '1',
          },
          {
            id: 'a001',
            stkIndustryNames: '编辑',
            productStatus: '1',
          },
          {
            id: 'a001',
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
            id: 'a001',
            stkIndustryNames: '新增',
            productStatus: '1',
          },
          {
            id: 'a001',
            stkIndustryNames: '编辑',
            productStatus: '1',
          },
          {
            id: 'a001',
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
            id: 'a001',
            stkIndustryNames: '新增',
            productStatus: '1',
          },
          {
            id: 'a001',
            stkIndustryNames: '编辑',
            productStatus: '1',
          },
          {
            id: 'a001',
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
            id: 'a001',
            stkIndustryNames: '新增',
            productStatus: '1',
          },
          {
            id: 'a001',
            stkIndustryNames: '编辑',
            productStatus: '1',
          },
          {
            id: 'a001',
            stkIndustryNames: '删除',
            productStatus: '1',
          },
        ],
      },
    ],
  },
];

export default () => (
  <Table
    columns={columns}
    dataSource={dataSource}
    rowKey="id"
    expandable={['002']}
  />
);
```

可选列:

```tsx
import React, { useState } from 'react';
import { Table, Checkbox } from 'rootnet-design';

const columns = [
  {
    title: <Checkbox>{'菜单列表'}</Checkbox>,
    dataIndex: 'productName',
    width: 105,
    render: (r) => {
      if (r.productName) {
        return <Checkbox>{r.productName}</Checkbox>;
      }
    },
  },
  {
    title: <Checkbox>{'功能列表'}</Checkbox>,
    dataIndex: 'pm',
    width: 200,
    render: (r, index, columns) => {
      if (r.children) {
        return null;
      } else {
        return r.pm.map((item, index) => {
          return (
            <Checkbox
              onChange={(v) => {
                console.log(v);
              }}
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
            id: 'a001',
            stkIndustryNames: '新增',
            productStatus: '1',
          },
          {
            id: 'a001',
            stkIndustryNames: '编辑',
            productStatus: '1',
          },
          {
            id: 'a001',
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
            id: 'a001',
            stkIndustryNames: '新增',
            productStatus: '1',
          },
          {
            id: 'a001',
            stkIndustryNames: '编辑',
            productStatus: '1',
          },
          {
            id: 'a001',
            stkIndustryNames: '删除',
            productStatus: '1',
          },
        ],
      },
    ],
  },
  {
    id: '003',
    productName: '系统基础',
    productStatus: '1',
    children: [
      {
        id: '0021',
        productName: '交易市场',
        productStatus: '1',
        pm: [
          {
            id: 'a001',
            stkIndustryNames: '新增',
            productStatus: '1',
          },
          {
            id: 'a001',
            stkIndustryNames: '编辑',
            productStatus: '1',
          },
          {
            id: 'a001',
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
            id: 'a001',
            stkIndustryNames: '新增',
            productStatus: '1',
          },
          {
            id: 'a001',
            stkIndustryNames: '编辑',
            productStatus: '1',
          },
          {
            id: 'a001',
            stkIndustryNames: '删除',
            productStatus: '1',
          },
        ],
        children: [
          {
            id: '00221',
            productName: '市场交易日',
            productStatus: '1',
            pm: [
              {
                id: 'a0011',
                stkIndustryNames: '新增',
                productStatus: '1',
              },
              {
                id: 'a0012',
                stkIndustryNames: '编辑',
                productStatus: '1',
              },
              {
                id: 'a0013',
                stkIndustryNames: '删除',
                productStatus: '1',
              },
            ],
          },
        ],
      },
    ],
  },
];

export default () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      rowSelection={{
        selectedRowKeys: [],
        onChange: (key, row) => {
          console.log(key, row, 'onChange');
        },
        onSelect: (key, row) => {
          setSelectedRowKeys(key);
          console.log(key, row, 'onSelect');
        },
        onSelectAll: (key, row) => {
          console.log(key, row, 'onSelectAll');
        },
        onSelectInvert: (key, row) => {
          console.log(key, row, 'onSelectInvert');
        },
        renderCell: (key, row) => {
          console.log(key, row, 'renderCell');
        },
      }}
      rowKey="id"
      expandable={['002']}
    />
  );
};
```
