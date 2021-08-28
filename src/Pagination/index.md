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
          <Pagination simple />
        </Col>
      </Row>
    </div>
  );
};
```

示例：小尺寸分页

```tsx
import React from 'react';
import { Grid, Pagination } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Pagination size="small" />
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
          <Pagination next="下一页" prev="上一页" />
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
          <Pagination disabled />
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
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Pagination
            totalPage="110"
            totalNum="999"
            onChange={onChange}
            onSizeChange={onSizeChange}
          />
        </Col>
      </Row>
    </div>
  );
};
```

<API />
