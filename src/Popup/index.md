---
nav:
  title: 组件
  path: /components
group:
  title: Popup 弹出层
  order: 29
---

## Popup 弹出层

本组件属于内部组件，用来处理弹出层的问题

示例：

```tsx
import React, { useState, useRef } from 'react';
import { Popup, Button, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Button ref={ref} onClick={() => setVisible(true)}>
            打开
          </Button>
          <Popup className="class1221" refEl={ref} visible={visible}>
            我是一段提示，并且字数不是很
          </Popup>
        </Col>
      </Row>
    </div>
  );
};
```

<API />
