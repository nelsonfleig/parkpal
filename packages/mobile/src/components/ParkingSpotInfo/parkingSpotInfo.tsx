// @ts-nocheck
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import React, { useState } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { Text } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import profile from '../../../assets/images/profile.png';
import { RootState } from '../../redux';
import { changeDestination } from '../../redux/destination/destinationSlice';
import { displayRoute } from '../../redux/showRoute/showRoute';
import CalendarComponent from '../Calendar/calendar';
import { CustomButton } from '../Forms/button';
import { TimePicker } from '../TimePicker/timePicker';
import { parkingSpotInfoStyles as styles } from './parkingSpotInfoStyles';
import hoursInDay from '../../helpers/hoursInDay';
import { useCreateReservationMutation } from '../../graphql/__generated__';
import createReservationObj from '../../helpers/createReservationObj';

export const panelReference = React.createRef<any>();

type ParkingSpotInfoType = {
  setContent: React.Dispatch<React.SetStateAction<string>>;
};

export const ParkingSpotInfo = ({ setContent }: ParkingSpotInfoType) => {
  const { currentSpot } = useSelector((state: RootState) => state.parkingSpots);
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState();
  const [duration, setDuration] = useState(0);
  const [createReservation] = useCreateReservationMutation();

  const enableScroll = () => setScrollEnabled(true);

  const disableScroll = () => {
    setScrollEnabled(false);
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
              <Text style={styles.addressLine}>{currentSpot.street},</Text>
              <Text style={styles.addressLine}>{currentSpot.city},</Text>
              <Text style={styles.addressLine}>{currentSpot.zipCode}</Text>
            </View>
          </View>
          <View style={styles.calendar}>
            <MaterialCommunityIcons name="calendar" size={40} color="#7145D6" style={styles.icon} />

            <CalendarComponent
              disabledDayIndexes={currentSpot?.daysAvailable}
              setSelectedDate={setSelectedDate}
            />
            <TimePicker
              hours={[currentSpot.startHour, currentSpot.endHour]}
              setSelectedTime={setSelectedTime}
              selectedTime={selectedTime}
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
              onValuesChangeFinish={(e) => {
                enableScroll();
                setDuration(e[0]);
              }}
              sliderLength={180}
              min={1}
              max={24}
              optionsArray={hoursInDay()}
              showSteps
              enableLabel
            />
          </ScrollView>
          <CustomButton
            press={() => {
              // Remove all parking spots except the selected one
              dispatch(changeDestination(null));
              // Create route with the selected one and display it in the map
              dispatch(displayRoute(true));
              setContent('start');
              // Make reservations
              (async () => {
                try {
                  const req = createReservationObj(
                    selectedDate,
                    selectedTime,
                    duration,
                    currentSpot.id
                  );

                  await createReservation({ variables: { input: req } });
                } catch (err) {
                  throw new Error(err);
                }
              })();
            }}
            color="white"
            type="main">
            Book
          </CustomButton>
        </View>
      </View>
    )
  );
};
