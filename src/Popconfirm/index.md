---
nav:
  title: 组件
  path: /components
group:
  title: Popconfirm 气泡确认框
  order: 27
---

## Popconfirm 气泡确认框

示例：

```tsx
import React from 'react';
import { Popconfirm, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Popconfirm content={'我是一段提示，并且字数不是很多'}>
            默认
          </Popconfirm>
        </Col>
      </Row>
    </div>
  );
};
```

弹出方向：

```tsx
import React from 'react';
import { Popconfirm, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Popconfirm position="top" content={'我是一段提示，并且字数不是很多'}>
            <span>顶部</span>
          </Popconfirm>
        </Col>
        <Col span={4}>
          <Popconfirm
            position="left"
            content={'我是一段提示，并且字数不是很多'}
          >
            <span>左侧</span>
          </Popconfirm>
        </Col>
        <Col span={4}>
          <Popconfirm
            position="right"
            content={'我是一段提示，并且字数不是很多'}
          >
            <span>右侧</span>
          </Popconfirm>
        </Col>
        <Col span={4}>
          <Popconfirm
            position="bottom"
            content={'我是一段提示，并且字数不是很多'}
          >
            <span>底部</span>
          </Popconfirm>
        </Col>
      </Row>
    </div>
  );
};
```
