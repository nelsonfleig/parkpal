import Toast from 'react-native-toast-message';

export const errorToast = (text) => {
  Toast.show({
    type: 'error',
    text1: text,
    position: 'top',
    autoHide: true,
  });
};
