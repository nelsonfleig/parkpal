import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect, useState } from 'react';
import { LocationObject } from 'expo-location';
import * as Location from 'expo-location';

import { Searchbar } from 'react-native-paper';
import { landingStyles } from './landingStyles';
import { MapComponent } from '../../components/MapView/mapView';

export const LandingScreen = () => {
  const [location, setLocation] = useState(null as LocationObject | null);
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query: string) => setSearchQuery(query);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }

      await Location.watchPositionAsync(
        {
          distanceInterval: 100,
        },
        (locObj) => {
          // eslint-disable-next-line no-console
          console.log(locObj);
          setLocation(locObj);
        }
      );
    })();
  }, []);

  return (
    <View style={landingStyles.container}>
      <Searchbar
        autoComplete
        placeholder="Enter a destination"
        onChangeText={onChangeSearch}
        value={searchQuery}
        iconColor="#7145D6"
        theme={{ colors: { text: 'black' } }}
        onSubmitEditing={() => {
          console.log(searchQuery);
        }}
        style={{ position: 'absolute', top: 60, right: 20, left: 20, zIndex: 3 }}
      />
      <View style={{ zIndex: 2 }}>
        {location ? (
          <MapComponent latitude={location.coords.latitude} longitude={location.coords.longitude} />
        ) : (
          <Text>Warm lentils alert! You have to enable the location to use ParkPal.</Text>
        )}
      </View>
    </View>
  );
};
