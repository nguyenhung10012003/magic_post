import {useState} from "react";
import DashboardLineChart from "@/components/charts/DashboardLineChart";
import api from "@/config/api";
import {DateRange, getTimeDaysArray, subDays} from "@/utils/date";
import {createLineChartData} from "@/utils/chart";

const fetcher = (url: string) => api.get(url).then(res => res.data);

export default function LineChartSection({user}: { user: IUser }) {
  const [dateRange, setDateRange] = useState<DateRange>(
    {startDate: subDays(new Date(), 6), endDate: new Date()}
  );
  const lineChartDatas: ILineChartData[] = [
    {
      name: "Tổng",
      color: "#4251f5",
      data: createLineChartData(getTimeDaysArray(dateRange), [])
    },
    {
      name: "Đang chuyển",
      color: "#f4a206",
      data: createLineChartData(getTimeDaysArray(dateRange), [])
    },
  ];

  return (
    <section className={`mt-8`}>
      <DashboardLineChart chartTitle={"Biểu đồ đường"}
                          chartDatas={lineChartDatas}
                          dateRange={dateRange}
                          setDateRange={setDateRange}
      />
    </section>
  )
}