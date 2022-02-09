import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  renterInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -10,
  },

  image: {
    marginRight: 10,
    borderRadius: 60,
  },

  defaultImage: {
    backgroundColor: '#7145D6',
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },

  defaultImageName: {
    fontFamily: 'InterMedium',
    fontSize: 30,
    color: 'white',
  },

  name: {
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
    fontFamily: 'InterMedium',
    fontWeight: 'normal',
    maxWidth: 180,
  },

  number: {
    color: 'black',
  },

  price: {
    color: '#7145D6',
    marginLeft: 'auto',
    fontSize: 30,
    fontFamily: 'InterMedium',
  },

  location: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  addressLine: {
    color: 'black',
    marginBottom: 10,
  },

  icon: {
    marginRight: 5,
  },

  calendar: {
    flexDirection: 'row',
  },

  slider: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  badge: {
    backgroundColor: '#7145D6',
    fontFamily: 'InterMedium',
  },
});

export default styles;
