/* eslint-disable no-console */
import { CardField, CardForm, useStripe } from '@stripe/stripe-react-native';
import { Keyboard, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { changePopupContent } from '../../redux/popupContent/popupContentSlice';
import { CustomButton } from '../Forms/button';
import { paymentStyles } from './paymentStyles';

export const Payment = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { confirmPayment } = useStripe();
  const dispatch = useDispatch();
  return (
    <View style={paymentStyles.slideContent} onTouchEnd={() => Keyboard.dismiss()}>
      <CardField
        postalCodeEnabled={false}
        placeholder={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={{
          backgroundColor: 'blue',
          textColor: '#000000',
        }}
        style={{
          width: '80%',
          height: 90,
          marginVertical: 30,
          padding: 5,
        }}
        onCardChange={(cardDetails) => {
          console.log('cardDetails', cardDetails);
        }}
        onFocus={(focusedField) => {
          console.log('focusField', focusedField);
        }}
      />
      <CardForm style={{ height: 200, width: 200 }} />
      <View style={paymentStyles.payButton}>
        <CustomButton
          press={() => {
            dispatch(changePopupContent('start'));
          }}
          color="white"
          type="main">
          Pay
        </CustomButton>
      </View>
    </View>
  );
};
