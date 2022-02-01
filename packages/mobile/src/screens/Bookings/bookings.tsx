import { ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BookingTile } from '../../components/Bookings/bookingTile';

import styles from './bookingScreenStyles';

export const BookingsScreen = () => (
  <SafeAreaView>
    <Text style={styles.title}>My Bookings</Text>
    <ScrollView contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
      <BookingTile />
      <BookingTile />
      <BookingTile />
      <BookingTile />
      <BookingTile />
    </ScrollView>
  </SafeAreaView>
);
