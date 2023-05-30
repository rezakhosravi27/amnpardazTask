import { db } from "../../../data/data";
import { ChartDataTypes } from "../../DND/DND.types";
import { dataTypesObject } from "../../../data/data.types";

export const generateData = (chartData: ChartDataTypes) => {
  const data = db.map((data: dataTypesObject) => ({
    id: data[chartData.axis as keyof dataTypesObject],
    label: data[chartData.axis as keyof dataTypesObject],
    value: data[chartData.series as keyof dataTypesObject],
  }));

  return { data };
};
