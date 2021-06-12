---
nav:
  title: 组件
  path: /components
group:
  title: Card 卡片
  order: 4
---

## Card 卡片

示例：

```tsx
import React from 'react';
import { Card, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card title="标题">按钮</Card>
        </Col>
      </Row>
    </div>
  );
};
```

设置宽高：

```tsx
import React from 'react';
import { Card, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card title="标题" width={500} height={200}>
            按钮
          </Card>
        </Col>
      </Row>
    </div>
  );
};
```

带额外操作的卡片：

```tsx
import React from 'react';
import { Card, Button, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card
            title="标题"
            extra={
              <Button icon="sk-goods" type="primary" size="sm">
                新增
              </Button>
            }
          >
            按钮
          </Card>
        </Col>
      </Row>
    </div>
  );
};
```

带 tab 切换的卡片：

```tsx
import React, { useState } from 'react';
import { Card, Button, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  const [activeTabKey, setActiveTabKey] = useState(1);

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card
            tabList={[
              {
                key: '1',
                name: '标签一',
              },
              {
                key: '2',
                name: '标签二',
              },
              {
                key: '3',
                name: '标签三',
              },
              {
                key: '4',
                name: '标签四',
                disabled: true,
              },
            ]}
            activeTabKey={activeTabKey}
            changeTabKey={(key) => setActiveTabKey(key)}
            extra={
              <Button icon="sk-goods" type="primary" size="sm">
                新增
              </Button>
            }
          >
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
```

自定义 tab 切换的卡片：

```tsx
import React, { useState } from 'react';
import { Card, Icon, Button, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  const [activeTabKey, setActiveTabKey] = useState(1);

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card
            tabList={[
              {
                key: '1',
                name: (
                  <Button icon="sk-goods" type="primary" size="sm">
                    标签一
                  </Button>
                ),
              },
              {
                key: '2',
                name: <Icon name="sk-goods" />,
              },
              {
                key: '3',
                name: '标签三',
              },
              {
                key: '4',
                name: '标签四',
                disabled: true,
              },
            ]}
            activeTabKey={activeTabKey}
            changeTabKey={(key) => setActiveTabKey(key)}
            extra={
              <Button icon="sk-goods" type="primary" size="sm">
                新增
              </Button>
            }
          >
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
```

自定义 tab 切换的卡片：

```tsx
import React, { useState } from 'react';
import { Card, Icon, Button, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  const [activeTabKey, setActiveTabKey] = useState(1);

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card
            title="tab标签示例"
            tabList={[
              {
                key: '1',
                name: (
                  <Button icon="sk-goods" type="primary" size="sm">
                    标签一
                  </Button>
                ),
              },
              {
                key: '2',
                name: <Icon name="sk-goods" />,
              },
              {
                key: '3',
                name: '标签三',
              },
              {
                key: '4',
                name: '标签四',
                disabled: true,
              },
            ]}
            activeTabKey={activeTabKey}
            changeTabKey={(key) => setActiveTabKey(key)}
            extra={
              <Button icon="sk-goods" type="primary" size="sm">
                新增
              </Button>
            }
          >
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
```

More skills for writing 示例： https://d.umijs.org/guide/demo-principle
