import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

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

  reportPaper: {
    backgroundColor: '#0A2540',
    width: width * 0.8,
    padding: 20,
    marginBottom: 30,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginLeft: width * 0.1,
    marginTop: height * 0.25,
    height: height * 0.4,
  },
  reportTextField: {
    backgroundColor: 'white',
    marginBottom: 20,
  },

  button: {
    alignSelf: 'center',
  },

  uploadText: {
    color: '#fff',
    fontSize: 20,
    textTransform: 'uppercase',
    marginRight: 10,
    fontFamily: 'InterMedium',
  },

  uploadImage: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default styles;
