import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  keyboardAvoid: {
    width: '100%',
    height: '90%',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: '5%',
    marginBottom: '7%',
    color: 'black',
  },
  userInfoView: {
    width: '70%',
    alignItems: 'flex-start',
  },
  iconsView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '7%',
  },
  userInfo: {
    fontSize: 20,
    marginBottom: '5%',
  },
  buttonsView: {
    width: '70%',
    marginTop: '5%',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '70%',
    marginTop: '7%',
  },
  buttonsText: {
    color: '#00C0E7',
    marginLeft: '5%',
    fontSize: 20,
  },
});

export default styles;
