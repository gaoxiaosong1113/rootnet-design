---
nav:
  title: 组件
  path: /components
group:
  title: Timeline 时间轴
  order: 41
---

## Timeline 时间轴

示例一：

```tsx
import React from 'react';
import { Timeline } from 'rootnet-design';
const data = [
  { time: '2020-02-22', title: '时间筹备时间筹备时间筹备时间筹备' },
  { time: '2016', title: '事件准备' },
  { time: '2019', title: '事件开始' },
  { time: '2022', title: '事件结束' },
];

export default () => {
  return (
    <div>
      <Timeline data={data} />
    </div>
  );
};
```

示例二：

```tsx
import React from 'react';
import { Timeline } from 'rootnet-design';
const data = [
  { time: '2020-02-22', title: '事件筹备' },
  { time: '2020-02-22', title: '事件准备' },
  { time: '2020-02-22', title: '事件开始' },
  { time: '2022', title: '事件结束事件结束事件结束事件结束事件结束' },
];

export default () => {
  return (
    <div>
      <Timeline data={data} type="horizontal" color="red" />
    </div>
  );
};
```

<API />
