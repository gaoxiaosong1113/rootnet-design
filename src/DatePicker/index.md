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
        <Col span={12}>
          <DatePicker
            picker="dateRange"
            close
            onChange={(value, date) => {
              console.log('当前值：', value);
              console.log('当前时间Date：', date);
            }}
          />
        </Col>
        <Col span={12}>
          <DatePicker
            picker="time"
            close
            format="HH:mm:ss"
            value="00:12:12"
            // use12Hours={true}
            onChange={(value, date) => {
              console.log('当前值：', value);
              console.log('当前时间Date：', date);
            }}
          />
        </Col>
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

不可选取的时间

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
          <div style={{ marginBottom: '12px' }}>当前时间以后、1995年前不能选择</div>
          <DatePicker
            picker="dateRange"
            close
            onChange={(value, date) => {
              console.log('当前值：', value);
              console.log('当前时间Date：', date);
            }}
            disabledDate={(current) => {
              // 使用getTime比较时间会有差异 推荐使用moment插件
              return (
                current &&
                (new Date(current).getTime() > new Date().getTime() ||
                  new Date(current).getTime() < new Date('1995-01-01').getTime())
              );
            }}
          />
        </Col>
        <Col span={6}>
          <div style={{ marginBottom: '12px' }}>当前时间以后不能选择</div>
          <DatePicker
            onChange={(value, date) => {
              console.log('当前值：', value);
              console.log('当前时间Date：', date);
            }}
            disabledDate={(current) => {
              // 使用getTime比较时间会有差异 推荐使用moment插件
              return current && new Date(current).getTime() > new Date().getTime();
            }}
          />
        </Col>
        <Col span={6}>
          <div style={{ marginBottom: '12px' }}>当前时间以后、1995年前不能选择</div>
          <DatePicker
            picker="year"
            onChange={(value, date) => {
              console.log('当前值：', value);
              console.log('当前时间Date：', date);
            }}
            disabledDate={(current) => {
              return current && (current > new Date().getFullYear() || current < '1995');
            }}
          />
        </Col>
        <Col span={6}>
          <div style={{ marginBottom: '12px' }}>当前时间以后不能选择</div>
          <DatePicker
            picker="month"
            onChange={(value, date) => {
              console.log('当前值：', value);
              console.log('当前时间Date：', date);
            }}
            disabledDate={(current) => {
              // 使用getTime比较时间会有差异 推荐使用moment插件
              return current && new Date(`${current}-01`).getTime() > new Date().getTime();
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
const [dateRange, setDateRange] = useState(['2021-11-11', '2021-12-12']);

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
        <Col span={24}>
          <Calendar
            picker="dateRange"
            value={dateRange}
            onChange={(value, date) => {
              setDateRange(value);
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
