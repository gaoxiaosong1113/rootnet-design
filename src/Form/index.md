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
import { Form, Input, Select, Radio, Checkbox, Button, Icon, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Form
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
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Form.Item
                  label="用户名"
                  name="username"
                  rules={[
                    {
                      max: 2,
                      message: '请输入用户名',
                    },
                  ]}
                >
                  <Input placeholder="请输入用户名" icon={<Icon name="Rootnet" />} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="电话号码"
                  name="phone"
                  rules={[
                    {
                      fields: /^[1][3,4,5,6,7,8,9][0-9]{9}$/,
                      message: '请输入11位电话号码',
                    },
                  ]}
                >
                  <Input placeholder="请输入电话号码" icon={<Icon name="Rootnet" />} />
                </Form.Item>
              </Col>
              <Col span={8}>
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
              </Col>
              <Col span={24}>
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
              </Col>
            </Row>
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
            <Form.Item>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
```

Inline：

```tsx
import React, { useState } from 'react';
import { Form, Input, Select, Radio, Checkbox, Button, Icon, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Form
            layout={'inline'}
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
              <Input placeholder="请输入电话号码" icon={<Icon name="Rootnet" />} />
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
                  message: '请选择',
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
              name="radioGroup"
              rules={[
                {
                  required: true,
                  message: '请选择',
                },
              ]}
            >
              <Radio.Group>
                <div>
                  <Radio value="1" disabled>
                    Radio组
                  </Radio>
                </div>
                <div>
                  <Radio value="2">Radio组</Radio>
                </div>
                <div>
                  <Radio value="3">Radio组</Radio>
                </div>
                <Radio value="4">Radio组</Radio>
                <Radio value="5">Radio组</Radio>
                <Radio value="6">Radio组</Radio>
                <Radio value="7">Radio组</Radio>
              </Radio.Group>
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
        </Col>
      </Row>
    </div>
  );
};
```

Vertical：

```tsx
import React, { useState } from 'react';
import { Form, Input, Select, Radio, Checkbox, Button, Icon, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Form
            layout={'vertical'}
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
              <Input placeholder="请输入电话号码" icon={<Icon name="Rootnet" />} />
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
              name="radioGroup"
              rules={[
                {
                  required: true,
                  message: '请选择',
                },
              ]}
            >
              <Radio.Group>
                <div>
                  <Radio value="1" disabled>
                    Radio组
                  </Radio>
                </div>
                <div>
                  <Radio value="2">Radio组</Radio>
                </div>
                <div>
                  <Radio value="3">Radio组</Radio>
                </div>
                <Radio value="4">Radio组</Radio>
                <Radio value="5">Radio组</Radio>
                <Radio value="6">Radio组</Radio>
                <Radio value="7">Radio组</Radio>
              </Radio.Group>
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
        </Col>
      </Row>
    </div>
  );
};
```

Horizontal：

```tsx
import React, { useState } from 'react';
import { Form, Input, Select, Radio, Checkbox, Button, Icon, Grid, Upload } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
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
              <Input placeholder="请输入电话号码" icon={<Icon name="Rootnet" />} />
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
            <Form.Item
              label="文件"
              name="file"
              rules={[
                {
                  required: true,
                  message: '请选择',
                },
              ]}
            >
              <Upload listType="picture" accept=".png,.jpg,.jpeg,.gif">
                <Button icon="shangchuan">上传文件</Button>
              </Upload>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
