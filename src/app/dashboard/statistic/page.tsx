'use client'
import {useAuth} from "@/hook/AuthContext";
import api from "@/config/api";
import SelectListBox from "@/components/selectors/SelectListBox";
import {useState} from "react";
import useSWR from "swr";
import TransactionStatistic from "@/components/statistics/TransactionStatistic";
import GatheringStatistic from "@/components/statistics/GatheringStatistic";
import AllStatistic from "@/components/statistics/AllStatistic";

const fetcher = (url: string) => api.get(url).then(res => res.data).then(data => data.data);

export default function Statistic() {
  const {user} = useAuth();
  const [idBranch, setIdBranch] = useState(user.idBranch)
  const [selected, setSelected] = useState(0);
  const {data, isLoading, error} = useSWR("/office/all", fetcher)
  const dataSelect = data?.transactionPoint.concat(data?.gatheringPoint).map((item: any) => {
    return {id: item.id, name: item.name}
  });
  const handleSelect = (value: number) => {
    setSelected(value);
    if (value === 0) setIdBranch(null)
    else setIdBranch(dataSelect[value - 1].id)
  }
  const createStatistic = (idBranch: any) => {
    if (!idBranch || idBranch === 'undefined') return <AllStatistic/>
    else if (idBranch.includes("TSP")) return <TransactionStatistic idBranch={idBranch}/>
    else return <GatheringStatistic idBranch={idBranch}/>
  }

  return (
    <div className="flex flex-col">
      {user.role === 'admin' && <div className="flex max-w-[330px]">
        {!isLoading && <SelectListBox
            selections={['Tất cả'].concat(dataSelect.map((item: any) => {
              return item.name
            }))}
            selected={selected} setSelected={handleSelect}
            selectBtnClassname="bg-bgColor1 w-[330px] rounded-lg"
        />}
      </div>}
      {createStatistic(idBranch)}
    </div>
  )
}