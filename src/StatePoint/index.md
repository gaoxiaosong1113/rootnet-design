---
nav:
  title: 组件
  path: /components
group:
  title: StatePoint 状态点
  order: 47
---

## StatePoint 状态点

示例：

```tsx
import React from 'react';
import { Card, StatePoint, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <StatePoint text="状态" />
        </Col>
        <Col span={4}>
          <StatePoint type="primary" text="状态" />
        </Col>
        <Col span={4}>
          <StatePoint type="success" text="成功" />
        </Col>
        <Col span={4}>
          <StatePoint type="warning" text="提醒" />
        </Col>
        <Col span={4}>
          <StatePoint type="error" text="错误" />
        </Col>
        <Col span={4}>
          <StatePoint text="状态" radiusColor="red" fontColor="blue" />
        </Col>
      </Row>
    </div>
  );
};
```

<API />
