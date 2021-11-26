---
nav:
  title: 组件
  path: /components
group:
  title: Steps 步骤条
  order: 36
---

## Steps 步骤条

基础用法

```tsx
import React from 'react';
import { Steps, Grid, Icon, Button, Input, Checkbox } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Steps
          current={1}
          onChange={() => {
            alert(1);
          }}
        >
          <Steps.Item
            title="正在处理"
            status="wait"
            description="这里是描述文案这里是描述文案这里是描述文案这里是描述文案这里是描述文案这里是描述文案这里是描述文案"
          />
          <Steps.Item title="正在处理" description="这里是描述文案" />
          <Steps.Item title="正在处理" status="finish" description="这里是描述文案" />
          <Steps.Item title="正在处理" status="error" description="" />
          <Steps.Item title="自定义图标" icon={<Icon name="liangduanduiqi" />} description="" />
        </Steps>
      </Col>
    </Row>
  );
};
```

点状步骤条

```tsx
import React from 'react';
import { Steps, Grid, Icon, Button, Input, Checkbox } from 'rootnet-design';
const { Row, Col } = Grid;
const { Step } = Steps;

export default () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Steps
          type="dot"
          current={1}
          onChange={() => {
            alert(1);
          }}
        >
          <Steps.Item
            title="正在处理"
            status="wait"
            description="这里是描述文案这里是描述文案这里是描述文案这里是描述文案这里是描述文案这里是描述文案这里是描述文案"
          />
          <Steps.Item title="正在处理" description="这里是描述文案" />
          <Steps.Item title="正在处理" status="finish" description="这里是描述文案" />
          <Steps.Item title="正在处理" status="error" description="" />
          <Steps.Item title="自定义图标" icon={<Icon name="liangduanduiqi" />} description="" />
        </Steps>
      </Col>
    </Row>
  );
};
```

竖直步骤条

```tsx
import React from 'react';
import { Steps, Grid, Icon, Button, Input, Checkbox } from 'rootnet-design';
const { Row, Col } = Grid;
const { Step } = Steps;

export default () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={12}>
        <Steps
          direction="vertical"
          current={1}
          onChange={() => {
            alert(1);
          }}
        >
          <Steps.Item
            title="正在处理"
            status="wait"
            description="这里是描述文案这里是描述文案这里是描述这里是描述文案这里是描述文案这里是描述文案这里是描述文案这里是描述文案这里是描述文案这里是描述文案这里是描述文案这里是描述文案这里是描述文案这里是描述文案这里是描述文案这里是描述文案这里是描述文案文案这里是描述文案这里是描述文案这里是描述文案这里是描述文案"
          />
          <Steps.Item title="正在处理" description="这里是描述文案" />
          <Steps.Item title="正在处理" status="finish" description="这里是描述文案" />
          <Steps.Item title="正在处理" status="error" description="" />
          <Steps.Item title="自定义图标" icon={<Icon name="liangduanduiqi" />} description="" />
        </Steps>
      </Col>
      <Col span={12}>
        <Steps
          direction="vertical"
          type="dot"
          current={1}
          onChange={() => {
            alert(1);
          }}
        >
          <Steps.Item
            title="正在处理"
            status="wait"
            description="这里是描述文案这里是描述文案这里是描述文案这里是描述文案这里是描述文案这里是描述文案这里是描述文案"
          />
          <Steps.Item title="正在处理" description="这里是描述文案" />
          <Steps.Item title="正在处理" status="finish" description="这里是描述文案" />
          <Steps.Item title="正在处理" status="error" description="" />
          <Steps.Item title="自定义图标" icon={<Icon name="liangduanduiqi" />} description="" />
        </Steps>
      </Col>
    </Row>
  );
};
```

自定义步骤条

```tsx
import React from 'react';
import { Steps, Grid, Icon, Button, Input, Checkbox } from 'rootnet-design';
const { Row, Col } = Grid;
const { Step } = Steps;

export default () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={12}>
        <Steps
          direction="vertical"
          current={2}
          customDotStatus={true}
          onChange={() => {
            alert(1);
          }}
        >
          <Steps.Item
            customDot={<Checkbox></Checkbox>}
            title="已完成"
            description="这里是描述文案这里是描述文案这里是描述文案这里是描述文案这里是描述文案这里是描述文案这里是描述文案"
          />
          <Steps.Item title="正在处理" description="这里是描述文案" />
          <Steps.Item
            disabled
            title={<Button type="primary">自定义标题</Button>}
            description={
              <div style={{ margin: '12px 0 ' }}>
                <Input />
              </div>
            }
          />
          <Steps.Item
            title="步骤错误"
            status="error"
            description={<Button type="primary">审核</Button>}
          />
          <Steps.Item title="自定义图标" icon={<Icon name="liangduanduiqi" />} description="" />
          <Steps.Item title="正在处理" description="" />
        </Steps>
      </Col>
    </Row>
  );
};
```

<API />
