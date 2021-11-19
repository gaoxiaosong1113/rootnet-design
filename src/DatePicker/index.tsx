import React, { useEffect, useState, useRef, useMemo, ReactNode } from 'react';
import ReactDOM from 'react-dom';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon, Popup } from '../index';
import { dateFormat, formaterZero } from '../_util';

const MONTH = [
  '1月',
  '2月',
  '3月',
  '4月',
  '5月',
  '6月',
  '7月',
  '8月',
  '9月',
  '10月',
  '11月',
  '12月',
];

export interface DatePickerProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;
  style?: Object;
  children?: ReactNode;

  /**
   * @description      时间选择器类型
   * @default           'date'
   */
  picker?: 'date' | 'month' | 'quarter' | 'year';

  /**
   * @description      时间选中值
   * @default           -
   */
  value?: any;

  /**
   * @description      展示的日期格式 年：YYYY | 月：MM | 日：DD | 时：HH | 分：mm | 秒：ss | 季度：Qq
   * @default           -
   */
  format?: string;

  /**
   * @description      输入框提示文字
   * @default           -
   */
  placeholder?: string;

  /**
   * @description      禁用
   * @default           false
   */
  disabled?: boolean;

  /**
   * @description      时间发生变化的回调
   * @default           -
   */
  onChange?: any;

  /**
   * @description      关闭时间面板回调
   * @default           -
   */
  onCancel?: any;

  /**
   * @description      是否显示删除按钮
   * @default           -
   */
  close?: any;

  target?: any;
}

export interface CalendarProps {
  /**
   * @description      时间选择器类型
   * @default           'date'
   */
  picker?: 'date' | 'month' | 'quarter' | 'year';

  /**
   * @description      时间选中值
   * @default           -
   */
  value?: any;

  /**
   * @description      时间发生变化的回调
   * @default           -
   */
  onChange?: any;
}

function DatePicker(props: DatePickerProps) {
  const { className, placeholder, disabled, onChange, onCancel, close, ...prop } = props;

  const [value, setValue] = useState(props.value || null);
  const [visible, setVisible] = useState(false);

  const refEl = useRef(null);

  function handleOnChange(e: any, date: any) {
    setValue(e && e.includes('Q') ? dateFormat(date, 'YYYY-MM') : e);
    onChange?.(e, date);
  }

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const isPlaceholder = useMemo(() => {
    return value === undefined || value === null || JSON.stringify(value) === '[]';
  }, [value]);

  return (
    <div
      className={clsx(className, `${prefix}-select-target`, `${prefix}-picker`, {
        [`${prefix}-select-target-disabled`]: disabled,
        [`${prefix}-select-target-visible`]: visible,
        [`${prefix}-select-placeholder`]: isPlaceholder,
      })}
      ref={refEl}
    >
      <div
        className={clsx(`${prefix}-select-target-content`, {})}
        onClick={(event) => {
          event.persist();
          if (disabled) return;
          setVisible(true);
          return false;
        }}
      >
        <DatePickerValue {...props} value={value} />
      </div>
      {value && value != undefined && close ? (
        <div
          onClick={() => handleOnChange(null, null)}
          className={clsx(`${prefix}-select-target-close`, {})}
        >
          <Icon name="shibai" size={14} />
        </div>
      ) : (
        <div className={clsx(`${prefix}-picker-arrow`, {})}>
          <Icon name="rili" size={14} />
        </div>
      )}
      <Popup
        onClose={() => {
          setVisible(false);
          onCancel && onCancel();
        }}
        targetHidden={false}
        visible={visible}
        refEl={refEl}
        position={'bottom-left'}
        trigger={'click'}
        className={clsx(`${prefix}-select-popup`, {
          [`${className}-popup`]: className,
        })}
      >
        <DatePickerContent
          {...props}
          className={clsx({ [`${className}-warp`]: className })}
          value={value}
          onCancel={() => {
            setVisible(false);
            onCancel && onCancel();
          }}
          onChange={(v: any, date: any) => {
            setVisible(false);
            handleOnChange(v, date);
          }}
        />
      </Popup>
    </div>
  );
}

