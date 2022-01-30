/* eslint-disable global-require */
import { useFonts } from 'expo-font';

import { Provider as PaperProvider } from 'react-native-paper';
import theme from './styles/theme';
import { Welcome } from './src/screens';

export default function App() {
  const [loaded] = useFonts({
    InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
    InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
    InterLight: require('./assets/fonts/Inter-Light.ttf'),
    InterThin: require('./assets/fonts/Inter-Thin.ttf'),
  });

  if (!loaded) return null;

  return (
    <PaperProvider theme={theme}>
      <Welcome />
    </PaperProvider>
  );
}
