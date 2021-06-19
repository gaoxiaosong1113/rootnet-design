---
nav:
  title: 组件
  path: /components
group:
  title: Drawer 抽屉
  order: 10
---

## Drawer 抽屉

示例：

```tsx
import React, { useState } from 'react';
import { Drawer, Button, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Button type="primary" onClick={() => setVisible(true)}>
            按钮
          </Button>
        </Col>
        <Col span={4}>
          <Button type="primary" onClick={() => setVisible1(true)}>
            左侧抽屉
          </Button>
        </Col>
        <Col span={4}>
          <Button type="primary" onClick={() => setVisible2(true)}>
            右侧抽屉
          </Button>
        </Col>
        <Col span={4}>
          <Button type="primary" onClick={() => setVisible3(true)}>
            顶部抽屉
          </Button>
        </Col>
        <Col span={4}>
          <Button type="primary" onClick={() => setVisible4(true)}>
            底部抽屉
          </Button>
        </Col>
      </Row>
      <Drawer
        title="First Demo"
        visible={visible}
        onCancel={() => {
          console.log('关闭');
          setVisible(false);
        }}
        onConfirm={() => {
          setVisible(false);
        }}
      >
        我是抽屉的内容
      </Drawer>
      <Drawer
        title="First Demo"
        position="left"
        visible={visible1}
        onCancel={() => {
          console.log('关闭');
          setVisible1(false);
        }}
        onConfirm={() => {
          setVisible1(false);
        }}
      >
        我是抽屉的内容
      </Drawer>
      <Drawer
        title="First Demo"
        position="right"
        visible={visible2}
        onCancel={() => {
          console.log('关闭');
          setVisible2(false);
        }}
        onConfirm={() => {
          setVisible2(false);
        }}
      >
        我是抽屉的内容
      </Drawer>
      <Drawer
        title="First Demo"
        position="top"
        visible={visible3}
        onCancel={() => {
          console.log('关闭');
          setVisible3(false);
        }}
        onConfirm={() => {
          setVisible3(false);
        }}
      >
        我是抽屉的内容
      </Drawer>
      <Drawer
        title="First Demo"
        position="bottom"
        visible={visible4}
        onCancel={() => {
          console.log('关闭');
          setVisible4(false);
        }}
        onConfirm={() => {
          setVisible4(false);
        }}
      >
        我是抽屉的内容
      </Drawer>
    </div>
  );
};
```

<API />
