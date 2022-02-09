import { StyleSheet } from 'react-native';

export const paymentStyles = StyleSheet.create({
  slideContent: {
    backgroundColor: 'white',
    height: 500,
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    marginTop: '8%',
    fontSize: 30,
    color: 'black',
    marginBottom: 30,
    fontWeight: '600',
    alignSelf: 'center',
  },
  checkoutText: {
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
    maxWidth: 250,
    textAlign: 'left',
    fontFamily: 'InterLight',
  },
  money: {
    fontFamily: 'InterMedium',
    fontSize: 25,
    color: '#7145D6',
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

  orderField: {
    fontFamily: 'InterMedium',
  },
});
