---
nav:
  title: 组件
  path: /components
group:
  title: Radio 单选框
  order: 30
---

## Radio 单选框

示例：

```tsx
import React from 'react';
import { Radio, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Radio>常规</Radio>
        </Col>
        <Col span={4}>
          <Radio disabled>禁用</Radio>
        </Col>
        <Col span={4}>
          <Radio disabled checked={true}>
            默认选中并禁用
          </Radio>
        </Col>
        <Col span={4}>
          <Radio checked={true}>默认选中</Radio>
        </Col>
      </Row>
    </div>
  );
};
```

支持组嵌套的 Radio：

```tsx
import React from 'react';
import { Radio, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Radio.Group
            onChange={(v) => {
              console.log(v);
            }}
            checked={'1'}
          >
            <div>
              <Radio value="1" disabled>
                Radio组
              </Radio>
            </div>
            <div>
              <Radio value="2">Radio组</Radio>
            </div>
            <div>
              <Radio value="3">Radio组</Radio>
            </div>
            <Radio value="4">Radio组</Radio>
            <Radio value="5">Radio组</Radio>
            <Radio value="6">Radio组</Radio>
            <Radio value="7">Radio组</Radio>
          </Radio.Group>
        </Col>
      </Row>
    </div>
  );
};
```

## Radio API

<API hideTitle src="./Radio.tsx"/>

## Radio.Group API

<API hideTitle src="./Group.tsx"/>
