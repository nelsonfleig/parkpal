// @ts-nocheck

import SlidingUpPanel from 'rn-sliding-up-panel';
import { View, Image, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import styles from './bookingPopupStyles';
import profile from '../../../assets/images/profile.png';
import { CustomButton } from '../Forms/button';

export const panelReference = React.createRef<any>();

export const BookingPopup = () => {
  const [date, setDate] = useState(new Date(Date.now()));
  const [scrollEnabled, setScrollEnabled] = useState();

  const onChange = (event: Event, selectedDate: number) => {
    const currentDate = selectedDate || date;
    setDate(currentDate as Date);
  };

  const enableScroll = () => setScrollEnabled(true);
  const disableScroll = () => {
    setScrollEnabled(false);
  };

  const arr = () => {
    const output = [];
    for (let i = 1; i < 25; i += 1) {
      output.push(i);
    }
    return output;
  };

  return (
    <SlidingUpPanel ref={panelReference} draggableRange={{ top: 500, bottom: 0 }}>
      <View style={styles.slideContent}>
        <View style={styles.renterInfo}>
          <Image source={profile} style={styles.image} />
          <View>
            <Text style={styles.name}>Charley Hughes</Text>
            <Text style={styles.number}>+34 667 243 872 </Text>
          </View>
          <Text style={styles.price}>5€/hr</Text>
        </View>
        <View style={styles.wrapper}>
          <View style={styles.location}>
            <MaterialCommunityIcons
              name="map-marker"
              size={40}
              color="#7145D6"
              style={styles.icon}
            />
            <View>
              <Text style={styles.addressLine}>C/ Napols 155,</Text>
              <Text style={styles.addressLine}>Barcelona,</Text>
              <Text style={styles.addressLine}>08013</Text>
            </View>
          </View>
          <View style={styles.calendar}>
            <MaterialCommunityIcons name="calendar" size={40} color="#7145D6" style={styles.icon} />
            <DateTimePicker
              value={date}
              mode="date"
              is24Hour
              display="default"
              onChange={onChange}
              minimumDate={new Date(Date.now())}
              style={styles.date}
            />
            <DateTimePicker
              value={date}
              mode="time"
              is24Hour
              display="default"
              onChange={onChange}
              minimumDate={new Date(Date.now())}
              style={styles.time}
              minuteInterval={30}
            />
          </View>
          <ScrollView contentContainerStyle={styles.slider} scrollEnabled={scrollEnabled}>
            <MaterialCommunityIcons
              name="clock-time-five"
              style={{ ...styles.icon, marginRight: 15 }}
              size={40}
              color="#7145D6"
            />
            <MultiSlider
              onValuesChangeStart={disableScroll}
              onValuesChangeFinish={enableScroll}
              sliderLength={180}
              min={1}
              max={24}
              optionsArray={arr()}
              showSteps
              enableLabel
            />
          </ScrollView>
          <CustomButton press={() => {}} color="white" type="main">
            Book
          </CustomButton>
        </View>
      </View>
    </SlidingUpPanel>
  );
};
