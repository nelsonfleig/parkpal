import { createSlice } from '@reduxjs/toolkit';
import { DatesObjType } from '../../../types/datesObj';

interface CalendarInterface {
  selectedDate: DatesObjType;
  markedDates: DatesObjType;
  disabledDates: DatesObjType;
}

const initialState: CalendarInterface = {
  selectedDate: {},
  markedDates: {},
  disabledDates: {},
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    updateSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    updateMarkedDates: (state, action) => {
      state.markedDates = action.payload;
    },
    updateDisabledDates: (state, action) => {
      state.disabledDates = action.payload;
    },
  },
});

export const { updateSelectedDate, updateDisabledDates, updateMarkedDates } = calendarSlice.actions;

export default calendarSlice.reducer;
