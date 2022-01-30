/* eslint-disable global-require */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider, Button } from 'react-native-paper';
import { useFonts } from 'expo-font';
import theme from './styles/theme';

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
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Button icon="camera">Press Me</Button>
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
