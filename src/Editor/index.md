---
nav:
  title: 组件
  path: /components
group:
  title: Editor 富文本编辑器
  order: 12
---

## Editor 富文本编辑器

富文本编辑器已经拆分到 rootnet-design-editor 包中

```tsx | pure
import React, { useState, useRef, useEffect } from 'react';
import Editor from 'rootnet-design-editor';
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
      <EditorViewer value={value} />
    </div>
  );
};
```
