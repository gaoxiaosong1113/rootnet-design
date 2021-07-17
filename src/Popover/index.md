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
    <div style={{ height: 300, overflowX: 'auto' }}>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Popover content={'我是一段提示，并且字数不是很多'}>
            <span>默认</span>
          </Popover>
        </Col>
      </Row>
      <div style={{ height: 999 }}></div>
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
            <span>top</span>
          </Popover>
        </Col>
        <Col span={4}>
          <Popover
            position="top-left"
            content={'我是一段提示，并且字数不是很多'}
          >
            <span>top-left</span>
          </Popover>
        </Col>
        <Col span={4}>
          <Popover
            position="top-right"
            content={'我是一段提示，并且字数不是很多'}
          >
            <span>top-right</span>
          </Popover>
        </Col>
        <Col span={4}>
          <Popover position="left" content={'我是一段提示，并且字数不是很多'}>
            <span>left</span>
          </Popover>
        </Col>
        <Col span={4}>
          <Popover position="right" content={'我是一段提示，并且字数不是很多'}>
            <span>right</span>
          </Popover>
        </Col>
        <Col span={4}>
          <Popover position="bottom" content={'我是一段提示，并且字数不是很多'}>
            <span>bottom</span>
          </Popover>
        </Col>
        <Col span={4}>
          <Popover
            position="bottom-left"
            content={'我是一段提示，并且字数不是很多'}
          >
            <span>bottom-left</span>
          </Popover>
        </Col>
        <Col span={4}>
          <Popover
            position="bottom-right"
            content={'我是一段提示，并且字数不是很多'}
          >
            <span>bottom-right</span>
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
