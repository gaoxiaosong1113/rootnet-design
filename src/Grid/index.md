---
nav:
  title: 组件
  path: /components
group:
  title: Grid 栅格
  order: 14
---

## Grid 栅格

Demo:

```tsx
import React from 'react';
import { Grid } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[0, 16]}>
        <Col span={20}>1</Col>
        <Col span={1}>2</Col>
        <Col span={1}>3</Col>
        <Col span={1}>4</Col>
      </Row>
    </div>
  );
};
```

More skills for writing demo: https://d.umijs.org/guide/demo-principle
