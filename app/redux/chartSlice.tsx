import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ChartState {
  labels: string[];
  values: number[];
}

const initialState: ChartState = {
  labels: ['Sept 10', 'Sept 25', 'Oct 3', 'Oct 18', 'Nov 10'],
  values: [30, 40, 25, 45, 35],
};

export const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    resetChartData: (state) => {
      state.labels = ['Oct 10', 'Oct 25', 'Nov 3', 'Nov 18', 'Dec 10'];
      state.values = [40, 80, 125, 120, 100];
    },
    updateChartData: (state, action: PayloadAction<number[]>) => {
      // Assuming the payload contains the updated values array
      state.values = action.payload;
    },
  },
});

export const { resetChartData, updateChartData } = chartSlice.actions;

export default chartSlice.reducer;
