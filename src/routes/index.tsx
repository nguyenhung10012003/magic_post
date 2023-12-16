import React from 'react';

import Square2x2 from "@/components/icons/Square2x2";
import UserGroup from "@/components/icons/UserGroup";
import MapPin from "@/components/icons/MapPin";
import {IRoute} from "@/types/navigation";
import Order from "@/components/icons/Order";

export const routes: IRoute[] = [
  {
    name: 'Trang chính',
    layout: '/dashboard',
    path: '/main',
    icon: <Square2x2/>,
    hasRole: ["admin", "transaction_point_manager", 'gathering_point_manager', 'tellers']
  },
  {
    name: 'Quản lý tài khoản',
    layout: '/dashboard',
    path: 'user',
    icon: <UserGroup/>,
    hasRole: ["admin", "transaction_point_manager", 'gathering_point_manager']
  },
  {
    name: 'Quản lý chi nhánh',
    layout: '/dashboard',
    icon: <MapPin/>,
    path: 'branch',
    hasRole: ["admin"]
  },
  {
    name: 'Quản lý đơn hàng',
    layout: '/dashboard',
    icon: <Order/>,
    path: 'order',
    hasRole: ["tellers", "coordinator"]
  },
]
