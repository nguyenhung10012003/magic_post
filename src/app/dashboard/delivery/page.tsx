'use client'
import {useEffect, useState} from "react";
import {ArchiveBoxArrowDownIcon, ArrowRightIcon} from "@heroicons/react/24/solid";
import {DateRange} from "@/utils/date";
import api from "@/config/api";
import useSWR from "swr";
import {useAuth} from "@/hook/AuthContext";
import Filter from "@/components/filters/Filter";
import DeliveryTable from "@/app/dashboard/delivery/DeliveryTable";
import SendDeliveryModal from "@/components/modals/SendDeliveryModal";
import {toast} from "react-toastify";
import SearchFilter from "@/components/filters/SearchFilter";

const fetcher = (url: string) => api.get(url).then(res => res.data).then(data => data.data);
export default function Delivery() {
  const [tab, setTab] = useState(0);
  const [dateRange, setDateRange] = useState<DateRange | null>(null);
  const [orderSelected, setOrderSelected] = useState<any[]>([]);
  const [checkAll, setCheckAll] = useState(false);
  const [openSendDeliveryModel, setOpenSendDeliveryModel] = useState(false);
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
  } = useSWR(`/order/deliveryfollowing/${user.idBranch}?from=2023-01-01&to=2024-12-30`, fetcher);
  useEffect(() => {
    setOrderSelected([]);
    setCheckAll(false);
  }, [tab, data]);
  const createTable = () => {
    if (tab === 0) {
      return <DeliveryTable data={data.stock.filter((d: any) => {
        let res = true;
        if (dateRange && dateRange.endDate && dateRange.startDate) {
          res = (d.dateCreated <= new Date(dateRange.endDate).getTime()
            && d.dateCreated >= new Date(dateRange.startDate).getTime());
        }
        return res;
      })}
                            orderSelected={orderSelected}
                            setOrderSelected={setOrderSelected}
                            checkAll={checkAll}
                            setCheckAll={setCheckAll}
                            addBtn={[
                              {
                                value: "Chuyển hàng đi", onClick: (orderSelected: any[]) => {

                                  setOpenSendDeliveryModel(true)
                                }
                              }
                            ]}
                            mutate={mutate}/>
    } else
      return <DeliveryTable data={data.incoming.filter((d: any) => {
        let res = true;
        if (dateRange && dateRange.endDate && dateRange.startDate) {
          res = (d.dateCreated <= new Date(dateRange.endDate).getTime()
            && d.dateCreated >= new Date(dateRange.startDate).getTime());
        }
        return res;
      })}
                            orderSelected={orderSelected}
                            setOrderSelected={setOrderSelected}
                            checkAll={checkAll}
                            setCheckAll={setCheckAll}
                            addBtn={[
                              {
                                value: "Đã nhận", onClick: (orderSelected: any[]) => {
                                  console.log(orderSelected);
                                  api.put(`/order/delivery`, orderSelected.map((o) => {
                                    return {
                                      id: o,
                                      nextDes: user.idBranch,
                                      status: "RECEIVED",
                                    }
                                  }))
                                    .then(() => {
                                      mutate().then(() => {
                                        let notify = () => toast.info("Thao tác thành công")
                                        notify();
                                      })
                                    }).catch(() => {
                                    let err = () => toast.error("Đã có lỗi xảy ra");
                                    err();
                                  })
                                }
                              }
                            ]}
                            mutate={mutate}/>
  }
  return (
    <section className="flex flex-col">
      <div className="md:flex flex-row border-b-2 border-borderColor4 justify-between">
        <SearchFilter key={""} setKey={() => {
        }}/>
        <Filter dateRange={dateRange} setDateRange={setDateRange}/>
      </div>
      <div className="flex border-b-2 border-borderColor4">
        {tabs.map((item, index) => {
          return <button
            key={index}
            onClick={() => setTab(index)}
            className={`px-2 py-3 text-textColor2 text-sm items-center
            inline-flex ${index == tab && "text-titleColor1 border-b-2 border-titleColor1 font-bold"}`}
          >
            <span className="pr-1">{item.icon}</span>
            <span>{item.title}</span>
          </button>
        })}
      </div>
      {data && createTable()}
      <SendDeliveryModal isOpen={openSendDeliveryModel}
                         closeModal={() => setOpenSendDeliveryModel(false)}
                         user={user}
                         orderSelected={orderSelected}
                         mutate={mutate}
      />
    </section>
  )
}