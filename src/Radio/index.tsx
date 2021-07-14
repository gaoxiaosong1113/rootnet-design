import React, { useEffect, useState } from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

import Group from './Group';
import InternalRadio from './Radio';

export interface CompoundedComponent
  extends React.ForwardRefExoticComponent<any> {
  Group: typeof Group;
}

const Radio = InternalRadio as CompoundedComponent;

Radio.Group = Group;

export default Radio;
