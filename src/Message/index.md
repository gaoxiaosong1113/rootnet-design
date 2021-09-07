---
nav:
  title: 组件
  path: /components
group:
  title: Message 全局提示
  order: 22
---

## Message 全局提示

示例：

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Message, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

function Demo() {
  const defaultMessage = () => {
    Message.show({
      content: '这是一条常规提醒，会主动消失（3s）',
    });
  };

  const successMessage = () => {
    Message.show({
      content: '这是一条成功提醒，会主动消失（3s）',
      type: 'success',
    });
  };

  const warningMessage = () => {
    Message.show({
      content: '这是一条警告提醒，会主动消失（3s）',
      type: 'warning',
    });
  };

  const errorMessage = () => {
    Message.show({
      content: '这是一条错误提醒，会主动消失（3s）',
      type: 'error',
    });
  };

  const simpleMessage = () => {
    // Message.show(content, type, duration);
    Message.show('这是一条错误提醒，会主动消失（10s）', 'error', 10);
  };

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Button
            onClick={() => {
              defaultMessage();
            }}
          >
            默认提示
          </Button>
        </Col>
        <Col span={4}>
          <Button
            onClick={() => {
              successMessage();
            }}
          >
            成功提示
          </Button>
        </Col>
        <Col span={4}>
          <Button
            onClick={() => {
              warningMessage();
            }}
          >
            警告提示
          </Button>
        </Col>
        <Col span={4}>
          <Button
            onClick={() => {
              errorMessage();
            }}
          >
            错误提示
          </Button>
        </Col>
        <Col span={4}>
          <Button
            onClick={() => {
              simpleMessage();
            }}
          >
            简便写法
          </Button>
        </Col>
      </Row>
    </div>
  );
}
export default Demo;
```

修改延时关闭

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Message, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  const defaultMessage = () => {
    Message.show({
      content: '这是一条常规提醒，会主动消失（3s）',
    });
  };

  const updateMessage = () => {
    Message.show({
      content: '这是一条常规提醒，会主动消失（10s）',
      duration: 10,
    });
  };

  const noAutoHideMessage = () => {
    Message.show({
      content: '这是一条常规提醒，不会主动消失',
      duration: 0,
    });
  };

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Button
            type="primary"
            onClick={() => {
              defaultMessage();
            }}
          >
            默认3s关闭
          </Button>
        </Col>
        <Col span={4}>
          <Button
            type="primary"
            onClick={() => {
              updateMessage();
            }}
          >
            修改为10s关闭
          </Button>
        </Col>
        <Col span={4}>
          <Button
            type="primary"
            onClick={() => {
              noAutoHideMessage();
            }}
          >
            提示不自动关闭
          </Button>
        </Col>
      </Row>
    </div>
  );
};
```

自定义样式 根据 className 和 style

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Message, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  const message = () => {
    Message.show({
      content: '这是一条自定义样式提醒',
      className: 'custom-class',
      style: {
        marginTop: '30vh',
      },
    });
  };

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Button
            type="primary"
            onClick={() => {
              message();
            }}
          >
            自定义样式
          </Button>
        </Col>
      </Row>
    </div>
  );
};
```

根据 key 更新消息内容

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Message, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  const key = 'updateKey';

  const defaultMessage = () => {
    Message.show({
      content: '这是一条常规提醒',
      duration: 5,
      key,
    });
  };

  const updateMessage = () => {
    Message.show({
      content: '这是一条更新提醒',
      key,
      duration: 10,
    });
  };

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Button
            type="primary"
            onClick={() => {
              defaultMessage();
            }}
          >
            默认提示
          </Button>
        </Col>
        <Col span={4}>
          <Button
            type="primary"
            onClick={() => {
              updateMessage();
            }}
          >
            更新提示内容
          </Button>
        </Col>
      </Row>
    </div>
  );
};
```

单个销毁/全部销毁

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Message, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  const key = 'updateKey';

  const defaultMessage = () => {
    // messagekey 提示信息的唯一key
    Message.destory('messagekey');
  };

  const allDestoryMessage = () => {
    Message.destory();
  };

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Button
            type="primary"
            onClick={() => {
              defaultMessage();
            }}
          >
            单个销毁
          </Button>
        </Col>
        <Col span={4}>
          <Button
            type="primary"
            onClick={() => {
              allDestoryMessage();
            }}
          >
            全部销毁
          </Button>
        </Col>
      </Row>
    </div>
  );
};
```

<API />
