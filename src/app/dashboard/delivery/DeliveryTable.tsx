import Table from "@/components/tables/Table";
import Card from "@/components/card";
import {useState} from "react";
import ChooseLastDesModal from "@/components/modals/ChooseLastDesModal";

export default function DeliveryTable({data, orderSelected, setOrderSelected, checkAll, setCheckAll, addBtn, mutate}: {
  data: any[],
  orderSelected: any[],
  setOrderSelected: any,
  checkAll: boolean,
  setCheckAll: any,
  addBtn?: any[],
  mutate: any
}) {
  const [openChooseLastDes, setOpenChooseLastDes] = useState(false);
  const [delivery, setDelivery] = useState();
  const handleChooseLastDes = (d: any) => {
    setDelivery(d);
    setOpenChooseLastDes(true)
  }
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
    <p key={2}>Ngày tạo</p>,
    <p key={3}>Mã vận đơn</p>,
    <p key={4}>Điểm tập kết cuối</p>,
  ]
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
          <p key={2} className="text-textColor1 truncate max-w-[150px]">{new Date(data.dateCreated).toDateString()}</p>,
          <p key={3} className="text-textColor1 truncate max-w-[150px]">{data.order.ladingCode}</p>,
          data.lastDes ? <p key={4} className="text-textColor1 truncate max-w-[150px]">{data.lastDes.name}</p> :
            <button className="text-textColor1 truncate max-w-[150px] hover:underline hover:text-titleColor1"
                    onClick={() => handleChooseLastDes(data.id)}>
              Chưa thiết lập
            </button>,
        ]
      })
  }
  return <Card extra="!rounded-none mt-3">
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
    <div>{delivery &&
        <ChooseLastDesModal isOpen={openChooseLastDes} closeModal={() => setOpenChooseLastDes(false)}
                            delivery={delivery} mutate={mutate}/>}</div>
  </Card>
}