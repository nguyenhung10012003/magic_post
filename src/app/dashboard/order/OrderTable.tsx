'use client'
import {PencilSquareIcon} from "@heroicons/react/24/solid";
import Table from "@/components/tables/Table";
import Card from "@/components/card";
import {useEffect, useState} from "react";
import EditOrderModal from "@/components/modals/EditOrderModal";


export default function OrderTable({data, addBtn}: {
  data: any[]
  addBtn?: any[],
}) {

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [order, setOrder] = useState<any>();
  const [orderSelected, setOrderSelected] = useState<any[]>([]);
  const [checkAll, setCheckAll] = useState(false);
  useEffect(() => {
    setOrderSelected([]);
    setCheckAll(false);
  }, [data])
  const handleEditModalOpen = (item: any) => {
    setOrder(item);
    setEditModalOpen(true);
  };
  const handleStatusCheckboxChange = (id: number, checked: boolean) => {
    if (checked) {
      setOrderSelected([...orderSelected, id]);
      if (orderSelected.length === data.length - 1) setCheckAll(true);
    } else {
      let temp = [...orderSelected];
      temp.splice(temp.indexOf(id), 1);
      setOrderSelected(temp);
      setCheckAll(false);
    }
  };
  const handleTickAll = (checked: boolean) => {
    if (checked) setOrderSelected(data.map((d) => {
      setCheckAll(true);
      return d.id
    })); else {
      setOrderSelected([]);
      setCheckAll(false);
    }
  }
  const titles = [
    <input key={0} type="checkbox"
           onChange={(e) => handleTickAll(e.target.checked)}
           checked={checkAll}
           className="w-4 h-4"/>,
    <p key={1}>ID</p>,
    <p key={2}>Người gửi</p>,
    <p key={3}>SĐT người gửi</p>,
    <p key={4}>Người nhận</p>,
    <p key={5}>Ngày tạo</p>,
    <p key={6}>Mã vận đơn</p>,
    <p key={7}>Trạng thái</p>,
    <p key={8}>Phí</p>,
    <p key={9}>Khác</p>,
  ];
  const createTableData = (datas: any[]) => {
    return datas
      .map((data, index) => {
        return [
          <input key={0} type="checkbox"
                 onChange={(e) => {
                   handleStatusCheckboxChange(data.id, e.target.checked)
                 }}
                 checked={orderSelected.includes(data.id)}
                 className="w-4 h-4"/>,
          <p key={1} className="text-textColor1 truncate max-w-[150px]">{data.id}</p>,
          <p key={2} className="text-textColor1 truncate max-w-[150px]">{data.senderName}</p>,
          <p key={3} className="text-textColor1 truncate max-w-[150px]">{data.senderPhone}</p>,
          <p key={4} className="text-textColor1 truncate max-w-[150px]">{data.receiverName}</p>,
          <p key={5} className="text-textColor1 truncate max-w-[150px]">{new Date(data.dateCreated).toDateString()}</p>,
          <p key={6} className="text-textColor1 truncate max-w-[150px]">{data.ladingCode}</p>,
          <p key={7} className="text-textColor1 truncate max-w-[150px]">{data.orderStatus}</p>,
          <p key={8} className="text-textColor1 truncate max-w-[150px]">{data.charge.total}</p>,
          <button key={0} onClick={() => handleEditModalOpen(data)}><PencilSquareIcon
            className={"h-6 w-6 text-titleColor1"}/></button>,
        ]
      })
  }
  return (
    <Card extra="!rounded-none mt-3">
      <Table titles={titles} data={createTableData(data)} useFooter={true}/>
      {addBtn && orderSelected.length > 0 && <div className="m-3 flex flex-row-reverse">
        {addBtn.map((btn, index) => {
          return (
            <button key={index} onClick={() => btn.onClick(orderSelected)}
                    className="p-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >{btn.value}</button>
          )
        })}
      </div>}
      {editModalOpen &&
          <EditOrderModal isOpen={editModalOpen} closeModal={() => setEditModalOpen(false)} item={order}/>}
    </Card>
  )
}