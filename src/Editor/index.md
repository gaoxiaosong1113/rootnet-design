---
nav:
  title: 组件
  path: /components
group:
  title: Editor 富文本编辑器
  order: 12
---

## Editor 富文本编辑器

本组件基于 braft-editor 封装，[文档参考](https://www.yuque.com/braft-editor/be/gz44tn)

默认：

设置：

```tsx
import React, { useState } from 'react';
import { Editor, Grid, Button } from 'rootnet-design';
const { Row, Col } = Grid;
const EditorViewer = Editor.EditorViewer;

export default () => {
  const [value, setValue] = useState('<p>123123123</p>');
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Editor
            value={value}
            action={(form, config) => {
              console.log(form, config);
              return new Promise((resolve, reject) => {
                resolve('上传的地址');
              });
            }}
            onPreview={(value) => console.log(value)}
            onChange={(value) => setValue(value)}
          />
        </Col>
        <Col span={24}>
          <EditorViewer value={value} />
        </Col>
      </Row>
    </div>
  );
};
```

<!-- <API /> -->
