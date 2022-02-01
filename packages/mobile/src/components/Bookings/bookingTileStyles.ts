import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  tile: {
    width: width * 0.65,
    padding: 20,
    marginBottom: 30,
    backgroundColor: '#0A2540',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  address: {
    color: '#fff',
    fontSize: 20,
  },

  info: {
    marginBottom: 30,
    marginTop: 30,
  },

  time: {
    color: '#fff',
    fontSize: 16,
  },

  edit: {
    position: 'absolute',
    right: 5,
    top: 5,
  },

  menuItem: {
    color: 'red',
  },
});

export default styles;
