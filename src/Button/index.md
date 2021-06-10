---
nav:
  title: 组件
  path: /components
group:
  title: Button 按钮
  order: 3
---

## Button 按钮

Demo:

```tsx
import React from 'react';
import { Button } from 'rootnet-design';

export default () => {
  return (
    <div>
      <div>
        <Button type="primary">按钮</Button>
        <Button>按钮</Button>
        <Button type="dashed">按钮</Button>
        <Button disabled="disabled">按钮</Button>
        <Button type="text">按钮</Button>
      </div>
      <div>
        <Button type="primary" size="sm">
          按钮
        </Button>
        <Button size="sm">按钮</Button>
        <Button type="dashed" size="sm">
          按钮
        </Button>
        <Button disabled="disabled" size="sm">
          按钮
        </Button>
        <Button type="text" size="sm">
          按钮
        </Button>
      </div>
      <div>
        <Button type="primary" size="lg">
          按钮
        </Button>
        <Button size="lg">按钮</Button>
        <Button type="dashed" size="lg">
          按钮
        </Button>
        <Button disabled="disabled" size="lg">
          按钮
        </Button>
        <Button type="text" size="lg">
          按钮
        </Button>
      </div>
    </div>
  );
};
```

More skills for writing demo: https://d.umijs.org/guide/demo-principle
