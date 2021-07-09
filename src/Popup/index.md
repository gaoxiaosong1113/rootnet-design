---
nav:
  title: 组件
  path: /components
group:
  title: Popup 弹出层
  order: 29
---

## Popup 弹出层

本组件属于内部组件，用来处理弹出层的问题

示例：

```tsx
import React, { useState, useRef } from 'react';
import { Popup, Button, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Button ref={ref} onClick={() => setVisible(true)}>
            打开
          </Button>
          <Popup className="class1221" refEl={ref} visible={visible}>
            我是一段提示，并且字数不是很多
          </Popup>
        </Col>
      </Row>
    </div>
  );
};
```

不同方向：

```tsx
import React, { useState, useRef } from 'react';
import { Popup, Button, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);
  const [visible6, setVisible6] = useState(false);
  const [visible7, setVisible7] = useState(false);
  const [visible8, setVisible8] = useState(false);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Button ref={ref1} onClick={() => setVisible1(true)}>
            'top'
          </Button>
          <Popup
            className="class1221"
            position="top"
            refEl={ref1}
            visible={visible1}
          >
            我是一段提示，并且字数不是很多
          </Popup>
        </Col>
        <Col span={4}>
          <Button ref={ref2} onClick={() => setVisible2(true)}>
            'top-left'
          </Button>
          <Popup
            className="class1221"
            position="top-left"
            refEl={ref2}
            visible={visible2}
          >
            我是一段提示，并且字数不是很多
          </Popup>
        </Col>
        <Col span={4}>
          <Button ref={ref3} onClick={() => setVisible3(true)}>
            'top-right'
          </Button>
          <Popup
            className="class1221"
            position="top-right"
            refEl={ref3}
            visible={visible3}
          >
            我是一段提示，并且字数不是很多
          </Popup>
        </Col>
        <Col span={4}>
          <Button ref={ref4} onClick={() => setVisible4(true)}>
            'left'
          </Button>
          <Popup
            className="class1221"
            position="left"
            refEl={ref4}
            visible={visible4}
          >
            我是一段提示，并且字数不是很多
          </Popup>
        </Col>
        <Col span={4}>
          <Button ref={ref5} onClick={() => setVisible5(true)}>
            'right'
          </Button>
          <Popup
            className="class1221"
            position="right"
            refEl={ref5}
            visible={visible5}
          >
            我是一段提示，并且字数不是很多
          </Popup>
        </Col>
        <Col span={4}>
          <Button ref={ref6} onClick={() => setVisible6(true)}>
            'bottom'
          </Button>
          <Popup
            className="class1221"
            position="bottom"
            refEl={ref6}
            visible={visible6}
          >
            我是一段提示，并且字数不是很多
          </Popup>
        </Col>
        <Col span={4}>
          <Button ref={ref7} onClick={() => setVisible7(true)}>
            'bottom-left'
          </Button>
          <Popup
            className="class1221"
            position="bottom-left"
            refEl={ref7}
            visible={visible7}
          >
            我是一段提示，并且字数不是很多
          </Popup>
        </Col>
        <Col span={4}>
          <Button ref={ref8} onClick={() => setVisible8(true)}>
            'bottom-right'
          </Button>
          <Popup
            className="class1221"
            position="bottom-right"
            refEl={ref8}
            visible={visible8}
          >
            我是一段提示，并且字数不是很多
          </Popup>
        </Col>
      </Row>
    </div>
  );
};
```

<API />
