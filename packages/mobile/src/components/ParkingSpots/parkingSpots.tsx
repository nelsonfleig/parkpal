import { View, Image, Keyboard } from 'react-native';
import { Marker } from 'react-native-maps';
import SpotIcon from '../../../assets/images/Spot-icon.png';
import { panelReference } from '../BookingPopup/bookingPopup';
import { GetSpotsQuery } from '../../graphql/__generated__';

type ParkingSpotsProps = {
  parkingSpots: GetSpotsQuery['spaces'];
};

export const ParkingSpots = ({ parkingSpots }: ParkingSpotsProps) => {
  const markers = parkingSpots
    ? parkingSpots.map((spot) => (
        <Marker
          coordinate={{ latitude: spot.lat, longitude: spot.lng }}
          key={spot.id}
          onPress={() => {
            Keyboard.dismiss();
            panelReference.current?.show(500);
          }}>
          <Image source={SpotIcon} style={{ width: 50, height: 50 }} />
        </Marker>
      ))
    : null;
  return <View>{markers}</View>;
};
