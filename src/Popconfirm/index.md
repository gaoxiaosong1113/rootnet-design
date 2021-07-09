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
            <span>默认</span>
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
            <span>top</span>
          </Popconfirm>
        </Col>
        <Col span={4}>
          <Popconfirm
            position="top-left"
            content={'我是一段提示，并且字数不是很多'}
          >
            <span>top-left</span>
          </Popconfirm>
        </Col>
        <Col span={4}>
          <Popconfirm
            position="top-right"
            content={'我是一段提示，并且字数不是很多'}
          >
            <span>top-right</span>
          </Popconfirm>
        </Col>
        <Col span={4}>
          <Popconfirm
            position="left"
            content={'我是一段提示，并且字数不是很多'}
          >
            <span>left</span>
          </Popconfirm>
        </Col>
        <Col span={4}>
          <Popconfirm
            position="right"
            content={'我是一段提示，并且字数不是很多'}
          >
            <span>right</span>
          </Popconfirm>
        </Col>
        <Col span={4}>
          <Popconfirm
            position="bottom"
            content={'我是一段提示，并且字数不是很多'}
          >
            <span>bottom</span>
          </Popconfirm>
        </Col>
        <Col span={4}>
          <Popconfirm
            position="bottom-left"
            content={'我是一段提示，并且字数不是很多'}
          >
            <span>bottom-left</span>
          </Popconfirm>
        </Col>
        <Col span={4}>
          <Popconfirm
            position="bottom-right"
            content={'我是一段提示，并且字数不是很多'}
          >
            <span>bottom-right</span>
          </Popconfirm>
        </Col>
      </Row>
    </div>
  );
};
```
