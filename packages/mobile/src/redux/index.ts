import { combineReducers, configureStore } from '@reduxjs/toolkit';
import parkingSpotReducer from './parkingSpot/parkingSpotSlice';

const rootReducer = combineReducers({
  parkingSpots: parkingSpotReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
