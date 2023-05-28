import { UseFormRegister } from "react-hook-form";
import { InputsTypes } from "./createForm.types";
import { chartStateObject } from "../../../services/redux/features/charts.types";

export type findChartTypes = {
  axis: string;
  chartCategory: string[];
  chartSeries: number[];
  color: string;
  direction: string;
  id: string;
  legend: string;
  legendPosition: string;
  series: string;
  title: string;
  type: string;
};

export type OtherOptionsProps = {
  findChart: chartStateObject | undefined;
  register: UseFormRegister<InputsTypes>;
};
