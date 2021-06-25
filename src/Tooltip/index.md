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
          <Tooltip content={'删除后将无法恢复'}>删除</Tooltip>
        </Col>
        <Col span={4}>
          <Tooltip position="top" content={'删除后将无法恢复'}>
            删除
          </Tooltip>
        </Col>
        <Col span={4}>
          <Tooltip position="left" content={'删除后将无法恢复'}>
            删除
          </Tooltip>
        </Col>
        <Col span={4}>
          <Tooltip position="right" content={'删除后将无法恢复'}>
            删除
          </Tooltip>
        </Col>
        <Col span={4}>
          <Tooltip position="bottom" content={'删除后将无法恢复'}>
            删除
          </Tooltip>
        </Col>
      </Row>
    </div>
  );
};
```
