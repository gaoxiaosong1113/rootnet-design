---
nav:
  title: 组件
  path: /components
group:
  title: Checkbox 多选框
  order: 6
---

## Checkbox 多选框

示例：

```tsx
import React from 'react';
import { Checkbox, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Checkbox>常规</Checkbox>
        </Col>
        <Col span={4}>
          <Checkbox disabled>禁用</Checkbox>
        </Col>
        <Col span={4}>
          <Checkbox disabled checked={true}>
            默认选中并禁用
          </Checkbox>
        </Col>
        <Col span={4}>
          <Checkbox checked={true}>默认选中</Checkbox>
        </Col>
      </Row>
    </div>
  );
};
```

支持组嵌套的 checkbox：

```tsx
import React from 'react';
import { Checkbox, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Checkbox.Group
            onChange={(v) => {
              console.log(v);
            }}
            checked={['1', '2', '3', '4', '5', '6', '7']}
          >
            <div>
              <Checkbox value="1" disabled>
                Checkbox组
              </Checkbox>
            </div>
            <div>
              <Checkbox value="2">Checkbox组</Checkbox>
            </div>
            <div>
              <Checkbox value="3">Checkbox组</Checkbox>
            </div>
            <Checkbox value="4">Checkbox组</Checkbox>
            <Checkbox value="5">Checkbox组</Checkbox>
            <Checkbox value="6">Checkbox组</Checkbox>
            <Checkbox value="7">Checkbox组</Checkbox>
          </Checkbox.Group>
        </Col>
      </Row>
    </div>
  );
};
```

More skills for writing 示例： https://d.umijs.org/guide/demo-principle
