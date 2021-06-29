---
nav:
  title: 组件
  path: /components
group:
  title: Spin 加载中
  order: 35
---

## Spin 加载中

示例：

```tsx
import React, { useState } from 'react';
import { Spin, Alert, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Spin loading></Spin>
        </Col>
      </Row>
    </div>
  );
};
```

放到容器中：

```tsx
import React, { useState } from 'react';
import { Spin } from 'rootnet-design';

export default () => {
  return (
    <div style={{ width: '100%', height: 800 }}>
      <Spin loading></Spin>
    </div>
  );
};
```

包裹元素：

```tsx
import React, { useState } from 'react';
import { Spin, Alert } from 'rootnet-design';

export default () => {
  return (
    <div>
      <Spin loading>
        <Alert
          content="恭喜！你所提交操作已通过，如有问题请联系客服。"
          type="info"
        />
      </Spin>
    </div>
  );
};
```

包裹表单：

```tsx
import React, { useState } from 'react';
import {
  Spin,
  Form,
  Input,
  Select,
  Radio,
  Checkbox,
  Button,
  Icon,
} from 'rootnet-design';

export default () => {
  return (
    <div>
      <Spin loading>
        <Form
          layout={'horizontal'}
          name={'n2'}
          initialValues={{}}
          onSubmit={(form) => {
            console.log('校验成功');
            console.log(form);
          }}
          onError={(error) => {
            console.log('校验错误');
            console.log(error);
          }}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[
              {
                required: true,
                max: 2,
                message: '请输入用户名',
              },
            ]}
          >
            <Input placeholder="请输入用户名" icon={<Icon name="Rootnet" />} />
          </Form.Item>
          <Form.Item
            label="电话号码"
            name="phone"
            rules={[
              {
                required: true,
                message: '请输入电话号码',
              },
              {
                fields: /^[1][3,4,5,6,7,8,9][0-9]{9}$/,
                message: '请输入11位电话号码',
              },
            ]}
          >
            <Input
              placeholder="请输入电话号码"
              icon={<Icon name="Rootnet" />}
            />
          </Form.Item>
          <Form.Item
            label="协议"
            name="radio"
            rules={[
              {
                required: true,
                message: '请勾选协议',
              },
            ]}
          >
            <Radio>同意</Radio>
          </Form.Item>
          <Form.Item
            label="选项"
            name="checkbox"
            rules={[
              {
                required: true,
                message: '请输入电话号码',
              },
            ]}
          >
            <Checkbox.Group>
              <div>
                <Checkbox value="1" disabled>
                  Checkbox组
                </Checkbox>
              </div>
              <div>
                <Checkbox value="2">Checkbox组</Checkbox>
              </div>
              <div>
                <Checkbox value="3">Checkbox组</Checkbox>
              </div>
              <Checkbox value="4">Checkbox组</Checkbox>
              <Checkbox value="5">Checkbox组</Checkbox>
              <Checkbox value="6">Checkbox组</Checkbox>
              <Checkbox value="7">Checkbox组</Checkbox>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item
            label="选项"
            name="select"
            rules={[
              {
                required: true,
                message: '请选择',
              },
            ]}
          >
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
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </Spin>
    </div>
  );
};
```
