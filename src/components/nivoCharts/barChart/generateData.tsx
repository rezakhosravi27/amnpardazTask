import { db } from "../../../data/data";
import { ChartDataTypes } from "../../DND/DND.types";
import { dataTypesObject } from "../../../data/data.types";

export const generateData = (chartData: ChartDataTypes) => {
  const data = db.map((data: dataTypesObject) => ({
    [chartData.series]: data[chartData.series as keyof dataTypesObject],
    [chartData.axis]: data[chartData.axis as keyof dataTypesObject],
  }));

  const keys = Object.keys(data[0]).filter((item) => item !== chartData.axis);

  const indexBy = chartData.axis;

  return { data, keys, indexBy };
};
