'use client';
import dynamic from 'next/dynamic';
// import Chart from 'react-apexcharts';
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const LineChart = (props: any) => {
  const {chartData, chartOptions} = props;

  return (
    <Chart
      options={chartOptions}
      type="line"
      width="100%"
      height="300px"
      series={chartData}
    />
  );
};

export default LineChart;
