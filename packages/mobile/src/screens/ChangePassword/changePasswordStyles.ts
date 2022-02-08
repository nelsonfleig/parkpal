import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('screen');

export const changePasswordStyles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: '5%',
    marginBottom: '7%',
    color: 'black',
  },
  form: {
    alignItems: 'center',
  },
  input: {
    width: width * 0.65,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
});
