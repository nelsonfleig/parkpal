import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { TimePicker } from '../TimePicker/timePicker';
import CalendarComponent from '../Calendar/calendar';
import styles from './renterStyles';
import { RootState } from '../../redux';

type RenterCalendarProps = {
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
  setSelectedTime: React.Dispatch<React.SetStateAction<undefined>>;
  selectedTime: string;
};

export const RenterCalendar = ({
  setSelectedDate,
  setSelectedTime,
  selectedTime,
}: RenterCalendarProps) => {
  const { currentSpot } = useSelector((state: RootState) => state.parkingSpots);
  return (
    currentSpot && (
      <View style={styles.calendar}>
        <MaterialCommunityIcons name="calendar" size={40} color="#7145D6" style={styles.icon} />

        <CalendarComponent
          disabledDayIndexes={currentSpot.daysAvailable}
          setSelectedDate={setSelectedDate}
          initDate={new Date()}
        />
        <TimePicker
          hours={[currentSpot.startHour, currentSpot.endHour]}
          setSelectedTime={setSelectedTime}
          selectedTime={selectedTime}
        />
      </View>
    )
  );
};
