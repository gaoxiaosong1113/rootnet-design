---
nav:
  title: 组件
  path: /components
group:
  title: Icon 图标
  order: 15
---

## Icon 图标

示例:

```tsx
import React from 'react';
import { Icon, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Icon name="shanchu" />
          <p>删除</p>
        </Col>
        <Col span={4}>
          <Icon name="shaixuan" />
          <p>筛选</p>
        </Col>
        <Col span={4}>
          <Icon name="suoxiao" />
          <p>缩小</p>
        </Col>
        <Col span={4}>
          <Icon name="fangda" />
          <p>放大</p>
        </Col>
        <Col span={4}>
          <Icon name="xuanzexiala" />
          <p>选择下拉</p>
        </Col>
        <Col span={4}>
          <Icon name="paixu" />
          <p>排序</p>
        </Col>
        <Col span={4}>
          <Icon name="cuowu" />
          <p>错误</p>
        </Col>
        <Col span={4}>
          <Icon name="zhengque" />
          <p>正确</p>
        </Col>
        <Col span={4}>
          <Icon name="tianjia1" />
          <p>添加</p>
        </Col>
        <Col span={4}>
          <Icon name="chenggong1" />
          <p>成功</p>
        </Col>
        <Col span={4}>
          <Icon name="shibai1" />
          <p>失败</p>
        </Col>
        <Col span={4}>
          <Icon name="jinggao1" />
          <p>警告</p>
        </Col>
        <Col span={4}>
          <Icon name="tixing2" />
          <p>提醒</p>
        </Col>
        <Col span={4}>
          <Icon name="xunwen2" />
          <p>询问</p>
        </Col>
        <Col span={4}>
          <Icon name="Rootnet" />
          <p>Rootnet</p>
        </Col>
      </Row>
    </div>
  );
};
```

自定义颜色：

```tsx
import React from 'react';
import { Icon, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Icon name="shanchu" color="red" />
          <p>删除</p>
        </Col>
      </Row>
    </div>
  );
};
```

<API />
