---
nav:
  title: 组件
  path: /components
group:
  title: Alert 警告提示
  order: 1
---

## Alert 警告提示

示例：

```tsx
import React from 'react';
import { Alert, Grid } from 'rootnet-design';
console.log(Grid);
const { Row, Col } = Grid;

debugger;
export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Alert content="恭喜！你所提交操作已通过，如有问题请联系客服。" />
        </Col>
      </Row>
    </div>
  );
};
```

四种样式：

```tsx
import React from 'react';
import { Alert, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Alert
            content="恭喜！你所提交操作已通过，如有问题请联系客服。"
            type="info"
          />
        </Col>
        <Col span={12}>
          <Alert
            content="恭喜！你所提交操作已通过，如有问题请联系客服。"
            type="success"
          />
        </Col>
        <Col span={12}>
          <Alert
            content="恭喜！你所提交操作已通过，如有问题请联系客服。"
            type="warning"
          />
        </Col>
        <Col span={12}>
          <Alert
            content="恭喜！你所提交操作已通过，如有问题请联系客服。"
            type="error"
          />
        </Col>
      </Row>
    </div>
  );
};
```

两个尺寸：

```tsx
import React from 'react';
import { Alert, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Alert
            content="恭喜！你所提交操作已通过，如有问题请联系客服。"
            type="info"
          />
        </Col>
        <Col span={12}>
          <Alert
            title="系统提示"
            content="恭喜！你所提交操作已通过，如有问题请联系客服。"
            type="success"
          />
        </Col>
      </Row>
    </div>
  );
};
```

可关闭：

```tsx
import React from 'react';
import { Alert, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Alert
            close
            content="恭喜！你所提交操作已通过，如有问题请联系客服。"
            type="info"
          />
        </Col>
        <Col span={12}>
          <Alert
            close
            title="系统提示"
            content="恭喜！你所提交操作已通过，如有问题请联系客服。"
            type="success"
          />
        </Col>
      </Row>
    </div>
  );
};
```

增加操作按钮：

```tsx
import React from 'react';
import { Alert, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Alert
            close
            content="恭喜！你所提交操作已通过，如有问题请联系客服。"
            type="info"
            extra={<span>查看详情</span>}
          />
        </Col>
        <Col span={12}>
          <Alert
            close
            title="系统提示"
            content="恭喜！你所提交操作已通过，如有问题请联系客服。"
            type="success"
          />
        </Col>
      </Row>
    </div>
  );
};
```

<API ></API>

More skills for writing 示例： https://d.umijs.org/guide/demo-principle
