---
nav:
  title: 组件
  path: /components
group:
  title: Button 按钮
  order: 3
---

## Button 按钮

示例：

```tsx
import React from 'react';
import { Button, Grid } from 'rootnet-design';
console.log(Grid);
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Button type="primary" size="sm">
            按钮
          </Button>
        </Col>
        <Col span={4}>
          <Button size="sm">按钮</Button>
        </Col>
        <Col span={4}>
          <Button type="dashed" size="sm">
            按钮
          </Button>
        </Col>
        <Col span={4}>
          <Button disabled="disabled" size="sm">
            按钮
          </Button>
        </Col>
        <Col span={4}>
          <Button type="text" size="sm">
            按钮
          </Button>
        </Col>
        <Col span={4}>
          <Button type="link" size="sm">
            按钮
          </Button>
        </Col>

        <Col span={4}>
          <Button type="primary">按钮</Button>
        </Col>
        <Col span={4}>
          <Button>按钮</Button>
        </Col>
        <Col span={4}>
          <Button type="dashed">按钮</Button>
        </Col>
        <Col span={4}>
          <Button disabled="disabled">按钮</Button>
        </Col>
        <Col span={4}>
          <Button type="text">按钮</Button>
        </Col>
        <Col span={4}>
          <Button type="link">按钮</Button>
        </Col>

        <Col span={4}>
          <Button type="primary" size="lg">
            按钮
          </Button>
        </Col>
        <Col span={4}>
          <Button size="lg">按钮</Button>
        </Col>
        <Col span={4}>
          <Button type="dashed" size="lg">
            按钮
          </Button>
        </Col>
        <Col span={4}>
          <Button disabled="disabled" size="lg">
            按钮
          </Button>
        </Col>
        <Col span={4}>
          <Button type="text" size="lg">
            按钮
          </Button>
        </Col>
        <Col span={4}>
          <Button type="link" size="lg">
            按钮
          </Button>
        </Col>

        <Col span={4}>
          <Button icon="sk-order" type="primary">
            按钮
          </Button>
        </Col>
        <Col span={4}>
          <Button icon="sk-order">按钮</Button>
        </Col>
        <Col span={4}>
          <Button icon="sk-order" type="dashed">
            按钮
          </Button>
        </Col>
        <Col span={4}>
          <Button icon="sk-order" disabled="disabled">
            按钮
          </Button>
        </Col>
        <Col span={4}>
          <Button icon="sk-order" type="text">
            按钮
          </Button>
        </Col>
        <Col span={4}>
          <Button icon="sk-order" type="link">
            按钮
          </Button>
        </Col>
      </Row>
    </div>
  );
};
```

<API ></API>
