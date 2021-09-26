---
nav:
  title: 组件
  path: /components
group:
  title: Badge 徽标数
  order: 3
---

## Badge 徽标数

基础示例：

> 简单的徽章展示，当 count 为 0 时，默认不显示，但是可以使用 showZero 修改为显示。

```jsx
import React from 'react';
import { Badge, Grid, Button, Icon } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={2}>
          <Badge count="5">
            <Button type="primary">按钮</Button>
          </Badge>
        </Col>
        <Col span={2}>
          <Badge count="0" showZero={true}>
            <Button type="primary">按钮</Button>
          </Badge>
        </Col>
        <Col span={2}>
          <Badge count={<Icon size={20} color="red" name="xunwen2" />}>
            <Button type="primary">按钮</Button>
          </Badge>
        </Col>
      </Row>
    </div>
  );
};
```

独立使用

> 不包裹任何元素即是独立使用，可自定样式展现。

```jsx
import React from 'react';
import { Badge, Grid, Button, Icon } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={1}>
          <Badge count={66}></Badge>
        </Col>
        <Col span={1}>
          <Badge count={<Icon size={20} color="red" name="xunwen2" />}></Badge>
        </Col>
        <Col span={1}>
          <Badge count={999} style={{ backgroundColor: '#52c41a' }}></Badge>
        </Col>
      </Row>
    </div>
  );
};
```

讨嫌的小红点

> 没有具体的数字。

```jsx
import React from 'react';
import { Badge, Grid, Button, Icon } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={1}>
          <Badge dot={true}>
            <Button type="primary">按钮</Button>
          </Badge>
        </Col>
      </Row>
    </div>
  );
};
```

<API />
