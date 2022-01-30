import { configureFonts, DefaultTheme } from 'react-native-paper';
import fontConfig from './fonts';

const theme = {
  ...DefaultTheme,
  roundness: 5,
  fonts: configureFonts(fontConfig),
  colors: {
    ...DefaultTheme.colors,
    text: '#f5f5f5',
    primary: '#7145D6',
    accent: '#0A2540',
    background: '#7145D6',
  },
};

export default theme;
