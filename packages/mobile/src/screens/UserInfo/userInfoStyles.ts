import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  mainView: {
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
    width: '80%',
    alignItems: 'flex-start',
  },

  userInfoWrapper: {
    marginVertical: 20,
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

  badge: {
    fontSize: 18,
    marginBottom: '5%',
    backgroundColor: '#7145D6',
    color: 'white',
    padding: 10,
  },
  buttonsView: {
    width: '80%',
    marginTop: '5%',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '70%',
    marginBottom: '7%',
  },
  buttonsText: {
    color: '#00C0E7',
    marginLeft: '5%',
    fontSize: 20,
  },

  fieldName: {
    fontSize: 20,
    fontWeight: '600',
  },
});

export default styles;
