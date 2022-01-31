import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Landing } from '../Landing/landing';

export const Home = () => {
  const HomeStack = createNativeStackNavigator();

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Landing" component={Landing} />
    </HomeStack.Navigator>
  );
};
