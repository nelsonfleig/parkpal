import { MaterialCommunityIcons } from '@expo/vector-icons';
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
      color="#0A2540"
      type="start">
      Start Route in <MaterialCommunityIcons name="google-maps" size={18} color="#0A2540" />
    </CustomButton>
  );
};
