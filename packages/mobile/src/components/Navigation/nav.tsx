import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { BookingsScreen, HomeScreen } from '../../screens';

const Tab = createMaterialBottomTabNavigator();

const Navigation = () => (
  <Tab.Navigator>
    <Tab.Screen name="home" component={HomeScreen} />
    <Tab.Screen name="bookings" component={BookingsScreen} />
  </Tab.Navigator>
);

export default Navigation;
