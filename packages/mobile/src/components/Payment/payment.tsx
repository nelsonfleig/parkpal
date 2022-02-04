/* eslint-disable no-console */
import { CardField, useStripe, CardForm } from '@stripe/stripe-react-native';
import { Keyboard, View } from 'react-native';
import { CustomButton } from '../Forms/button';
import { paymentStyles } from './paymentStyles';

type PaymentType = {
  setContent: React.Dispatch<React.SetStateAction<string>>;
};

export const Payment = ({ setContent }: PaymentType) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { confirmPayment } = useStripe();

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
            setContent('start');
          }}
          color="white"
          type="main">
          Pay
        </CustomButton>
      </View>
    </View>
  );
};
