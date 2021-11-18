import React, { useEffect, useState, useRef, useMemo, ReactNode } from 'react';
import ReactDOM from 'react-dom';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon, Button, Tree, Popup } from '../index';
import { getOffsetLeft, getOffsetTop, findKey } from '../_util';

export interface DatePickerProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;
  style?: Object;
  children?: ReactNode;

  /**
   * @description      select 提示
   * @default           -
   */
  placeholder?: string;

  /**
   * @description      禁用 select
   * @default           -
   */
  disabled?: boolean;

  /**
   * @description      select 值更改
   * @default           -
   */
  onChange?: any;

  /**
   * @description      取消 select 下拉
   * @default           -
   */
  onCancel?: any;

  /**
   * @description      是否显示删除按钮
   * @default           -
   */
  close?: any;

  /**
   * @description      select 的值
   * @default           -
   */
  value?: any;

  /**
   * @description      select 选项
   * @default           -
   */
  options: Array<any>;

  /**
   * @description      开启多选
   * @default           false
   */
  multiple?: boolean;

  scrollRef?: any;

  target?: any;
}

function DatePicker(props: DatePickerProps) {
  const {
    className,
    placeholder,
    disabled,
    onChange,
    onCancel,
    close,
    multiple,
    scrollRef,
    ...prop
  } = props;

  const [value, setValue] = useState(props.value || multiple ? [] : null);
  const [visible, setVisible] = useState(false);

  const refEl = useRef(null);

  function handleOnChange(e: any) {
    setValue(e);
    onChange?.(e);
  }

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const isPlaceholder = useMemo(() => {
    return value === undefined || value === null || JSON.stringify(value) === '[]';
  }, [value]);

  return (
    <div
      className={clsx(className, `${prefix}-select-target`, {
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
          onClick={() => handleOnChange(null)}
          className={clsx(`${prefix}-select-target-close`, {})}
        >
          <Icon name="shibai" size={14} />
        </div>
      ) : (
        <div className={clsx(`${prefix}-select-target-arrow`, {})}>
          <Icon name="xuanzexiala" size={14} />
        </div>
      )}
      <Popup
        onClose={() => {
          setVisible(false);
          onCancel && onCancel();
        }}
        scrollRef={scrollRef}
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
          target={refEl}
          value={value}
          onCancel={() => {
            setVisible(false);
            onCancel && onCancel();
          }}
          onChange={(v: any) => {
            if (!multiple) {
              setVisible(false);
            }
            handleOnChange(v);
          }}
        />
      </Popup>
    </div>
  );
}

export function Calendar(props: any) {
  const { onChange, value } = props;

  const [currentTime, setCurrentTime] = useState(null) as any;
  const [currentYear, setCurrentYear] = useState(null) as any;
  const [currentMonth, setCurrentMonth] = useState(null) as any;
  const [currentDate, setCurrentDate] = useState(null) as any;
  const [calendar, setCalendar] = useState([]) as any;
  const [currentYearList, setCurrentYearList] = useState([]) as any;
  const [currentMonthList, setCurrentMonthList] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
  ]) as any;
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
    console.log(value);
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
      yearList.push({
        type: 'current',
        date: `${year.toString().slice(0, -1)}${i}`,
      });
    }
    yearList.unshift({
      type: 'prev',
      date: Number(yearList[0].date) - 1,
    });

    yearList.push({
      type: 'next',
      date: Number(yearList.slice(-1)[0].date) + 1,
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
          value: `${t.getFullYear()}-${formater(t.getMonth() + 1)}-${formater(t.getDate())}`,
        });
      } else if (i > lastTimeDate + fastTimeDay) {
        let t = getNextDay(lastTime, i - (lastTimeDate + fastTimeDay));
        rows.push({
          type: 'next',
          date: t,
          value: `${t.getFullYear()}-${formater(t.getMonth() + 1)}-${formater(t.getDate())}`,
        });
      } else {
        let t = getDay(time, i - fastTimeDay + 1);
        rows.push({
          type: 'current',
          date: t,
          value: `${t.getFullYear()}-${formater(t.getMonth() + 1)}-${formater(t.getDate())}`,
        });
      }
    }
    setCalendar(rows);
  }, [currentTime]);

  function prevYear() {
    let date = new Date(currentTime.valueOf());
    date.setFullYear(currentYear - 1);
    setCurrentTime(date);
  }

  function nextYear() {
    let date = new Date(currentTime.valueOf());
    date.setFullYear(currentYear + 1);
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

  function formater(date: any) {
    let time = date + '';
    if (time.length == 1) {
      time = '0' + time;
    }
    return time;
  }

  console.log(currentYearList);

  return (
    <div className={clsx(`${prefix}-calendar`)}>
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
                    [`${prefix}-calendar-time-item-checked`]: value === item.value,
                  })}
                  onClick={() => checkedDate(item)}
                >
                  {item.date.getDate()}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={clsx(`${prefix}-calendar-footer`)}></div>
      </div>
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
                  {currentYearList[0].date} - {currentYearList.slice(-1)[0].date}
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
                    [`${prefix}-calendar-time-item-checked`]: value === item.value,
                  })}
                  onClick={() => checkedDate(item)}
                >
                  {item.date}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={clsx(`${prefix}-calendar-footer`)}></div>
      </div>
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
              return (
                <li
                  key={index}
                  className={clsx(`${prefix}-calendar-time-item`, {
                    [`${prefix}-calendar-time-item-checked`]: value === item.value,
                  })}
                  onClick={() => checkedDate(item)}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={clsx(`${prefix}-calendar-footer`)}></div>
      </div>
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
              return (
                <li
                  key={index}
                  className={clsx(`${prefix}-calendar-time-item`, {
                    [`${prefix}-calendar-time-item-checked`]: value === item.value,
                  })}
                  onClick={() => checkedDate(item)}
                >
                  Q{index + 1}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={clsx(`${prefix}-calendar-footer`)}></div>
      </div>
    </div>
  );
}

function DatePickerContent(props: DatePickerProps) {
  const { className, options, value, multiple, onChange, onCancel, target, ...prop } = props;

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
          <Calendar onChange={handleChange} value={value} />
        </div>
      </div>
      <div className={clsx(`${prefix}-select-mask`, {})} onClick={handleCancel}></div>
    </div>
  );
}

function DatePickerValue(props: DatePickerProps) {
  const { options, value, placeholder, onChange, onCancel, target, multiple, ...prop } = props;
  if (value !== undefined) {
    return value;
  }
  if (placeholder) {
    return placeholder;
  }
  return '请选择';
}

DatePicker.Calendar = Calendar;

export default DatePicker;
