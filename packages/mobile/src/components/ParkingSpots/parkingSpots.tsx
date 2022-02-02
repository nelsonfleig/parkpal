import { View, Image } from 'react-native';
import { Marker } from 'react-native-maps';
import { ParkingSpotType } from '../../mockParkings';
import SpotIcon from '../../../assets/images/Spot-icon.png';
import { panelReference } from '../BookingPopup/bookingPopup';

type ParkingSpotsProps = {
  parkingSpots: ParkingSpotType[] | null;
};

export const ParkingSpots = ({ parkingSpots }: ParkingSpotsProps) => {
  const markers = parkingSpots
    ? parkingSpots.map((spot) => (
        <Marker
          coordinate={{ latitude: spot.latitude, longitude: spot.longitude }}
          key={spot.id}
          onPress={() => panelReference.current?.show(475)}>
          <Image source={SpotIcon} style={{ width: 50, height: 50 }} />
        </Marker>
      ))
    : null;
  return <View>{markers}</View>;
};
