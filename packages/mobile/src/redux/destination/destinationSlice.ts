import { createSlice } from '@reduxjs/toolkit';
import { LocationGeocodedLocation } from 'expo-location';

interface InitialStateInterface {
  destination: LocationGeocodedLocation | null;
}

const initialState: InitialStateInterface = {
  destination: null,
};

export const destinationSlice = createSlice({
  name: 'destination',
  initialState,
  reducers: {
    changeDestination: (state, action) => {
      state.destination = action.payload;
    },
  },
});

export const { changeDestination } = destinationSlice.actions;

export default destinationSlice.reducer;
