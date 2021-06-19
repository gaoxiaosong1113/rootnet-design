---
nav:
  title: 组件
  path: /components
group:
  title: Input 输入框
  order: 17
---

## Input 输入框

示例：

```tsx
import React, { useState } from 'react';
import { Input, Button, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Input />
        </Col>
      </Row>
    </div>
  );
};
```
