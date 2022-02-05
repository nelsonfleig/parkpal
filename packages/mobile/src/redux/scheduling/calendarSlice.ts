import { createSlice } from '@reduxjs/toolkit';
import { DatesObjType } from '../../../types/datesObj';

interface CalandarInterface {
  markedDates: DatesObjType | null;
  disabledDates: DatesObjType | null;
}

const initialState: CalandarInterface = {
  markedDates: null,
  disabledDates: null,
};

export const parkingSpotSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    updateMarkedDates: (state, action) => {
      state.currentSpot = action.payload;
    },
  },
});

export const { changeCurrentSpace } = parkingSpotSlice.actions;

export default parkingSpotSlice.reducer;
