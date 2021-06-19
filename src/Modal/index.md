---
nav:
  title: 组件
  path: /components
group:
  title: Modal 对话框
  order: 23
---

## Modal 对话框

示例：

```tsx
import React, { useState } from 'react';
import { Modal, Button } from 'rootnet-design';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button title="First Demo" onClick={() => setVisible(true)}>
        打开弹窗
      </Button>
      <Modal
        title="First Demo"
        visible={visible}
        onCancel={() => {
          console.log('关闭');
          setVisible(false);
        }}
        onConfirm={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};
```

自定义页脚：

```tsx
import React, { useState } from 'react';
import { Modal, Button } from 'rootnet-design';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button title="First Demo" onClick={() => setVisible(true)}>
        打开弹窗
      </Button>
      <Modal
        title="First Demo"
        visible={visible}
        onCancel={() => {
          console.log('关闭');
          setVisible(false);
        }}
        onConfirm={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};
```

确认框：

```tsx
import React, { useState } from 'react';
import { Modal, Button } from 'rootnet-design';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button
        title="First Demo"
        onClick={() =>
          Modal.confirm({
            title: '通知信息标题',
            content:
              '一系列的信息描述，可能会很长。也可以是很短同样也可以带标点。',
          })
        }
      >
        打开弹窗
      </Button>
    </div>
  );
};
```
