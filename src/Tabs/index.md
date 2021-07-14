---
nav:
  title: 组件
  path: /components
group:
  title: Tabs 标签页
  order: 39
---

## Tabs 标签页

带 tab 切换的卡片：

```tsx
import React, { useState } from 'react';
import { Tabs, Button, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  const [activeTabKey, setActiveTabKey] = useState(1);

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Tabs
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
          </Tabs>
        </Col>
      </Row>
    </div>
  );
};
```

自定义 tab 切换的卡片：

```tsx
import React, { useState } from 'react';
import { Tabs, Icon, Button, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  const [activeTabKey, setActiveTabKey] = useState(1);

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Tabs
            tabList={[
              {
                key: '1',
                name: (
                  <Button icon="Rootnet" type="primary" size="sm">
                    标签一
                  </Button>
                ),
              },
              {
                key: '2',
                name: <Icon name="Rootnet" />,
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
          </Tabs>
        </Col>
      </Row>
    </div>
  );
};
```

切换布局：

```tsx
import React, { useState } from 'react';
import { Tabs, Icon, Button, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  const [activeTabKey, setActiveTabKey] = useState(1);

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Tabs
            layout="horizontal"
            tabList={[
              {
                key: '1',
                name: (
                  <Button icon="Rootnet" type="primary" size="sm">
                    标签一
                  </Button>
                ),
              },
              {
                key: '2',
                name: <Icon name="Rootnet" />,
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
          >
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </Tabs>
        </Col>
      </Row>
    </div>
  );
};
```

<API />
