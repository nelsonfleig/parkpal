import { Image, Keyboard, View } from 'react-native';
import { Marker } from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';
import SpotIcon from '../../../assets/images/Spot-icon.png';
import { useGetSpotsQuery } from '../../graphql/__generated__';
import { getDistKm } from '../../helpers/linearDistance';
import { RootState } from '../../redux';
import { changeCurrentSpace } from '../../redux/parkingSpot/parkingSpotSlice';
import { panelReference } from '../BookingPopup/bookingPopup';

export const ParkingSpots = () => {
  const { data } = useGetSpotsQuery();
  const dispatch = useDispatch();
  const { destination } = useSelector((state: RootState) => state.destination);

  if (!destination) return null;
  return (
    <View>
      {destination &&
        data &&
        data.spaces
          .filter(
            (spot) =>
              getDistKm(destination.latitude, destination.longitude, spot.lat, spot.lng) < 0.3
          )
          .map((spot) => (
            <Marker
              coordinate={{ latitude: spot.lat, longitude: spot.lng }}
              key={spot.id}
              style={{ zIndex: 4 }}
              onPress={() => {
                dispatch(changeCurrentSpace(spot));
                Keyboard.dismiss();
                panelReference.current?.show(500);
              }}>
              <Image source={SpotIcon} style={{ width: 50, height: 50 }} />
            </Marker>
          ))}
    </View>
  );
};
