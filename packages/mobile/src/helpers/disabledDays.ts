import dayjs from 'dayjs';
import { DatesObjType } from '../../types/datesObj';

const getDisabledDays = (month: number, year: number, dayIndexes: number[]) => {
  // Get the start and end dates of the month
  let pivot = dayjs().month(month).year(year).startOf('month');
  const end = dayjs().month(month).year(year).endOf('month');
  // Object of disabled dates
  const dates: DatesObjType = {};
  const disabled = { disabled: true, disableTouchEvent: true };
  // While not at the end of the month
  while (pivot.isBefore(end)) {
    const copy = dayjs(pivot);
    dayIndexes.forEach((day) => {
      // Get the date for the days specified in the indexes array
      dates[copy.day(day).format('YYYY-MM-DD')] = disabled;
    });
    pivot = pivot.add(7, 'day');
  }

  return dates;
};

export default getDisabledDays;
