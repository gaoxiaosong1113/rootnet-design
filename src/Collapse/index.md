---
nav:
  title: 组件
  path: /components
group:
  title: Collapse 折叠面板
  order: 7
---

## Collapse 折叠面板

示例：

```tsx
import React from 'react';
import { Collapse, Icon, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Collapse>
            <Collapse.Item title="列表一" open>
              这里是折叠面板的内容，这里是折叠面板的内容。
            </Collapse.Item>
            <Collapse.Item title="列表二">
              这里是折叠面板的内容，这里是折叠面板的内容。
            </Collapse.Item>
            <Collapse.Item title="列表三">
              这里是折叠面板的内容，这里是折叠面板的内容。
            </Collapse.Item>
            <Collapse.Item title="列表四">
              这里是折叠面板的内容，这里是折叠面板的内容。
            </Collapse.Item>
          </Collapse>
        </Col>
      </Row>
    </div>
  );
};
```

示例：

```tsx
import React from 'react';
import { Collapse, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Collapse>
            <Collapse.Item title="列表一">
              这里是折叠面板的内容，这里是折叠面板的内容。
            </Collapse.Item>
          </Collapse>
        </Col>
      </Row>
    </div>
  );
};
```

无边框：

```tsx
import React from 'react';
import { Collapse, Icon, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Collapse noBorder>
            <Collapse.Item title="列表一" extra={<Icon name="jiahao" />}>
              这里是折叠面板的内容，这里是折叠面板的内容。
            </Collapse.Item>
          </Collapse>
        </Col>
      </Row>
    </div>
  );
};
```

<API />
