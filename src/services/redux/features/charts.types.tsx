export interface chartStateObject {
  id: string;
  type: string;
  chartCategory: (string | number)[];
  chartSeries: (string | number)[];
  direction: string;
  axis: string;
  series: string;
  legend: string;
  legendPosition: string;
  title: string;
  color: string;
}

export interface ChartState {
  chartData: chartStateObject[];
}
