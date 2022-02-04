import { View, Text } from 'react-native';
import { Surface, Menu, Button } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react';

import styles from './bookingTileStyles';
import { CustomButton } from '../Forms/button';
import formatBookingDates from '../../helpers/formatBookingDates';

type BookingTyleProps = {
  street: string;
  start: string;
  end: string;
};

export const BookingTile = ({ street, start, end }: BookingTyleProps) => {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const { startTime, endTime, date } = formatBookingDates(start, end);

  return (
    <View>
      <Surface style={styles.tile}>
        <Text style={styles.address}>{street}</Text>
        <View style={styles.info}>
          <Text style={styles.time}>{date}</Text>
          <Text style={styles.time}>{`${startTime} - ${endTime}`}</Text>
        </View>
        <CustomButton press={() => {}} type="booking" color="#fff" mode="outlined">
          View Route
        </CustomButton>
        <View style={styles.edit}>
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <Button onPress={openMenu}>
                <MaterialCommunityIcons name="dots-horizontal" color="#fff" size={30} />
              </Button>
            }>
            <Menu.Item title="Report" />
            <Menu.Item title="Cancel" titleStyle={styles.menuItem} />
          </Menu>
        </View>
      </Surface>
    </View>
  );
};
