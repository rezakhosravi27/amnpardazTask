import React from "react";
import Chart from "react-apexcharts";
import { chartsTypes } from "./charts.types";

export const Charts = ({ series, category, type, direction }: chartsTypes) => {
  const options = {
    chart: {
      height: 400,
    },
    colors: ["#E91E63"],
    legend: {
      position: "top",
      horizontalAlign: "left",
      offsetX: -50,
      fontWeight: "bold",
      showForSingleSeries: true,
    },
    labels: category,
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: direction == "vertical" ? true : false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: category,
    },
  };

  return (
    <Chart
      options={options}
      series={type === "bar" || type === "line" ? [{ data: series }] : series}
      type={type}
      width={500}
    />
  );
};
