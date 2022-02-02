import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { LocationGeocodedLocation, LocationObject } from 'expo-location';
import * as Location from 'expo-location';

import { Searchbar } from 'react-native-paper';
import { landingStyles } from './landingStyles';
import { MapComponent } from '../../components/MapView/mapView';
import { BookingPopup } from '../../components/BookingPopup/bookingPopup';

export const LandingScreen = () => {
  const [location, setLocation] = useState(null as LocationObject | null);
  const [destination, setDestination] = useState(null as LocationGeocodedLocation | null);
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query: string) => {
    if (query === '') {
      setDestination(null);
      setSearchQuery('');
    } else {
      setSearchQuery(query);
    }
  };

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
      <View>
        <Searchbar
          autoComplete
          placeholder="Enter a destination"
          iconColor="#7145D6"
          theme={{ colors: { text: 'black' } }}
          style={{ position: 'absolute', top: 60, right: 20, left: 20, zIndex: 3 }}
          autoCapitalize="words"
          onChangeText={onChangeSearch}
          value={searchQuery}
          onSubmitEditing={async () => {
            // When we submit the direction, we transform it to coordinates
            const temp = searchQuery ? await Location.geocodeAsync(searchQuery) : null;
            if (temp) {
              setDestination(temp[0]);
            }
          }}
        />
        <View>
          {location ? (
            <MapComponent
              latitude={location.coords.latitude}
              longitude={location.coords.longitude}
              destination={destination}
            />
          ) : (
            <Text>Warm lentils alert! You have to enable the location to use ParkPal.</Text>
          )}
        </View>
      </View>
      <BookingPopup />
    </View>
  );
};
