---
nav:
  title: 组件
  path: /components
group:
  title: Descriptions 描述列表
  order: 9
---

## Descriptions 描述列表

示例：

```tsx
import React, { useState } from 'react';
import { Descriptions, Button, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  const [activeTabKey, setActiveTabKey] = useState(1);

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Descriptions gutter={[16, 16]} title="基本信息">
            <Descriptions.Item span={8} label={'流程号'}>
              100001
            </Descriptions.Item>
            <Descriptions.Item span={8} label={'授权人'}>
              章散
            </Descriptions.Item>
            <Descriptions.Item span={8} label={'代授权人'}>
              admin
            </Descriptions.Item>
            <Descriptions.Item span={8} label={'生效时间'}>
              2021-01-19 00:01:00
            </Descriptions.Item>
            <Descriptions.Item span={8} label={'失效时间'}>
              2021-01-31 24:00:00
            </Descriptions.Item>
            <Descriptions.Item span={8} label={'授权模式'}>
              转授权
            </Descriptions.Item>
            <Descriptions.Item span={8} label={'授权时间'}>
              2021-01-19 07:01:00
            </Descriptions.Item>
            <Descriptions.Item span={8} label={'更新时间'}>
              2021-01-31 08:00:00
            </Descriptions.Item>
            <Descriptions.Item span={8} label={'备注'}>
              章散出差2天，临时授权王武
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </div>
  );
};
```

带边框的信息：

```tsx
import React, { useState } from 'react';
import { Descriptions, Button, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  const [activeTabKey, setActiveTabKey] = useState(1);

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Descriptions border gutter={[16, 16]} title="带边框的信息：">
            <Descriptions.Item label={'流程号'}>100001</Descriptions.Item>
            <Descriptions.Item label={'授权人'}>章散</Descriptions.Item>
            <Descriptions.Item label={'代授权人'}>admin</Descriptions.Item>
            <Descriptions.Item span={2} label={'生效时间'}>
              2021-01-19 00:01:00
            </Descriptions.Item>
            <Descriptions.Item span={2} label={'失效时间'}>
              2021-01-31 24:00:00
            </Descriptions.Item>
            <Descriptions.Item label={'授权模式'}>转授权</Descriptions.Item>
            <Descriptions.Item span={2} label={'授权时间'}>
              2021-01-19 07:01:00
            </Descriptions.Item>
            <Descriptions.Item span={2} label={'更新时间'}>
              2021-01-31 08:00:00
            </Descriptions.Item>
            <Descriptions.Item span={3} label={'备注'}>
              章散出差2天，临时授权王武
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </div>
  );
};
```

配置尺寸：

```tsx
import React, { useState } from 'react';
import { Descriptions, Button, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  const [activeTabKey, setActiveTabKey] = useState(1);

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Descriptions
            border
            gutter={[16, 16]}
            title="带边框的信息："
            labelSpan={3}
            valueSpan={5}
          >
            <Descriptions.Item label={'流程号'}>100001</Descriptions.Item>
            <Descriptions.Item label={'授权人'}>章散</Descriptions.Item>
            <Descriptions.Item label={'代授权人'}>admin</Descriptions.Item>
            <Descriptions.Item span={2} label={'生效时间'}>
              2021-01-19 00:01:002021-01-19 00:01:002021-01-19
              00:01:002021-01-19 00:01:00
            </Descriptions.Item>
            <Descriptions.Item span={2} label={'失效时间'}>
              2021-01-31 24:00:00
            </Descriptions.Item>
            <Descriptions.Item label={'授权模式'}>转授权</Descriptions.Item>
            <Descriptions.Item span={2} label={'授权时间'}>
              2021-01-19 07:01:00
            </Descriptions.Item>
            <Descriptions.Item span={2} label={'更新时间'}>
              2021-01-31 08:00:00
            </Descriptions.Item>
            <Descriptions.Item span={3} label={'备注'}>
              章散出差2天，临时授权王武
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Descriptions
            border
            gutter={[16, 16]}
            title="带边框的信息："
            labelSpan={3}
            valueSpan={5}
          >
            <Descriptions.Item label={'流程号'}>100001</Descriptions.Item>
            <Descriptions.Item label={'授权人'}>章散</Descriptions.Item>
            <Descriptions.Item label={'代授权人'}>admin</Descriptions.Item>
            <Descriptions.Item span={2} label={'生效时间'}>
              2021-01-19 00:01:00
            </Descriptions.Item>
            <Descriptions.Item span={2} label={'失效时间'}>
              2021-01-31 24:00:00
            </Descriptions.Item>
            <Descriptions.Item label={'授权模式'}>转授权</Descriptions.Item>
            <Descriptions.Item span={2} label={'授权时间'}>
              2021-01-19 07:01:00
            </Descriptions.Item>
            <Descriptions.Item span={2} label={'更新时间'}>
              2021-01-31 08:00:00
            </Descriptions.Item>
            <Descriptions.Item span={3} label={'备注'}>
              章散出差2天，临时授权王武
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </div>
  );
};
```

自定义配置：

```tsx
import React, { useState } from 'react';
import { Descriptions, Button, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  const [activeTabKey, setActiveTabKey] = useState(1);

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Descriptions
            labelWidth={160}
            border
            gutter={[16, 16]}
            title="自定义背景颜色："
          >
            <Descriptions.Item
              label={'流程号'}
              background={'hsla(0, 100%, 50%, 0.3)'}
              fontColor={'#fff'}
              span={3}
            >
              100001
            </Descriptions.Item>
            <Descriptions.Item span={3} label={'授权人'}>
              章散章散章散章散章散章散章散章散章散章散章散章散章散章散章散章散章散章散章散章散章散章散章散章散章散章散章散章散章散章散章散章散章散章散章散章散章散章散章散章散章散章散章散章散章散章散章散章散章散章散章散
            </Descriptions.Item>
            <Descriptions.Item span={2} label={'代授权人'}>
              admin
            </Descriptions.Item>
            <Descriptions.Item span={2} label={'生效时间'}>
              2021-01-19 00:01:00
            </Descriptions.Item>
            <Descriptions.Item span={2} label={'失效时间'}>
              2021-01-31 24:00:00
            </Descriptions.Item>
            <Descriptions.Item label={'授权模式'}>转授权</Descriptions.Item>
            <Descriptions.Item span={2} label={'授权时间'}>
              2021-01-19 07:01:00
            </Descriptions.Item>
            <Descriptions.Item span={2} label={'更新时间'}>
              2021-01-31 08:00:00
            </Descriptions.Item>
            <Descriptions.Item span={3} label={'备注'}>
              章散出差2天，临时授权王武
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </div>
  );
};
```

<!-- 



<API />
