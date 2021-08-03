---
nav:
  title: 组件
  path: /components
group:
  title: Result 结果页
  order: 31
---

## Result 结果页

示例：

```tsx
import React from 'react';
import { Result, Grid, Button } from 'rootnet-design';
const { Row, Col } = Grid;

import authority from './resources/authority.svg';
import client from './resources/client.svg';
import server from './resources/server.svg';
import compatibility from './resources/compatibility.svg';

export default () => {
  return (
    <div style={{ width: '100%', height: 800 }}>
      <Result
        type="403"
        src={authority}
        extra={<Button type="primary">返回首页</Button>}
      ></Result>
    </div>
  );
};
```

示例：

```tsx
import React from 'react';
import { Result, Grid, Button } from 'rootnet-design';
const { Row, Col } = Grid;

import authority from './resources/authority.svg';
import client from './resources/client.svg';
import server from './resources/server.svg';
import compatibility from './resources/compatibility.svg';

export default () => {
  return (
    <div style={{ width: '100%', height: 800 }}>
      <Result
        type="404"
        src={client}
        extra={<Button type="primary">返回首页</Button>}
      ></Result>
    </div>
  );
};
```

示例：

```tsx
import React from 'react';
import { Result, Grid, Button } from 'rootnet-design';
const { Row, Col } = Grid;

import authority from './resources/authority.svg';
import client from './resources/client.svg';
import server from './resources/server.svg';
import compatibility from './resources/compatibility.svg';

export default () => {
  return (
    <div style={{ width: '100%', height: 800 }}>
      <Result
        type="500"
        src={server}
        extra={<Button type="primary">返回首页</Button>}
      ></Result>
    </div>
  );
};
```

示例：

```tsx
import React from 'react';
import { Result, Grid, Button } from 'rootnet-design';
const { Row, Col } = Grid;

import authority from './resources/authority.svg';
import client from './resources/client.svg';
import server from './resources/server.svg';
import compatibility from './resources/compatibility.svg';

export default () => {
  return (
    <div style={{ width: '100%', height: 800 }}>
      <Result
        type="compatibility"
        src={compatibility}
        extra={<Button type="primary">返回首页</Button>}
      ></Result>
    </div>
  );
};
```

<API />
