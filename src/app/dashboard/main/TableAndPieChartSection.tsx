import DashboardPieChart from "@/components/charts/DashboardPieChart";
import DashboardTable from "@/components/tables/DashboardTable";

export default function TableAndPieChartSection({user}: {
  user: IUser
}) {
  const pieChartDatas = [10, 10, 10];
  const categories = ["Đang vận chuyển", "Đã hoàn thành", "Đã xác nhận"]
  return (
    <section className="pt-10 md:grid md:grid-cols-3 gap-4">
      <div className="col-span-1">
        <DashboardPieChart chartDatas={pieChartDatas} chartTitle={"Biểu đồ tròn"} categories={categories}/>
      </div>
      <div className="col-span-2 md:pt-0 pt-10 h-full flex">
        <DashboardTable/>
      </div>
    </section>
  )
}