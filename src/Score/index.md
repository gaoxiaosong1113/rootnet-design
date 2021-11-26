---
nav:
  title: 组件
  path: /components
group:
  title: Score 评分
  order: 48
---

## Score 评分

示例：

```tsx
import React from 'react';
import { Card, Score, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Score />
        </Col>
        <Col span={4}>
          <Score num="1" />
        </Col>
        <Col span={4}>
          <Score num="1.5" fill="red" />
        </Col>
        <Col span={4}>
          <Score num="2.5" fill="green" />
        </Col>
        <Col span={4}>
          <Score num="3.5" fill="blue" />
        </Col>
        <Col span={4}>
          <Score num="5" fill="red" style={{ fontSize: '20px' }} />
        </Col>
      </Row>
    </div>
  );
};
```

<API />
