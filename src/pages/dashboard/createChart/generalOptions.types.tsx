import { chartStateObject } from "../../../services/redux/features/charts.types";
import { UseFormRegister } from "react-hook-form";
import { InputsTypes } from "./createForm.types";

export type GeneralOptionsProps = {
  findChart: chartStateObject | undefined;
  register: UseFormRegister<InputsTypes>;
  errors: any;
};
