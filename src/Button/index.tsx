import React from 'react';

import clsx from 'clsx';

interface ButtonProps {
  /**
   * @description      图标的样式名
   * @default           -
   */
  className?: string;

  /**
   * @description      按钮的类型
   * @default           -
   */
  type?: string;

  /**
   * @description      是否禁用按钮
   * @default           -
   */
  disabled?: boolean;

  /**
   * @description      图标的样式名
   * @default           -
   */
  children?: React.ReactChild;

  /**
   * @description      button点击事件
   * @default           -
   */
  onClick?: Function;

  /**
   * @description      button左右的间隔
   * @default           -
   */
  interval?: string;

  /**
   * @description      图标的样式名
   * @default           -
   */
  inline?: string;
}

function Button(props: ButtonProps) {
  const { type, disabled, children, onClick, interval, inline, ...prop } =
    props;

  function handleClick() {
    if (!disabled && onClick) {
      onClick();
    }
  }

  return (
    <button
      className={clsx({
        'rootnet-mobile-button': true,
        // 'rootnet-mobile-button-default': !type || type == 'default',
        'rootnet-mobile-button-primary': type == 'primary',
        'rootnet-mobile-button-disabled': disabled,
        'rootnet-mobile-button-inline': inline,
      })}
      style={{ margin: interval }}
      onClick={handleClick}
      {...prop}
    >
      {children}
    </button>
  );
}

export default Button;
