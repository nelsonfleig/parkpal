import { ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './renterStyles';
import hoursInDay from '../../helpers/hoursInDay';
import { updateDuration } from '../../redux/scheduling/calendarSlice';

export const RenterSlider = () => {
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const dispatch = useDispatch();
  const enableScroll = () => setScrollEnabled(true);
  const disableScroll = () => {
    setScrollEnabled(false);
  };

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
        onValuesChangeFinish={(e) => {
          enableScroll();
          dispatch(updateDuration(e[0]));
        }}
        sliderLength={180}
        min={1}
        max={24}
        optionsArray={hoursInDay()}
        enableLabel
      />
    </ScrollView>
  );
};
