import Toast from 'react-native-toast-message';

export const sucessToast = (text: string) => {
  Toast.show({
    type: 'success',
    text1: text,
    position: 'top',
    autoHide: true,
  });
};
