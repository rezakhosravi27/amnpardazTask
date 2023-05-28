import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface ChartState {
  chartData: {
    id: string;
    type: string;
    chartCategory: [];
    chartSeries: [];
    direction: string;
    axis: string;
    series: string;
  }[];
  layout: any;
}

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
      state,
      action: PayloadAction<{
        id: string;
        type: string;
        chartCategory: [];
        chartSeries: [];
        direction: string;
        axis: string;
        series: string;
      }>
    ) => {
      state.chartData = [...state.chartData, action.payload];
    },
    layoutHandler: (state, action: PayloadAction<any>) => {
      state.layout = action.payload;
    },
    deleteChartHandler: (state, action: PayloadAction<any>) => {
      state.chartData = state.chartData.filter(
        (chart) => chart.id !== action.payload
      );
    },
    editChartHandler: (
      state,
      action: PayloadAction<{
        id: string;
        type: string;
        chartCategory: [];
        chartSeries: [];
        direction: string;
        axis: string;
        series: string;
      }>
    ) => {
      const findChart = state.chartData.findIndex(
        (chart) => chart.id == action.payload.id
      );
      const updateChart = state.chartData.splice(findChart, 1, action.payload);
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

export default chartsSlice.reducer;
