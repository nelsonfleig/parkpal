import { ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Badge } from 'react-native-paper';
import styles from './renterStyles';
import { updateDuration } from '../../redux/scheduling/calendarSlice';
import { RootState } from '../../redux';
import calculateSlider from '../../helpers/calculateSlider';
import getAvailableTimes from '../../helpers/availableTimes';
import { Reservation } from '../../graphql/__generated__';

export const RenterSlider = () => {
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const dispatch = useDispatch();
  const enableScroll = () => setScrollEnabled(true);
  const disableScroll = () => {
    setScrollEnabled(false);
  };
  const { currentSpot } = useSelector((state: RootState) => state.parkingSpots);
  const { selectedTime, selectedDate, duration } = useSelector(
    (state: RootState) => state.calendar
  );

  const [sliderOptions, setSliderOptions] = useState<number[]>([]);
  useEffect(() => {
    const date = Object.keys(selectedDate)[0];
    const times = getAvailableTimes(
      [currentSpot?.startHour as number, currentSpot?.endHour as number],
      currentSpot?.reservations as Reservation[],
      date
    );
    setSliderOptions(calculateSlider(times, selectedTime, currentSpot, date));
  }, [selectedTime, currentSpot, selectedDate]);

  const badge = (
    // @ts-ignore
    <Badge style={styles.badge} size={33} visible>
      {duration}
    </Badge>
  );

  return (
    <ScrollView contentContainerStyle={styles.slider} scrollEnabled={scrollEnabled}>
      <MaterialCommunityIcons
        name="clock-time-five"
        style={{ ...styles.icon, marginRight: 15 }}
        size={40}
        color="#7145D6"
      />
      <MultiSlider
        onValuesChangeStart={disableScroll}
        onValuesChange={(e) => {
          enableScroll();
          dispatch(updateDuration(e[0]));
        }}
        sliderLength={180}
        min={0}
        max={sliderOptions.length}
        optionsArray={sliderOptions}
        allowOverlap
        // @ts-ignore
        customMarker={() => badge}
      />
    </ScrollView>
  );
};
