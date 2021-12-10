import React, { useEffect, useState, useRef, useMemo, ReactNode, useCallback } from 'react';
import ReactDOM from 'react-dom';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon, Popup } from '../index';
import {
  dateFormat,
  formaterZero,
  isBetweenTimes,
  isBeforeTimes,
  isAfterTimes,
  isDate,
} from '../_util';

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
  picker?: 'date' | 'month' | 'quarter' | 'year' | 'dateRange';

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
  onChange?: Function;

  /**
   * @description      关闭时间面板回调
   * @default           -
   */
  onCancel?: Function;

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
  picker?: 'date' | 'month' | 'quarter' | 'year' | 'dateRange';

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
  onPanelModeFlagChange?: Function;
}

// 获取时间
function getDay(date: any, index: any) {
  date = new Date(date.valueOf());
  date.setDate(index);
  return date;
}

function DatePicker(props: DatePickerProps) {
  const { className, placeholder, disabled, onChange, onCancel, close, picker, ...prop } = props;

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
    return value === '' || value === undefined || value === null || JSON.stringify(value) === '[]';
  }, [value]);

  return (
    <div
      className={clsx(className, `${prefix}-select-target`, `${prefix}-picker`, {
        [`${prefix}-select-target-disabled`]: disabled,
        [`${prefix}-select-target-visible`]: visible,
        [`${prefix}-select-placeholder`]: isPlaceholder,
        [`${prefix}-picker-range`]: picker === 'dateRange',
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
      {value && value != undefined && !disabled && close ? (
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
            if (picker !== 'dateRange' || v?.length > 1) setVisible(false);
            handleOnChange(v, date);
          }}
        />
      </Popup>
    </div>
  );
}

function CalendarHead(props: any) {
  const {
    onPanelChange,
    picker,
    currentTime,
    currentYearList,
    isShowPrev = true,
    isShowNext = true,
    onPanelModeChange,
  } = props;
  const [currentYear, setCurrentYear] = useState(null) as any;
  const [currentMonth, setCurrentMonth] = useState(null) as any;

  const showPrev = isShowPrev;
  const showNext = isShowNext;
  const showMonthPrev = picker === 'date' && isShowPrev;
  const showMonthNext = picker === 'date' && isShowNext;

  function prevYear() {
    let date = new Date(currentTime.valueOf());
    date.setFullYear((picker === 'year' ? Number(currentYearList[0].value) : currentYear) - 1);
    onPanelChange(date);
  }

  function nextYear() {
    let date = new Date(currentTime.valueOf());
    date.setFullYear(
      (picker === 'year' ? Number(currentYearList.slice(-1)[0].value) : currentYear) + 1,
    );
    onPanelChange(date);
  }

  function prevMonth() {
    let date = new Date(currentTime.valueOf());
    date.setMonth(currentMonth - 1);
    onPanelChange(date);
  }

  function nextMonth() {
    let date = new Date(currentTime.valueOf());
    date.setMonth(currentMonth + 1);
    onPanelChange(date);
  }

  useEffect(() => {
    if (!currentTime) return;
    let year = currentTime.getFullYear();
    let month = currentTime.getMonth();

    setCurrentYear(year);
    setCurrentMonth(month);
  }, [currentTime]);

  function handleYearPanelMode(e: any) {
    e.preventDefault();
    e.stopPropagation();
    onPanelModeChange ? onPanelModeChange('year') : null;
  }

  function handleMonthPanelMode(e: any) {
    e.preventDefault();
    e.stopPropagation();
    onPanelModeChange ? onPanelModeChange('month') : null;
  }

  const yearText = useMemo(() => {
    return picker !== 'year'
      ? currentYear
      : currentYearList[0] && `${currentYearList[0].value} - ${currentYearList.slice(-1)[0].value}`;
  }, [currentYear, currentYearList]);

  return (
    <div className={clsx(`${prefix}-calendar-head`)}>
      {showPrev && (
        <div
          className={clsx(`${prefix}-calendar-button`, `${prefix}-calendar-button-prev`)}
          onClick={prevYear}
        >
          <Icon size={12} color="#3A415C" name="a-doubleleft" />
        </div>
      )}
      {showMonthPrev && (
        <div
          className={clsx(
            'panel-mode',
            `${prefix}-calendar-button`,
            `${prefix}-calendar-button-prev`,
          )}
          onClick={prevMonth}
        >
          <Icon size={12} color="#3A415C" name="zuo" />
        </div>
      )}
      <div className={clsx(`${prefix}-calendar-date`)}>
        <div
          className={clsx('panel-mode', `${prefix}-calendar-date-year`, {
            [`${prefix}-calendar-date-year-y`]: picker !== 'year',
          })}
          onClick={handleYearPanelMode}
        >
          <span className="panel-mode">{yearText}</span>
          {(showMonthPrev || showMonthNext) && '年'}
        </div>
        {(showMonthPrev || showMonthNext) && (
          <div
            className={clsx('panel-mode', `${prefix}-calendar-date-month`)}
            onClick={handleMonthPanelMode}
          >
            <span className="panel-mode">{currentMonth + 1}</span>月
          </div>
        )}
      </div>
      {showMonthNext && (
        <div
          className={clsx(
            'panel-mode',
            `${prefix}-calendar-button`,
            `${prefix}-calendar-button-next`,
          )}
          onClick={nextMonth}
        >
          <Icon size={12} color="#3A415C" name="you" />
        </div>
      )}
      {showNext && (
        <div
          className={clsx(`${prefix}-calendar-button`, `${prefix}-calendar-button-next`)}
          onClick={nextYear}
        >
          <Icon size={12} color="#3A415C" name="a-doubleright" />
        </div>
      )}
    </div>
  );
}

// 时间面板
function DateCalendar(props: any) {
  const {
    isShowPrev,
    isShowNext,
    panelChange,
    currentTime,
    checkedDate,
    value,
    panelModeValue,
    showHoverValues,
    onMouseEnterCell,
    onMouseLeaveCell,
    onPanelModeFlagChange,
  } = props;
  const [toDay, setToDay] = useState(dateFormat(new Date(), 'YYYY-MM-DD')) as any;
  const [calendar, setCalendar] = useState([]) as any;
  const [panelMode, setPanelMode] = useState('date') as any;
  const [currentYear, setCurrentYear] = useState(null) as any;

  // 获取时间
  function getPrevDay(date: any, index: any) {
    date = new Date(date.valueOf());
    date.setMonth(date.getMonth());
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
    if (!currentTime) return;
    let time = currentTime;
    let aryLength = 42;
    let rows = [];

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

    // 获取本月第一天
    var fastTime = getMonthDay(time);
    // 获取第一天是周几
    var fastTimeDay = (fastTime.getDay() === 0 ? 7 : fastTime.getDay()) - 1;
    var lastTime = getMonthLastDay(time);
    var lastTimeDate = lastTime.getDate() - 1;

    for (let i = 0; i < aryLength; i++) {
      if (i < fastTimeDay) {
        let pt = getPrevDay(fastTime, i - fastTimeDay + 1);
        rows.push({
          type: 'prev',
          date: pt,
          value: `${pt.getFullYear()}-${formaterZero(pt.getMonth() + 1)}-${formaterZero(
            pt.getDate(),
          )}`,
        });
      } else if (i > lastTimeDate + fastTimeDay) {
        let nt = getNextDay(fastTime, i - (lastTimeDate + fastTimeDay));
        rows.push({
          type: 'next',
          date: nt,
          value: `${nt.getFullYear()}-${formaterZero(nt.getMonth() + 1)}-${formaterZero(
            nt.getDate(),
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

  useEffect(() => {
    let currentDate = new Date(value instanceof Array ? panelModeValue : value);
    setCurrentYear(isDate(currentDate) ? currentDate.getFullYear() : '');
  }, [value]);

  const isInRange = useCallback(
    (current: any) => {
      if (!(value instanceof Array)) return false;
      return isBetweenTimes(current.value, value[0], value[1]) && current.type === 'current';
    },
    [value],
  );

  const isInHoverRange = useCallback(
    (current: any) => {
      if (!(value instanceof Array)) return false;
      return (
        isBetweenTimes(current.value, showHoverValues?.[0], showHoverValues?.[1]) &&
        current.type === 'current'
      );
    },
    [showHoverValues],
  );

  function onPanelModeChange(mode: any) {
    onPanelModeFlagChange && onPanelModeFlagChange(true);
    setPanelMode(mode);
  }

  function changeYearDate(date: any) {
    let currentDate = new Date(currentTime.valueOf());
    currentDate.setFullYear(date.value);
    setPanelMode('date');
    panelChange(currentDate, true);
  }

  function changeMonthDate(date: any) {
    let currentDate = new Date(date.value);
    setPanelMode('date');
    panelChange(currentDate, true);
  }

  if (panelMode === 'month') {
    return (
      <MonthCalendar
        currentTime={currentTime}
        panelChange={panelChange}
        checkedDate={changeMonthDate}
        value={value instanceof Array ? panelModeValue : value}
        onPanelModeFlagChange={onPanelModeFlagChange}
      />
    );
  }

  if (panelMode === 'year') {
    return (
      <YearCalendar
        currentTime={currentTime}
        panelChange={panelChange}
        checkedDate={changeYearDate}
        value={currentYear + ''}
      />
    );
  }

  return (
    <div className={clsx(`${prefix}-calendar-time-content`)}>
      <CalendarHead
        isShowPrev={isShowPrev}
        isShowNext={isShowNext}
        currentTime={currentTime}
        onPanelChange={panelChange}
        onPanelModeChange={onPanelModeChange}
        picker={'date'}
      />
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
            let selected =
              value instanceof Array
                ? value[0] === item.value || value[1] === item.value
                : value === item.value;
            return (
              <li
                key={index}
                className={clsx(`${prefix}-calendar-time-item`, {
                  [`${prefix}-calendar-time-item-${item.type}`]: item.type,
                  [`${prefix}-calendar-time-item-in-range`]: isInRange(item),
                  [`${prefix}-calendar-time-item-in-range-hover`]: isInHoverRange(item),
                })}
                onClick={() => checkedDate(item)}
                onMouseEnter={() => onMouseEnterCell && onMouseEnterCell(item)}
                onMouseLeave={() => onMouseLeaveCell && onMouseLeaveCell()}
              >
                <div
                  className={clsx(`${prefix}-calendar-time-item-date`, {
                    [`${prefix}-calendar-time-item-checked`]: selected && item.type === 'current',
                  })}
                >
                  <span
                    className={clsx(`${prefix}-calendar-time-item-content`, {
                      [`${prefix}-calendar-time-item-today`]: toDay === item.value,
                    })}
                  >
                    {item.date.getDate()}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={clsx(`${prefix}-calendar-footer`)}></div>
    </div>
  );
}

// 年面板
function YearCalendar(props: any) {
  const { panelChange, currentTime, checkedDate, value } = props;

  const [currentYearList, setCurrentYearList] = useState([]) as any;

  useEffect(() => {
    if (!currentTime) return;
    let time = currentTime;
    let year = time.getFullYear();
    let yearLength = 10;
    let yearList = [];

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
      date: getDay((Number(yearList[0].value) - 1).toString(), 1),
      value: (Number(yearList[0].value) - 1).toString(),
    });

    yearList.push({
      type: 'next',
      date: getDay((Number(yearList.slice(-1)[0].value) + 1).toString(), 1),
      value: (Number(yearList.slice(-1)[0].value) + 1).toString(),
    });
    setCurrentYearList(yearList);
  }, [currentTime]);

  return (
    <div className={clsx(`${prefix}-calendar-year-content`)}>
      <CalendarHead
        currentTime={currentTime}
        onPanelChange={panelChange}
        currentYearList={currentYearList}
        picker={'year'}
      />
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
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  checkedDate(item);
                }}
              >
                <span className={clsx(`${prefix}-calendar-time-item-content`, {})}>
                  {item.value}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={clsx(`${prefix}-calendar-footer`)}></div>
    </div>
  );
}

// 月面板
function MonthCalendar(props: any) {
  const { panelChange, currentTime, checkedDate, value, onPanelModeFlagChange } = props;
  const [currentMonthList, setCurrentMonthList] = useState(MONTH) as any;
  const [currentYear, setCurrentYear] = useState(null) as any;
  const [activeYear, setActiveYear] = useState(null) as any;
  const [panelMode, setPanelMode] = useState('month') as any;

  useEffect(() => {
    if (!currentTime) return;
    let time = currentTime;
    let year = time.getFullYear();

    setCurrentYear(year);
  }, [currentTime]);

  useEffect(() => {
    let currentDate = new Date(value);
    setActiveYear(isDate(currentDate) ? currentDate.getFullYear() : '');
  }, [value]);

  function onPanelModeChange(mode: any) {
    onPanelModeFlagChange && onPanelModeFlagChange(true);
    setPanelMode(mode);
  }

  function changeYearDate(date: any) {
    let currentDate = new Date(currentTime.valueOf());
    currentDate.setFullYear(date.value);
    setPanelMode('month');
    panelChange(currentDate);
  }

  if (panelMode === 'year') {
    return (
      <YearCalendar
        currentTime={currentTime}
        panelChange={panelChange}
        checkedDate={changeYearDate}
        value={activeYear + ''}
      />
    );
  }

  return panelMode === 'year' ? (
    <YearCalendar />
  ) : (
    <div className={clsx(`${prefix}-calendar-month-content`)}>
      <CalendarHead
        currentTime={currentTime}
        onPanelChange={panelChange}
        picker={'month'}
        onPanelModeChange={onPanelModeChange}
      />
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
                className={clsx(`${prefix}-calendar-time-item`, {
                  [`${prefix}-calendar-time-item-checked`]: checked,
                })}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  checkedDate(monthItem);
                }}
              >
                <span className={clsx(`${prefix}-calendar-time-item-content`, {})}>{item}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={clsx(`${prefix}-calendar-footer`)}></div>
    </div>
  );
}

// 季度面板
function QuarterCalendar(props: any) {
  const { panelChange, currentTime, checkedDate, value, onPanelModeFlagChange } = props;

  const [currentYear, setCurrentYear] = useState(null) as any;
  const [activeYear, setActiveYear] = useState(null) as any;
  const [quarter, seQuarter] = useState([
    [0, 2],
    [3, 5],
    [6, 8],
    [9, 11],
  ]) as any;
  const [panelMode, setPanelMode] = useState('quarter') as any;

  useEffect(() => {
    if (!currentTime) return;
    let time = currentTime;
    let year = time.getFullYear();

    setCurrentYear(year);
  }, [currentTime]);

  useEffect(() => {
    let currentDate = new Date(value);
    setActiveYear(isDate(currentDate) ? currentDate.getFullYear() : '');
  }, [value]);

  function onPanelModeChange(mode: any) {
    onPanelModeFlagChange && onPanelModeFlagChange(true);
    setPanelMode(mode);
  }

  function changeYearDate(date: any) {
    let currentDate = new Date(currentTime.valueOf());
    currentDate.setFullYear(date.value);
    setPanelMode('quarter');
    panelChange(currentDate);
  }

  if (panelMode === 'year') {
    return (
      <YearCalendar
        currentTime={currentTime}
        panelChange={panelChange}
        checkedDate={changeYearDate}
        value={activeYear + ''}
      />
    );
  }

  return (
    <div className={clsx(`${prefix}-calendar-quarter-content`)}>
      <CalendarHead
        currentTime={currentTime}
        onPanelChange={panelChange}
        picker={'quarter'}
        onPanelModeChange={onPanelModeChange}
      />
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
                className={clsx(`${prefix}-calendar-time-item`, {
                  [`${prefix}-calendar-time-item-checked`]: checked,
                })}
                onClick={() => checkedDate(quarterItem)}
              >
                <span className={clsx(`${prefix}-calendar-time-item-content`, {})}>
                  Q{index + 1}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={clsx(`${prefix}-calendar-footer`)}></div>
    </div>
  );
}

function RangeDatePanel(props: any) {
  const { currentTime, panelChange, checkedDate, value, onPanelModeFlagChange } = props;

  const [date1, setDate1] = useState(value?.[0] || null);
  const [date2, setDate2] = useState(value?.[1] || null);
  const [currentTime1, setCurrentTime1] = useState(null) as any;
  const [currentTime2, setCurrentTime2] = useState(null) as any;
  const [showHoverValues, setShowHoverValues] = useState([]) as any;
  const [selectTime, setSelectTime] = useState([]) as any;

  // 获取下个月
  function getNextMonth() {
    if (!currentTime) return null;
    let date = new Date(currentTime.valueOf());
    date.setMonth(date.getMonth() + 1);
    return date;
  }

  useEffect(() => {
    setCurrentTime1(currentTime);
    setCurrentTime2(getNextMonth());
  }, [currentTime]);

  useEffect(() => {
    setDate1(value?.[0]);
    setDate2(value?.[1]);
    setSelectTime(value || []);
  }, [value]);

  function onCheckedDate(item: any) {
    let selectValue = selectTime.concat();
    // let selectDate = selectTime.concat();

    // 第一次选中
    if (selectValue.length === 2 || (!date1 && !date2) || (!isDate(date1) && !isDate(date2))) {
      selectValue = [item.value];
    } else if (date1 && isBeforeTimes(item.value, date1)) {
      selectValue = [item.value, value?.[0]];
    } else if (date1 && isAfterTimes(item.value, date1)) {
      selectValue = [value?.[0], item.value];
    }

    setSelectTime(selectValue);
    checkedDate({
      type: 'current',
      value: selectValue,
      date: [new Date(selectValue?.[0]), new Date(selectValue?.[1])],
    });
  }

  function onPanelChange(isPrev: boolean, date: any) {
    if (isPrev) {
      panelChange(date);
      return;
    }
    let newDate = new Date(date);
    let oldDate = new Date(currentTime);

    if (newDate.getMonth() !== oldDate.getMonth() + 1) {
      oldDate.setMonth(oldDate.getMonth() + 1);
      panelChange(oldDate);
      return;
    }

    if (newDate.getFullYear() - oldDate.getFullYear() == 1) {
      newDate.setMonth(oldDate.getMonth());
      panelChange(newDate);
    }
  }

  // 鼠标移入单元格的回调
  function onMouseEnterCell(item: any) {
    let cloneHoverValues = showHoverValues.concat();

    if (date1 && date2) {
      cloneHoverValues = [];
    } else if (date1 && isBeforeTimes(item.value, date1)) {
      cloneHoverValues = [item.value, value?.[0]];
    } else if (date1 && isAfterTimes(item.value, date1)) {
      cloneHoverValues = [value?.[0], item.value];
    }

    setShowHoverValues(cloneHoverValues);
  }

  function onMouseLeaveCell() {
    setShowHoverValues([]);
  }
  return (
    <>
      <DateCalendar
        isShowNext={false}
        currentTime={currentTime1}
        panelChange={(date: any, changeType: boolean = true) => onPanelChange(changeType, date)}
        checkedDate={onCheckedDate}
        value={value}
        panelModeValue={value?.[0]}
        showHoverValues={showHoverValues}
        onMouseEnterCell={onMouseEnterCell}
        onMouseLeaveCell={onMouseLeaveCell}
        onPanelModeFlagChange={onPanelModeFlagChange}
      />
      <DateCalendar
        isShowPrev={false}
        currentTime={currentTime2}
        panelChange={(date: any, changeType: boolean = false) => onPanelChange(changeType, date)}
        checkedDate={onCheckedDate}
        value={value}
        panelModeValue={value?.[1]}
        showHoverValues={showHoverValues}
        onMouseEnterCell={onMouseEnterCell}
        onMouseLeaveCell={onMouseLeaveCell}
        onPanelModeFlagChange={onPanelModeFlagChange}
      />
    </>
  );
}

export function Calendar(props: CalendarProps) {
  const { onChange, value, picker = 'date', onPanelModeFlagChange } = props;

  const [currentTime, setCurrentTime] = useState(null) as any;

  useEffect(() => {
    let currentDate = picker === 'dateRange' ? new Date(value?.[0]) : new Date(value);
    setCurrentTime(isDate(currentDate) ? currentDate : new Date());
  }, [value]);

  useEffect(() => {
    if (!currentTime) return;
    let time = currentTime;

    setCurrentTime(time);
  }, [currentTime]);

  function checkedDate(data: any) {
    // if (data.type == 'current') {
    onChange?.(data.value, data.date);
    // }
  }

  function panelChange(date: any) {
    onPanelModeFlagChange && onPanelModeFlagChange(true);
    setCurrentTime(date);
  }

  return (
    <div
      className={clsx(`${prefix}-calendar`, {
        [`${prefix}-calendar-range`]: picker === 'dateRange',
      })}
    >
      {picker === 'date' && (
        <DateCalendar
          currentTime={currentTime}
          panelChange={panelChange}
          checkedDate={checkedDate}
          value={value}
          onPanelModeFlagChange={onPanelModeFlagChange}
        />
      )}
      {picker === 'dateRange' && (
        <RangeDatePanel
          currentTime={currentTime}
          panelChange={panelChange}
          checkedDate={checkedDate}
          value={value}
          onPanelModeFlagChange={onPanelModeFlagChange}
        />
      )}
      {picker === 'year' && (
        <YearCalendar
          currentTime={currentTime}
          panelChange={panelChange}
          checkedDate={checkedDate}
          value={value}
          onPanelModeFlagChange={onPanelModeFlagChange}
        />
      )}
      {picker === 'month' && (
        <MonthCalendar
          currentTime={currentTime}
          panelChange={panelChange}
          checkedDate={checkedDate}
          value={value}
          onPanelModeFlagChange={onPanelModeFlagChange}
        />
      )}
      {picker === 'quarter' && (
        <QuarterCalendar
          currentTime={currentTime}
          panelChange={panelChange}
          checkedDate={checkedDate}
          value={value}
          onPanelModeFlagChange={onPanelModeFlagChange}
        />
      )}
    </div>
  );
}

function DatePickerContent(props: DatePickerProps) {
  const { className, value, picker = 'date', onChange, onCancel } = props;

  const refEl = useRef<any>(null);
  const panelModeFlagRef = useRef<any>(null);

  function handleClick(e: any) {
    if (!refEl.current) return;
    if (!ReactDOM.findDOMNode(refEl.current)?.contains(e.target) && !panelModeFlagRef.current) {
      handleCancel(e);
    } else {
      onPanelModeFlagChange(false);
    }
  }

  useEffect(() => {
    document.body.addEventListener('click', handleClick);
    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, []);

  function onPanelModeFlagChange(panelModeFlag: any) {
    panelModeFlagRef.current = panelModeFlag;
  }

  function handleCancel(e: any) {
    onCancel && onCancel();
  }

  function handleChange(v: any, date: any) {
    onChange && onChange(v, date);
    onPanelModeFlagChange(false);
  }

  return (
    <div className={clsx(`${prefix}-select-warp`, className)} ref={refEl}>
      <div className={clsx(`${prefix}-select`, {})} style={{}}>
        <div className={clsx(`${prefix}-select-body`, {})}>
          <Calendar
            picker={picker}
            onChange={handleChange}
            value={value}
            onPanelModeFlagChange={onPanelModeFlagChange}
          />
        </div>
      </div>
      <div className={clsx(`${prefix}-select-mask`, {})} onClick={handleCancel}></div>
    </div>
  );
}

function DatePickerValue(props: DatePickerProps) {
  const { value, placeholder, picker = 'date', format } = props;

  const placeholderText = {
    date: '时间',
    month: '月份',
    quarter: '季度',
    year: '年份',
    dateRange: '开始日期 ~ 结束日期',
  };
  const formatRules = {
    date: 'YYYY-MM-DD',
    month: 'YYYY-MM',
    quarter: 'YYYY-Qq',
    year: 'YYYY',
    dateRange: 'YYYY-MM-DD ~ YYYY-MM-DD',
  };

  function rangeDateFormat() {
    const startDate = new Date(value?.[0]);
    const endDate = new Date(value?.[1]);
    let startYear = startDate.getFullYear();
    let startMonth = startDate.getMonth() + 1;
    let startDay = startDate.getDate();
    let endYear = endDate.getFullYear();
    let endMonth = endDate.getMonth() + 1;
    let endDay = endDate.getDate();

    let startText = `${startYear}-${formaterZero(startMonth)}-${formaterZero(startDay)}`;
    let endText = isNaN(endYear)
      ? '结束日期'
      : `${endYear}-${formaterZero(endMonth)}-${formaterZero(endDay)}`;

    return `${startText} ~ ${endText}`;
  }

  if (value !== '' && value !== undefined && value !== null) {
    if (picker === 'dateRange') return rangeDateFormat();
    return dateFormat(value, format || formatRules[picker]);
  }
  if (placeholder) {
    return placeholder;
  }

  return (picker !== 'dateRange' ? '请选择' : '') + placeholderText[picker];
}

DatePicker.Calendar = Calendar;

export default DatePicker;
