import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LandingScreen } from '../homeIndex';

export const HomeScreen = () => {
  const HomeStack = createNativeStackNavigator();

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Landing" component={LandingScreen} />
    </HomeStack.Navigator>
  );
};
