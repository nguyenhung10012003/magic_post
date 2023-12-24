import Card from "@/components/card";
import {DateRange, subDays} from "@/utils/date";
import Datepicker from "react-tailwindcss-datepicker";
import LineChart from "@/components/charts/LineChart";
import {createLineChartOption} from "@/utils/chart";
import {useTheme} from "next-themes";

export default function DashboardLineChart(
  {chartTitle = "", chartDatas, dateRange, setDateRange, isLoading}: {
    chartTitle: string,
    chartDatas?: ILineChartData[],
    dateRange: DateRange,
    setDateRange: any,
    isLoading: boolean
  }) {
  const {theme} = useTheme();
  return (
    <Card extra={`!p-4`}>
      <div className="flex flex-row justify-between items-center mx-4 pb-2.5">
        <h2 className="font-bold text-titleColor1 text-lg">{chartTitle}</h2>
        <div className="">
          <Datepicker
            containerClassName="relative w-full bg-bgColor2 rounded-lg focus:ring-0 shadow-md align-middle"
            toggleClassName="text-textColor1 px-3 absolute right-0 top-1/2 -translate-y-1/2"
            inputClassName="h-full text-textColor1 w-full font-normal pl-4 pr-8 py-1 bg-transparent align-middle z-2 placeholder:text-textColor1"
            value={dateRange}
            onChange={(value) => setDateRange(value)}
            popoverDirection={"down"}
            placeholder={"Khoảng thời gian"}
            showShortcuts={true}
            showFooter={true}
            minDate={subDays(new Date(), 365)}
            maxDate={new Date()}
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
      <div className={"h-[315px] flex flex-col justify-center"}>
        {isLoading ?
          <div
            className="border-gray-300 h-10 w-10 animate-spin rounded-full border-8 border-t-blue-600 mx-auto"/> :
          <LineChart
            chartData={chartDatas}
            chartOptions={createLineChartOption(theme || 'light')}
          />
        }
      </div>
    </Card>
  )
}