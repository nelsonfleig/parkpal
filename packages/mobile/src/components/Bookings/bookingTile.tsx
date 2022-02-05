import { View, Text } from 'react-native';
import { Surface, Menu, Button } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import styles from './bookingTileStyles';
import { CustomButton } from '../Forms/button';
import formatBookingDates from '../../helpers/formatBookingDates';
import { displayRoute } from '../../redux/showRoute/showRoute';
import { HomeStackParams } from '../../../types/appStack';
import { setBookingSpotRoute } from '../../redux/parkingSpot/parkingSpotSlice';

type BookingTyleProps = {
  street: string;
  start: string;
  end: string;
  coordinates: { lat: number; lng: number };
  navigation: BottomTabNavigationProp<HomeStackParams, keyof HomeStackParams>;
};

export const BookingTile = ({ street, start, end, navigation, coordinates }: BookingTyleProps) => {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const { startTime, endTime, date } = formatBookingDates(start, end);
  const dispatch = useDispatch();
  return (
    <View>
      <Surface style={styles.tile}>
        <Text style={styles.address}>{street}</Text>
        <View style={styles.info}>
          <Text style={styles.time}>{date}</Text>
          <Text style={styles.time}>{`${startTime} - ${endTime}`}</Text>
        </View>
        <CustomButton
          press={() => {
            dispatch(displayRoute(true));
            dispatch(setBookingSpotRoute({ lat: coordinates.lat, lng: coordinates.lng }));
            navigation.navigate('Landing');
          }}
          type="booking"
          color="#fff"
          mode="outlined">
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
