import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
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

      const place = await Location.getLastKnownPositionAsync();
      setLocation(place);
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
