import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LatLngExpression } from 'leaflet';

export interface MapState {
  marker: LatLngExpression;
  center: LatLngExpression;
}

const initialState: MapState = {
  marker: null,
  center: null,
};

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setMarker: (state, action: PayloadAction<LatLngExpression>) => {
      state.marker = action.payload;
    },
    clearMarker: (state) => {
      state.marker = null;
    },
    setCenter: (state, action: PayloadAction<LatLngExpression>) => {
      state.center = action.payload;
    },
  },
});

export const { setMarker, clearMarker, setCenter } = mapSlice.actions;

export default mapSlice.reducer;
