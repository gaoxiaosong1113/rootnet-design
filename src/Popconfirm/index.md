---
nav:
  title: 组件
  path: /components
group:
  title: Popconfirm 气泡确认框
  order: 27
---

## Popconfirm 气泡确认框

示例：

```tsx
import React from 'react';
import { Popconfirm, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Popconfirm content={'你确定要关闭吗？'}>删除</Popconfirm>
        </Col>
      </Row>
    </div>
  );
};
```
