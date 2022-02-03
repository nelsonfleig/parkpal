import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mapReducer from './map/mapSlice';
import parkingSpotReducer from './parking-spot/parkingSpotSlice';

const rootReducer = combineReducers({
  map: mapReducer,
  parkingSpots: parkingSpotReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
