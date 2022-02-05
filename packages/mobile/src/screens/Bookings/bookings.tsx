import { ScrollView } from 'react-native';
import { Title } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HomeProps } from '../../../types/appStack';
import { BookingTile } from '../../components/Bookings/bookingTile';
import { useGetMyReservationsQuery } from '../../graphql/__generated__';
import styles from './bookingScreenStyles';

export const BookingsScreen = ({ navigation }: HomeProps) => {
  const { data } = useGetMyReservationsQuery();

  return (
    <SafeAreaView>
      <Title style={styles.title}>My Bookings</Title>
      <ScrollView contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
        {data?.reservations.map((reservation) => {
          const spot = reservation.parkingSpot;
          return (
            <BookingTile
              street={spot.street as string}
              key={reservation.id}
              start={reservation.startDate}
              end={reservation.endDate}
              navigation={navigation}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
