---
nav:
  title: 组件
  path: /components
group:
  title: Empty 空状态
  order: 12
---

## Empty 空状态

示例：

```tsx
import React from 'react';
import { Empty, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Empty type="approved"></Empty>
        </Col>
        <Col span={6}>
          <Empty type="auditFailure"></Empty>
        </Col>
        <Col span={6}>
          <Empty type="connectInterrupt"></Empty>
        </Col>
        <Col span={6}>
          <Empty type="development"></Empty>
        </Col>
        <Col span={6}>
          <Empty type="emptyData"></Empty>
        </Col>
        <Col span={6}>
          <Empty type="error"></Empty>
        </Col>
        <Col span={6}>
          <Empty type="requestError"></Empty>
        </Col>
        <Col span={6}>
          <Empty type="review"></Empty>
        </Col>
        <Col span={6}>
          <Empty type="searchEmptyData"></Empty>
        </Col>
      </Row>
    </div>
  );
};
```

示例：

```tsx
import React from 'react';
import { Empty, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div style={{ width: '100%', height: 800 }}>
      <Empty type="emptyData"></Empty>
    </div>
  );
};
```

自定义提示文字：

```tsx
import React from 'react';
import { Empty, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Empty type="approved" describe="自定义文本"></Empty>
    </div>
  );
};
```

<API />