export function Calendar(props: CalendarProps) {
  const { onChange, value, picker = 'date' } = props;

  const [toDay, setToDay] = useState(dateFormat(new Date(), 'YYYY-MM-DD')) as any;
  const [currentTime, setCurrentTime] = useState(null) as any;
  const [currentYear, setCurrentYear] = useState(null) as any;
  const [currentMonth, setCurrentMonth] = useState(null) as any;
  const [currentDate, setCurrentDate] = useState(null) as any;
  const [calendar, setCalendar] = useState([]) as any;
  const [currentYearList, setCurrentYearList] = useState([]) as any;
  const [currentMonthList, setCurrentMonthList] = useState(MONTH) as any;
  const [quarter, seQuarter] = useState([
    [0, 2],
    [3, 5],
    [6, 8],
    [9, 11],
  ]) as any;

  // 获取本月第一天
  function getMonthDay(date: any) {
    date = new Date(date.valueOf());
    date.setDate(1);
    return date;
  }

  // 获取本月最后一天
  function getMonthLastDay(date: any) {
    date = new Date(date.valueOf());
    date.setMonth(date.getMonth() + 1);
    date.setDate(0);
    return date;
  }

  // 获取时间
  function getPrevDay(date: any, index: any) {
    date = new Date(date.valueOf());
    date.setMonth(date.getMonth());
    date.setDate(index);
    return date;
  }

  // 获取时间
  function getDay(date: any, index: any) {
    date = new Date(date.valueOf());
    date.setDate(index);
    return date;
  }

  // 获取时间
  function getNextDay(date: any, index: any) {
    date = new Date(date.valueOf());
    date.setMonth(date.getMonth() + 1);
    date.setDate(index);
    return date;
  }

  useEffect(() => {
    setCurrentTime(value ? new Date(value) : new Date());
  }, [value]);

  useEffect(() => {
    if (!currentTime) return;
    let time = currentTime;
    let year = time.getFullYear();
    let month = time.getMonth();
    let date = time.getDate();
    let day = time.getDay();
    let aryLength = 42;
    let yearLength = 10;
    let yearList = [];
    let rows = [];

    setCurrentTime(time);
    setCurrentYear(year);
    setCurrentMonth(month);
    setCurrentDate(date);

    for (let i = 0; i < yearLength; i++) {
      let y = getDay(`${year.toString().slice(0, -1)}${i}`, 1);
      yearList.push({
        type: 'current',
        date: y,
        value: `${year.toString().slice(0, -1)}${i}`,
      });
    }
    yearList.unshift({
      type: 'prev',
      date: getDay(Number(yearList[0].value) - 1, 1),
      value: Number(yearList[0].value) - 1,
    });

    yearList.push({
      type: 'next',
      date: getDay(Number(yearList.slice(-1)[0].value) + 1, 1),
      value: Number(yearList.slice(-1)[0].value) + 1,
    });
    setCurrentYearList(yearList);

    // 获取本月第一天
    var fastTime = getMonthDay(time);
    // 获取第一天是周几
    var fastTimeDay = fastTime.getDay() - 1;

    var lastTime = getMonthLastDay(time);
    var lastTimeDate = lastTime.getDate() - 1;

    for (let i = 0; i < aryLength; i++) {
      if (i < fastTimeDay) {
        let t = getPrevDay(fastTime, i - fastTimeDay + 1);
        rows.push({
          type: 'prev',
          date: t,
          value: `${t.getFullYear()}-${formaterZero(t.getMonth() + 1)}-${formaterZero(
            t.getDate(),
          )}`,
        });
      } else if (i > lastTimeDate + fastTimeDay) {
        let t = getNextDay(lastTime, i - (lastTimeDate + fastTimeDay));
        rows.push({
          type: 'next',
          date: t,
          value: `${t.getFullYear()}-${formaterZero(t.getMonth() + 1)}-${formaterZero(
            t.getDate(),
          )}`,
        });
      } else {
        let t = getDay(time, i - fastTimeDay + 1);
        rows.push({
          type: 'current',
          date: t,
          value: `${t.getFullYear()}-${formaterZero(t.getMonth() + 1)}-${formaterZero(
            t.getDate(),
          )}`,
        });
      }
    }
    setCalendar(rows);
  }, [currentTime]);

  function prevYear() {
    let date = new Date(currentTime.valueOf());
    date.setFullYear((picker === 'year' ? currentYearList[0].value : currentYear) - 1);
    setCurrentTime(date);
  }

  function nextYear() {
    let date = new Date(currentTime.valueOf());
    date.setFullYear((picker === 'year' ? currentYearList.slice(-1)[0].value : currentYear) + 1);
    setCurrentTime(date);
  }

  function prevMonth() {
    let date = new Date(currentTime.valueOf());
    date.setMonth(currentMonth - 1);
    setCurrentTime(date);
  }

  function nextMonth() {
    let date = new Date(currentTime.valueOf());
    date.setMonth(currentMonth + 1);
    setCurrentTime(date);
  }

  function checkedDate(data: any) {
    if (data.type == 'current') {
      onChange?.(data.value, data.date);
    }
  }

  return (
    <div className={clsx(`${prefix}-calendar`)}>
      {picker === 'date' && (
        <div className={clsx(`${prefix}-calendar-time-content`)}>
          <div className={clsx(`${prefix}-calendar-head`)}>
            <div
              className={clsx(`${prefix}-calendar-button`, `${prefix}-calendar-button-prev`)}
              onClick={prevYear}
            >
              <Icon size={12} color="#3A415C" name="a-doubleleft" />
            </div>
            <div
              className={clsx(`${prefix}-calendar-button`, `${prefix}-calendar-button-prev`)}
              onClick={prevMonth}
            >
              <Icon size={12} color="#3A415C" name="zuo" />
            </div>
            <div className={clsx(`${prefix}-calendar-date`)}>
              <div className={clsx(`${prefix}-calendar-date-year`)}>
                <span>{currentYear}</span>年
              </div>
              <div className={clsx(`${prefix}-calendar-date-month`)}>
                <span>{currentMonth + 1}</span>月
              </div>
            </div>
            <div
              className={clsx(`${prefix}-calendar-button`, `${prefix}-calendar-button-next`)}
              onClick={nextMonth}
            >
              <Icon size={12} color="#3A415C" name="you" />
            </div>
            <div
              className={clsx(`${prefix}-calendar-button`, `${prefix}-calendar-button-next`)}
              onClick={nextYear}
            >
              <Icon size={12} color="#3A415C" name="a-doubleright" />
            </div>
          </div>
          <div className={clsx(`${prefix}-calendar-body`)}>
            <div className={clsx(`${prefix}-calendar-day`)}>
              <ul>
                <li>一</li>
                <li>二</li>
                <li>三</li>
                <li>四</li>
                <li>五</li>
                <li>六</li>
                <li>日</li>
              </ul>
            </div>
            <ul className={clsx(`${prefix}-calendar-time`)}>
              {calendar.map((item: any, index: any) => {
                return (
                  <li
                    key={index}
                    className={clsx(`${prefix}-calendar-time-item`, {
                      [`${prefix}-calendar-time-item-${item.type}`]: item.type,
                    })}
                    onClick={() => checkedDate(item)}
                  >
                    <span
                      className={clsx(`${prefix}-calendar-time-item-content`, {
                        [`${prefix}-calendar-time-item-checked`]: value === item.value,
                        [`${prefix}-calendar-time-item-today`]: toDay === item.value,
                      })}
                    >
                      {item.date.getDate()}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={clsx(`${prefix}-calendar-footer`)}></div>
        </div>
      )}
      {picker === 'year' && (
        <div className={clsx(`${prefix}-calendar-year-content`)}>
          <div className={clsx(`${prefix}-calendar-head`)}>
            <div
              className={clsx(`${prefix}-calendar-button`, `${prefix}-calendar-button-prev`)}
              onClick={prevYear}
            >
              <Icon size={12} color="#3A415C" name="a-doubleleft" />
            </div>
            <div className={clsx(`${prefix}-calendar-date`)}>
              <div className={clsx(`${prefix}-calendar-date-year`)}>
                {currentYearList.length > 0 && (
                  <span>
                    {currentYearList[0].value} - {currentYearList.slice(-1)[0].value}
                  </span>
                )}
              </div>
            </div>
            <div
              className={clsx(`${prefix}-calendar-button`, `${prefix}-calendar-button-next`)}
              onClick={nextYear}
            >
              <Icon size={12} color="#3A415C" name="a-doubleright" />
            </div>
          </div>
          <div className={clsx(`${prefix}-calendar-body`)}>
            <ul className={clsx(`${prefix}-calendar-time`)}>
              {currentYearList.map((item: any, index: any) => {
                return (
                  <li
                    key={index}
                    className={clsx(`${prefix}-calendar-time-item`, {
                      [`${prefix}-calendar-time-item-${item.type}`]: item.type,
                    })}
                    onClick={() => checkedDate(item)}
                  >
                    <span
                      className={clsx(`${prefix}-calendar-time-item-content`, {
                        [`${prefix}-calendar-time-item-checked`]: value === item.value,
                      })}
                    >
                      {item.value}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={clsx(`${prefix}-calendar-footer`)}></div>
        </div>
      )}
      {picker === 'month' && (
        <div className={clsx(`${prefix}-calendar-month-content`)}>
          <div className={clsx(`${prefix}-calendar-head`)}>
            <div
              className={clsx(`${prefix}-calendar-button`, `${prefix}-calendar-button-prev`)}
              onClick={prevYear}
            >
              <Icon size={12} color="#3A415C" name="a-doubleleft" />
            </div>
            <div className={clsx(`${prefix}-calendar-date`)}>
              <div className={clsx(`${prefix}-calendar-date-year`)}>
                <span>{currentYear}</span>年
              </div>
            </div>
            <div
              className={clsx(`${prefix}-calendar-button`, `${prefix}-calendar-button-next`)}
              onClick={nextYear}
            >
              <Icon size={12} color="#3A415C" name="a-doubleright" />
            </div>
          </div>
          <div className={clsx(`${prefix}-calendar-body`)}>
            <ul className={clsx(`${prefix}-calendar-time`)}>
              {currentMonthList.map((item: any, index: any) => {
                let checked =
                  value &&
                  value.split('-')[0] == currentYear &&
                  value.split('-')[1] === formaterZero(index + 1);
                let monthItem = {
                  type: 'current',
                  date: getDay(`${currentYear}-${formaterZero(index + 1)}`, 1),
                  value: `${currentYear}-${formaterZero(index + 1)}`,
                };

                return (
                  <li
                    key={index}
                    className={clsx(`${prefix}-calendar-time-item`, {})}
                    onClick={() => checkedDate(monthItem)}
                  >
                    <span
                      className={clsx(`${prefix}-calendar-time-item-content`, {
                        [`${prefix}-calendar-time-item-checked`]: checked,
                      })}
                    >
                      {item}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={clsx(`${prefix}-calendar-footer`)}></div>
        </div>
      )}
      {picker === 'quarter' && (
        <div className={clsx(`${prefix}-calendar-quarter-content`)}>
          <div className={clsx(`${prefix}-calendar-head`)}>
            <div
              className={clsx(`${prefix}-calendar-button`, `${prefix}-calendar-button-prev`)}
              onClick={prevYear}
            >
              <Icon size={12} color="#3A415C" name="a-doubleleft" />
            </div>
            <div className={clsx(`${prefix}-calendar-date`)}>
              <div className={clsx(`${prefix}-calendar-date-year`)}>
                <span>{currentYear}</span>年
              </div>
            </div>
            <div
              className={clsx(`${prefix}-calendar-button`, `${prefix}-calendar-button-next`)}
              onClick={nextYear}
            >
              <Icon size={12} color="#3A415C" name="a-doubleright" />
            </div>
          </div>
          <div className={clsx(`${prefix}-calendar-body`)}>
            <ul className={clsx(`${prefix}-calendar-time`)}>
              {quarter.map((item: any, index: any) => {
                const currentValue = value && value.split('-');
                const currentValueMonth = currentValue && formaterZero(currentValue[1]);
                let checked =
                  value &&
                  currentValue[0] == currentYear &&
                  formaterZero(item[0] + 1) <= currentValueMonth &&
                  currentValueMonth <= formaterZero(item[1] + 1);
                let quarterItem = {
                  type: 'current',
                  date: getDay(`${currentYear}-${formaterZero(item[0] + 1)}`, 1),
                  value: `${currentYear}-Q${index + 1}`,
                };
                return (
                  <li
                    key={index}
                    className={clsx(`${prefix}-calendar-time-item`, {})}
                    onClick={() => checkedDate(quarterItem)}
                  >
                    <span
                      className={clsx(`${prefix}-calendar-time-item-content`, {
                        [`${prefix}-calendar-time-item-checked`]: checked,
                      })}
                    >
                      Q{index + 1}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={clsx(`${prefix}-calendar-footer`)}></div>
        </div>
      )}
    </div>
  );
}

function DatePickerContent(props: DatePickerProps) {
  const { className, value, picker = 'date', onChange, onCancel } = props;

  const refEl = useRef<any>(null);

  function handleClick(e: any) {
    if (!refEl.current) return;
    if (!ReactDOM.findDOMNode(refEl.current)?.contains(e.target)) {
      handleCancel(e);
    }
  }

  useEffect(() => {
    document.body.addEventListener('click', handleClick);
    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, []);

  function handleCancel(e: any) {
    onCancel();
  }

  function handleChange(v: any, date: any) {
    onChange(v, date);
  }

  return (
    <div className={clsx(`${prefix}-select-warp`, className)} ref={refEl}>
      <div className={clsx(`${prefix}-select`, {})} style={{}}>
        <div className={clsx(`${prefix}-select-body`, {})}>
          <Calendar picker={picker} onChange={handleChange} value={value} />
        </div>
      </div>
      <div className={clsx(`${prefix}-select-mask`, {})} onClick={handleCancel}></div>
    </div>
  );
}

function DatePickerValue(props: DatePickerProps) {
  const { value, placeholder, picker = 'date', format } = props;

  const placeholderText = { date: '时间', month: '月份', quarter: '季度', year: '年份' };
  const formatRules = { date: 'YYYY-MM-DD', month: 'YYYY-MM', quarter: 'YYYY-Qq', year: 'YYYY' };

  if (value !== undefined && value !== null) {
    return dateFormat(value, format || formatRules[picker]);
  }
  if (placeholder) {
    return placeholder;
  }
  return '请选择' + placeholderText[picker];
}

DatePicker.Calendar = Calendar;

export default DatePicker;
