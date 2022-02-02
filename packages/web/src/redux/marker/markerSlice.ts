import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LatLngExpression } from 'leaflet';

export interface MarkerState {
  marker: LatLngExpression;
}

const initialState: MarkerState = {
  marker: null,
};

export const markerSlice = createSlice({
  name: 'marker',
  initialState,
  reducers: {
    setMarker: (state, action: PayloadAction<LatLngExpression>) => {
      state.marker = action.payload;
    },
    clearMarker: (state) => {
      state.marker = null;
    },
  },
});

export const { setMarker, clearMarker } = markerSlice.actions;

export default markerSlice.reducer;
