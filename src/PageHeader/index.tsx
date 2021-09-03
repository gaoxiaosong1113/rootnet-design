// 引入react依赖
import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

// 引入第三方依赖

import clsx from 'clsx';

// 引入样式
import './index.less';

// 引入配置文件
import { prefix } from '../config';

// 引入组件
import { Icon } from '../index';

export interface PageHeaderProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;
  style?: Object;
  children?: ReactNode;

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
  const { className, children, onClick, title, ...prop } = props;

  function handleClick() {
    if (onClick) {
      onClick();
    }
  }
  return (
    <div
      className={clsx(className, `${prefix}-pageHeader`)}
      onClick={handleClick}
      {...prop}
    >
      <div className={clsx(`${prefix}-pageHeader-left`)}>
        <Icon name={'fanhui'} />
        <span>{title || '返回'}</span>
      </div>
      <div className={clsx(`${prefix}-pageHeader-content`)}>{children}</div>
    </div>
  );
}

export default PageHeader;
