---
nav:
  title: 组件
  path: /components
group:
  title: Tooltip 文字提示
  order: 42
---

## Tooltip 文字提示

示例：

```tsx
import React from 'react';
import { Tooltip, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Tooltip position="top" content={'我是一段提示，并且字数不是很多'}>
            <span>顶部提示</span>
          </Tooltip>
        </Col>
        <Col span={4}>
          <Tooltip position="left" content={'我是一段提示，并且字数不是很多'}>
            <span>左侧提示</span>
          </Tooltip>
        </Col>
        <Col span={4}>
          <Tooltip position="right" content={'我是一段提示，并且字数不是很多'}>
            <span>右侧提示</span>
          </Tooltip>
        </Col>
        <Col span={4}>
          <Tooltip position="bottom" content={'我是一段提示，并且字数不是很多'}>
            <span>底部提示</span>
          </Tooltip>
        </Col>
      </Row>
    </div>
  );
};
```

触发方式：

```tsx
import React from 'react';
import { Tooltip, Input, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Tooltip trigger="click" content={'我是一段提示，并且字数不是很多'}>
            <span>click</span>
          </Tooltip>
        </Col>
        <Col span={4}>
          <Tooltip trigger="focus" content={'我是一段提示，并且字数不是很多'}>
            <Input placeholder="focus" />
          </Tooltip>
        </Col>
        <Col span={4}>
          <Tooltip trigger="hover" content={'我是一段提示，并且字数不是很多'}>
            <span>hover</span>
          </Tooltip>
        </Col>
      </Row>
    </div>
  );
};
```
