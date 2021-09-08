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

关闭时销毁弹窗：

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
        destroyOnClose
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
        footer={'自定义页脚'}
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

不显示页脚：

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
        footer={null}
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
import { Modal, Button, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Button
            title="First Demo"
            onClick={() =>
              Modal.confirm({
                title: '通知信息标题',
                content:
                  '一系列的信息描述，可能会很长。也可以是很短同样也可以带标点。',
                onCancel: () => {
                  console.log('取消');
                },
                onConfirm: () => {
                  console.log('确认');
                },
              })
            }
          >
            确认
          </Button>
        </Col>
        <Col span={4}>
          <Button
            title="First Demo"
            onClick={() =>
              Modal.confirm({
                title: '通知信息标题',
                type: 'success',
                content:
                  '一系列的信息描述，可能会很长。也可以是很短同样也可以带标点。',
                onCancel: () => {
                  console.log('取消');
                },
                onConfirm: () => {
                  console.log('确认');
                },
              })
            }
          >
            成功
          </Button>
        </Col>
        <Col span={4}>
          <Button
            title="First Demo"
            onClick={() =>
              Modal.confirm({
                title: '通知信息标题',
                type: 'error',

                content:
                  '一系列的信息描述，可能会很长。也可以是很短同样也可以带标点。',
                onCancel: () => {
                  console.log('取消');
                },
                onConfirm: () => {
                  console.log('确认');
                },
              })
            }
          >
            失败
          </Button>
        </Col>
        <Col span={4}>
          <Button
            title="First Demo"
            onClick={() =>
              Modal.confirm({
                title: '通知信息标题',
                type: 'warning',
                content:
                  '一系列的信息描述，可能会很长。也可以是很短同样也可以带标点。',
                onCancel: () => {
                  console.log('取消');
                },
                onConfirm: () => {
                  console.log('确认');
                },
              })
            }
          >
            警告
          </Button>
        </Col>
      </Row>
    </div>
  );
};
```

简单 api 确认框：

```tsx
import React, { useState } from 'react';
import { Modal, Button, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Button
            title="First Demo"
            onClick={() =>
              Modal.confirm({
                title: '通知信息标题',
                content:
                  '一系列的信息描述，可能会很长。也可以是很短同样也可以带标点。',
                onCancel: () => {
                  console.log('取消');
                },
                onConfirm: () => {
                  console.log('确认');
                },
              })
            }
          >
            确认
          </Button>
        </Col>
        <Col span={4}>
          <Button
            title="First Demo"
            onClick={() =>
              Modal.success({
                title: '通知信息标题',
                content:
                  '一系列的信息描述，可能会很长。也可以是很短同样也可以带标点。',
                onCancel: () => {
                  console.log('取消');
                },
                onConfirm: () => {
                  console.log('确认');
                },
              })
            }
          >
            成功
          </Button>
        </Col>
        <Col span={4}>
          <Button
            title="First Demo"
            onClick={() =>
              Modal.confirm({
                title: '通知信息标题',
                type: 'error',
                content:
                  '一系列的信息描述，可能会很长。也可以是很短同样也可以带标点。',
                onCancel: () => {
                  console.log('取消');
                },
                onConfirm: () => {
                  console.log('确认');
                },
              })
            }
          >
            失败
          </Button>
        </Col>
        <Col span={4}>
          <Button
            title="First Demo"
            onClick={() =>
              Modal.confirm({
                title: '通知信息标题',
                type: 'warning',
                content:
                  '一系列的信息描述，可能会很长。也可以是很短同样也可以带标点。',
                onCancel: () => {
                  console.log('取消');
                },
                onConfirm: () => {
                  console.log('确认');
                },
              })
            }
          >
            警告
          </Button>
        </Col>
      </Row>
    </div>
  );
};
```

<API />
