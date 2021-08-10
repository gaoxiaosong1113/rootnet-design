---
nav:
  title: 组件
  path: /components
group:
  title: Upload 文件上传
  order: 45
---

## Upload 文件上传

默认：

```tsx
import React from 'react';
import { Upload, Grid, Button } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Upload accept=".png,.jpg,.jpeg,.gif">
            <Button icon="shangchuan">上传文件</Button>
          </Upload>
        </Col>
      </Row>
    </div>
  );
};
```

<API />
