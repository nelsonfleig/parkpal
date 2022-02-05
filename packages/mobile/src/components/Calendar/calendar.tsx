import { Menu, Button, useTheme } from 'react-native-paper';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Calendar } from 'react-native-calendars';
import { View } from 'react-native';
import styles from './calendarStyles';
import getDisabledDays from '../../helpers/disabledDays';
import {
  updateMarkedDates,
  updateDisabledDates,
  updateSelectedDate,
} from '../../redux/scheduling/calendarSlice';
import { RootState } from '../../redux';

type CalendarPropTypes = {
  disabledDayIndexes: number[];
};

const CalendarComponent = ({ disabledDayIndexes }: CalendarPropTypes) => {
  const { colors } = useTheme();
  // Get today's date & create initial object for marked dates

  const [visible, setVisible] = useState(false);
  // const [markedDates, setMarkedDates] = useState<DatesObjType>();
  // const [disabledDates, setDisabledDates] = useState<DatesObjType>();
  const dispatch = useDispatch();
  const { selectedDate, disabledDates, markedDates } = useSelector(
    (state: RootState) => state.calendar
  );

  const focusedOptions = { selected: true, selectedColor: colors.primary, disabled: true };

  const openCalendar = () => setVisible(true);
  const closeCalendar = () => setVisible(false);

  // Mark disabled dates for current month

  return (
    <View>
      <Menu
        visible={visible}
        onDismiss={() => {
          closeCalendar();
        }}
        anchor={
          <Button style={styles.button} onPress={openCalendar} color="black">
            Date
          </Button>
        }>
        <Calendar
          markedDates={markedDates}
          // When day is clicked focus that day and keep the disabled dates
          onDayPress={(date) => {
            const newFocusedDay = { [date.dateString]: focusedOptions };
            dispatch(updateSelectedDate(newFocusedDay));
            dispatch(updateMarkedDates({ ...newFocusedDay, ...disabledDates }));
          }}
          enableSwipeMonths
          disableAllTouchEventsForDisabledDays
          style={styles.calendar}
          // When the month changes render the new disabled days
          onMonthChange={(date) => {
            const newDisabled = getDisabledDays(date.month - 1, date.year, disabledDayIndexes);
            dispatch(updateDisabledDates(newDisabled));
            dispatch(updateMarkedDates({ ...selectedDate, ...newDisabled }));
            // setDisabledDates({ ...newDisabled });
            // setMarkedDates();
          }}
          hideExtraDays
        />
      </Menu>
    </View>
  );
};

export default CalendarComponent;
