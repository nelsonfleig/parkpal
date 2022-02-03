import { Menu, Button } from 'react-native-paper';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useEffect, useState } from 'react';
import styles from './timePickerStyles';
import getAvailableTimes from '../../helpers/availableTimes';

type TimePickerProps = {
  hours: number[];
};

export const TimePicker = ({ hours }: TimePickerProps) => {
  const [visible, setVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();
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
          selectedValue={selectedLanguage}
          onValueChange={(itemValue: any) => setSelectedLanguage(itemValue)}>
          {availableTimes?.map((time) => (
            <Picker.Item label={time} value={time} />
          ))}
        </Picker>
      </Menu>
    </View>
  ) : (
    <Text>No available times</Text>
  );
};

export default TimePicker;
