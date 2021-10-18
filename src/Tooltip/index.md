---
nav:
  title: 组件
  path: /components
group:
  title: Tooltip 文字提示
  order: 42
---

## Tooltip 文字提示

示例：

```tsx
import React from 'react';
import { Tooltip, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div style={{ overflow: 'auto', height: 200 }}>
      <div style={{ height: 800 }}>
        <Row gutter={[16, 16]}>
          <Col span={4}>
            <Tooltip position="top" content={'我是一段提示，并且字数不是很多'}>
              <span>top</span>
            </Tooltip>
          </Col>
          <Col span={4}>
            <Tooltip
              position="top-left"
              content={'我是一段提示，并且字数不是很多'}
            >
              <span>top-left</span>
            </Tooltip>
          </Col>
          <Col span={4}>
            <Tooltip
              position="top-right"
              content={'我是一段提示，并且字数不是很多'}
            >
              <span>top-right</span>
            </Tooltip>
          </Col>
          <Col span={4}>
            <Tooltip position="left" content={'我是一段提示，并且字数不是很多'}>
              <span>left</span>
            </Tooltip>
          </Col>
          <Col span={4}>
            <Tooltip
              position="right"
              content={'我是一段提示，并且字数不是很多'}
            >
              <span>right</span>
            </Tooltip>
          </Col>
          <Col span={4}>
            <Tooltip
              position="bottom"
              content={'我是一段提示，并且字数不是很多'}
            >
              <span>bottom</span>
            </Tooltip>
          </Col>
          <Col span={4}>
            <Tooltip
              position="bottom-left"
              content={'我是一段提示，并且字数不是很多'}
            >
              <span>bottom-left</span>
            </Tooltip>
          </Col>
          <Col span={4}>
            <Tooltip
              position="bottom-right"
              content={'我是一段提示，并且字数不是很多'}
            >
              <span>bottom-right</span>
            </Tooltip>
          </Col>
        </Row>
      </div>
    </div>
  );
};
```

触发方式：

focus 触发需要 input 的以下事件的第二个参数为 event

```js
onFocus: (value, event) => {};

onBlur: (value, event) => {};
```

```tsx
import React from 'react';
import { Tooltip, Input, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Tooltip trigger="click" content={'我是一段提示，并且字数不是很多'}>
            <span
              style={{ transform: 'translate(273.986px, 197.25px)' }}
              onClick={() => console.log('点击了')}
            >
              click
            </span>
          </Tooltip>
        </Col>
        <Col span={4}>
          <Tooltip trigger="focus" content={'我是一段提示，并且字数不是很多'}>
            <Input placeholder="focus" />
          </Tooltip>
        </Col>
        <Col span={4}>
          <Tooltip trigger="hover" content={'我是一段提示，并且字数不是很多'}>
            <Input placeholder="hover" />
          </Tooltip>
        </Col>
        <Col span={4}>
          <Tooltip trigger="hover" content={'我是一段提示，并且字数不是很多'}>
            <span>hover</span>
          </Tooltip>
        </Col>
        <Col span={4}>
          <Tooltip
            trigger="hover"
            disable
            content={'我是一段提示，并且字数不是很多'}
          >
            <span>禁用</span>
          </Tooltip>
        </Col>
        <Col span={4}>
          <Tooltip
            trigger="click"
            disable
            content={'我是一段提示，并且字数不是很多'}
          >
            <span>禁用</span>
          </Tooltip>
        </Col>
      </Row>
    </div>
  );
};
```

边界：

```tsx
import React from 'react';
import { Tooltip, Input, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Tooltip content={'我是'}>
            <span>click</span>
          </Tooltip>
        </Col>
        <Col span={4}>
          <Tooltip
            content={
              '我是一段提示，并且字数很多我是一段提示，并且字数很多我是一段提示，并且字数很多我是一段提示，并且字数很多我是一段提示，并且字数很多我是一段提示，并且字数很多我是一段提示，并且字数很多我是一段提示，并且字数很多我是一段提示，并且字数很多我是一段提示，并且字数很多我是一段提示，并且字数很多我是一段提示，并且字数很多我是一段提示，并且字数很多我是一段提示，并且字数很多我是一段提示，并且字数很多我是一段提示，并且字数很多'
            }
          >
            <span>click</span>
          </Tooltip>
        </Col>
      </Row>
    </div>
  );
};
```

<API />
