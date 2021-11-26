---
nav:
  title: 组件
  path: /components
group:
  title: Space 间隔
  order: 34
---

## Space 间隔

默认：

```tsx
import React from 'react';
import { Tag, Grid, Space } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Space>
            <Tag type="dashed" color="default">
              标签
            </Tag>
            <Tag type="dashed" color="primary">
              标签
            </Tag>
            <Tag type="dashed" color="success">
              标签
            </Tag>
            <Tag type="dashed" color="warning">
              标签
            </Tag>
            <Tag type="dashed" color="error">
              标签
            </Tag>
          </Space>
        </Col>
      </Row>
    </div>
  );
};
```

垂直间距：

```tsx
import React from 'react';
import { Tag, Grid, Space } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Space direction="vertical">
            <Tag type="dashed" color="default">
              标签
            </Tag>
            <Tag type="dashed" color="primary">
              标签
            </Tag>
            <Tag type="dashed" color="success">
              标签
            </Tag>
            <Tag type="dashed" color="warning">
              标签
            </Tag>
            <Tag type="dashed" color="error">
              标签
            </Tag>
          </Space>
        </Col>
      </Row>
    </div>
  );
};
```

间距大小：

```tsx
import React from 'react';
import { Tag, Grid, Space } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Space size="small">
            <Tag type="dashed" color="default">
              small
            </Tag>
            <Tag type="dashed" color="primary">
              标签
            </Tag>
            <Tag type="dashed" color="success">
              标签
            </Tag>
            <Tag type="dashed" color="warning">
              标签
            </Tag>
            <Tag type="dashed" color="error">
              标签
            </Tag>
          </Space>
        </Col>
        <Col span={24}>
          <Space size="middle">
            <Tag type="dashed" color="default">
              middle
            </Tag>
            <Tag type="dashed" color="primary">
              标签
            </Tag>
            <Tag type="dashed" color="success">
              标签
            </Tag>
            <Tag type="dashed" color="warning">
              标签
            </Tag>
            <Tag type="dashed" color="error">
              标签
            </Tag>
          </Space>
        </Col>
        <Col span={24}>
          <Space size="large">
            <Tag type="dashed" color="default">
              large
            </Tag>
            <Tag type="dashed" color="primary">
              标签
            </Tag>
            <Tag type="dashed" color="success">
              标签
            </Tag>
            <Tag type="dashed" color="warning">
              标签
            </Tag>
            <Tag type="dashed" color="error">
              标签
            </Tag>
          </Space>
        </Col>
        <Col span={24}>
          <Space size={20}>
            <Tag type="dashed" color="default">
              20
            </Tag>
            <Tag type="dashed" color="primary">
              标签
            </Tag>
            <Tag type="dashed" color="success">
              标签
            </Tag>
            <Tag type="dashed" color="warning">
              标签
            </Tag>
            <Tag type="dashed" color="error">
              标签
            </Tag>
          </Space>
        </Col>
        <Col span={24}>
          <Space size={[20, 10]}>
            <Tag type="dashed" color="default">
              [20, 10]
            </Tag>
            <Tag type="dashed" color="primary">
              标签
            </Tag>
            <Tag type="dashed" color="success">
              标签
            </Tag>
            <Tag type="dashed" color="warning">
              标签
            </Tag>
            <Tag type="dashed" color="error">
              标签
            </Tag>
          </Space>
        </Col>
      </Row>
    </div>
  );
};
```

自动换行：

```tsx
import React from 'react';
import { Tag, Grid, Space } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Space size={[20, 20]} wrap>
            <Tag type="dashed" color="default">
              small
            </Tag>
            <Tag type="dashed" color="primary">
              标签
            </Tag>
            <Tag type="dashed" color="success">
              标签
            </Tag>
            <Tag type="dashed" color="warning">
              标签
            </Tag>
            <Tag type="dashed" color="error">
              标签
            </Tag>
            <Tag type="dashed" color="default">
              middle
            </Tag>
            <Tag type="dashed" color="default">
              small
            </Tag>
            <Tag type="dashed" color="primary">
              标签
            </Tag>
            <Tag type="dashed" color="success">
              标签
            </Tag>
            <Tag type="dashed" color="warning">
              标签
            </Tag>
            <Tag type="dashed" color="error">
              标签
            </Tag>
            <Tag type="dashed" color="default">
              middle
            </Tag>
            <Tag type="dashed" color="primary">
              标签
            </Tag>
            <Tag type="dashed" color="success">
              标签
            </Tag>
            <Tag type="dashed" color="warning">
              标签
            </Tag>
            <Tag type="dashed" color="error">
              标签
            </Tag>
            <Tag type="dashed" color="default">
              large
            </Tag>
            <Tag type="dashed" color="primary">
              标签
            </Tag>
            <Tag type="dashed" color="success">
              标签
            </Tag>
            <Tag type="dashed" color="warning">
              标签
            </Tag>
            <Tag type="dashed" color="error">
              标签
            </Tag>
            <Tag type="dashed" color="default">
              20
            </Tag>
            <Tag type="dashed" color="primary">
              标签
            </Tag>
            <Tag type="dashed" color="success">
              标签
            </Tag>
            <Tag type="dashed" color="warning">
              标签
            </Tag>
            <Tag type="dashed" color="error">
              标签
            </Tag>
            <Tag type="dashed" color="default">
              [20, 10]
            </Tag>
            <Tag type="dashed" color="primary">
              标签
            </Tag>
            <Tag type="dashed" color="success">
              标签
            </Tag>
            <Tag type="dashed" color="warning">
              标签
            </Tag>
            <Tag type="dashed" color="error">
              标签
            </Tag>
          </Space>
        </Col>
      </Row>
    </div>
  );
};
```

分隔符：

```tsx
import React from 'react';
import { Tag, Grid, Space } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Space split={<span>我是分隔符</span>}>
            <Tag type="dashed" color="default">
              标签
            </Tag>
            <Tag type="dashed" color="primary">
              标签
            </Tag>
            <Tag type="dashed" color="success">
              标签
            </Tag>
            <Tag type="dashed" color="warning">
              标签
            </Tag>
            <Tag type="dashed" color="error">
              标签
            </Tag>
          </Space>
        </Col>
      </Row>
    </div>
  );
};
```

<API />
