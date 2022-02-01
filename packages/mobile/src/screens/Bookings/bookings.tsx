import { ScrollView } from 'react-native';
import { Title } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BookingTile } from '../../components/Bookings/bookingTile';
import styles from './bookingScreenStyles';

export const BookingsScreen = () => (
  <SafeAreaView>
    <Title style={styles.title}>My Bookings</Title>
    <ScrollView contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
      <BookingTile />
      <BookingTile />
      <BookingTile />
      <BookingTile />
      <BookingTile />
      <BookingTile />
    </ScrollView>
  </SafeAreaView>
);
