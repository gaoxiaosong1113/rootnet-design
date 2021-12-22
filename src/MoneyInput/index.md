---
nav:
  title: 组件
  path: /components
group:
  title: MoneyInput 金钱输入框
  order: 17
---

## MoneyInput 金钱输入框

示例：

```tsx
import React, { useState } from 'react';
import { MoneyInput, Button, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <MoneyInput
            placeholder="请输入内容"
            before={'￥'}
            close
            onChange={(e) => {
              console.log(e);
            }}
            beyondMoney={(e, unit) => {
              console.log(e, unit);
            }}
          />
        </Col>
      </Row>
    </div>
  );
};
```
