import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect, useState } from 'react';
import { LocationObject } from 'expo-location';
import * as Location from 'expo-location';

import { landingStyles } from './landingStyles';
import { MapComponent } from '../../components/MapView/mapView';

export const LandingScreen = () => {
  const [location, setLocation] = useState(null as LocationObject | null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }

      await Location.watchPositionAsync(
        {
          distanceInterval: 5,
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
    <SafeAreaView style={landingStyles.container}>
      <View>
        {location ? (
          <MapComponent latitude={location.coords.latitude} longitude={location.coords.longitude} />
        ) : null}
      </View>
    </SafeAreaView>
  );
};
