---
nav:
  title: 组件
  path: /components
group:
  title: Cascader 级联选择
  order: 3
---

## Cascader 级联选择

示例：

```tsx
import React from 'react';
import { Cascader, Grid } from 'rootnet-design';
import regionData from './region.js';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Cascader
            region
            close
            options={regionData}
            placeholder={'请选择'}
            onChange={(label, value) => {
              console.log(label, value);
            }}
          />
        </Col>
        <Col span={4}>
          <Cascader
            region
            close
            value={['110000', '110100', '110102']}
            options={regionData}
            placeholder={'请选择'}
            onChange={(label, value) => {
              console.log(label, value);
            }}
          />
        </Col>
        <Col span={4}>
          <Cascader
            region
            disabled
            value={['110000', '110100', '110102']}
            options={regionData}
            placeholder={'请选择'}
            onChange={(label, value) => {
              console.log(label, value);
            }}
          />
        </Col>
      </Row>
    </div>
  );
};
```

<API />
