// @ts-nocheck
import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { changeDestination } from '../../redux/destination/destinationSlice';
import { displayRoute } from '../../redux/showRoute/showRoute';
import { CustomButton } from '../Forms/button';
import { parkingSpotInfoStyles as styles } from './parkingSpotInfoStyles';
import {
  GetMyReservationsDocument,
  useCreateReservationMutation,
} from '../../graphql/__generated__';
import createReservationObj from '../../helpers/createReservationObj';
import { RenterInformation } from '../Renter/information';
import { RenterLocation } from '../Renter/location';
import { RenterCalendar } from '../Renter/calendar';
import { RenterSlider } from '../Renter/slider';
import { changePopupContent } from '../../redux/popupContent/popupContentSlice';
import { setBookingSpotRoute } from '../../redux/parkingSpot/parkingSpotSlice';

export const ParkingSpotInfo = () => {
  const { currentSpot } = useSelector((state: RootState) => state.parkingSpots);
  const { selectedDate } = useSelector((state: RootState) => state.calendar);

  const dispatch = useDispatch();

  const [selectedTime, setSelectedTime] = useState('');
  const [duration, setDuration] = useState(0);
  const [createReservation] = useCreateReservationMutation({
    refetchQueries: [GetMyReservationsDocument],
    awaitRefetchQueries: true,
  });

  const reservationRequest = async () => {
    try {
      if (currentSpot) {
        const date = Object.keys(selectedDate)[0];
        const req = createReservationObj(
          date,
          selectedTime,
          duration,
          currentSpot.id,
          currentSpot.price
        );

        await createReservation({ variables: { input: req } });
      }
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    currentSpot && (
      <View style={styles.slideContent}>
        <RenterInformation />
        <View style={styles.wrapper}>
          <RenterLocation />
          <RenterCalendar setSelectedTime={setSelectedTime} selectedTime={selectedTime} />
          <RenterSlider setDuration={setDuration} />
          <CustomButton
            press={() => {
              // We clean my bookings cache
              dispatch(setBookingSpotRoute(null));
              // Remove all parking spots except the selected one
              dispatch(changeDestination(null));
              // Create route with the selected one and display it in the map
              dispatch(displayRoute(true));
              dispatch(changePopupContent('payment'));
              // Make reservations
              reservationRequest();
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
