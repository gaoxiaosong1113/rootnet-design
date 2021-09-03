import React, { useMemo, ReactNode } from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';
export interface ResultProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;
  style?: Object;
  children?: ReactNode;

  /**
   * @description      Result的类型
   * @default           emptyData
   */
  type: string;

  /**
   * @description      需要显示的图标
   * @default           -
   */
  icon?: string;

  /**
   * @description      是否禁用Result
   * @default           false
   */
  disabled?: boolean;

  /**
   * @description      附加信息
   * @default           -
   */
  extra?: any;

  /**
   * @description      左侧图片路径
   * @default           -
   */
  src?: any;

  data?: Array<any>;
}

function Result(props: ResultProps) {
  const {
    className,
    src,
    type,
    icon,
    disabled,
    data,
    children,
    extra,
    ...prop
  } = props;

  let show = useMemo(() => {
    let config: any = {
      403: {
        title: '403',
        describe: '抱歉，你无权访问该页面',
      },
      404: {
        title: '404',
        describe: '抱歉，你访问的页面不存在',
      },
      500: {
        title: '500',
        describe: '抱歉，服务器出错了',
      },
      compatibility: {
        title: '浏览器版本不兼容',
        describe:
          '浏览器版本过低，为避免可能存在的安全隐患，<br/>推荐升级以下浏览器',
      },
    };
    return type ? config[type] : null;
  }, [type]);

  if (!show) return null;

  return (
    <div className={clsx(className, `${prefix}-result`, {})} {...prop}>
      <div className={clsx(`${prefix}-result-content`, {})}>
        {src && <img src={src} alt="" />}
        <div className={clsx(`${prefix}-result-info`, {})}>
          <h2>{show.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: show.describe }}></p>
          {extra}
        </div>
      </div>
    </div>
  );
}

export default Result;
