---
nav:
  title: 组件
  path: /components
group:
  title: Popover 气泡卡片
  order: 28
---

## Popover 气泡卡片

示例：

```tsx
import React from 'react';
import { Popover, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Popover content={'我是一段提示，并且字数不是很多'}>默认</Popover>
        </Col>
      </Row>
    </div>
  );
};
```

弹出方向：

```tsx
import React from 'react';
import { Popover, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Popover position="top" content={'我是一段提示，并且字数不是很多'}>
            <span>顶部</span>
          </Popover>
        </Col>
        <Col span={4}>
          <Popover position="left" content={'我是一段提示，并且字数不是很多'}>
            <span>左侧</span>
          </Popover>
        </Col>
        <Col span={4}>
          <Popover position="right" content={'我是一段提示，并且字数不是很多'}>
            <span>右侧</span>
          </Popover>
        </Col>
        <Col span={4}>
          <Popover position="bottom" content={'我是一段提示，并且字数不是很多'}>
            <span>底部</span>
          </Popover>
        </Col>
      </Row>
    </div>
  );
};
```

操作项：

```tsx
import React from 'react';
import { Popover, Grid, Tree } from 'rootnet-design';
const { Row, Col } = Grid;

const dataSource = [
  {
    id: '1',
    title: '基础管理',
    children: [
      {
        id: '11',
        title: '客户管理',
        children: [
          {
            id: '111',
            title: '新增',
          },
          {
            id: '112',
            title: '编辑',
          },
          {
            id: '113',
            title: '删除',
          },
        ],
      },
      {
        id: '12',
        title: '交易日管理',
        children: [
          {
            id: '121',
            title: '新增',
          },
          {
            id: '122',
            title: '编辑',
          },
          {
            id: '123',
            title: '删除',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    title: '系统管理',
    children: [
      {
        id: '31',
        title: '交易市场管理',
        children: [
          {
            id: '311',
            title: '新增',
          },
          {
            id: '312',
            title: '编辑',
          },
          {
            id: '313',
            title: '删除',
          },
        ],
      },
      {
        id: '32',
        title: '市场交易日列表',
        children: [
          {
            id: '321',
            title: '交易日列表',
            children: [
              {
                id: '3211',
                title: '新增',
              },
              {
                id: '3212',
                title: '编辑',
              },
              {
                id: '3213',
                title: '删除',
              },
            ],
          },
          {
            id: '322',
            title: '交易日详情',
            children: [
              {
                id: '3221',
                title: '新增',
              },
              {
                id: '3222',
                title: '编辑',
              },
              {
                id: '3223',
                title: '删除',
              },
            ],
          },
        ],
      },
    ],
  },
];

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Popover position="top" content={'1212'}>
            <span>顶部</span>
          </Popover>
        </Col>
      </Row>
    </div>
  );
};
```
