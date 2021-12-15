---
nav:
  title: 组件
  path: /components
group:
  title: Pagination 分页
  order: 26
---

## Pagination 分页

示例：简单分页

```tsx
import React from 'react';
import { Grid, Pagination } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Pagination simple total={70} />
        </Col>
      </Row>
    </div>
  );
};
```

示例：小尺寸分页（动态传入 total）

```tsx
import React, { useState, useEffect } from 'react';
import { Grid, Pagination } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  const [num, setNum] = useState(100);

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Pagination total={100000} pageSize={20} size="small" />
        </Col>
      </Row>
    </div>
  );
};
```

示例：上一页下一页内容替换

```tsx
import React from 'react';
import { Grid, Pagination } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Pagination total={1000} pageSize={30} next="下一页" prev="上一页" />
        </Col>
      </Row>
    </div>
  );
};
```

示例：禁用分页

```tsx
import React from 'react';
import { Grid, Pagination } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Pagination total={1000} pageSize={40} disabled />
        </Col>
      </Row>
    </div>
  );
};
```

示例：基础分页

```tsx
import React from 'react';
import { Grid, Pagination } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  const onChange = (page, pageSize) => {
    console.log(page, pageSize);
  };
  const onSizeChange = (page, pageSize) => {
    console.log(page, pageSize);
  };
  const total = 1000;
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Pagination
            total={total}
            pageSize={50}
            onChange={onChange}
            onSizeChange={onSizeChange}
            selector={[15, 25, 35]}
            renderTotal={() => `共${total}个用户`}
          />
        </Col>
      </Row>
    </div>
  );
};
```
