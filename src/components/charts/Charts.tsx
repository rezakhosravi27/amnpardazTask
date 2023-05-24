import React from "react";
import Chart from "react-apexcharts";
import { chartsTypes } from "./charts.types";

export const Charts = ({ data }: any) => {
  const options = {
    chart: {
      height: 400,
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
      show: data.legend,
      position: data.legendPosition,
      horizontalAlign: "left",
      offsetX: -50,
      fontWeight: "bold",
      showForSingleSeries: true,
    },
    labels: data.category,
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
      categories: data.category,
    },
  };

  return (
    <Chart
      options={options}
      series={
        data.type === "bar" || data.type === "line"
          ? [{ data: data.series }]
          : data.series
      }
      type={data.type}
      width={500}
    />
  );
};
