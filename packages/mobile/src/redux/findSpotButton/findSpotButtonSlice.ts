import { createSlice } from '@reduxjs/toolkit';

interface InitialStateInterface {
  showFindButton: boolean;
}

const initialState: InitialStateInterface = {
  showFindButton: true,
};

export const findSpotButtonSlice = createSlice({
  name: 'destination',
  initialState,
  reducers: {
    showFindSpotButton: (state, action) => {
      state.showFindButton = action.payload;
    },
  },
});

export const { showFindSpotButton } = findSpotButtonSlice.actions;

export default findSpotButtonSlice.reducer;
