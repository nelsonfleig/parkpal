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
  const { selectedDate, selectedTime, duration } = useSelector(
    (state: RootState) => state.calendar
  );

  const disabled = !selectedDate || !selectedTime || !duration;

  return (
    currentSpot && (
      <View style={styles.slideContent}>
        <RenterInformation />
        <View style={styles.wrapper}>
          <RenterLocation />
          <RenterCalendar />
          {selectedDate && selectedTime ? <RenterSlider /> : null}

          <CustomButton
            press={() => {
              dispatch(changePopupContent('payment'));
            }}
            color="white"
            type="main"
            disabled={disabled}>
            Book
          </CustomButton>
        </View>
      </View>
    )
  );
};
