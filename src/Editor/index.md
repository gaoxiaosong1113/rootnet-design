---
nav:
  title: 组件
  path: /components
group:
  title: Editor 富文本编辑器
  order: 12
---

## Editor 富文本编辑器

默认：

```tsx
import React from 'react';
import { Editor, Grid, Button } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Editor />
        </Col>
      </Row>
    </div>
  );
};
```

<API />
