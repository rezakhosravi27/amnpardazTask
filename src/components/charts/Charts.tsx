import React from "react";
import Chart from "react-apexcharts";
import { chartsTypes } from "./charts.types";

export const Charts = ({ series, category, type, direction }: chartsTypes) => {
  const options = {
    chart: {
      id: "basic-bar",
    },
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
      width="700"
    />
  );
};
