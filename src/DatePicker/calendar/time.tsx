import React, { useEffect, useState, useRef, useMemo, ReactNode, useCallback } from 'react';

import clsx from 'clsx';

import { prefix } from '../../config';
import { Button } from '../../index';

import {
  dateFormat,
  formaterZero,
  isBetweenTimes,
  isBeforeTimes,
  isAfterTimes,
  isDate,
} from '../../_util';

const AMPM = ['am', 'pm'];
// time时间列
const TimeColumn = (props: any) => {
  const { list, selected, value, unit, onHandleSelect } = props;
  const wrapper: any = useRef();
  const ls: any = useRef(new Map());
  const ulRef: any = useRef();

  useEffect(() => {
    const li = ls.current.get(value);

    if (li) {
      // li.scrollIntoView({behavior: "smooth", block: "start"});
      li.scrollIntoView();
    }
  }, [value]);

  return (
    <div className={clsx(`${prefix}-calendar-list`)} ref={wrapper}>
      <ul ref={ulRef}>
        {list.map((item: any) => {
          return (
            <li
              className={clsx(`${prefix}-calendar-time-cell`, {
                [`${prefix}-calendar-time-cell-selected`]: item.selected,
              })}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onHandleSelect(item.value, unit);
              }}
              ref={(ele) => {
                ls.current.set(item.value, ele);
              }}
            >
              <div className={clsx(`${prefix}-calendar-time-cell-inner`)}>{item.label}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// time时间选择面板
function TimeCalendar(props: any) {
  const { checkedDate, value, use12Hours, format = 'HH:mm:ss', onPanelModeFlagChange } = props;
  const [valueView, setValueView] = useState(value);

  const getValueView = useCallback(() => {
    if (isDate(valueView)) valueView;
    if (isDate(new Date(`${new Date().getFullYear()} ${valueView}`)))
      return new Date(`${new Date().getFullYear()} ${valueView}`);
    return new Date();
  }, [valueView]);

  useEffect(() => {
    setValueView(value);
  }, [value]);

  const valueViewShow: any = getValueView();

  // 选择时间
  function onHandleSelect(selectValue: any, unit: string) {
    const isUpperCase = columnsList.indexOf('A') !== -1;
    const _valueView = valueViewShow;
    let _hour = _valueView.getHours();
    const _minute = _valueView.getMinutes();
    const _second = _valueView.getSeconds();
    let newValue = '';

    if (unit === 'hour') {
      if (use12Hours) {
        if (ampm === 'am' && selectValue === 12) selectValue = '00';
        if (ampm === 'pm' && selectValue !== 12) selectValue += 12;
      }

      newValue = `${selectValue}:${_minute}:${_second}`;
    }

    if (unit === 'minute') {
      newValue = `${_hour}:${selectValue}:${_second}`;
    }

    if (unit === 'second') {
      newValue = `${_hour}:${_minute}:${selectValue}`;
    }

    if (unit === 'ampm') {
      if (selectValue === 'am' && _hour === 12) _hour = '00';
      if (selectValue === 'pm' && _hour !== 12) _hour += 12;

      newValue = `${_hour}:${_minute}:${_second}`;
    }

    setValueView(newValue);
  }
  // 选中此刻时间
  function onSelectNow() {
    const now = dateFormat(new Date(), 'HH:mm:ss');
    setValueView(now);
  }
  // 点击确定
  function onConfirmTime() {
    checkedDate &&
      checkedDate({
        value: valueView,
        date: new Date(),
      });
  }

  const getColumnToFormat = () => {
    const units = ['H', 'h', 'm', 's', 'a', 'A'];
    const list: string[] = [];
    units.forEach((item) => {
      if (format.indexOf(item) !== -1) {
        list.push(item);
      }
    });

    return list;
  };

  const getTimeList = useCallback(
    (type) => {
      const stepHours = 1;
      const stepMinutes = 1;
      const stepSeconds = 1;
      let list = [];

      if (type === 'hour') {
        for (let i = 0; i < (use12Hours ? 12 : 24); i += stepMinutes) {
          list.push(i);
        }

        if (use12Hours) {
          list[0] = 12;
        }
      }

      if (type === 'minute') {
        for (let i = 0; i < 60; i += stepMinutes) {
          list.push(i);
        }
      }

      if (type === 'second') {
        for (let i = 0; i < 60; i += stepSeconds) {
          list.push(i);
        }
      }

      return list;
    },
    [use12Hours],
  );

  const HOURS = getTimeList('hour');
  const MINUTES = getTimeList('minute');
  const SECONDS = getTimeList('second');

  let selectedHour = valueViewShow && valueViewShow.getHours();
  let ampm = selectedHour >= 12 ? 'pm' : 'am';
  selectedHour = use12Hours ? (selectedHour > 12 ? selectedHour - 12 : selectedHour) : selectedHour;
  if (use12Hours && selectedHour === 0 && ampm === 'am') {
    selectedHour += 12;
  }
  const selectedMinute = valueViewShow && valueViewShow.getMinutes();
  const selectedSecond = valueViewShow && valueViewShow.getSeconds();

  // 判断显示列和ampm大小写
  const columnsList = getColumnToFormat();

  // 渲染小时
  function renderHours() {
    const hours = HOURS;
    const list = hours.map((h) => ({
      label: formaterZero(h),
      value: h,
      selected: selectedHour !== undefined && selectedHour == h,
    }));

    return (
      <TimeColumn list={list} value={selectedHour} onHandleSelect={onHandleSelect} unit="hour" />
    );
  }
  // 渲染分钟
  function renderMinutes() {
    const minutes = MINUTES;
    const list = minutes.map((m) => ({
      label: formaterZero(m),
      value: m,
      selected: selectedHour !== undefined && selectedMinute == m,
    }));

    return (
      <TimeColumn
        list={list}
        value={selectedMinute}
        onHandleSelect={onHandleSelect}
        unit="minute"
      />
    );
  }
  // 渲染秒
  function renderSeconds() {
    const seconds = SECONDS;
    const list = seconds.map((s) => ({
      label: formaterZero(s),
      value: s,
      selected: selectedHour !== undefined && selectedSecond == s,
    }));

    return (
      <TimeColumn
        list={list}
        value={selectedSecond}
        onHandleSelect={onHandleSelect}
        unit="second"
      />
    );
  }

  function renderAmPm() {
    const isUpperCase = columnsList.indexOf('A') !== -1;

    const list = AMPM.map((a) => ({
      label: isUpperCase ? a.toUpperCase() : a,
      value: a,
      selected: selectedHour !== undefined && ampm === a,
    }));

    return <TimeColumn list={list} value={ampm} onHandleSelect={onHandleSelect} unit="ampm" />;
  }

  return (
    <div className={clsx(`${prefix}-calendar-time-content`)}>
      {/* <div className={clsx(`${prefix}-calendar-head`)}>
                <div className={clsx(`${prefix}-calendar-date`)}>{`${}:${}:${}`}</div>
            </div> */}
      <div className={clsx(`${prefix}-calendar-body`)}>
        <div className={clsx(`${prefix}-calendar-time`)}>
          {(columnsList.indexOf('H') !== -1 || columnsList.indexOf('h') !== -1) && renderHours()}
          {columnsList.indexOf('m') !== -1 && renderMinutes()}
          {columnsList.indexOf('s') !== -1 && renderSeconds()}
          {use12Hours && renderAmPm()}
        </div>
      </div>
      <div
        className={clsx(`${prefix}-calendar-footer`, {
          [`${prefix}-calendar-footer-time`]: true,
        })}
      >
        <Button type="link" size="lg" onClick={onSelectNow}>
          此刻
        </Button>
        <Button type="primary" size="sm" onClick={onConfirmTime}>
          确定
        </Button>
      </div>
    </div>
  );
}

export default TimeCalendar;
