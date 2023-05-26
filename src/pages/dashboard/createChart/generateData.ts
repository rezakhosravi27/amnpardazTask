export const generateData = (data: any) => {
  const axis = [
    ...new Set(
      data.flatMap((obj: any) =>
        Object.entries(obj)
          .filter(([key, value]) => typeof value === "string" && key !== "id")
          .map(([key, value]) => key)
      )
    ),
  ];
  const series = [
    ...new Set(
      data.flatMap((obj: any) =>
        Object.entries(obj)
          .filter(([key, value]) => typeof value === "number" && key !== "id")
          .map(([key, value]) => key)
      )
    ),
  ];

  return { series, axis };
};
