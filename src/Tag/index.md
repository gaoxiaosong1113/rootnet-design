---
nav:
  title: 组件
  path: /components
group:
  title: Tag 标签
  order: 40
---

## Tag 标签

默认：

```tsx
import React from 'react';
import { Tag, Grid } from 'rootnet-design';
console.log(Grid);
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Tag>默认标签</Tag>
        </Col>
        <Col span={4}>
          <Tag type="dashed">虚线标签</Tag>
        </Col>
        <Col span={4}>
          <Tag type="dashed" close>
            可关闭标签
          </Tag>
        </Col>
        <Col span={4}>
          <Tag disabled="disabled">禁用标签</Tag>
        </Col>
        <Col span={4}>
          <Tag type="dashed" add>
            添加
          </Tag>
        </Col>
      </Row>
    </div>
  );
};
```

颜色：

```tsx
import React from 'react';
import { Tag, Grid } from 'rootnet-design';
console.log(Grid);
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Tag color="default">标签</Tag>
        </Col>
        <Col span={4}>
          <Tag color="primary">标签</Tag>
        </Col>
        <Col span={4}>
          <Tag color="success">标签</Tag>
        </Col>
        <Col span={4}>
          <Tag color="warning">标签</Tag>
        </Col>
        <Col span={4}>
          <Tag color="error">标签</Tag>
        </Col>
      </Row>
    </div>
  );
};
```

虚线颜色：

```tsx
import React from 'react';
import { Tag, Grid } from 'rootnet-design';
console.log(Grid);
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Tag type="dashed" color="default">
            标签
          </Tag>
        </Col>
        <Col span={4}>
          <Tag type="dashed" color="primary">
            标签
          </Tag>
        </Col>
        <Col span={4}>
          <Tag type="dashed" color="success">
            标签
          </Tag>
        </Col>
        <Col span={4}>
          <Tag type="dashed" color="warning">
            标签
          </Tag>
        </Col>
        <Col span={4}>
          <Tag type="dashed" color="error">
            标签
          </Tag>
        </Col>
      </Row>
    </div>
  );
};
```
