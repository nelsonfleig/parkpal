import { combineReducers, configureStore } from '@reduxjs/toolkit';
import markerReducer from './marker/markerSlice';
import parkingSpotReducer from './parking-spot/parkingSpotSlice';

const rootReducer = combineReducers({
  marker: markerReducer,
  parkingSpots: parkingSpotReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
