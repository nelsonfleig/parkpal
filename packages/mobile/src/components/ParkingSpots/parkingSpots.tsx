import { useEffect } from 'react';
import { Image, Keyboard } from 'react-native';
import { Marker } from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';
import SpotIcon from '../../../assets/images/Spot-icon.png';
import { useFindNearParkingSpotsLazyQuery } from '../../graphql/__generated__';
import { RootState } from '../../redux';
import { changeCurrentSpace } from '../../redux/parkingSpot/parkingSpotSlice';
import { panelReference } from '../BookingPopup/bookingPopup';

export const ParkingSpots = () => {
  const dispatch = useDispatch();
  const { destination } = useSelector((state: RootState) => state.destination);
  const [findNearParkingSpots, { data }] = useFindNearParkingSpotsLazyQuery({
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    (async () => {
      if (destination) {
        await findNearParkingSpots({
          variables: {
            input: { lat: destination.latitude, lng: destination.longitude, searchRadius: 1 },
          },
        });
      }
    })();
  }, [destination, findNearParkingSpots]);

  if (!destination || !data) return null;

  return (
    <>
      {data.parkingSpots.map((spot) => (
        <Marker
          coordinate={{ latitude: spot.lat, longitude: spot.lng }}
          key={`${spot.id}`}
          style={{ zIndex: 4 }}
          onPress={() => {
            dispatch(changeCurrentSpace(spot));
            Keyboard.dismiss();
            panelReference.current?.show(500);
          }}>
          <Image source={SpotIcon} style={{ width: 50, height: 50 }} />
        </Marker>
      ))}
    </>
  );
};
