---
nav:
  title: 组件
  path: /components
group:
  title: Transfer 穿梭框
  order: 43
---

## Transfer 穿梭框

示例：

```tsx
import React, { useState } from 'react';
import { Transfer, Icon, Button, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Transfer
            title="我是标题"
            search
            dataSource={[
              { id: '1', title: '基础管理' },
              { id: '11', title: '客户管理' },
              { id: '111', title: '新增' },
              { id: '112', title: '编辑' },
              { id: '113', title: '删除' },
              { id: '12', title: '交易日管理' },
              { id: '121', title: '新增' },
              { id: '122', title: '编辑' },
              { id: '123', title: '删除' },
              { id: '2', title: '系统管理' },
              { id: '31', title: '交易市场管理' },
              { id: '311', title: '新增' },
              { id: '312', title: '编辑' },
              { id: '313', title: '删除' },
              { id: '32', title: '市场交易日列表' },
              { id: '321', title: '交易日列表' },
              { id: '3211', title: '新增' },
              { id: '3212', title: '编辑' },
              { id: '3213', title: '删除' },
              { id: '322', title: '交易日详情' },
              { id: '3221', title: '新增' },
              { id: '3222', title: '编辑' },
              { id: '3223', title: '删除' },
            ]}
          />
        </Col>
      </Row>
    </div>
  );
};
```

自定义组件：

```tsx
import React, { useState } from 'react';
import { Transfer, Checkbox, Icon, Button, Grid, Table } from 'rootnet-design';

const { Row, Col } = Grid;

const columns = [
  {
    title: '菜单列表',
    dataIndex: 'title',
    width: 105,
  },
  {
    title: '功能列表',
    dataIndex: 'pm',
    width: 200,
  },
  {
    title: '',
    dataIndex: '',
  },
];

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Transfer
            title="我是标题"
            search
            dataSource={[
              { id: '1', title: '基础管理' },
              { id: '11', title: '客户管理' },
              { id: '111', title: '新增' },
              { id: '112', title: '编辑' },
              { id: '113', title: '删除' },
              { id: '12', title: '交易日管理' },
              { id: '121', title: '新增' },
              { id: '122', title: '编辑' },
              { id: '123', title: '删除' },
              { id: '2', title: '系统管理' },
              { id: '31', title: '交易市场管理' },
              { id: '311', title: '新增' },
              { id: '312', title: '编辑' },
              { id: '313', title: '删除' },
              { id: '32', title: '市场交易日列表' },
              { id: '321', title: '交易日列表' },
              { id: '3211', title: '新增' },
              { id: '3212', title: '编辑' },
              { id: '3213', title: '删除' },
              { id: '322', title: '交易日详情' },
              { id: '3221', title: '新增' },
              { id: '3222', title: '编辑' },
              { id: '3223', title: '删除' },
            ]}
          >
            <Table columns={columns} />
          </Transfer>
        </Col>
      </Row>
    </div>
  );
};
```
