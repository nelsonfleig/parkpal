import { StyleSheet } from 'react-native';

export const parkingSpotInfoStyles = StyleSheet.create({
  slideContent: {
    backgroundColor: 'white',
    flex: 1,
    padding: 25,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  wrapper: {
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 30,
    paddingBottom: 30,
  },

  date: {
    width: 110,
  },

  time: {
    width: 80,
    backgroundColor: '#EBEBEB',
  },

  timeText: {
    color: 'black',
    padding: 10,
    textTransform: 'uppercase',
  },
});
