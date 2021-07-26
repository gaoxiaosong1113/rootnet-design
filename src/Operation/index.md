---
nav:
  title: 组件
  path: /components
group:
  title: Operation 操作项
  order: 28
---

## Operation 操作项

示例：

```tsx
import React from 'react';
import { Operation, Popconfirm, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Operation>
            <Operation.Item>修改</Operation.Item>
            <Operation.Item>详情</Operation.Item>
            <Popconfirm
              content={'我是一段提示，并且字数不是很多'}
              onConfirm={(e) => {
                console.log('确认');
              }}
              onCancel={(e) => {
                console.log('取消');
              }}
            >
              <Operation.Item>注销</Operation.Item>
            </Popconfirm>
          </Operation>
        </Col>
      </Row>
    </div>
  );
};
```

禁用：

```tsx
import React from 'react';
import { Operation, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Operation>
            <Operation.Item disabled>修改</Operation.Item>
            <Operation.Item>详情</Operation.Item>
            <Operation.Item>注销</Operation.Item>
            <Operation.Popup>
              <Operation.Item disabled>另存为pdf</Operation.Item>
              <Operation.Item>另存为jpg</Operation.Item>
              <Operation.Item>另存为png</Operation.Item>
              <Operation.Item>另存为gif</Operation.Item>
            </Operation.Popup>
          </Operation>
        </Col>
      </Row>
    </div>
  );
};
```

不同方向：

```tsx
import React from 'react';
import { Operation, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Operation>
            <Operation.Item>修改</Operation.Item>
            <Operation.Item>详情</Operation.Item>
            <Operation.Item>注销</Operation.Item>
            <Operation.Popup position="top">
              <Operation.Item>另存为pdf</Operation.Item>
              <Operation.Item>另存为jpg</Operation.Item>
              <Operation.Item>另存为png</Operation.Item>
              <Operation.Item>另存为gif</Operation.Item>
            </Operation.Popup>
          </Operation>
        </Col>
        <Col span={4}>
          <Operation>
            <Operation.Item>修改</Operation.Item>
            <Operation.Item>详情</Operation.Item>
            <Operation.Item>注销</Operation.Item>
            <Operation.Popup position="top-left">
              <Operation.Item>另存为pdf</Operation.Item>
              <Operation.Item>另存为jpg</Operation.Item>
              <Operation.Item>另存为png</Operation.Item>
              <Operation.Item>另存为gif</Operation.Item>
            </Operation.Popup>
          </Operation>
        </Col>
        <Col span={4}>
          <Operation>
            <Operation.Item>修改</Operation.Item>
            <Operation.Item>详情</Operation.Item>
            <Operation.Item>注销</Operation.Item>
            <Operation.Popup position="top-right">
              <Operation.Item>另存为pdf</Operation.Item>
              <Operation.Item>另存为jpg</Operation.Item>
              <Operation.Item>另存为png</Operation.Item>
              <Operation.Item>另存为gif</Operation.Item>
            </Operation.Popup>
          </Operation>
        </Col>
        <Col span={4}>
          <Operation>
            <Operation.Item>修改</Operation.Item>
            <Operation.Item>详情</Operation.Item>
            <Operation.Item>注销</Operation.Item>
            <Operation.Popup position="left">
              <Operation.Item>另存为pdf</Operation.Item>
              <Operation.Item>另存为jpg</Operation.Item>
              <Operation.Item>另存为png</Operation.Item>
              <Operation.Item>另存为gif</Operation.Item>
            </Operation.Popup>
          </Operation>
        </Col>
        <Col span={4}>
          <Operation>
            <Operation.Item>修改</Operation.Item>
            <Operation.Item>详情</Operation.Item>
            <Operation.Item>注销</Operation.Item>
            <Operation.Popup position="right">
              <Operation.Item>另存为pdf</Operation.Item>
              <Operation.Item>另存为jpg</Operation.Item>
              <Operation.Item>另存为png</Operation.Item>
              <Operation.Item>另存为gif</Operation.Item>
            </Operation.Popup>
          </Operation>
        </Col>
        <Col span={4}>
          <Operation>
            <Operation.Item>修改</Operation.Item>
            <Operation.Item>详情</Operation.Item>
            <Operation.Item>注销</Operation.Item>
            <Operation.Popup position="bottom">
              <Operation.Item>另存为pdf</Operation.Item>
              <Operation.Item>另存为jpg</Operation.Item>
              <Operation.Item>另存为png</Operation.Item>
              <Operation.Item>另存为gif</Operation.Item>
            </Operation.Popup>
          </Operation>
        </Col>
        <Col span={4}>
          <Operation>
            <Operation.Item>修改</Operation.Item>
            <Operation.Item>详情</Operation.Item>
            <Operation.Item>注销</Operation.Item>
            <Operation.Popup position="bottom-left">
              <Operation.Item>另存为pdf</Operation.Item>
              <Operation.Item>另存为jpg</Operation.Item>
              <Operation.Item>另存为png</Operation.Item>
              <Operation.Item>另存为gif</Operation.Item>
            </Operation.Popup>
          </Operation>
        </Col>
        <Col span={4}>
          <Operation>
            <Operation.Item>修改</Operation.Item>
            <Operation.Item>详情</Operation.Item>
            <Operation.Item>注销</Operation.Item>
            <Operation.Popup position="bottom-right">
              <Operation.Item>另存为pdf</Operation.Item>
              <Operation.Item>另存为jpg</Operation.Item>
              <Operation.Item>另存为png</Operation.Item>
              <Operation.Item>另存为gif</Operation.Item>
            </Operation.Popup>
          </Operation>
        </Col>
      </Row>
    </div>
  );
};
```
