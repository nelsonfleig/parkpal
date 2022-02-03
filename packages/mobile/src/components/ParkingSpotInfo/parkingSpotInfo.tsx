// @ts-nocheck
import { Text } from 'react-native-paper';
import { View, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import CalendarComponent from '../Calendar/calendar';
import profile from '../../../assets/images/profile.png';
import { CustomButton } from '../Forms/button';
import { TimePicker } from '../TimePicker/timePicker';
import { parkingSpotInfoStyles as styles } from './parkingSpotInfoStyles';

export const panelReference = React.createRef<any>();

export const ParkingSpotInfo = () => {
  const { currentSpot } = useSelector((state: RootState) => state.parkingSpots);
  const [scrollEnabled, setScrollEnabled] = useState(false);

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
    currentSpot && (
      <View style={styles.slideContent}>
        <View style={styles.renterInfo}>
          <Image source={profile} style={styles.image} />
          <View>
            <Text
              style={
                styles.name
              }>{`${currentSpot.user.firstName} ${currentSpot.user.lastName}`}</Text>
            <Text style={styles.number}>{currentSpot.user.phone} </Text>
          </View>
          <Text style={styles.price}>{`${currentSpot.price}€/hr`}</Text>
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

            <CalendarComponent disabledDayIndexes={currentSpot?.daysAvailable} />
            <TimePicker hours={[currentSpot.startHour, currentSpot.endHour]} />
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
    )
  );
};
