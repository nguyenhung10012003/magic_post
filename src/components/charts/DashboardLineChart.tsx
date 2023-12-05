import Card from "@/components/card";
import {DateRange} from "@/utils/date";
import Datepicker from "react-tailwindcss-datepicker";
import LineChart from "@/components/charts/LineChart";
import {createLineChartOption} from "@/utils/chart";
import {useTheme} from "next-themes";

export default function DashboardLineChart(
  {chartTitle = "", chartDatas, dateRange, setDateRange}: {
    chartTitle: string,
    chartDatas: ILineChartData[],
    dateRange: DateRange,
    setDateRange: any
  }) {
  const {theme} = useTheme();
  return (
    <Card extra={`!p-4`}>
      <div className="flex flex-row justify-between items-center mx-4 pb-2.5">
        <h2 className="font-bold text-titleColor1 text-lg">{chartTitle}</h2>
        <div className="">
          <Datepicker
            containerClassName="flex flex-row w-full bg-bgColor2 rounded-lg focus:ring-0 shadow-md align-middle"
            toggleClassName="text-textColor1 px-3"
            inputClassName="text-textColor1 w-full font-normal pl-4 py-1 bg-transparent flex align-middle z-2 placeholder:text-textColor1"
            value={dateRange}
            onChange={(value) => setDateRange(value)}
            popoverDirection={"down"}
            placeholder={"Khoảng thời gian"}
            showShortcuts={true}
            showFooter={true}
            configs={{
              shortcuts: {
                today: "",
                yesterday: "",
                past: period => `${period} ngày trước`,
                currentMonth: "Tháng này",
                pastMonth: "Tháng trước"
              },
            }}
          />
        </div>
      </div>
      <div>
        <LineChart
          chartData={chartDatas}
          chartOptions={createLineChartOption(theme || 'light')}
        />
      </div>
    </Card>
  )
}