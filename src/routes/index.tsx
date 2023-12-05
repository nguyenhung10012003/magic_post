import React from 'react';

import Square2x2 from "@/components/icons/Square2x2";
import UserGroup from "@/components/icons/UserGroup";
import MapPin from "@/components/icons/MapPin";
import {IRoute} from "@/types/navigation";

export const routes: IRoute[] = [
  {
    name: 'Trang chính',
    layout: '/dashboard',
    path: '/main',
    icon: <Square2x2/>,
    hasRole: ["ADMIN", "TRANSACTION_POINT_MANAGER", 'GATHERING_POINT_MANAGER', 'TELLERS', 'COORDINATOR']
  },
  {
    name: 'Quản lý tài khoản',
    layout: '/dashboard',
    path: 'user',
    icon: <UserGroup/>,
    hasRole: ["ADMIN", "TRANSACTION_POINT_MANAGER", 'GATHERING_POINT_MANAGER']
  },
  {
    name: 'Quản lý chi nhánh',
    layout: '/dashboard',
    icon: <MapPin/>,
    path: 'branch',
    hasRole: ["ADMIN"]
  },
]
