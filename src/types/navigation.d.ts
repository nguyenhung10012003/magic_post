import {JSX} from 'react';

export interface IRoute {
  name: string;
  layout: string;
  icon?: JSX.Element | string;
  items?: any;
  path: string;
  secondary?: boolean | undefined;
  hasRole: string[]
}

interface RoutesType {
  name: string;
  layout: string;
  icon?: JSX.Element | string;
  path: string;
  secondary?: boolean | undefined;
}
