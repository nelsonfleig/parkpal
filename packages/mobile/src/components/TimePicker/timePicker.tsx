import { Menu, Button } from 'react-native-paper';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './timePickerStyles';
import getAvailableTimes, { Reservation } from '../../helpers/availableTimes';
import { RootState } from '../../redux';
import { updateSelectedTime } from '../../redux/scheduling/calendarSlice';

type TimePickerProps = {
  hours: number[];
};

export const TimePicker = ({ hours }: TimePickerProps) => {
  const [visible, setVisible] = useState(false);
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const { selectedTime, selectedDate } = useSelector((state: RootState) => state.calendar);
  const dispatch = useDispatch();

  const openTimePicker = () => setVisible(true);
  const closeTimePicker = () => setVisible(false);
  const { currentSpot } = useSelector((state: RootState) => state.parkingSpots);

  useEffect(() => {
    const reservations = currentSpot?.reservations as Reservation[];
    const date = Object.keys(selectedDate)[0];
    setAvailableTimes(getAvailableTimes(hours, reservations, date));
  }, [hours, currentSpot?.reservations, selectedDate]);

  return availableTimes.length ? (
    <View>
      <Menu
        visible={visible}
        onDismiss={closeTimePicker}
        anchor={
          <Button style={styles.button} onPress={openTimePicker} color="black">
            {selectedTime || 'time'}
          </Button>
        }
        style={styles.menu}>
        <Picker
          selectedValue={selectedTime}
          onValueChange={(itemValue: any) => dispatch(updateSelectedTime(itemValue))}>
          {availableTimes?.map((time) => (
            <Picker.Item label={time} value={time} key={time} />
          ))}
        </Picker>
      </Menu>
    </View>
  ) : (
    <Text>No available times</Text>
  );
};

export default TimePicker;
