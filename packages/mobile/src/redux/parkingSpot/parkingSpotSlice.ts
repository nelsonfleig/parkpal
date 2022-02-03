import { createSlice } from '@reduxjs/toolkit';
import { ParkingSpotDetailsFragment } from '../../graphql/__generated__';

interface InitialStateInterface {
  currentSpot: ParkingSpotDetailsFragment | null;
}

const initialState: InitialStateInterface = {
  currentSpot: null,
};

export const parkingSpotSlice = createSlice({
  name: 'parkingSpace',
  initialState,
  reducers: {
    changeCurrentSpace: (state, action) => {
      state.currentSpot = action.payload;
    },
  },
});

export const { changeCurrentSpace } = parkingSpotSlice.actions;

export default parkingSpotSlice.reducer;
