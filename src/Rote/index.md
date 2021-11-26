---
nav:
  title: 组件
  path: /components
group:
  title: Rote 评分
  order: 48
---

## Rote 评分

示例：

```tsx
import React from 'react';
import { Card, Rote, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Rote />
        </Col>
        <Col span={4}>
          <Rote value={1} />
        </Col>
        <Col span={4}>
          <Rote value={1.5} color="red" />
        </Col>
        <Col span={4}>
          <Rote value={2.5} color="green" />
        </Col>
        <Col span={4}>
          <Rote value={3.5} color="blue" />
        </Col>
        <Col span={4}>
          <Rote value={5} color="red" style={{ fontSize: '20px' }} />
        </Col>
      </Row>
    </div>
  );
};
```

<API />
