import Order from "@/components/icons/Order";
import Truck from "@/components/icons/Truck";
import WidgetGroup from "@/components/group/WidgetGroup";
import Check from "@/components/icons/Check";
import Dollar from "@/components/icons/Dollar";

export default function Dashboard() {
  const widgetDatas = [
    {icon: <Order color={'blueSecondary'}/>, title: "Tổng số đơn hàng", subtitle: "0"},
    {icon: <Truck color={'blueSecondary'}/>, title: "Đơn hàng đang chuyển", subtitle: "0"},
    {icon: <Check color={'blueSecondary'}/>, title: "Đơn hàng đã chuyển", subtitle: "0"},
    {icon: <Dollar color={'blueSecondary'}/>, title: "Đơn hàng hoàn lại", subtitle: "0"}
  ];

  return (
    <main>
      {/*Card widget */}
      <section className={`pt-4`}>
        <WidgetGroup widgetDatas={widgetDatas}/>
      </section>

      {/*Chart*/}
      <section></section>

      {/*Table*/}
      <section></section>
    </main>
  )
}
