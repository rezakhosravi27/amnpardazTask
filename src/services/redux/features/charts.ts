import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface ChartState {
  chartData: {
    id:string; 
    type: string;
    chartCategory: [];
    chartSeries: [];
    direction: string;
  }[];
}

// Define the initial state using that type
const initialState: ChartState = {
  chartData: [],
};

export const chartsSlice = createSlice({
  name: "chart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    chartDataHandler: (
      state,
      action: PayloadAction<{
        id: string; 
        type: string;
        chartCategory: [];
        chartSeries: [];
        direction: string;
      }>
    ) => {
      state.chartData = [...state.chartData, action.payload];
    },
  },
});

export const { chartDataHandler } = chartsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectChartData = (state: RootState) => state.charts.chartData;

export default chartsSlice.reducer;
