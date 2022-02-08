import { Menu, Button } from 'react-native-paper';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './timePickerStyles';
import getAvailableTimes, { Reservation } from '../../helpers/availableTimes';
import { RootState } from '../../redux';

type TimePickerProps = {
  hours: number[];
  selectedTime: string;
  setSelectedTime: React.Dispatch<React.SetStateAction<undefined>>;
};

export const TimePicker = ({ hours, selectedTime, setSelectedTime }: TimePickerProps) => {
  const [visible, setVisible] = useState(false);
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const openTimePicker = () => setVisible(true);
  const closeTimePicker = () => setVisible(false);
  const { currentSpot } = useSelector((state: RootState) => state.parkingSpots);

  useEffect(() => {
    setAvailableTimes(getAvailableTimes(hours, currentSpot?.reservations as Reservation[]));
  }, [hours, currentSpot?.reservations]);

  return availableTimes.length ? (
    <View>
      <Menu
        visible={visible}
        onDismiss={closeTimePicker}
        anchor={
          <Button style={styles.button} onPress={openTimePicker} color="black">
            {selectedTime}
          </Button>
        }
        style={styles.menu}>
        <Picker
          selectedValue={selectedTime}
          onValueChange={(itemValue: any) => setSelectedTime(itemValue)}>
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
