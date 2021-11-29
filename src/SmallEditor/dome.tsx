import React, { Component, useState, useEffect, useRef } from 'react';

import {
  Drawer,
  Select,
  Button,
  util,
  Popup,
  Icon,
  Input,
  Breadcrumb,
  Operation,
  Popover,
  Tooltip,
  Grid,
  SmallEditor,
} from 'rootnet-design';

const { Row, Col } = Grid;

import clsx from 'clsx';

import './dome.less';

export default () => {
  const [fontSize] = useState([
    '12px',
    '13px',
    '14px',
    '15px',
    '16px',
    '19px',
    '20px',
    '24px',
    '28px',
    '32px',
    '40px',
    '48px',
  ]);
  const [lineHeight] = useState([1, 1.5, 1.75, 2, 2.5, 3]);

  const ref = useRef(null);

  function handleClick(command, value) {
    document.execCommand(command, false, null);
  }

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <div className="toolbar">
            <div className="toolbar-type">文字</div>
            <div className="toolbar-items">
              <Select
                options={fontSize.map((item) => ({
                  label: item,
                  value: item,
                }))}
                placeholder={'字体大小'}
                onChange={(value) => {}}
              />
              <Operation.Popup
                component={
                  <div className={clsx('toolbar-item', {})}>
                    <Icon name="hangjianju" />
                  </div>
                }
              >
                {lineHeight.map((item) => (
                  <Operation.Item key={item} onMouseDown={() => {}}>
                    {item}
                  </Operation.Item>
                ))}
              </Operation.Popup>
              <div
                className={clsx('toolbar-item', {})}
                onMouseDown={() => handleClick('bold', null)}
              >
                <Icon name="icon-fontbold" />
              </div>
              <div
                className={clsx('toolbar-item', {})}
                onMouseDown={() => handleClick('bold', null)}
              >
                <Icon name="icon-fontitalics" />
              </div>
              <div
                className={clsx('toolbar-item', {})}
                onMouseDown={() => handleClick('bold', null)}
              >
                <Icon name="icon-fontunderline" />
              </div>
              <div
                className={clsx('toolbar-item', {})}
                onMouseDown={() => handleClick('bold', null)}
              >
                <Icon name="icon-fontleft" />
              </div>
              <div
                className={clsx('toolbar-item', {})}
                onMouseDown={() => handleClick('bold', null)}
              >
                <Icon name="icon-fontcenter" />
              </div>
              <div
                className={clsx('toolbar-item', {})}
                onMouseDown={() => handleClick('bold', null)}
              >
                <Icon name="icon-fontright" />
              </div>
              <div
                className={clsx('toolbar-item', {})}
                onMouseDown={() => handleClick('bold', null)}
              >
                <Icon name="liangduanduiqi" />
              </div>
            </div>
          </div>
          <SmallEditor
            ref={ref}
            onChange={(v) => {
              console.log(v, 'change');
            }}
            onBlur={(v) => {
              console.log(v, 'blur');
            }}
            onFocus={(v) => {
              console.log(v, 'focus');
            }}
          ></SmallEditor>
        </Col>
      </Row>
    </div>
  );
};
