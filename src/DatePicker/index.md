---
nav:
  title: 组件
  path: /components
group:
  title: DatePicker 日期选择
  order: 8
---

## DatePicker 日期选择

示例：

```tsx
import React from 'react';
import { DatePicker, Grid } from 'rootnet-design';
const { Row, Col } = Grid;
const { Calendar } = DatePicker;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Calendar />
        </Col>
        <Col span={24}>
          <DatePicker />
        </Col>
        <Col span={24}>
          <DatePicker value="2022-02-10" />
        </Col>
      </Row>
    </div>
  );
};
```

<API />
