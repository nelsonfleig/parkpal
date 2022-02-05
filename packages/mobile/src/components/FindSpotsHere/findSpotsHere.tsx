import { useDispatch, useSelector } from 'react-redux';
import { LocationObject } from 'expo-location';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { CustomButton } from '../Forms/button';
import { changeDestination } from '../../redux/destination/destinationSlice';
import { mapRef } from '../MapView/mapView';
import { RootState } from '../../redux';
import { showFindSpotButton } from '../../redux/findSpotButton/findSpotButtonSlice';

type FindSpotsHereProps = {
  location: LocationObject | null;
};

export const FindSpotsHere = ({ location }: FindSpotsHereProps) => {
  const { showFindButton } = useSelector((state: RootState) => state.showFindSpotButton);

  const dispatch = useDispatch();
  return showFindButton ? (
    <CustomButton
      press={() => {
        dispatch(showFindSpotButton(false));
        if (location) {
          dispatch(changeDestination(null));
          mapRef.current?.animateCamera(
            {
              center: {
                latitude: location?.coords.latitude, // We select the first object of the array
                longitude: location?.coords.longitude,
              },
              heading: 0,
              zoom: 16,
              pitch: 0,
              altitude: 0,
            },
            { duration: 500 }
          );
          dispatch(
            changeDestination({
              latitude: location?.coords.latitude,
              longitude: location?.coords.longitude,
            })
          );
        }
      }}
      type="findhere"
      color="#0A2540">
      <MaterialCommunityIcons name="map-marker-radius" size={24} color="white" />
    </CustomButton>
  ) : (
    <CustomButton
      press={() => {
        dispatch(showFindSpotButton(true));
        dispatch(changeDestination(null));
      }}
      type="discard"
      color="white">
      <Entypo name="cross" size={24} color="#0A2540" />
    </CustomButton>
  );
};
