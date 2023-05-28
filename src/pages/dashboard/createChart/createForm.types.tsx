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
  chartSeries: (string | number)[];
  chartCategory: (string | number)[];
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

export type objectTypes = {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  date: string;
};
