// 引入react依赖
import React, { useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

// 引入第三方依赖

import clsx from 'clsx';

// 引入样式
import './index.less';

// 引入配置文件
import { prefix } from '../config';

// 引入组件
import { Image } from '../index';

export interface HeadPortraitProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;

  /**
   * @description      头像裁剪类型
   * @default           -
   */
  mode?:
    | 'scaleToFill'
    | 'aspectFit'
    | 'aspectFill'
    | 'widthFix'
    | 'heightFix'
    | 'top'
    | 'bottom'
    | 'center'
    | 'left'
    | 'right'
    | 'top left'
    | 'top right'
    | 'bottom left'
    | 'bottom right';

  /**
   * @description      头像图片路径
   * @default           -
   */
  src?: string;

  /**
   * @description      头像大小
   * @default           l
   */
  size?: 'l' | 'xl' | 'xxl' | 'xxxl';
}

function HeadPortrait(props: HeadPortraitProps) {
  const { className, mode = 'scaleToFill', src, size = 'l' } = props;
  return (
    <div
      className={clsx(
        className,
        `${prefix}-headPortrait`,
        `headPortrait-${size}`,
      )}
    >
      <Image mode={mode} src={src} />
    </div>
  );
}

export default HeadPortrait;
