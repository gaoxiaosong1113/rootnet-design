---
nav:
  title: 组件
  path: /components
group:
  title: HeadPortrait 头像
  order: 46
---

## HeadPortrait 头像

尺寸：

```tsx
import React from 'react';
import { Card, HeadPortrait, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

import img from './pikaqiu.jpeg';

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={2}>
          <span>默认尺寸</span>
        </Col>
        <Col span={4}>
          <HeadPortrait mode="scaleToFill" src={img} />
        </Col>
        <Col span={2}>
          <span>xl尺寸</span>
        </Col>
        <Col span={4}>
          <HeadPortrait mode="scaleToFill" src={img} size="xl" />
        </Col>
        <Col span={2}>
          <span>xxl尺寸</span>
        </Col>
        <Col span={4}>
          <HeadPortrait mode="scaleToFill" src={img} size="xxl" />
        </Col>
        <Col span={2}>
          <span>xxxl尺寸</span>
        </Col>
        <Col span={4}>
          <HeadPortrait mode="scaleToFill" src={img} size="xxxl" />
        </Col>
      </Row>
    </div>
  );
};
```

头像裁剪类型：

```tsx
import React from 'react';
import { Card, HeadPortrait, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

import img from './pikaqiu.jpeg';

export default () => {
  return (
    <div>
      <Row gutter={[10, 10]}>
        <Col span={2}>
          <span>scaleToFill</span>
        </Col>
        <Col span={4}>
          <HeadPortrait mode="scaleToFill" src={img} />
        </Col>

        <Col span={2}>
          <span>aspectFit</span>
        </Col>
        <Col span={4}>
          <HeadPortrait mode="aspectFit" src={img} />
        </Col>

        <Col span={2}>
          <span>aspectFill</span>
        </Col>
        <Col span={4}>
          <HeadPortrait mode="aspectFill" src={img} />
        </Col>

        <Col span={2}>
          <span>widthFix</span>
        </Col>
        <Col span={4}>
          <HeadPortrait mode="widthFix" src={img} />
        </Col>

        <Col span={2}>
          <span>heightFix</span>
        </Col>
        <Col span={4}>
          <HeadPortrait mode="heightFix" src={img} />
        </Col>

        <Col span={2}>
          <span>top</span>
        </Col>
        <Col span={4}>
          <HeadPortrait mode="top" src={img} />
        </Col>

        <Col span={2}>
          <span>bottom</span>
        </Col>
        <Col span={4}>
          <HeadPortrait mode="bottom" src={img} />
        </Col>

        <Col span={2}>
          <span>center</span>
        </Col>
        <Col span={4}>
          <HeadPortrait mode="center" src={img} />
        </Col>

        <Col span={2}>
          <span>left</span>
        </Col>
        <Col span={4}>
          <HeadPortrait mode="left" src={img} />
        </Col>

        <Col span={2}>
          <span>right</span>
        </Col>
        <Col span={4}>
          <HeadPortrait mode="right" src={img} />
        </Col>

        <Col span={2}>
          <span>top left</span>
        </Col>
        <Col span={4}>
          <HeadPortrait mode="top left" src={img} />
        </Col>

        <Col span={2}>
          <span>top right</span>
        </Col>
        <Col span={4}>
          <HeadPortrait mode="top right" src={img} />
        </Col>

        <Col span={2}>
          <span>bottom left</span>
        </Col>
        <Col span={4}>
          <HeadPortrait mode="bottom left" src={img} />
        </Col>

        <Col span={2}>
          <span>bottom right</span>
        </Col>
        <Col span={4}>
          <HeadPortrait mode="bottom right" src={img} />
        </Col>
      </Row>
    </div>
  );
};
```

<API />
