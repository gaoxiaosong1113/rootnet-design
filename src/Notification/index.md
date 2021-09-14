---
nav:
  title: 组件
  path: /components
group:
  title: Notification 通知提示框
  order: 24
---

## Notification 通知提示框

示例：

```tsx
import React from 'react';
import { Button, Grid, Notification } from 'rootnet-design';

const { Row, Col } = Grid;

function Demo() {
  const defaultNotice = () => {
    Notification.show({
      content: '恭喜！你所提交操作已通过，如有问题请联系客服',
    });
  };

  const successNotice = () => {
    Notification.show({
      content: '恭喜！你所提交操作已通过，如有问题请联系客服',
      type: 'success',
    });
  };

  const warningNotice = () => {
    Notification.show({
      content: '恭喜！你所提交操作已通过，如有问题请联系客服',
      type: 'warning',
    });
  };

  const errorNotice = () => {
    Notification.show({
      content: '恭喜！你所提交操作已通过，如有问题请联系客服',
      type: 'error',
    });
  };

  const simpleNotice = () => {
    // Notice.show(content, type, duration);
    Notification.show('恭喜！你所提交操作已通过，如有问题请联系客服', 'error');
  };

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Button
            onClick={() => {
              defaultNotice();
            }}
          >
            默认通知提示
          </Button>
        </Col>
        <Col span={4}>
          <Button
            onClick={() => {
              successNotice();
            }}
          >
            成功通知提示
          </Button>
        </Col>
        <Col span={4}>
          <Button
            onClick={() => {
              warningNotice();
            }}
          >
            警告通知提示
          </Button>
        </Col>
        <Col span={4}>
          <Button
            onClick={() => {
              errorNotice();
            }}
          >
            错误通知提示
          </Button>
        </Col>
        <Col span={4}>
          <Button
            onClick={() => {
              simpleNotice();
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

四种样式

```tsx
import React from 'react';
import { Button, Grid, Notification } from 'rootnet-design';

const { Row, Col } = Grid;

function Demo() {
  const defaultNotice = () => {
    Notification.show({
      content: '恭喜！你所提交操作已通过，如有问题请联系客服',
    });
  };

  const successNotice = () => {
    Notification.show({
      content: '恭喜！你所提交操作已通过，如有问题请联系客服',
      type: 'success',
    });
  };

  const warningNotice = () => {
    Notification.show({
      content: '恭喜！你所提交操作已通过，如有问题请联系客服',
      type: 'warning',
    });
  };

  const errorNotice = () => {
    Notification.show({
      content: '恭喜！你所提交操作已通过，如有问题请联系客服',
      type: 'error',
    });
  };

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Button
            onClick={() => {
              defaultNotice();
            }}
          >
            默认通知提示
          </Button>
        </Col>
        <Col span={4}>
          <Button
            onClick={() => {
              successNotice();
            }}
          >
            成功通知提示
          </Button>
        </Col>
        <Col span={4}>
          <Button
            onClick={() => {
              warningNotice();
            }}
          >
            警告通知提示
          </Button>
        </Col>
        <Col span={4}>
          <Button
            onClick={() => {
              errorNotice();
            }}
          >
            错误通知提示
          </Button>
        </Col>
      </Row>
    </div>
  );
}
export default Demo;
```

增加操作按钮/两种尺寸

```tsx
import React from 'react';
import { Button, Grid, Notification } from 'rootnet-design';

const { Row, Col } = Grid;

