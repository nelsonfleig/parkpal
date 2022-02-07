import { StyleSheet } from 'react-native';

export const paymentStyles = StyleSheet.create({
  slideContent: {
    backgroundColor: 'white',
    height: 500,
    alignItems: 'center',
  },
  title: {
    marginTop: '8%',
    fontSize: 35,
    color: 'black',
    marginBottom: 10,
    textAlign: 'left',
    fontWeight: '700',
  },
  checkoutText: {
    fontSize: 20,
    color: 'black',
    marginBottom: '1%',
    maxWidth: 250,
    textAlign: 'left',
    fontFamily: 'InterLight',
  },
  money: {
    fontFamily: 'InterMedium',
    fontSize: 25,
  },
  cardTitleView: {
    alignItems: 'flex-start',
    width: '80%',
  },
  cardTitle: {
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
    marginTop: '7%',
  },
  payButton: {
    width: '50%',
  },
});
