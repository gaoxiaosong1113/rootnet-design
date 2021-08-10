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
        <Col span={12}>
          <Upload
            accept=".png,.jpg,.jpeg,.gif"
            action={(file) => {
              console.log(file);
              return new Promise((resolve, reject) => {
                resolve({ data: '上传的地址' });
              });
            }}
            onPreview={(file) => {
              console.log('预览');
              console.log(file);
            }}
            onRemove={(file) => {
              console.log('删除');
              console.log(file);
            }}
            onChange={(files) => {
              console.log('更改');
              console.log(files);
            }}
          >
            <Button icon="shangchuan">上传文件</Button>
          </Upload>
        </Col>
      </Row>
    </div>
  );
};
```

禁用：

```tsx
import React from 'react';
import { Upload, Grid, Button } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Upload accept=".png,.jpg,.jpeg,.gif" disabled>
            <Button icon="shangchuan">上传文件</Button>
          </Upload>
        </Col>
      </Row>
    </div>
  );
};
```

picture

```tsx
import React from 'react';
import { Upload, Grid, Button } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Upload listType="picture" accept=".png,.jpg,.jpeg,.gif">
            <Button icon="shangchuan">上传文件</Button>
          </Upload>
        </Col>
      </Row>
    </div>
  );
};
```

picture-card

```tsx
import React from 'react';
import { Upload, Grid, Button } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Upload listType="picture-card" accept=".png,.jpg,.jpeg,.gif">
            <Button icon="shangchuan">上传文件</Button>
          </Upload>
        </Col>
      </Row>
    </div>
  );
};
```

<API />
