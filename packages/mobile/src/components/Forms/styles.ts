import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  medium: {},
  welcomeButton: {
    marginTop: 5,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    fontWeight: 'normal',
    width: width * 0.65,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  saveButton: {
    marginTop: '15%',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    fontWeight: 'normal',
    width: width * 0.65,
    marginBottom: 15,
    backgroundColor: '#7145D6',
  },
  bookingButton: {
    width: 150,
    padding: 0,
    backgroundColor: 'transparent',
    borderColor: '#fff',
  },

  mainButton: {
    backgroundColor: '#0A2540',
    padding: 10,
    marginTop: 35,
  },

  startButton: {
    backgroundColor: 'white',
    padding: 10,
    marginTop: 35,
    width: width * 0.55,
  },

  laterButton: {
    backgroundColor: '#0A2540',
    padding: 10,
    marginTop: 15,
    width: width * 0.55,
  },

  input: {
    width: width * 0.65,
    backgroundColor: '#fff',
    marginBottom: 10,
  },

  discard: {
    backgroundColor: '#fff',
    width: 65,
    height: 65,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
  },
});

export default styles;
