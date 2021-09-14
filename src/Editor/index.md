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

设置：

```tsx
import React, { useState, useRef, useEffect } from 'react';
import { Editor, Grid, Button } from 'rootnet-design';
const { Row, Col } = Grid;
const EditorViewer = Editor.EditorViewer;

export default () => {
  const [value, setValue] = useState('<p>受控内容</p>');
  const ref = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setValue('<p>动态</p>');
    }, 200);
  }, []);

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Editor
            defaultValue={'<p>我是默认填充的内容</p>'}
            value={value}
            action={(form, config) => {
              return new Promise((resolve, reject) => {
                resolve(
                  'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
                );
              });
            }}
            ref={ref}
            onPreview={(value) => console.log(value)}
            onChange={(value) => {
              console.log(value, '修改');
              setValue(value);
            }}
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

## 常见问题

<API  exports='["default", "EditorViewer"]'/>
