import { createSlice } from '@reduxjs/toolkit';
import { ParkingSpotDetailsFragment } from '../../graphql/__generated__';

interface InitialStateInterface {
  currentSpot: ParkingSpotDetailsFragment | null;
  bookingSpot: { lat: number; lng: number } | null;
}

const initialState: InitialStateInterface = {
  currentSpot: null,
  bookingSpot: null,
};

export const parkingSpotSlice = createSlice({
  name: 'parkingSpace',
  initialState,
  reducers: {
    changeCurrentSpace: (state, action) => {
      state.currentSpot = action.payload;
    },
    setBookingSpotRoute: (state, action) => {
      state.bookingSpot = action.payload;
    },
  },
});

export const { changeCurrentSpace, setBookingSpotRoute } = parkingSpotSlice.actions;

export default parkingSpotSlice.reducer;
