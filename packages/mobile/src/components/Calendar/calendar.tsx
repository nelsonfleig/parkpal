import { Menu, Button, useTheme } from 'react-native-paper';
import { useEffect, useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { View } from 'react-native';
import dayjs from 'dayjs';
import styles from './calendarStyles';
import { DatesObjType } from '../../../types/datesObj';
import getDisabledDays from '../../helpers/disabledDays';

type CalendarPropTypes = {
  disabledDayIndexes: number[];
  initDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
};

const CalendarComponent = ({
  disabledDayIndexes,
  initDate = new Date(),
  setSelectedDate,
}: CalendarPropTypes) => {
  const { colors } = useTheme();
  // Get today's date & create initial object for marked dates
  const now = dayjs(Date.now()).format('YYYY-MM-DD');
  const focusedOptions = { selected: true, selectedColor: colors.primary, disabled: true };
  const today = {
    [now]: focusedOptions,
  };

  const [visible, setVisible] = useState(false);
  const [markedDates, setMarkedDates] = useState<DatesObjType>(today);
  const [disabledDates, setDisabledDates] = useState<DatesObjType>();

  const openCalendar = () => setVisible(true);
  const closeCalendar = () => setVisible(false);
  const setDisabledAndMarked = (dates: DatesObjType) => {
    setDisabledDates(dates);
    setMarkedDates({ ...markedDates, ...dates });
  };

  // Mark disabled dates for current month
  useEffect(() => {
    const dates = getDisabledDays(initDate.getMonth(), initDate.getFullYear(), disabledDayIndexes);
    setDisabledAndMarked(dates);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <Menu
        visible={visible}
        onDismiss={closeCalendar}
        anchor={
          <Button style={styles.button} onPress={openCalendar} color="black">
            Date
          </Button>
        }>
        <Calendar
          markedDates={markedDates}
          // When day is clicked focus that day and keep the disabled dates
          onDayPress={(day) => {
            setMarkedDates({ [day.dateString]: focusedOptions, ...disabledDates });
            setSelectedDate(day.dateString);
          }}
          enableSwipeMonths
          disableAllTouchEventsForDisabledDays
          style={styles.calendar}
          // When the month changes render the new disabled days
          onMonthChange={(date) => {
            const dates = getDisabledDays(date.month - 1, date.year, disabledDayIndexes);
            setDisabledAndMarked(dates);
          }}
          hideExtraDays
        />
      </Menu>
    </View>
  );
};

export default CalendarComponent;
