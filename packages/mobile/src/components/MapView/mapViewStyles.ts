import { Dimensions, StyleSheet } from 'react-native';

export const mapViewStyles = StyleSheet.create({
  map: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
});
