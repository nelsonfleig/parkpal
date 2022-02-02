import { createSlice } from '@reduxjs/toolkit';

export interface MarkerState {
  isParkingCreateMode: boolean;
}

const initialState: MarkerState = {
  isParkingCreateMode: false,
};

export const parkingSpaceSlice = createSlice({
  name: 'parkingSpace',
  initialState,
  reducers: {
    toggleParkingCreateMode: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isParkingCreateMode = !state.isParkingCreateMode;
    },
  },
});

export const { toggleParkingCreateMode } = parkingSpaceSlice.actions;

export default parkingSpaceSlice.reducer;