```

ref

```tsx
import React, { useState, useRef } from 'react';
import { Form, Input, Select, Radio, Checkbox, Button, Icon, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  const ref = useRef(null);

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
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
            ref={ref}
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
              <Input placeholder="请输入电话号码" icon={<Icon name="Rootnet" />} />
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
          </Form>
        </Col>
        <Col span={24}>
          <Button
            type="primary"
            onClick={() => {
              console.log(ref);
              ref.current.onSubmit();
            }}
          >
            提交
          </Button>
          <Button
            type="default"
            onClick={() => {
              console.log(ref);
              ref.current.reset();
            }}
          >
            重置
          </Button>
        </Col>
      </Row>
    </div>
  );
};
```

ref 校验

```tsx
import React, { useState, useRef } from 'react';
import { Form, Input, Select, Radio, Checkbox, Button, Icon, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  const ref = useRef(null);

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
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
            onValuesChange={(changeValues, allValues) => {
              console.log(changeValues, allValues);
            }}
            ref={ref}
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
              <Input placeholder="请输入电话号码" icon={<Icon name="Rootnet" />} />
            </Form.Item>
          </Form>
        </Col>
        <Col span={24}>
          <Button
            type="primary"
            onClick={() => {
              ref.current.onSubmit();
            }}
          >
            提交
          </Button>
        </Col>
        <Col span={24}>
          <Button
            type="primary"
            onClick={() => {
              ref.current.validation();
            }}
          >
            校验数据
          </Button>
        </Col>
      </Row>
    </div>
  );
};
```

自定义 校验

```tsx
import React, { useState, useRef } from 'react';
import { Form, Input, Select, Radio, Checkbox, Button, Icon, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  const ref = useRef(null);

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
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
            onValuesChange={(changeValues, allValues) => {
              console.log(changeValues, allValues);
            }}
            ref={ref}
          >
            <Form.Item
              label="用户名"
              name="username"
              rules={[
                {
                  required: true,
                  validate: (value, values) => {
                    console.log(value, values, 1111);
                    return value.length > 10;
                  },
                  message: '我是自定义校验，长度不能小于10',
                },
              ]}
            >
              <Input
                placeholder="请输入用户名"
                icon={<Icon name="Rootnet" />}
                onChange={(value) => {
                  console.log(value);
                }}
              />
            </Form.Item>
            <Form.Item
              label="用户名"
              name="username2"
              rules={[
                {
                  required: true,
                  validate: (value, values) => {
                    console.log(value, values);
                    return value.length > 10;
                  },
                  message: '我是自定义校验，长度不能小于10',
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
              <Input placeholder="请输入电话号码" icon={<Icon name="Rootnet" />} />
            </Form.Item>
          </Form>
        </Col>
        <Col span={24}>
          <Button
            type="primary"
            onClick={() => {
              ref.current.onSubmit();
            }}
          >
            提交
          </Button>
        </Col>
        <Col span={24}>
          <Button
            type="primary"
            onClick={() => {
              ref.current.validation();
            }}
          >
            校验数据
          </Button>
        </Col>
      </Row>
    </div>
  );
};
```

条件判断

```tsx
import React, { useState, useRef } from 'react';
import { Form, Input, Select, Radio, Checkbox, Button, Icon, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  const ref = useRef(null);

  const [user, setUser] = useState('1');

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Form
            layout={'horizontal'}
            name={'n3'}
            initialValues={{
              checkbox: user,
            }}
            onSubmit={(form) => {
              console.log('校验成功');
              console.log(form);
            }}
            onError={(error) => {
              console.log('校验错误');
              console.log(error);
            }}
            onValuesChange={(changeValues, allValues) => {
              console.log(changeValues, allValues);
            }}
            ref={ref}
          >
            {user == 1 && (
              <Form.Item
                label="用户名1"
                name="username"
                rules={[
                  {
                    required: true,
                    validate: (value, values) => {
                      console.log(value, values, 1111);
                      return value.length > 10;
                    },
                    message: '我是自定义校验，长度不能小于10',
                  },
                ]}
              >
                <Input
                  placeholder="请输入用户名"
                  icon={<Icon name="Rootnet" />}
                  onChange={(value) => {
                    console.log(value);
                  }}
                />
              </Form.Item>
            )}
            {user == 2 && (
              <Form.Item
                label="用户名2"
                name="username2"
                rules={[
                  {
                    required: true,
                    validate: (value, values) => {
                      console.log(value, values);
                      return value.length > 10;
                    },
                    message: '我是自定义校验，长度不能小于10',
                  },
                ]}
              >
                <Input placeholder="请输入用户名" icon={<Icon name="Rootnet" />} />
              </Form.Item>
            )}
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
              <Radio.Group onChange={(value) => setUser(value)}>
                <Radio value="1">用户1</Radio>
                <Radio value="2">用户2</Radio>
              </Radio.Group>
            </Form.Item>
          </Form>
        </Col>
        <Col span={24}>
          <Button
            type="primary"
            onClick={() => {
              ref.current.onSubmit();
            }}
          >
            提交
          </Button>
        </Col>
      </Row>
    </div>
  );
};
```

<API exports='["default", "Item"]'/>
