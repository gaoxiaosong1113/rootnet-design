import React from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

interface PageHeaderProps {
  /**
   * @description      样式命
   * @default           -
   */
  className?: string;

  children?: React.ReactChild;

  /**
   * @description      PageHeader点击事件
   * @default           -
   */
  onClick?: Function;

  /**
   * @description      PageHeader的title
   * @default           -
   */
  title?: string;
}

function PageHeader(props: PageHeaderProps) {
  const { children, onClick, title, ...prop } = props;

  function handleClick() {
    if (onClick) {
      onClick();
    }
  }
  return (
    <div
      className={clsx({
        [`${prefix}-pageHeader`]: true,
      })}
      onClick={handleClick}
      {...prop}
    >
      <div
        className={clsx({
          [`${prefix}-pageHeader-left`]: true,
        })}
      >
        <Icon name={'cuowu'} />
        <span>{title || '返回'}</span>
      </div>
      <div
        className={clsx({
          [`${prefix}-pageHeader-content`]: true,
        })}
      >
        {children}
      </div>
    </div>
  );
}

export default PageHeader;
