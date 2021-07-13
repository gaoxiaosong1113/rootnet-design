---
nav:
  title: 组件
  path: /components
group:
  title: Tree 树形控件
  order: 44
---

## Tree 树形控件

示例：

```tsx
import React, { useState } from 'react';
import { Tree } from 'rootnet-design';

const dataSource = [
  {
    id: '1',
    title: '基础管理',
    children: [
      {
        id: '11',
        title: '客户管理',
        children: [
          {
            id: '111',
            title: '新增',
          },
          {
            id: '112',
            title: '编辑',
          },
          {
            id: '113',
            title: '删除',
          },
        ],
      },
      {
        id: '12',
        title: '交易日管理',
        children: [
          {
            id: '121',
            title: '新增',
          },
          {
            id: '122',
            title: '编辑',
          },
          {
            id: '123',
            title: '删除',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    title: '系统管理',
    children: [
      {
        id: '31',
        title: '交易市场管理',
        children: [
          {
            id: '311',
            title: '新增',
          },
          {
            id: '312',
            title: '编辑',
          },
          {
            id: '313',
            title: '删除',
          },
        ],
      },
      {
        id: '32',
        title: '市场交易日列表',
        children: [
          {
            id: '321',
            title: '交易日列表',
            children: [
              {
                id: '3211',
                title: '新增',
              },
              {
                id: '3212',
                title: '编辑',
              },
              {
                id: '3213',
                title: '删除',
              },
            ],
          },
          {
            id: '322',
            title: '交易日详情',
            children: [
              {
                id: '3221',
                title: '新增',
              },
              {
                id: '3222',
                title: '编辑',
              },
              {
                id: '3223',
                title: '删除',
              },
            ],
          },
        ],
      },
    ],
  },
];

export default () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  return <Tree dataSource={dataSource} rowKey="id" />;
};
```

选择树：

```tsx
import React, { useState } from 'react';
import { Tree } from 'rootnet-design';

const dataSource = [
  {
    id: '1',
    title: '基础管理',
    children: [
      {
        id: '11',
        title: '客户管理',
        children: [
          {
            id: '111',
            title: '新增',
          },
          {
            id: '112',
            title: '编辑',
          },
          {
            id: '113',
            title: '删除',
          },
        ],
      },
      {
        id: '12',
        title: '交易日管理',
        children: [
          {
            id: '121',
            title: '新增',
          },
          {
            id: '122',
            title: '编辑',
          },
          {
            id: '123',
            title: '删除',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    title: '系统管理',
    children: [
      {
        id: '31',
        title: '交易市场管理',
        children: [
          {
            id: '311',
            title: '新增',
          },
          {
            id: '312',
            title: '编辑',
          },
          {
            id: '313',
            title: '删除',
          },
        ],
      },
      {
        id: '32',
        title: '市场交易日列表',
        children: [
          {
            id: '321',
            title: '交易日列表',
            children: [
              {
                id: '3211',
                title: '新增',
              },
              {
                id: '3212',
                title: '编辑',
              },
              {
                id: '3213',
                title: '删除',
              },
            ],
          },
          {
            id: '322',
            title: '交易日详情',
            children: [
              {
                id: '3221',
                title: '新增',
              },
              {
                id: '3222',
                title: '编辑',
              },
              {
                id: '3223',
                title: '删除',
              },
            ],
          },
        ],
      },
    ],
  },
];

export default () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  return (
    <Tree
      dataSource={dataSource}
      rowSelection={{
        selectedRowKeys: selectedRowKeys,
        onChange: (key, row, indeterminate) => {
          setSelectedRowKeys(key);
          console.log(key, row, indeterminate, 'onChange');
        },
        onSelect: (key, row) => {
          // console.log(key, row, 'onSelect');
        },
      }}
      rowKey="id"
    />
  );
};
```

自定义行：

```tsx
import React, { useState } from 'react';
import { Tree } from 'rootnet-design';

const dataSource = [
  {
    id: '1',
    title: '基础管理',
    children: [
      {
        id: '11',
        title: '客户管理',
        children: [
          {
            id: '111',
            title: '新增',
          },
          {
            id: '112',
            title: '编辑',
          },
          {
            id: '113',
            title: '删除',
          },
        ],
      },
      {
        id: '12',
        title: '交易日管理',
        children: [
          {
            id: '121',
            title: '新增',
          },
          {
            id: '122',
            title: '编辑',
          },
          {
            id: '123',
            title: '删除',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    title: '系统管理',
    children: [
      {
        id: '31',
        title: '交易市场管理',
        children: [
          {
            id: '311',
            title: '新增',
          },
          {
            id: '312',
            title: '编辑',
          },
          {
            id: '313',
            title: '删除',
          },
        ],
      },
      {
        id: '32',
        title: '市场交易日列表',
        children: [
          {
            id: '321',
            title: '交易日列表',
            children: [
              {
                id: '3211',
                title: '新增',
              },
              {
                id: '3212',
                title: '编辑',
              },
              {
                id: '3213',
                title: '删除',
              },
            ],
          },
          {
            id: '322',
            title: '交易日详情',
            children: [
              {
                id: '3221',
                title: '新增',
              },
              {
                id: '3222',
                title: '编辑',
              },
              {
                id: '3223',
                title: '删除',
              },
            ],
          },
        ],
      },
    ],
  },
];

export default () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  return (
    <Tree
      dataSource={dataSource}
      rowSelection={{
        selectedRowKeys: selectedRowKeys,
        onChange: (key, row, indeterminate) => {
          setSelectedRowKeys(key);
          console.log(key, row, indeterminate, 'onChange');
        },
        onSelect: (key, row) => {
          // console.log(key, row, 'onSelect');
        },
      }}
      rowKey="id"
      onRow={(item) => {
        if (selectedRowKeys.indexOf(item.id) != -1) {
          return <span>{item.title} -- 选中了</span>;
        }
        return item.title;
      }}
    />
  );
};
```

