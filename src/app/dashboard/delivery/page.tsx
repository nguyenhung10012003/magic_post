'use client'
import {useState} from "react";
import {ArchiveBoxArrowDownIcon, ArrowRightIcon} from "@heroicons/react/24/solid";
import {DateRange} from "@/utils/date";
import api from "@/config/api";
import useSWR from "swr";
import {useAuth} from "@/hook/AuthContext";

const fetcher = (url: string) => api.get(url).then(res => res.data).then(data => data.data);
export default function Delivery() {
  const [tab, setTab] = useState(0);
  const [checkHidden, setCheckHidden] = useState(false);
  const [dateRange, setDateRange] = useState<DateRange | null>(null);
  const tabs = [
    {icon: <ArchiveBoxArrowDownIcon className="h-4 w-4"/>, title: "Đơn trong kho"},
    {icon: <ArrowRightIcon className="h-4 w-4"/>, title: "Đang tới"},
  ];
  const {user} = useAuth();
  const {
    data,
    isLoading,
    error,
    mutate
  } = useSWR(`/order/statistic/gathering/${user.idBranch}?from=2023-01-01&to=2024-12-30`, fetcher);
  console.log(data);
  return (
    <></>
  )
}