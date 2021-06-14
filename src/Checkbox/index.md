---
nav:
  title: 组件
  path: /components
group:
  title: Checkbox 多选框
  order: 6
---

## Checkbox 多选框

示例：

```tsx
import React from 'react';
import { Checkbox, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Checkbox>常规</Checkbox>
        </Col>
        <Col span={4}>
          <Checkbox disabled>禁用</Checkbox>
        </Col>
        <Col span={4}>
          <Checkbox disabled checked={true}>
            默认选中并禁用
          </Checkbox>
        </Col>
        <Col span={4}>
          <Checkbox checked={true}>默认选中</Checkbox>
        </Col>
        <Col span={4}>
          <Checkbox.Group checked={true}>
            <div>
              <Checkbox>Checkbox组</Checkbox>
            </div>
            <div>
              <Checkbox>Checkbox组</Checkbox>
            </div>
            <div>
              <Checkbox>Checkbox组</Checkbox>
            </div>
            <Checkbox>Checkbox组</Checkbox>
            <Checkbox>Checkbox组</Checkbox>
            <Checkbox>Checkbox组</Checkbox>
            <Checkbox>Checkbox组</Checkbox>
          </Checkbox.Group>
        </Col>
      </Row>
    </div>
  );
};
```

More skills for writing 示例： https://d.umijs.org/guide/demo-principle
