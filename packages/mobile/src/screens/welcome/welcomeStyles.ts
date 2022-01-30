import { StyleSheet } from 'react-native';
import theme from '../../../styles/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  image: {
    width: 252,
    height: 70,
    position: 'absolute',
    top: 100,
  },

  button: {
    backgroundColor: '#fff',
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontWeight: 'normal',
  },
});

export default styles;
