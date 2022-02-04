import { addDays, format, subDays } from 'date-fns';
import { SeriesDataItem } from '../graphql/__generated__';

/**
 * Takes in a timeseries and completes missing dates and sets its value to zero
 *
 * @param timeseries: SeriesDataItem[]
 */
export function enhanceTimeSeries(timeseries: SeriesDataItem[]) {
  const today = new Date();
  const startDate = subDays(today, 6);

  let currentDate = startDate;
  const daysFormatted = [];
  while (currentDate.getDay() !== today.getDay()) {
    daysFormatted.push(format(currentDate, 'yyyy-MM-dd'));
    currentDate = addDays(currentDate, 1);
  }
  daysFormatted.push(format(today, 'yyyy-MM-dd'));

  const out = daysFormatted.map((date) => {
    const existingDate = timeseries.find((item) => item.date === date);
    if (!existingDate) {
      return {
        date,
        sum: 0,
      };
    }
    return existingDate;
  });

  return out;
}
