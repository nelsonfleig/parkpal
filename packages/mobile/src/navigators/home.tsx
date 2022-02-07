import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useTheme } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HomeStackParams } from '../../types/appStack';
import { LandingScreen, BookingsScreen, ProfileScreen } from '../screens/homeIndex';

const iconOptions = (icon: string, color?: string) => (
  <MaterialCommunityIcons name={icon} color={color} size={26} />
);

export const HomeScreen = () => {
  const { colors } = useTheme();
  const HomeStack = createMaterialBottomTabNavigator<HomeStackParams>();

  return (
    <HomeStack.Navigator
      barStyle={{ backgroundColor: '#fff' }}
      activeColor={colors.primary}
      initialRouteName="Landing">
      <HomeStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => iconOptions('account-circle', colors.primary),
        }}
      />
      <HomeStack.Screen
        name="Landing"
        component={LandingScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => iconOptions('home', colors.primary),
        }}
      />
      <HomeStack.Screen
        name="Bookings"
        component={BookingsScreen}
        options={{
          tabBarLabel: 'Bookings',
          tabBarIcon: () => iconOptions('parking', colors.primary),
        }}
      />
    </HomeStack.Navigator>
  );
};
