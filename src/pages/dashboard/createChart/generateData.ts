import { dataTypes, dataTypesObject } from "../../../data/data.types";

export const generateData = (data: dataTypes) => {
  const axis = [
    ...new Set(
      data.flatMap((obj: dataTypesObject) =>
        Object.entries(obj)
          .filter(([key, value]) => typeof value === "string" && key !== "id")
          .map(([key]) => key)
      )
    ),
  ];
  const series = [
    ...new Set(
      data.flatMap((obj: dataTypesObject) =>
        Object.entries(obj)
          .filter(([key, value]) => typeof value === "number" && key !== "id")
          .map(([key]) => key)
      )
    ),
  ];

  return { series, axis };
};
