---
nav:
  title: 组件
  path: /components
group:
  title: Drawer 抽屉
  order: 10
---

## Drawer 抽屉

示例：

```tsx
import React, { useState } from 'react';
import { Drawer, Button, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Button type="primary" onClick={() => setVisible(true)}>
            按钮
          </Button>
        </Col>
      </Row>
      <Drawer
        title="抽屉标题"
        visible={visible}
        onCancel={() => {
          console.log('关闭');
          setVisible(false);
        }}
        onConfirm={() => {
          setVisible(false);
        }}
      >
        我是抽屉的内容
      </Drawer>
    </div>
  );
};
```

左侧抽屉：

```tsx
import React, { useState } from 'react';
import { Drawer, Button, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Button type="primary" onClick={() => setVisible(true)}>
            左侧抽屉
          </Button>
        </Col>
      </Row>
      <Drawer
        title="抽屉标题"
        position="left"
        visible={visible}
        onCancel={() => {
          console.log('关闭');
          setVisible(false);
        }}
        onConfirm={() => {
          setVisible(false);
        }}
      >
        我是抽屉的内容
      </Drawer>
    </div>
  );
};
```

右侧抽屉：

```tsx
import React, { useState } from 'react';
import { Drawer, Button, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Button type="primary" onClick={() => setVisible(true)}>
            右侧抽屉
          </Button>
        </Col>
      </Row>
      <Drawer
        title="抽屉标题"
        position="right"
        visible={visible}
        onCancel={() => {
          console.log('关闭');
          setVisible(false);
        }}
        onConfirm={() => {
          setVisible(false);
        }}
      >
        我是抽屉的内容
      </Drawer>
    </div>
  );
};
```

顶部抽屉：

```tsx
import React, { useState } from 'react';
import { Drawer, Button, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Button type="primary" onClick={() => setVisible(true)}>
            顶部抽屉
          </Button>
        </Col>
      </Row>
      <Drawer
        title="抽屉标题"
        position="top"
        visible={visible}
        onCancel={() => {
          console.log('关闭');
          setVisible(false);
        }}
        onConfirm={() => {
          setVisible(false);
        }}
      >
        我是抽屉的内容
      </Drawer>
    </div>
  );
};
```

底部抽屉：

```tsx
import React, { useState } from 'react';
import { Drawer, Button, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Button type="primary" onClick={() => setVisible(true)}>
            底部抽屉
          </Button>
        </Col>
      </Row>
      <Drawer
        title="抽屉标题"
        position="bottom"
        visible={visible}
        onCancel={() => {
          console.log('关闭');
          setVisible(false);
        }}
        onConfirm={() => {
          setVisible(false);
        }}
      >
        我是抽屉的内容
      </Drawer>
    </div>
  );
};
```

隐藏遮罩：

```tsx
import React, { useState } from 'react';
import { Drawer, Button, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Button type="primary" onClick={() => setVisible(true)}>
            隐藏遮罩
          </Button>
        </Col>
      </Row>
      <Drawer
        title="抽屉标题"
        visible={visible}
        mask={false}
        onCancel={() => {
          console.log('关闭');
          setVisible(false);
        }}
        onConfirm={() => {
          setVisible(false);
        }}
      >
        我是抽屉的内容
      </Drawer>
    </div>
  );
};
```

设置抽屉位置：

```tsx
import React, { useState } from 'react';
import { Drawer, Button, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Button type="primary" onClick={() => setVisible(true)}>
            设置抽屉位置
          </Button>
        </Col>
      </Row>
      <Drawer
        title="抽屉标题"
        visible={visible}
        offsetTop={100}
        onCancel={() => {
          console.log('关闭');
          setVisible(false);
        }}
        onConfirm={() => {
          setVisible(false);
        }}
      >
        我是抽屉的内容
      </Drawer>
    </div>
  );
};
```

自定义按钮：

```tsx
import React, { useState } from 'react';
import { Drawer, Button, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Button type="primary" onClick={() => setVisible(true)}>
            自定义按钮
          </Button>
        </Col>
      </Row>
      <Drawer
        title="抽屉标题"
        visible={visible}
        onCancel={() => {
          console.log('关闭');
          setVisible(false);
        }}
        onConfirm={() => {
          setVisible(false);
        }}
        footer={<div>自定义页脚</div>}
      >
        我是抽屉的内容
      </Drawer>
    </div>
  );
};
```

取消关闭按钮：

```tsx
import React, { useState } from 'react';
import { Drawer, Button, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Button type="primary" onClick={() => setVisible(true)}>
            取消关闭按钮
          </Button>
        </Col>
      </Row>
      <Drawer
        title="抽屉标题"
        visible={visible}
        close={false}
        onCancel={() => {
          console.log('关闭');
          setVisible(false);
        }}
        onConfirm={() => {
          setVisible(false);
        }}
      >
        我是抽屉的内容
      </Drawer>
    </div>
  );
};
```

<API />
