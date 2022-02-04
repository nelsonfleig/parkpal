import { createSlice } from '@reduxjs/toolkit';

interface InitialStateInterface {
  showRoute: boolean;
}

const initialState: InitialStateInterface = {
  showRoute: false,
};

export const showRouteSlice = createSlice({
  name: 'showRoute',
  initialState,
  reducers: {
    displayRoute: (state, action) => {
      state.showRoute = action.payload;
    },
  },
});

export const { displayRoute } = showRouteSlice.actions;

export default showRouteSlice.reducer;
