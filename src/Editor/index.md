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
import React, { useState, useRef, useEffect } from 'react';
import { Editor, Grid, Button } from 'rootnet-design';
const { Row, Col } = Grid;
const EditorViewer = Editor.EditorViewer;
const BraftEditor = Editor.BraftEditor;

export default () => {
  const [value, setValue] = useState(
    BraftEditor.createEditorState('<p>受控内容</p>'),
  );
  const ref = useRef(null);
  useEffect(() => {
    console.log(ref.current);
    console.log(ref.current.getValue().toHTML());
  }, [ref.current]);

  useEffect(() => {
    setTimeout(() => {
      setValue(BraftEditor.createEditorState('<p>动态</p>'));
    }, 200);
  }, []);

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Editor
            defaultValue={BraftEditor.createEditorState(
              '<p>我是默认填充的内容</p>',
            )}
            value={value}
            action={(form, config) => {
              console.log(form, config);
              return new Promise((resolve, reject) => {
                resolve('上传的地址');
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

<API  exports='["default", "EditorViewer"]'/>
