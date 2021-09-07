---
nav:
  title: 组件
  path: /components
group:
  title: Grid 栅格
  order: 14
---

## Grid 栅格

示例：

```tsx
import React from 'react';
import { Grid } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[0, 16]}>
        <Col span={20}>
          <span>1</span>
        </Col>
        <Col span={1}>
          <span>2</span>
        </Col>
        <Col span={1}>
          <span>3</span>
        </Col>
        <Col span={1}>
          <span>4</span>
        </Col>
      </Row>
    </div>
  );
};
```

<API exports='["Row", "Col"]'/>
