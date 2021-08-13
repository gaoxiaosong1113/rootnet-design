---
nav:
  title: 组件
  path: /components
group:
  title: Popover 进度条
  order: 29
---

## Popover 进度条

示例：

```tsx
import React from 'react';
import { Progress, Grid, Button, Icon } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Progress percent={10} />
          <div style={{ height: 20 }} />
          <Progress percent={100} status="error" />
          <div style={{ height: 20 }} />
          <Progress percent={100} status="success" />
        </Col>
      </Row>
    </div>
  );
};
```

小型进度条：

```tsx
import React from 'react';
import { Progress, Grid, Button, Icon } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Progress percent={10} small />
          <div style={{ height: 20 }} />
          <Progress percent={100} status="error" small />
          <div style={{ height: 20 }} />
          <Progress percent={100} status="success" small />
        </Col>
      </Row>
    </div>
  );
};
```

会动的进度条

```tsx
import React, { useState } from 'react';
import { Progress, Grid, Button, Icon } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  const [percent, setPercent] = useState(0);

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Progress percent={percent} />

          <Button
            onClick={() => {
              setPercent(percent - 10);
            }}
          >
            -
          </Button>
          <Button
            onClick={() => {
              setPercent(percent + 10);
            }}
          >
            +
          </Button>
        </Col>
      </Row>
    </div>
  );
};
```

<API />
