import { combineReducers, configureStore } from '@reduxjs/toolkit';
import destinationReducer from './destination/destinationSlice';
import parkingSpotReducer from './parkingSpot/parkingSpotSlice';

const rootReducer = combineReducers({
  parkingSpots: parkingSpotReducer,
  destination: destinationReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
