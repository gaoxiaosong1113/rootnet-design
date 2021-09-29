import React, { ReactNode, useMemo } from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

import approved from './resources/approved.svg';
import auditFailure from './resources/auditFailure.svg';
import connectInterrupt from './resources/connectInterrupt.svg';
import development from './resources/development.svg';
import emptyData from './resources/emptyData.svg';
import error from './resources/error.svg';
import requestError from './resources/requestError.svg';
import review from './resources/review.svg';
import searchEmptyData from './resources/searchEmptyData.svg';

export interface EmptyProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;
  style?: Object;
  children?: ReactNode;

  /**
   * @description      Empty的类型
   * @default           emptyData
   */
  type: string;

  /**
   * @description      自定义提示文字
   * @default           -
   */
  describe?: string;

  /**
   * @description      需要显示的图标
   * @default           -
   */
  icon?: string;

  /**
   * @description      是否禁用Empty
   * @default           false
   */
  disabled?: boolean;
}

function Empty(props: EmptyProps) {
  const { className, type, icon, disabled, children, describe, ...prop } =
    props;

  let show = useMemo(() => {
    let config: any = {
      approved: {
        image: approved,
        describe: describe || '审核通过',
      },
      auditFailure: {
        image: auditFailure,
        describe: describe || '审核失败',
      },
      connectInterrupt: {
        image: connectInterrupt,
        describe: describe || '好像断开连接了<br/>刷新一下吧',
      },
      development: {
        image: development,
        describe: describe || '该模块功能正在开发中<br/>敬请期待',
      },
      emptyData: {
        image: emptyData,
        describe: describe || '暂无相关数据',
      },
      error: {
        image: error,
        describe: describe || '加载失败',
      },
      requestError: {
        image: requestError,
        describe: describe || '请设置好相关条件<br/>再来查看数据吧',
      },
      review: {
        image: review,
        describe: describe || '审核中',
      },
      searchEmptyData: {
        image: searchEmptyData,
        describe: describe || '没有找到相关数据',
      },
    };
    return config[type] || config['emptyData'];
  }, [type]);
  return (
    <div className={clsx(className, `${prefix}-empty`)} {...prop}>
      <img src={show.image} alt="" />
      <p dangerouslySetInnerHTML={{ __html: show.describe }}></p>
    </div>
  );
}

export default Empty;
