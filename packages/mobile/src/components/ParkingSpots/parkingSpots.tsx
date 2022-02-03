import { View, Image, Keyboard } from 'react-native';
import { Marker } from 'react-native-maps';
import { useDispatch } from 'react-redux';
import SpotIcon from '../../../assets/images/Spot-icon.png';
import { panelReference } from '../BookingPopup/bookingPopup';
import { GetSpotsQuery } from '../../graphql/__generated__';

import { changeCurrentSpace } from '../../redux/parkingSpot/parkingSpotSlice';

type ParkingSpotsProps = {
  parkingSpots: GetSpotsQuery['spaces'];
};

export const ParkingSpots = ({ parkingSpots }: ParkingSpotsProps) => {
  const dispatch = useDispatch();

  const markers = parkingSpots
    ? parkingSpots.map((spot) => (
        <Marker
          coordinate={{ latitude: spot.lat, longitude: spot.lng }}
          key={spot.id}
          onPress={() => {
            dispatch(changeCurrentSpace(spot));
            Keyboard.dismiss();
            panelReference.current?.show(500);
          }}>
          <Image source={SpotIcon} style={{ width: 50, height: 50 }} />
        </Marker>
      ))
    : null;
  return <View>{markers}</View>;
};
