---
nav:
  title: 组件
  path: /components
group:
  title: Switch 开关
  order: 37
---

## Switch 开关

示例：

默认数据：

```tsx
import React from 'react';
import { Switch, Grid, Button } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Switch
            checkedChildren="打开"
            unCheckedChildren="关闭"
            onChange={(value) => {
              console.log(value);
            }}
          />
        </Col>
        <Col span={4}>
          <Switch
            size="small"
            checkedChildren="打开"
            unCheckedChildren="关闭"
            onChange={(value) => {
              console.log(value);
            }}
          />
        </Col>
      </Row>
    </div>
  );
};
```
