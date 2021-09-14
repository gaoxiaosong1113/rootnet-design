---
nav:
  title: 组件
  path: /components
group:
  title: PageHeader 页头
  order: 25
---

## PageHeader 页头

示例：

```tsx
import React from 'react';
import { PageHeader } from 'rootnet-design';

export default () => <PageHeader title="返回" />;
```

示例：

```tsx
import React from 'react';
import { PageHeader, Button } from 'rootnet-design';

export default () => (
  <PageHeader title="返回">
    <Button>取消</Button>
    <Button type="primary">保存</Button>
  </PageHeader>
);
```

<API />
