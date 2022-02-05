import { useDispatch } from 'react-redux';
import { LocationObject } from 'expo-location';
import { CustomButton } from '../Forms/button';
import { changeDestination } from '../../redux/destination/destinationSlice';
import { mapRef } from '../MapView/mapView';

type FindSpotsHereProps = {
  location: LocationObject | null;
  findButton: boolean;
  setFindButton: React.Dispatch<React.SetStateAction<boolean>>;
};

export const FindSpotsHere = ({ location, findButton, setFindButton }: FindSpotsHereProps) => {
  const dispatch = useDispatch();
  return findButton ? (
    <CustomButton
      press={() => {
        setFindButton(false);
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
      type="main"
      color="white">
      Find here
    </CustomButton>
  ) : (
    <CustomButton
      press={() => {
        setFindButton(true);
        dispatch(changeDestination(null));
      }}
      type="main"
      color="white">
      Remove
    </CustomButton>
  );
};
