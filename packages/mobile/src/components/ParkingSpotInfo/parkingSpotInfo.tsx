// @ts-nocheck
import React from 'react';
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

type ParkingSpotInfoProps = {
  setTotal: React.Dispatch<React.SetStateAction<number>>;
};

export const ParkingSpotInfo = ({ setTotal }: ParkingSpotInfoProps) => {
  const { currentSpot } = useSelector((state: RootState) => state.parkingSpots);
  const { selectedDate, selectedTime, duration } = useSelector(
    (state: RootState) => state.calendar
  );

  const dispatch = useDispatch();

  const [createReservation] = useCreateReservationMutation({
    refetchQueries: [GetMyReservationsDocument],
    awaitRefetchQueries: true,
  });
  // ADD THIS TO PAYMENT:
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
        setTotal(req.total);
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
          <RenterCalendar />
          <RenterSlider />
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
