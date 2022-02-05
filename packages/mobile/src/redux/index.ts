import { combineReducers, configureStore } from '@reduxjs/toolkit';
import destinationReducer from './destination/destinationSlice';
import parkingSpotReducer from './parkingSpot/parkingSpotSlice';
import showRouteReducer from './showRoute/showRoute';
import popupContentReducer from './popupContent/popupContentSlice';
import showFindSpotButtonReducer from './findSpotButton/findSpotButtonSlice';

const rootReducer = combineReducers({
  parkingSpots: parkingSpotReducer,
  destination: destinationReducer,
  showRoute: showRouteReducer,
  popupContent: popupContentReducer,
  showFindSpotButton: showFindSpotButtonReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
