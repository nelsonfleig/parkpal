import React from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux';
import { changePopupContent } from '../../redux/popupContent/popupContentSlice';
import { CustomButton } from '../Forms/button';
import { RenterCalendar } from '../Renter/calendar';
import { RenterInformation } from '../Renter/information';
import { RenterLocation } from '../Renter/location';
import { RenterSlider } from '../Renter/slider';
import { parkingSpotInfoStyles as styles } from './parkingSpotInfoStyles';

export const ParkingSpotInfo = () => {
  const { currentSpot } = useSelector((state: RootState) => state.parkingSpots);
  const dispatch = useDispatch();

  return (
    currentSpot && (
      <View style={styles.slideContent}>
        <RenterInformation />
        <View style={styles.wrapper}>
          <RenterLocation />
          <RenterCalendar />
          <RenterSlider />
          <CustomButton
            press={() => {
              dispatch(changePopupContent('payment'));
            }}
            color="white"
            type="main">
            Book
          </CustomButton>
        </View>
      </View>
    )
  );
};
