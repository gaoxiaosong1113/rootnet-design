import React, { useEffect, useMemo, useState } from 'react';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

import { Icon } from '../index';

import Group from './Group';
import InternalCheckbox from './Checkbox';

export interface CompoundedComponent
  extends React.ForwardRefExoticComponent<any> {
  Group: typeof Group;
}

const Checkbox = InternalCheckbox as CompoundedComponent;

Checkbox.Group = Group;

export default Checkbox;
