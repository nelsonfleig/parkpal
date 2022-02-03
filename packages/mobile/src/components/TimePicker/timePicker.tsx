import { Menu, Button } from 'react-native-paper';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useEffect, useState } from 'react';
import styles from './timePickerStyles';
import getAvailableTimes from '../../helpers/availableTimes';

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

  useEffect(() => {
    setAvailableTimes(getAvailableTimes(hours));
  }, [hours]);

  return availableTimes.length ? (
    <View>
      <Menu
        visible={visible}
        onDismiss={closeTimePicker}
        anchor={
          <Button style={styles.button} onPress={openTimePicker} color="black">
            Time
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
