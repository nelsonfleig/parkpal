// @ts-nocheck

import SlidingUpPanel from 'rn-sliding-up-panel';
import { View, Image } from 'react-native';
import { Button, Text } from 'react-native-paper';
import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import styles from './bookingPopupStyles';
import profile from '../../../assets/images/profile.png';
import { CustomButton } from '../Forms/button';

export const BookingPopup = () => {
  const [panel, setPanel] = useState(null);
  const [date, setDate] = useState(new Date(Date.now()));

  const onChange = (event: Event, selectedDate: number) => {
    const currentDate = selectedDate || date;
    setDate(currentDate as Date);
  };

  return (
    <View style={styles.container}>
      <Button onPress={() => panel.show(400)}>Show</Button>
      <SlidingUpPanel
        ref={(c) => {
          setPanel(c);
        }}
        draggableRange={{ top: 400, bottom: 0 }}>
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
              <MaterialCommunityIcons
                name="calendar"
                size={40}
                color="#7145D6"
                style={styles.icon}
              />
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
                style={styles.time}
              />
            </View>
            <CustomButton press={() => {}} color="white" type="main">
              Book
            </CustomButton>
          </View>
        </View>
      </SlidingUpPanel>
    </View>
  );
};
