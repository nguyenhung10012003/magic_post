'use client'
import {useAuth} from "@/hook/AuthContext";
import WidgetSection from "@/app/dashboard/main/WidgetSection";
import LineChartSection from "@/app/dashboard/main/LineChartSection";
import TableAndPieChartSection from "@/app/dashboard/main/TableAndPieChartSection";

export default function MainDashboard() {
  const {user} = useAuth();
  return (
    <main>
      <WidgetSection user={user}/>
      <LineChartSection user={user}/>
      <TableAndPieChartSection user={user}/>
    </main>
  )
}