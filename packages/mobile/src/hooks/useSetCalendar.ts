import dayjs from 'dayjs';
import { useTheme } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { ParkingSpotDetailsFragment } from '../graphql/__generated__';
import getDisabledDays from '../helpers/disabledDays';

import {
  updateDisabledDates,
  updateSelectedDate,
  updateMarkedDates,
} from '../redux/scheduling/calendarSlice';

export const useSetCalendar = () => {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const now = dayjs(Date.now()).add(2, 'day').format('YYYY-MM-DD');
  const focusedOptions = { selected: true, selectedColor: colors.primary, disabled: true };
  const today = {
    [now]: focusedOptions,
  };
  const initialDate = new Date();

  return (spot: ParkingSpotDetailsFragment) => {
    const initialDisabledDates = getDisabledDays(
      initialDate.getMonth(),
      initialDate.getFullYear(),
      spot.daysAvailable
    );

    dispatch(updateSelectedDate(today));
    dispatch(updateDisabledDates(initialDisabledDates));
    dispatch(updateMarkedDates({ ...today, ...initialDisabledDates }));
  };
};
