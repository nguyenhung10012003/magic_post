'use client'
import TableFilter from "@/app/dashboard/order/TableFilter";
import {useState} from "react";
import OrderTable from "@/app/dashboard/order/OrderTable";
import CreateOrderModal from "@/components/modals/CreateOrderModal";
import {DateRange} from "@/utils/date";
import {
  ArrowRightIcon,
  ClipboardDocumentCheckIcon,
  ClipboardDocumentListIcon,
  HomeIcon
} from "@heroicons/react/24/solid";
import api from "@/config/api";
import useSWR from "swr";
import {useAuth} from "@/hook/AuthContext";
import {toast} from "react-toastify";
import SearchFilter from "@/components/filters/SearchFilter";
import {handleExportData} from "@/utils/export";

const fetcher = (url: string) => api.get(url).then(res => res.data).then(data => data.data);

export default function Order() {
  const {user} = useAuth();
  const [dateRange, setDateRange] = useState<DateRange | null>(null);
  const statusSelections = ["Tất cả", "Đã xác nhận", "Đang vận chuyển", "Đã vận chuyển", "Hoàn thành", "Chuyển hoàn"];
  const [statusSelected, setStatusSelected] = useState(Array(statusSelections.length).fill(true));
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const {
    data,
    isLoading,
    error,
    mutate
  } = useSWR(`/order/statistic/transaction/${user.idBranch}?from=2010-01-01&to=2025-12-12`, fetcher);
  const tableTab = [
    {icon: <HomeIcon className="h-4 w-4"/>, title: "Tất cả"},
    {icon: <ClipboardDocumentCheckIcon className="h-4 w-4"/>, title: "Đã xác nhận"},
    {icon: <ArrowRightIcon className="h-4 w-4"/>, title: "Đang tới"},
    {icon: <ClipboardDocumentListIcon className="h-4 w-4"/>, title: "Đơn nhận"}
  ];
  const [tab, setTab] = useState(0);
  const filter = (data: any[], statusFilter: string[] = ["ALL", "CONFIRMED", "SHIPPING", "RECEIVED", "SUCCESSFUL", "RETURN"]) => {
    statusFilter = statusFilter.filter((item, index) => {
      return statusSelected[index];
    });
    return data.filter((d: any) => {
      let res = true;
      if (dateRange && dateRange.endDate && dateRange.startDate) {
        res = (d.dateCreated <= new Date(dateRange.endDate).getTime()
          && d.dateCreated >= new Date(dateRange.startDate).getTime());
      }
      return statusFilter.includes(d.orderStatus) && res;
    })
  }
  const createTable = (tab: number) => {
    if (tab === 3) return (
      <OrderTable data={filter(data.ordersReceive, ["", "", "", "RECEIVED"])}
                  addBtn={[
                    {
                      value: "Đã giao hàng",
                      onClick: (ordersSelected: any[]) => {
                        api.put(`/order`, ordersSelected.map((o, index) => {
                          return {id: o, status: 'SUCCESSFUL'}
                        }))
                          .then(() => {
                            mutate().then(() => {
                              const notify = () => toast.info("Thao tác thành công")
                              notify();
                            })
                          }).catch(() => {
                          const notify = () => toast.error("Đã có lỗi xảy ra")
                          notify();
                        })
                      }
                    },
                    {
                      value: "Hàng bị hoàn lại",
                      onClick: (ordersSelected: any[]) => {
                        api.put(`/order`, ordersSelected.map((o, index) => {
                          return {id: o, status: 'RETURN'}
                        }))
                          .then(() => {
                            mutate().then(() => {
                              const notify = () => toast.info("Thao tác thành công")
                              notify();
                            })
                          }).catch(() => {
                          const notify = () => toast.error("Đã có lỗi xảy ra")
                          notify();
                        })
                      }
                    }
                  ]}
      />
    )
    else if (tab === 2) return (
      <OrderTable data={filter(data.ordersReceive, ["", "", "SHIPPING"])}
                  addBtn={[{
                    value: "Đã nhận hàng",
                    onClick: (ordersSelected: any[]) => {
                      api.post(`/order/receive/${user.idBranch}`, ordersSelected).then(() => {
                        const notify = () => toast.info("Thao tác thành công")
                        notify();
                        mutate();
                      }).catch(() => {
                        const notify = () => toast.error("Đã có lỗi xảy ra")
                        notify();
                      })
                    }
                  }]}
      />)
    else if (tab === 1) return (
      <OrderTable data={filter(data.ordersSend, ["", "CONFIRMED"])}
                  addBtn={[{
                    value: "Xác nhận chuyển đi",
                    onClick: (ordersSelected: any[]) => {
                      api.post(`/order/send/${user.idBranch}`, ordersSelected).then(() => {
                        const notify = () => toast.info("Thao tác thành công")
                        notify();
                        mutate();
                      }).catch(() => {
                        const notify = () => toast.error("Đã có lỗi xảy ra")
                        notify();
                      })
                    }
                  }]}
      />)
    else return <OrderTable data={filter(data.ordersSend.concat(data.ordersReceive))}/>
  }

  const handleCreateModelOpen = () => {
    setCreateModalOpen(true);
  }
  return (
    <section className="flex flex-col">
      {/* Table header */}
      <div className="flex flex-row-reverse gap-3 border-b-2 pb-2 border-borderColor4">
        <button type="button"
                className="focus:outline-none text-white bg-green-700 border-2
                hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-bold
                rounded-lg px-4 py-2 dark:hover:bg-green-600 dark:focus:ring-green-700"
                onClick={handleCreateModelOpen}
        >
          <span className="text-xl">&#43;</span> Đơn hàng mới
        </button>
        <button
          onClick={() => handleExportData(data.ordersSend.concat(data.ordersReceive))}
          className="bg-white dark:bg-navy-500 border-borderColor4 border-2 dark:hover:bg-navy-400
          hover:bg-bgColor4 text-textColor1 font-bold py-2 px-4 rounded-lg inline-flex items-center">
          <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
          </svg>
          <span>Xuất</span>
        </button>
      </div>
      <div className="md:flex flex-row border-b-2 border-borderColor4 justify-between">
        {/*Search bar*/}
        <SearchFilter key={""} setKey={() => {
        }}/>
        {/*Group filters*/}
        <TableFilter dateRange={dateRange} setDateRange={setDateRange} statusSelections={statusSelections}
                     statusSelected={statusSelected} setStatusSelected={setStatusSelected}
        />
      </div>
      <div className="flex border-b-2 border-borderColor4">
        {tableTab.map((item, index) => {
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

      {/* Table body */}
      {!isLoading && createTable(tab)}
      {createModalOpen &&
          <CreateOrderModal isOpen={createModalOpen} closeModal={() => setCreateModalOpen(false)}
                            user={user} mutate={mutate}
          />}
    </section>
  )
}