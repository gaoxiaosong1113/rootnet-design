// 引入react依赖
import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';

// 引入第三方依赖

import clsx from 'clsx';

// 引入样式
import './index.less';

// 引入配置文件
import { prefix } from '../config';

// 引入组件
import { Icon } from '../index';

export interface ImageProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;

  /**
   * @description      图片裁剪类型
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
   * @description      图片路径
   * @default           -
   */
  src?: string;
}

function Image(props: ImageProps) {
  const { mode = 'scaleToFill', className, src, ...prop } = props;

  const imgStyle = useMemo(() => {
    switch (mode) {
      case 'scaleToFill':
        return {
          backgroundPosition: '0% 0%',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        };
      case 'aspectFit':
        return {
          backgroundPosition: 'center center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        };
      case 'aspectFill':
        return {
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        };
      case 'widthFix':
        return {
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        };
      case 'heightFix':
        return {
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        };
      case 'top':
        return {
          backgroundPosition: 'center top',
          backgroundSize: 'auto',
          backgroundRepeat: 'no-repeat',
        };
      case 'bottom':
        return {
          backgroundPosition: 'center bottom',
          backgroundSize: 'auto',
          backgroundRepeat: 'no-repeat',
        };
      case 'center':
        return {
          backgroundPosition: 'center center',
          backgroundSize: 'auto',
          backgroundRepeat: 'no-repeat',
        };
      case 'left':
        return {
          backgroundPosition: 'left center',
          backgroundSize: 'auto',
          backgroundRepeat: 'no-repeat',
        };
      case 'right':
        return {
          backgroundPosition: 'right center',
          backgroundSize: 'auto',
          backgroundRepeat: 'no-repeat',
        };
      case 'top left':
        return {
          backgroundPosition: 'left top',
          backgroundSize: 'auto',
          backgroundRepeat: 'no-repeat',
        };
      case 'top right':
        return {
          backgroundPosition: 'right top',
          backgroundSize: 'auto',
          backgroundRepeat: 'no-repeat',
        };
      case 'bottom left':
        return {
          backgroundPosition: 'left bottom',
          backgroundSize: 'auto',
          backgroundRepeat: 'no-repeat',
        };
      case 'bottom right':
        return {
          backgroundPosition: 'right bottom',
          backgroundSize: 'auto',
          backgroundRepeat: 'no-repeat',
        };
    }
  }, [src, mode]);

  return (
    <div
      className={clsx({
        [`${prefix}-image`]: true,
      })}
      {...prop}
    >
      <div
        className=""
        style={{ backgroundImage: `url(${src})`, ...imgStyle }}
      ></div>
      <img src={src} />
    </div>
  );
}

export default Image;
