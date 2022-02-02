import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LatLngExpression } from 'leaflet';

export interface CounterState {
  marker: LatLngExpression;
}

const initialState: CounterState = {
  marker: null,
};

export const markerSlice = createSlice({
  name: 'marker',
  initialState,
  reducers: {
    setMarker: (state, action: PayloadAction<LatLngExpression>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.marker = action.payload;
    },
    clearMarker: (state) => {
      state.marker = null;
    },
  },
});

export const { setMarker, clearMarker } = markerSlice.actions;

export default markerSlice.reducer;
