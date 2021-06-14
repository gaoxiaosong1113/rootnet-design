---
nav:
  title: 组件
  path: /components
group:
  title: Select 下拉框
  order: 32
---

## Select 下拉框

示例：

```tsx
import React from 'react';
import { Select, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Select
            options={[
              {
                label: '选项一选项一选项一选项一选项一选项一选项一选项一',
                value: 1,
              },
              {
                label: '选项二',
                value: 2,
              },
              {
                label: '选项三',
                value: 3,
              },
            ]}
            placeholder={'默认下拉框'}
            onChange={(value) => {
              console.log(value);
            }}
          />
        </Col>
        <Col span={4}>
          <Select
            options={[
              {
                label: '选项一选项一选项一选项一选项一选项一选项一选项一',
                value: 1,
              },
              {
                label: '选项二',
                value: 2,
              },
              {
                label: '选项三',
                value: 3,
              },
            ]}
            multiple={true}
            placeholder={'多选下拉框'}
            onChange={(value) => {
              console.log(value);
            }}
          />
        </Col>
        <Col span={4}>
          <Select
            options={[
              {
                label: '选项一选项一选项一选项一选项一选项一选项一选项一',
                value: 1,
              },
              {
                label: '选项二',
                value: 2,
              },
              {
                label: '选项三',
                value: 3,
              },
            ]}
            placeholder={'自定义提示'}
            onChange={(value) => {
              console.log(value);
            }}
          />
        </Col>
        <Col span={4}>
          <Select
            options={[
              {
                label: '选项一选项一选项一选项一选项一选项一选项一选项一',
                value: 1,
              },
              {
                label: '选项二',
                value: 2,
              },
              {
                label: '选项三',
                value: 3,
              },
            ]}
            close={true}
            placeholder={'带关闭的下拉框'}
            onChange={(value) => {
              console.log(value);
            }}
          />
        </Col>
        <Col span={4}>
          <Select
            options={[
              {
                label: '选项一选项一选项一选项一选项一选项一选项一选项一',
                value: 1,
              },
              {
                label: '选项二',
                value: 2,
              },
              {
                label: '选项三',
                value: 3,
              },
            ]}
            disabled={true}
            placeholder={'禁用下拉框'}
            onChange={(value) => {
              console.log(value);
            }}
          />
        </Col>
      </Row>
    </div>
  );
};
```

More skills for writing 示例： https://d.umijs.org/guide/demo-principle
