---
nav:
  title: 组件
  path: /components
group:
  title: Radio 单选框
  order: 30
---

## Radio 单选框

示例：

```tsx
import React from 'react';
import { Radio, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Radio>常规</Radio>
        </Col>
        <Col span={4}>
          <Radio disabled>禁用</Radio>
        </Col>
        <Col span={4}>
          <Radio disabled checked={true}>
            默认选中并禁用
          </Radio>
        </Col>
        <Col span={4}>
          <Radio checked={true}>默认选中</Radio>
        </Col>
      </Row>
    </div>
  );
};
```
