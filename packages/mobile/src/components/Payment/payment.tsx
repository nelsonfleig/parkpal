/* eslint-disable no-console */
import { CardField, useConfirmPayment } from '@stripe/stripe-react-native';
import { useState } from 'react';
import { Keyboard, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  GetMyReservationsDocument,
  useCreatePaymentIntentMutation,
  useCreateReservationMutation,
} from '../../graphql/__generated__';
import createReservationObj from '../../helpers/createReservationObj';
import { useAuth } from '../../hooks/useAuth';
import { RootState } from '../../redux';
import { changeDestination } from '../../redux/destination/destinationSlice';
import { setBookingSpotRoute } from '../../redux/parkingSpot/parkingSpotSlice';
import { changePopupContent } from '../../redux/popupContent/popupContentSlice';
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
    // We get the client secret from our server
    if (currentSpot) {
      const total = duration * currentSpot.price;
      const billingDetails = {
        email: user?.email,
      };
      const { data } = await createPaymentIntent({
        variables: { input: { total } },
      });

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const paymentObject =
        data &&
        (await confirmPayment(data.createPaymentIntent, {
          type: 'Card',
          billingDetails,
        }));
      // We clean my bookings cache
      dispatch(setBookingSpotRoute(null));
      // Remove all parking spots except the selected one
      dispatch(changeDestination(null));
      // Create route with the selected one and display it in the map
      dispatch(displayRoute(true));
      dispatch(changePopupContent('start'));
      // Make reservations
      if (paymentObject?.paymentIntent) {
        reservationRequest(paymentObject.paymentIntent.id);
      }
    }
  };

  return (
    <View style={paymentStyles.slideContent} onTouchEnd={() => Keyboard.dismiss()}>
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
          marginVertical: 30,
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
