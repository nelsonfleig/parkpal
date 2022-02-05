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
import { changeCurrentSpace, setBookingSpotRoute } from '../../redux/parkingSpot/parkingSpotSlice';
import { changePopupContent } from '../../redux/popupContent/popupContentSlice';
import { panelReference } from '../BookingPopup/bookingPopup';
import { changeDestination } from '../../redux/destination/destinationSlice';

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
            // We remove the cache of the destinations to not overlap data
            dispatch(changeDestination(null));
            // We remove the cache just in case a current spot has been selected
            dispatch(changeCurrentSpace(null));
            // We allow to display the route
            dispatch(displayRoute(true));
            // We set the destination of the route to our booking spot
            dispatch(setBookingSpotRoute({ lat: coordinates.lat, lng: coordinates.lng }));
            // Now we are displaying the route but we want to let the user choose if
            // he/she wants to start the navigation with Google Maps.
            // So, we display the popup panel with the needed content
            panelReference.current.show(500);
            dispatch(changePopupContent('start'));
            // And we go the the landing page where all the previous will be displayed
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