function Demo() {
  const defaultNotice = () => {
    Notification.show({
      content: '恭喜！你所提交操作已通过，如有问题请联系客服',
      extra: <a>查看详情</a>,
      close,
      duration: 0,
    });
  };

  const smallNotice = () => {
    Notification.show({
      content: '恭喜！你所提交操作已通过，如有问题请联系客服',
      close,
      duration: 0,
    });
  };

  const bigNotice = () => {
    Notification.show({
      title: '系统提示',
      content: '恭喜！你所提交操作已通过，如有问题请联系客服。',
      type: 'success',
      close,
      duration: 0,
    });
  };

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Button
            onClick={() => {
              defaultNotice();
            }}
          >
            增加操作按钮
          </Button>
        </Col>
        <Col span={4}>
          <Button
            onClick={() => {
              smallNotice();
            }}
          >
            小尺寸通知提示
          </Button>
        </Col>
        <Col span={4}>
          <Button
            onClick={() => {
              bigNotice();
            }}
          >
            大尺寸通知提示
          </Button>
        </Col>
      </Row>
    </div>
  );
}
export default Demo;
```

四个方向

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Grid, Notification } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  const topRightNotice = () => {
    Notification.show({
      content: '恭喜！你所提交操作已通过，如有问题请联系客服',
      placement: 'topRight',
    });
  };

  const bottomRightNotice = () => {
    Notification.show({
      content: '恭喜！你所提交操作已通过，如有问题请联系客服',
      placement: 'bottomRight',
    });
  };

  const topLeftNotice = () => {
    Notification.show({
      content: '恭喜！你所提交操作已通过，如有问题请联系客服',
      placement: 'topLeft',
    });
  };

  const bottomLeftNotice = () => {
    Notification.show({
      content: '恭喜！你所提交操作已通过，如有问题请联系客服',
      placement: 'bottomLeft',
    });
  };

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Button
            type="primary"
            onClick={() => {
              topRightNotice();
            }}
          >
            topRight
          </Button>
        </Col>
        <Col span={4}>
          <Button
            type="primary"
            onClick={() => {
              bottomRightNotice();
            }}
          >
            bottomRight
          </Button>
        </Col>
        <Col span={4}>
          <Button
            type="primary"
            onClick={() => {
              topLeftNotice();
            }}
          >
            topLeft
          </Button>
        </Col>
        <Col span={4}>
          <Button
            type="primary"
            onClick={() => {
              bottomLeftNotice();
            }}
          >
            bottomLeft
          </Button>
        </Col>
      </Row>
    </div>
  );
};
```

修改延时关闭和自动关闭

```tsx
import React from 'react';
import { Button, Grid, Notification } from 'rootnet-design';

const { Row, Col } = Grid;

function Demo() {
  const defaultNotice = () => {
    Notification.show({
      content: '恭喜！你所提交操作已通过，如有问题请联系客服',
    });
  };

  const successNotice = () => {
    Notification.show({
      content: '恭喜！你所提交操作已通过，如有问题请联系客服',
      duration: 10,
    });
  };

  const warningNotice = () => {
    Notification.show({
      content: '恭喜！你所提交操作已通过，如有问题请联系客服',
      duration: 0,
      close,
    });
  };

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Button
            onClick={() => {
              defaultNotice();
            }}
          >
            默认4.5s关闭
          </Button>
        </Col>
        <Col span={4}>
          <Button
            onClick={() => {
              successNotice();
            }}
          >
            修改为10s关闭
          </Button>
        </Col>
        <Col span={4}>
          <Button
            onClick={() => {
              warningNotice();
            }}
          >
            手动关闭
          </Button>
        </Col>
      </Row>
    </div>
  );
}
export default Demo;
```

自定义样式 根据 className 和 style

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Grid, Notification } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  const customNotice = () => {
    Notification.show({
      content: '恭喜！你所提交操作已通过，如有问题请联系客服',
      className: 'custom-class',
      width: 600,
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
              customNotice();
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
import { Button, Notification, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  const key = 'updateKey';

  const defaultNotice = () => {
    Notification.show({
      content: '恭喜！你所提交操作已通过，如有问题请联系客服',
      key,
    });
  };

  const updateNotice = () => {
    Notification.show({
      content: '对不起！你所提交操作未通过，如有问题请联系客服',
      key,
    });
  };

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Button
            type="primary"
            onClick={() => {
              defaultNotice();
            }}
          >
            默认通知提示
          </Button>
        </Col>
        <Col span={4}>
          <Button
            type="primary"
            onClick={() => {
              updateNotice();
            }}
          >
            更新通知提示内容
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
import { Button, Notification, Grid } from 'rootnet-design';

const { Row, Col } = Grid;

export default () => {
  const key = 'deleteKey';

  const noAutoHideNotice = () => {
    Notification.show({
      content: '恭喜！你所提交操作已通过，如有问题请联系客服',
      key,
      duration: 0,
    });
  };

  const deleteNotice = () => {
    // deleteKey 提示信息的唯一key
    Notification.destory(key);
  };

  const allDestoryNotice = () => {
    Notification.destory();
  };

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Button
            type="primary"
            onClick={() => {
              noAutoHideNotice();
            }}
          >
            不自动关闭通知提示
          </Button>
        </Col>
        <Col span={4}>
          <Button
            type="primary"
            onClick={() => {
              deleteNotice();
            }}
          >
            单个销毁
          </Button>
        </Col>
        <Col span={4}>
          <Button
            type="primary"
            onClick={() => {
              allDestoryNotice();
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
