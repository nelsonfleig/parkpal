import { View, Image } from 'react-native';
import { Marker } from 'react-native-maps';
import { ParkingSpotType } from '../../mockParkings';
import SpotIcon from '../../../assets/images/Spot-icon.png';

type ParkingSpotsProps = {
  parkingSpots: ParkingSpotType[] | null;
};

export const ParkingSpots = ({ parkingSpots }: ParkingSpotsProps) => {
  const markers =
    parkingSpots &&
    parkingSpots.map((spot) => (
      <Marker coordinate={{ latitude: spot.latitude, longitude: spot.longitude }} key={spot.id}>
        <Image source={SpotIcon} style={{ width: 50, height: 50 }} />
      </Marker>
    ));
  return <View>{markers}</View>;
};
