import { createSlice } from '@reduxjs/toolkit';

interface InitialStateInterface {
  content: 'booking' | 'payment' | 'start';
}

const initialState: InitialStateInterface = {
  content: 'booking',
};

export const popupContentSlice = createSlice({
  name: 'parkingSpace',
  initialState,
  reducers: {
    changePopupContent: (state, action) => {
      state.content = action.payload;
    },
  },
});

export const { changePopupContent } = popupContentSlice.actions;

export default popupContentSlice.reducer;
