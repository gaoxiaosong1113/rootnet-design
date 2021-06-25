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
          <Tooltip content={'我是一段提示，并且字数不是很多'}>默认提示</Tooltip>
        </Col>
        <Col span={4}>
          <Tooltip position="top" content={'我是一段提示，并且字数不是很多'}>
            顶部提示
          </Tooltip>
        </Col>
        <Col span={4}>
          <Tooltip position="left" content={'我是一段提示，并且字数不是很多'}>
            左侧提示
          </Tooltip>
        </Col>
        <Col span={4}>
          <Tooltip position="right" content={'我是一段提示，并且字数不是很多'}>
            右侧提示
          </Tooltip>
        </Col>
        <Col span={4}>
          <Tooltip position="bottom" content={'我是一段提示，并且字数不是很多'}>
            底部提示
          </Tooltip>
        </Col>
      </Row>
    </div>
  );
};
```
