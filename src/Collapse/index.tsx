import React, { useState } from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

interface CollapseProps {
  /**
   * @description      样式命
   * @default           -
   */
  className?: string;

  children?: React.ReactChild;
}

function Collapse(props: CollapseProps) {
  const { children, ...prop } = props;

  return (
    <div
      className={clsx({
        [`${prefix}-collapse`]: true,
      })}
      {...prop}
    >
      {children}
    </div>
  );
}

Collapse.Item = function Item(props: any) {
  const { children, title, ...prop } = props;

  const [open, setOpen] = useState(props.open);

  return (
    <div
      className={clsx({
        [`${prefix}-collapse-item`]: true,
        [`${prefix}-collapse-item-open`]: open,
      })}
      {...prop}
    >
      <div
        className={clsx({
          [`${prefix}-collapse-item-head`]: true,
        })}
        onClick={() => {
          setOpen((prevOpen: any) => {
            return !prevOpen;
          });
        }}
      >
        {title}
      </div>
      <div
        className={clsx({
          [`${prefix}-collapse-item-body`]: true,
        })}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapse;
