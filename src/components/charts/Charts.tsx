import Chart from "react-apexcharts";
import { ChartsProps } from "./charts.types";

export const Charts = ({ data }: ChartsProps) => {
  const options = {
    theme: {
      mode: "dark",
    },
    title: {
      text: data.title,
      align: "left",
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: "25px",
        fontWeight: "bold",
        fontFamily: undefined,
        color: "#fff",
      },
    },
    noData: {
      text: undefined,
      align: "center",
      verticalAlign: "middle",
      offsetX: 0,
      offsetY: 0,
      style: {
        color: undefined,
        fontSize: "14px",
        fontFamily: undefined,
      },
    },
    colors: [
      data.color,
      "#2E93fA",
      "#66DA26",
      "#546E7A",
      "#E91E63",
      "#6d66d3",
      "#d44646",
    ],
    legend: {
      show: data.legend == "show" ? true : false,
      position: data.legendPosition,
      horizontalAlign: "left",
      fontWeight: "bold",
    },
    labels: data.chartCategory,
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: data.direction == "vertical" ? true : false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: data.chartCategory,
    },
  };

  return (
    <Chart
      options={options}
      series={
        data.type === "bar" || data.type === "line"
          ? [{ data: data.chartSeries }]
          : data.chartSeries
      }
      type={data.type}
      height="100%"
      width="100%"
    />
  );
};
