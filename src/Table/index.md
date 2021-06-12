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

More skills for writing 示例： https://d.umijs.org/guide/demo-principle
