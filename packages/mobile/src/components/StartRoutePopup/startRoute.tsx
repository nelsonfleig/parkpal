import React from 'react';
import { Linking } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { CustomButton } from '../Forms/button';

export const StartRoute = () => {
  const { currentSpot } = useSelector((state: RootState) => state.parkingSpots);

  return (
    <CustomButton
      press={() => {
        Linking.openURL(
          `https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${currentSpot?.lat},${currentSpot?.lng}`
        );
      }}
      color="white"
      type="main">
      Start Route
    </CustomButton>
  );
};
