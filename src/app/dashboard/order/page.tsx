'use client'
import TableFilter from "@/app/dashboard/order/TableFilter";
import {useState} from "react";
import OrderTable from "@/app/dashboard/order/OrderTable";
import CreateOrderModal from "@/components/modals/CreateOrderModal";
import {DateRange} from "@/utils/date";
import {utils, writeFile} from 'xlsx';
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
    {icon: <HomeIcon className="h-4 w-4"/>, title: "Đơn hàng"},
    {icon: <ClipboardDocumentCheckIcon className="h-4 w-4"/>, title: "Đã xác nhận"},
    {icon: <ArrowRightIcon className="h-4 w-4"/>, title: "Đang tới"},
    {icon: <ClipboardDocumentListIcon className="h-4 w-4"/>, title: "Đơn nhận"}
  ];
  const [tab, setTab] = useState(0);
  const filter = (data: any[], statusFilter: string[] = ["ALL", "CONFIRMED", "SHIPPING", "RECEIVED", "SUCCESSFUL", "RETURN"]) => {
    statusFilter.filter((item, index) => {
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
                      value: "Đã chuyển hàng",
                      onClick: (ordersSelected: any[]) => {
                        console.log(ordersSelected)
                        api.post(`/order/receive/${user.idBranch}`, ordersSelected).then(() => {
                          const notify = () => toast.info("Thao tác thành công")
                          notify();
                          mutate();
                        }).catch(() => {
                          const notify = () => toast.error("Đã có lỗi xảy ra")
                          notify();
                        })
                      }
                    },
                    {
                      value: "Hàng bị hoàn lại",
                      onClick: (ordersSelected: any[]) => {
                        console.log(ordersSelected)
                        api.post(`/order/return/${user.idBranch}`, ordersSelected).then(() => {
                          const notify = () => toast.info("Thao tác thành công")
                          notify();
                          mutate();
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
                      console.log(ordersSelected)
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
                      console.log(ordersSelected)
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
    else return <OrderTable data={filter(data.ordersSend)}/>
  }

  const handleCreateModelOpen = () => {
    setCreateModalOpen(true);
  }
  const handleExportData = () => {
    let wb = utils.book_new();
    let ws = utils.json_to_sheet(data.ordersSend);
    utils.book_append_sheet(wb, ws, "Sheet1");
    writeFile(wb, "report.xlsx")
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
          onClick={handleExportData}
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
        <div className="relative flex my-3">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-horizonTeal-500" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input type="search" id="default-search"
                 className="block w-full focus-visible:outline-0 ps-10 p-2 rounded-lg text-sm
                 bg-primary border-borderColor4 border-2 text-textColor1"
                 placeholder="Tìm kiếm nhanh"/>
        </div>
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