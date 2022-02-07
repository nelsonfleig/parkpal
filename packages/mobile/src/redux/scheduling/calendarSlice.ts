import { createSlice } from '@reduxjs/toolkit';
import { DatesObjType } from '../../../types/datesObj';

interface CalendarInterface {
  selectedDate: DatesObjType;
  markedDates: DatesObjType;
  disabledDates: DatesObjType;
  selectedTime: string;
  duration: number;
}

const initialState: CalendarInterface = {
  selectedDate: {},
  markedDates: {},
  disabledDates: {},
  selectedTime: '',
  duration: 0,
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
    updateSelectedTime: (state, action) => {
      state.selectedTime = action.payload;
    },
    updateDuration: (state, action) => {
      state.duration = action.payload;
    },
  },
});

export const {
  updateSelectedDate,
  updateDisabledDates,
  updateMarkedDates,
  updateSelectedTime,
  updateDuration,
} = calendarSlice.actions;

export default calendarSlice.reducer;
