---
nav:
  title: 组件
  path: /components
group:
  title: Breadcrumb 面包屑导航
  order: 2
---

## Breadcrumb 面包屑导航

示例：

```tsx
import React from 'react';
import { Breadcrumb, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Breadcrumb>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>一级菜单</Breadcrumb.Item>
            <Breadcrumb.Item>二级菜单</Breadcrumb.Item>
            <Breadcrumb.Item>三级菜单</Breadcrumb.Item>
            <Breadcrumb.Item>内容页</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
    </div>
  );
};
```

<API  exports='["default", "Item"]'/>
