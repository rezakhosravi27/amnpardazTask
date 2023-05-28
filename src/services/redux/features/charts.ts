import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { ChartState, chartStateObject } from "./charts.types";

// Define the initial state using that type
const initialState: ChartState = {
  chartData: [],
  layout: [],
};

export const chartsSlice = createSlice({
  name: "chart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    chartDataHandler: (
      state: ChartState,
      action: PayloadAction<chartStateObject>
    ) => {
      state.chartData = [...state.chartData, action.payload];
    },
    layoutHandler: (state: ChartState, action: PayloadAction<any>) => {
      state.layout = action.payload;
    },
    deleteChartHandler: (state: ChartState, action: PayloadAction<any>) => {
      state.chartData = state.chartData.filter(
        (chart) => chart.id !== action.payload
      );
    },
    editChartHandler: (
      state: ChartState,
      action: PayloadAction<chartStateObject>
    ) => {
      const findChart = state.chartData.findIndex(
        (chart) => chart.id == action.payload.id
      );
      state.chartData.splice(findChart, 1, action.payload);
      state.chartData = state.chartData.filter((chart) => chart);
    },
  },
});

export const {
  chartDataHandler,
  deleteChartHandler,
  editChartHandler,
  layoutHandler,
} = chartsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectChartData = (state: RootState) => state.charts.chartData;
export const selectChartLayout = (state: RootState) => state.charts.layout;

export default chartsSlice.reducer;
