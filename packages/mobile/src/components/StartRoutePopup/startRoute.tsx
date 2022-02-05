import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Linking } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { CustomButton } from '../Forms/button';

export const StartRoute = () => {
  const { currentSpot } = useSelector((state: RootState) => state.parkingSpots);
  const { bookingSpot } = useSelector((state: RootState) => state.parkingSpots);

  return (
    <CustomButton
      press={() => {
        if (currentSpot) {
          Linking.openURL(
            `https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${currentSpot.lat},${currentSpot.lng}`
          );
        } else if (bookingSpot) {
          Linking.openURL(
            `https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${bookingSpot.lat},${bookingSpot.lng}`
          );
        }
      }}
      color="#0A2540"
      type="start">
      Start Route in <MaterialCommunityIcons name="google-maps" size={18} color="#0A2540" />
    </CustomButton>
  );
};
