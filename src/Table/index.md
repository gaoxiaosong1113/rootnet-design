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
    dataIndex: 'productNum',
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
    productNum: 'a001',
    productName: '我是产品名称',
    stkIndustryNames: '私募产品',
    productStatus: '1',
  },
  {
    productNum: 'a001',
    productName: '我是产品名称',
    stkIndustryNames: '私募产品',
    productStatus: '2',
  },
  {
    productNum: 'a001',
    productName: '我是产品名称',
    stkIndustryNames: '私募产品',
    productStatus: '1',
  },
];

export default () => <Table columns={columns} dataSource={dataSource} />;
```

折叠树:

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
        console.log(r, index, columns);
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
    productNum: 'a001',
    productName: '系统基础',
    productStatus: '1',
    children: [
      {
        productNum: 'a001',
        stkIndustryNames: '私募产品',
        productName: '交易市场',
        productStatus: '1',
        pm: [
          {
            productNum: 'a001',
            stkIndustryNames: '新增',
            productStatus: '1',
          },
          {
            productNum: 'a001',
            stkIndustryNames: '编辑',
            productStatus: '1',
          },
          {
            productNum: 'a001',
            stkIndustryNames: '删除',
            productStatus: '1',
          },
        ],
      },
      {
        productNum: 'a001',
        stkIndustryNames: '市场交易日',
        productStatus: '1',
        pm: [
          {
            productNum: 'a001',
            stkIndustryNames: '新增',
            productStatus: '1',
          },
          {
            productNum: 'a001',
            stkIndustryNames: '编辑',
            productStatus: '1',
          },
          {
            productNum: 'a001',
            stkIndustryNames: '删除',
            productStatus: '1',
          },
        ],
      },
    ],
  },
];

export default () => <Table columns={columns} dataSource={dataSource} isTree />;
```
