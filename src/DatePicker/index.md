---
nav:
  title: 组件
  path: /components
group:
  title: DatePicker 日期选择
  order: 8
---

## DatePicker 日期选择

示例：基本使用

```tsx
import React, { useState } from 'react';
import { DatePicker, Grid } from 'rootnet-design';
const { Row, Col } = Grid;
const { Calendar } = DatePicker;
const [day, setDay] = useState('2021-11-12');
export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <DatePicker
            onChange={(value, date) => {
              console.log('当前值：', value);
              console.log('当前时间Date：', date);
            }}
          />
        </Col>
        <Col span={6}>
          <DatePicker
            picker="year"
            onChange={(value, date) => {
              console.log('当前值：', value);
              console.log('当前时间Date：', date);
            }}
          />
        </Col>
        <Col span={6}>
          <DatePicker
            picker="month"
            onChange={(value, date) => {
              console.log('当前值：', value);
              console.log('当前时间Date：', date);
            }}
          />
        </Col>
        <Col span={6}>
          <DatePicker
            picker="quarter"
            onChange={(value, date) => {
              console.log('当前值：', value);
              console.log('当前时间Date：', date);
            }}
          />
        </Col>
      </Row>
    </div>
  );
};
```

日历使用

```tsx
import React, { useState } from 'react';
import { DatePicker, Grid } from 'rootnet-design';
const { Row, Col } = Grid;
const { Calendar } = DatePicker;
const [day, setDay] = useState('2021-11-12');
const [year, setYear] = useState('2021');
const [month, setMonth] = useState('2021-06');
const [quarter, setQuarter] = useState('2021-06');

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Calendar
            value={day}
            onChange={(value, date) => {
              setDay(value);
              console.log('当前值：', value);
              console.log('当前时间Date：', date);
            }}
          />
        </Col>
        <Col span={6}>
          <Calendar
            picker="year"
            value={year}
            onChange={(value, date) => {
              setYear(value);
              console.log('当前值：', value);
              console.log('当前时间Date：', date);
            }}
          />
        </Col>
        <Col span={6}>
          <Calendar
            picker="month"
            value={month}
            onChange={(value, date) => {
              setMonth(value);
              console.log('当前值：', value);
              console.log('当前时间Date：', date);
            }}
          />
        </Col>
        <Col span={6}>
          <Calendar
            picker="quarter"
            value={quarter}
            onChange={(value, date) => {
              setQuarter(date.getFullYear() + '-' + (date.getMonth() + 1));
              console.log('当前值：', value);
              console.log('当前时间Date：', date);
            }}
          />
        </Col>
      </Row>
    </div>
  );
};
```

设置默认值

```tsx
import React, { useState } from 'react';
import { DatePicker, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

const [day, setDay] = useState('2021-11-12');
const [year, setYear] = useState('2021');
const [month, setMonth] = useState('2021-06');
const [quarter, setQuarter] = useState('2021-06');

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <DatePicker
            value={day}
            onChange={(value, date) => {
              console.log('当前值：', value);
              console.log('当前时间Date：', date);
            }}
          />
        </Col>
        <Col span={6}>
          <DatePicker
            picker="year"
            value={year}
            onChange={(value, date) => {
              console.log('当前值：', value);
              console.log('当前时间Date：', date);
            }}
          />
        </Col>
        <Col span={6}>
          <DatePicker
            picker="month"
            value={month}
            onChange={(value, date) => {
              console.log('当前值：', value);
              console.log('当前时间Date：', date);
            }}
          />
        </Col>
        <Col span={6}>
          <DatePicker
            picker="quarter"
            value={quarter}
            onChange={(value, date) => {
              console.log('当前值：', value);
              console.log('当前时间Date：', date);
            }}
          />
        </Col>
      </Row>
    </div>
  );
};
```

其他使用

```tsx
import React, { useState } from 'react';
import { DatePicker, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

const [day, setDay] = useState('2021-11-12');
const [year, setYear] = useState('2021');
const [month, setMonth] = useState('2021-06');
const [quarter, setQuarter] = useState('2021-06');

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <div style={{ marginBottom: '12px' }}>设置placeholder</div>
          <DatePicker
            placeholder="请选择开始时间"
            onChange={(value, date) => {
              console.log('当前值：', value);
              console.log('当前时间Date：', date);
            }}
          />
        </Col>
        <Col span={6}>
          <div style={{ marginBottom: '12px' }}>增加删除</div>
          <DatePicker
            picker="year"
            value={year}
            close
            onChange={(value, date) => {
              console.log('当前值：', value);
              console.log('当前时间Date：', date);
            }}
          />
        </Col>
        <Col span={6}>
          <div style={{ marginBottom: '12px' }}>增加禁用</div>
          <DatePicker
            picker="month"
            value={month}
            disabled
            onChange={(value, date) => {
              console.log('当前值：', value);
              console.log('当前时间Date：', date);
            }}
          />
        </Col>
        <Col span={6}>
          <div style={{ marginBottom: '12px' }}>自定义日期显示格式</div>
          <DatePicker
            picker="quarter"
            value={quarter}
            format="YYYY/Qq"
            onChange={(value, date) => {
              console.log('当前值：', value);
              console.log('当前时间Date：', date);
            }}
          />
        </Col>
      </Row>
    </div>
  );
};
```

<API exports='["default", "Calendar"]'/>
