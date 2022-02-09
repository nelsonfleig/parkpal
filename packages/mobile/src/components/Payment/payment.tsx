/* eslint-disable no-console */
import { CardField, useConfirmPayment } from '@stripe/stripe-react-native';
import { useState } from 'react';
import { Keyboard, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { errorToast, sucessToast } from '..';
import {
  GetMyReservationsDocument,
  useCreatePaymentIntentMutation,
  useCreateReservationMutation,
} from '../../graphql/__generated__';
import createReservationObj from '../../helpers/createReservationObj';
import { useAuth } from '../../hooks/useAuth';
// Redux
import { RootState } from '../../redux';
import { changeDestination } from '../../redux/destination/destinationSlice';
import { setBookingSpotRoute } from '../../redux/parkingSpot/parkingSpotSlice';
import { changePopupContent } from '../../redux/popupContent/popupContentSlice';
import {
  updateDuration,
  updateSelectedDate,
  updateSelectedTime,
} from '../../redux/scheduling/calendarSlice';
// Components
import { displayRoute } from '../../redux/showRoute/showRoute';
import { CustomButton } from '../Forms/button';
import { paymentStyles } from './paymentStyles';

export const Payment = () => {
  const { user } = useAuth();
  const [completed, setCompleted] = useState(false);

  const [createPaymentIntent] = useCreatePaymentIntentMutation();
  const { confirmPayment, loading } = useConfirmPayment();

  const dispatch = useDispatch();

  const { currentSpot } = useSelector((state: RootState) => state.parkingSpots);
  const { selectedDate, selectedTime, duration } = useSelector(
    (state: RootState) => state.calendar
  );

  const [createReservation] = useCreateReservationMutation({
    refetchQueries: [GetMyReservationsDocument],
    awaitRefetchQueries: true,
  });

  const reservationRequest = async (stripeChargeId: string) => {
    try {
      if (currentSpot) {
        const date = Object.keys(selectedDate)[0];
        const req = createReservationObj(
          date,
          selectedTime,
          duration,
          currentSpot.id,
          currentSpot.price,
          stripeChargeId
        );
        await createReservation({ variables: { input: req } });
      }
    } catch (err) {
      throw new Error(`${err}`);
    }
  };

  const onPress = async () => {
    try {
      if (currentSpot && user) {
        const total = duration * currentSpot.price;
        const billingDetails = {
          email: user.email,
        };
        // Get the client secret from our server
        const { data } = await createPaymentIntent({
          variables: { input: { total } },
        });
        // Handle the payment
        const paymentObject =
          data &&
          (await confirmPayment(data.createPaymentIntent, {
            type: 'Card',
            billingDetails,
          }));
        if (paymentObject?.paymentIntent) {
          // Make reservations
          sucessToast('Cool Beans! You have booked the spot!');
          reservationRequest(paymentObject.paymentIntent.id);
          dispatch(changePopupContent('start'));
          // Clean date, time and duration cache
          dispatch(updateSelectedDate(null));
          dispatch(updateSelectedTime(null));
          dispatch(updateDuration(null));
          // Clean my bookings routes cache
          dispatch(setBookingSpotRoute(null));
          // Remove all parking spots except the selected one
          dispatch(changeDestination(null));
          // Create route with the selected one and display it in the map
          dispatch(displayRoute(true));
        }
      }
    } catch (error) {
      errorToast('Ups! Something went wrong.');
    }
  };
  const endHour = parseInt(selectedTime.split(':')[0], 10) + duration;
  return (
    <View style={paymentStyles.slideContent} onTouchEnd={() => Keyboard.dismiss()}>
      {currentSpot && (
        <View style={paymentStyles.cardTitleView}>
          <Text style={paymentStyles.title}>Booking Summary</Text>
          <Text style={paymentStyles.checkoutText}>{`${selectedTime}h - ${endHour}:00h`}</Text>
          <Text style={paymentStyles.checkoutText}>{`${currentSpot.price} €/h`}</Text>
          <Text style={paymentStyles.checkoutText}>
            Total:{' '}
            <Text style={paymentStyles.money}>{(duration * currentSpot.price).toFixed(2)}€</Text>
          </Text>
        </View>
      )}
      <View style={paymentStyles.cardTitleView}>
        <Text style={paymentStyles.cardTitle}>Add Credit Card Details</Text>
      </View>
      <CardField
        postalCodeEnabled={false}
        placeholder={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={{
          backgroundColor: '#FFFFFF',
          textColor: '#000000',
        }}
        style={{
          width: '80%',
          height: 90,
          padding: 5,
        }}
        onCardChange={(cardDetails) => {
          setCompleted(cardDetails.complete);
        }}
      />
      <View style={paymentStyles.payButton}>
        <CustomButton
          press={onPress}
          color="white"
          type="main"
          loading={loading}
          disabled={!completed}>
          Pay
        </CustomButton>
      </View>
    </View>
  );
};
