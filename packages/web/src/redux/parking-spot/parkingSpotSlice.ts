import { createSlice } from '@reduxjs/toolkit';

export interface MarkerState {
  isCreateMode: boolean;
}

const initialState: MarkerState = {
  isCreateMode: false,
};

export const parkingSpotSlice = createSlice({
  name: 'parkingSpace',
  initialState,
  reducers: {
    toggleCreateMode: (state) => {
      state.isCreateMode = !state.isCreateMode;
    },
  },
});

export const { toggleCreateMode } = parkingSpotSlice.actions;

export default parkingSpotSlice.reducer;
