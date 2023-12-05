import PieChart from "@/components/charts/PieChart";
import {createPieChartOption, getPieChartColor} from "@/utils/chart";
import Card from "@/components/card";
import SelectMenu from "@/components/selectors/SelectMenu";
import {useState} from "react";
import {useTheme} from "next-themes";

export default function DashboardPieChart({chartTitle = "", chartDatas, categories}: {
  chartDatas: any[],
  chartTitle: string,
  categories: string[]
}) {
  const selections = ["Hôm nay", "Tuần này", "Tuần trước", "Tháng này", "Tháng trước"];
  const [selected, setSelected] = useState(0);
  const {theme} = useTheme();
  return (
    <Card extra="!p-6">
      <div className="flex flex-col mx-2 pb-2.5">
        <h2 className="font-bold text-titleColor1 text-lg text-center divide-y-2">{chartTitle}</h2>
        <div className="h-0.5 bg-bgColor1 mt-1"></div>
        <SelectMenu selections={selections} selected={selected} setSelected={setSelected}/>
      </div>
      <div className="lg:h-[250px] md:h-[200px] sm:h-[300px]">
        <PieChart
          chartOptions={createPieChartOption(categories, getPieChartColor(theme))}
          chartData={chartDatas}
        />
      </div>
    </Card>
  )
}