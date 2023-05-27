export type InputsTypes = {
  type: string;
  axis: string;
  series: string;
  direction: string;
  title: string;
  color: string;
  legend: string;
  legendPosition: string;
};

export type chartDataTypes = {
  id: string;
  type: string;
  chartSeries: [];
  chartCategory: [];
  direction: string;
  color: string;
  legend: string;
  legendPosition: string;
  title: string;
  series: string;
  axis: string;
};

export type onSubmitTypes = {
  type: string;
  series: string;
  axis: string;
  direction: string;
  color: string;
  legend: string;
  legendPosition: string;
  title: string;
};
