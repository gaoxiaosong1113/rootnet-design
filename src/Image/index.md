---
nav:
  title: 组件
  path: /components
group:
  title: Image 图片
  order: 16
---

## Image 图片

示例：

```tsx
import React from 'react';
import { Card, Image, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

import img from './xtjgt.png';

const style = { width: 400, height: 200, backgroundColor: '#000' };

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <p>scaleToFill</p>
          <Image style={style} mode="scaleToFill" src={img}></Image>
        </Col>
        <Col span={24}>
          <p>aspectFit</p>
          <Image style={style} mode="aspectFit" src={img}></Image>
        </Col>
        <Col span={24}>
          <p>aspectFill</p>
          <Image style={style} mode="aspectFill" src={img}></Image>
        </Col>
        <Col span={24}>
          <p>widthFix</p>
          <Image style={style} mode="widthFix" src={img}></Image>
        </Col>
        <Col span={24}>
          <p>heightFix</p>
          <Image style={style} mode="heightFix" src={img}></Image>
        </Col>
        <Col span={24}>
          <p>top</p>
          <Image style={style} mode="top" src={img}></Image>
        </Col>
        <Col span={24}>
          <p>bottom</p>
          <Image style={style} mode="bottom" src={img}></Image>
        </Col>
        <Col span={24}>
          <p>center</p>
          <Image style={style} mode="center" src={img}></Image>
        </Col>
        <Col span={24}>
          <p>left</p>
          <Image style={style} mode="left" src={img}></Image>
        </Col>
        <Col span={24}>
          <p>right</p>
          <Image style={style} mode="right" src={img}></Image>
        </Col>
        <Col span={24}>
          <p>top left</p>
          <Image style={style} mode="top left" src={img}></Image>
        </Col>
        <Col span={24}>
          <p>top right</p>
          <Image style={style} mode="top right" src={img}></Image>
        </Col>
        <Col span={24}>
          <p>bottom left</p>
          <Image style={style} mode="bottom left" src={img}></Image>
        </Col>
        <Col span={24}>
          <p>bottom right</p>
          <Image style={style} mode="bottom right" src={img}></Image>
        </Col>
      </Row>
    </div>
  );
};
```

<API />
