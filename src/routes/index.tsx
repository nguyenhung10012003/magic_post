import React from 'react';

import Square2x2 from "@/components/icons/Square2x2";
import UserGroup from "@/components/icons/UserGroup";
import MapPin from "@/components/icons/MapPin";

export const routes = [
  {
    name: 'Trang chính',
    layout: '/dashboard',
    path: '',
    icon: <Square2x2/>,
  },
  {
    name: 'Quản lý tài khoản',
    layout: '/dashboard',
    path: 'user',
    icon: <UserGroup/>,
  },
  {
    name: 'Quản lý chi nhánh',
    layout: '/dashboard',
    icon: <MapPin/>,
    path: 'branch',
  },
]
