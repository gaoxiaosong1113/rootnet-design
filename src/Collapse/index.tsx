// 引入react依赖
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// 引入第三方依赖
import { CSSTransition } from 'react-transition-group';
import clsx from 'clsx';

// 引入样式
import './index.less';

// 引入配置文件
import { prefix } from '../config';

// 引入组件
import { Icon } from '../index';

export interface CollapseProps {
  /**
   * @description      类名
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
        <Icon name={open ? 'xuanzeshouqi' : 'xuanzexiala'} />
        <span>{title}</span>
      </div>
      <CSSTransition
        in={open}
        className={clsx({})}
        classNames={`collapse-transition`}
        unmountOnExit
        timeout={0}
        // timeout={400}
      >
        <div>
          <div
            className={clsx({
              [`${prefix}-collapse-item-body`]: true,
            })}
          >
            {children}
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Collapse;
