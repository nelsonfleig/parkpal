import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LatLngLiteral } from 'leaflet';

export interface MapState {
  marker: LatLngLiteral;
  center: LatLngLiteral;
}

const initialState: MapState = {
  marker: null,
  center: null,
};

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setMarker: (state, action: PayloadAction<LatLngLiteral>) => {
      state.marker = action.payload;
    },
    clearMarker: (state) => {
      state.marker = null;
    },
    setCenter: (state, action: PayloadAction<LatLngLiteral>) => {
      state.center = action.payload;
    },
  },
});

export const { setMarker, clearMarker, setCenter } = mapSlice.actions;

export default mapSlice.reducer;
