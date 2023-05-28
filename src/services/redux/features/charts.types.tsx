export interface chartStateObject {
  id: string;
  type: string;
  chartCategory: (string | number)[];
  chartSeries: (string | number)[];
  direction: string;
  axis: string;
  series: string;
}

export interface ChartState {
  chartData: chartStateObject[];
  layout: { x: number; y: number; w: number; h: number; i: string }[];
}
