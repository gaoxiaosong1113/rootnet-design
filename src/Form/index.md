---
nav:
  title: 组件
  path: /components
group:
  title: Form 表单
  order: 13
---

## Form 表单

示例：

```tsx
import React, { useState } from 'react';
import { Form, Input, Button, Icon, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Form
            name={'n2'}
            initialValues={{ username: 12122, username2: 12123 }}
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
                  message: '请输入电话号码',
                },
              ]}
            >
              <Input
                placeholder="请输入电话号码"
                icon={<Icon name="sk-order" />}
              />
            </Form.Item>
            <Form.Item
              label="用户名"
              name="username2"
              rules={[
                {
                  required: true,
                  max: 5,
                  message: '请输入电话号码',
                },
                {
                  fields: '/^((0d{2,3}-d{7,8})|(1[3584]d{9}))$/',
                  message: '请输入11位电话号码',
                },
              ]}
            >
              <Input
                placeholder="请输入电话号码"
                icon={<Icon name="sk-order" />}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                左侧抽屉
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
```

<API />