单选：

```tsx
import React, { useState } from 'react';

import { Tree } from 'rootnet-design';

const dataSource = [
  {
    id: '1',
    title: '基础管理',
    children: [
      {
        id: '11',
        title: '客户管理',
        children: [
          {
            id: '111',
            title: '新增',
          },
          {
            id: '112',
            title: '编辑',
          },
          {
            id: '113',
            title: '删除',
          },
        ],
      },
      {
        id: '12',
        title: '交易日管理',
        children: [
          {
            id: '121',
            title: '新增',
          },
          {
            id: '122',
            title: '编辑',
          },
          {
            id: '123',
            title: '删除',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    title: '系统管理',
    children: [
      {
        id: '31',
        title: '交易市场管理',
        children: [
          {
            id: '311',
            title: '新增',
          },
          {
            id: '312',
            title: '编辑',
          },
          {
            id: '313',
            title: '删除',
          },
        ],
      },
      {
        id: '32',
        title: '市场交易日列表',
        children: [
          {
            id: '321',
            title: '交易日列表',
            children: [
              {
                id: '3211',
                title: '新增',
              },
              {
                id: '3212',
                title: '编辑',
              },
              {
                id: '3213',
                title: '删除',
              },
            ],
          },
          {
            id: '322',
            title: '交易日详情',
            children: [
              {
                id: '3221',
                title: '新增',
              },
              {
                id: '3222',
                title: '编辑',
              },
              {
                id: '3223',
                title: '删除',
              },
            ],
          },
        ],
      },
    ],
  },
];

export default () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  return (
    <Tree
      checkable
      dataSource={dataSource}
      rowKey="id"
      onCheck={(v, r) => console.log(v, r)}
    />
  );
};
```

异步：

```tsx
import React, { useState, useEffect } from 'react';
import { Tree } from 'rootnet-design';

const dataSource = [
  {
    id: '1',
    title: '基础管理',
    children: [
      {
        id: '11',
        title: '客户管理',
        children: [
          {
            id: '111',
            title: '新增',
          },
          {
            id: '112',
            title: '编辑',
          },
          {
            id: '113',
            title: '删除',
          },
        ],
      },
      {
        id: '12',
        title: '交易日管理',
        children: [
          {
            id: '121',
            title: '新增',
          },
          {
            id: '122',
            title: '编辑',
          },
          {
            id: '123',
            title: '删除',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    title: '系统管理',
    children: [
      {
        id: '31',
        title: '交易市场管理',
        children: [
          {
            id: '311',
            title: '新增',
          },
          {
            id: '312',
            title: '编辑',
          },
          {
            id: '313',
            title: '删除',
          },
        ],
      },
      {
        id: '32',
        title: '市场交易日列表',
        children: [
          {
            id: '321',
            title: '交易日列表',
            children: [
              {
                id: '3211',
                title: '新增',
              },
              {
                id: '3212',
                title: '编辑',
              },
              {
                id: '3213',
                title: '删除',
              },
            ],
          },
          {
            id: '322',
            title: '交易日详情',
            children: [
              {
                id: '3221',
                title: '新增',
              },
              {
                id: '3222',
                title: '编辑',
              },
              {
                id: '3223',
                title: '删除',
              },
            ],
          },
        ],
      },
    ],
  },
];

export default () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [expandable, setExpandable] = useState([]);
  useEffect(() => {
    let time = setTimeout(() => {
      setSelectedRowKeys(['322', '3221', '3222', '3223']);
      setExpandable(['2']);
    }, 200);
    () => {
      clearTimeout(time);
    };
  }, []);

  return (
    <Tree
      dataSource={dataSource}
      expandable={expandable}
      onExpandableChange={(keys) => {
        setExpandable(keys);
        console.log(keys, 'expandable');
      }}
      rowSelection={{
        selectedRowKeys: selectedRowKeys,
        onChange: (key, row, indeterminate) => {
          setSelectedRowKeys(key);
          console.log(key, row, indeterminate, 'onChange');
        },
        onSelect: (key, row) => {
          // console.log(key, row, 'onSelect');
        },
      }}
      rowKey="id"
      onRow={(item) => {
        if (selectedRowKeys.indexOf(item.id) != -1) {
          return <span>{item.title} -- 选中了</span>;
        }
        return item.title;
      }}
    />
  );
};
```

<API exports='["default"]'/>
