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
            value={2}
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
            search
            value={2}
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
      </Row>
    </div>
  );
};
```

多选下拉框：

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
            search
            multiple={true}
            placeholder={'多选下拉框'}
            onChange={(value) => {
              console.log(value);
            }}
          />
        </Col>
        <Col span={4}>
          <Select
            value={[2, 3, 4]}
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
      </Row>
    </div>
  );
};
```

placeholder

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
            placeholder={'自定义提示'}
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

带关闭的下拉框:

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
            close={true}
            placeholder={'带关闭的下拉框'}
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

disabled

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

多选下拉框：

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
            multiple
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
            placeholder={'多选'}
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

树形下拉框

```tsx
import React from 'react';
import { Select, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

const treeData = [
  {
    value: '1',
    label: '基础管理',
    children: [
      {
        value: '11',
        label: '客户管理',
        children: [
          {
            value: '111',
            label: '新增',
          },
          {
            value: '112',
            label: '编辑',
          },
          {
            value: '113',
            label: '删除',
          },
        ],
      },
      {
        value: '12',
        label: '交易日管理',
        children: [
          {
            value: '121',
            label: '新增',
          },
          {
            value: '122',
            label: '编辑',
          },
          {
            value: '123',
            label: '删除',
          },
        ],
      },
    ],
  },
  {
    value: '2',
    label: '系统管理',
    children: [
      {
        value: '31',
        label: '交易市场管理',
        children: [
          {
            value: '311',
            label: '新增',
          },
          {
            value: '312',
            label: '编辑',
          },
          {
            value: '313',
            label: '删除',
          },
        ],
      },
      {
        value: '32',
        label: '市场交易日列表',
        children: [
          {
            value: '321',
            label: '交易日列表',
            children: [
              {
                value: '3211',
                label: '新增',
              },
              {
                value: '3212',
                label: '编辑',
              },
              {
                value: '3213',
                label: '删除',
              },
            ],
          },
          {
            value: '322',
            label: '交易日详情',
            children: [
              {
                value: '3221',
                label: '新增',
              },
              {
                value: '3222',
                label: '编辑',
              },
              {
                value: '3223',
                label: '删除',
              },
            ],
          },
        ],
      },
    ],
  },
];

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Select
            multiple
            options={treeData}
            placeholder={'树形多选'}
            onChange={(value) => {
              console.log(value);
            }}
          />
        </Col>
        <Col span={12}>
          <Select
            options={treeData}
            tree="tree"
            placeholder={'树形单选'}
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

<!-- <API></API> -->
