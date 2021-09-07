---
nav:
  title: 组件
  path: /components
group:
  title: Input 输入框
  order: 17
---

## Input 输入框

示例：

```tsx
import React, { useState } from 'react';
import { Input, Button, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Input
            placeholder="请输入内容"
            after={'%'}
            onChange={(e) => {
              console.log(e);
            }}
          />
        </Col>
      </Row>
    </div>
  );
};
```

附加信息：

```tsx
import React, { useState } from 'react';
import { Input, Icon, Button, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Input placeholder="请输入内容" after={'%'} />
        </Col>
        <Col span={8}>
          <Input placeholder="请输入内容" before={'金额'} after={'%'} />
        </Col>
        <Col span={8}>
          <Input
            placeholder="请输入内容"
            before={<Icon name="mima1" />}
            after={'%'}
          />
        </Col>
      </Row>
    </div>
  );
};
```

设置图标：

```tsx
import React, { useState } from 'react';
import { Input, Icon, Button, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Input
            placeholder="请输入内容"
            icon={<Icon name="mima1" />}
            onChange={(e) => {
              console.log(e);
            }}
          />
        </Col>
      </Row>
    </div>
  );
};
```

非受控：

```tsx
import React, { useState } from 'react';
import { Input, Icon, Button, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Input
            placeholder="请输入内容"
            onChange={(value) => {
              console.log(value);
            }}
            icon={<Icon name="mima1" />}
          />
        </Col>
      </Row>
    </div>
  );
};
```

设置默认值：

```tsx
import React, { useState } from 'react';
import { Input, Icon, Button, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  const [value, setValue] = useState(55);

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Input
            placeholder="请输入内容"
            onChange={(v) => setValue(v)}
            value={value}
            icon={<Icon name="mima1" />}
          />
        </Col>
      </Row>
    </div>
  );
};
```

设置默认值：

```tsx
import React, { useState } from 'react';
import { Input, Icon, Button, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  const [value, setValue] = useState(55);

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Input
            placeholder="请输入内容"
            onChange={(v) => setValue(v)}
            value={value}
            icon={<Icon name="mima1" />}
          />
        </Col>
        <Col span={8}>
          <Input placeholder="请输入内容" icon={<Icon name="mima1" />} />
        </Col>
        <Col span={8}>
          <Input
            placeholder="请输入内容"
            before={<Icon name="mima1" />}
            after={'%'}
          />
        </Col>
      </Row>
    </div>
  );
};
```

禁用：

```tsx
import React, { useState } from 'react';
import { Input, Icon, Button, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  const [value, setValue] = useState(55);

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Input
            placeholder="请输入内容"
            onChange={(v) => setValue(v)}
            value={value}
            disabled
            icon={<Icon name="mima1" />}
          />
        </Col>
        <Col span={8}>
          <Input
            disabled
            placeholder="请输入内容"
            icon={<Icon name="mima1" />}
          />
        </Col>
        <Col span={8}>
          <Input
            placeholder="请输入内容"
            before={<Icon name="mima1" />}
            after={'%'}
            disabled
          />
        </Col>
      </Row>
    </div>
  );
};
```

<API />
