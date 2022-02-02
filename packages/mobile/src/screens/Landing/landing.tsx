import { useEffect, useState } from 'react';
import { View, Text, Keyboard } from 'react-native';
import { LocationGeocodedLocation, LocationObject } from 'expo-location';
import * as Location from 'expo-location';

import { Searchbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { landingStyles } from './landingStyles';
import { MapComponent, mapRef } from '../../components/MapView/mapView';
import { BookingPopup } from '../../components/BookingPopup/bookingPopup';

export const LandingScreen = () => {
  const [location, setLocation] = useState(null as LocationObject | null); // Here we get the user's current location
  const [searchQuery, setSearchQuery] = useState(''); // We set the query on the searchbar
  const [destination, setDestination] = useState(null as LocationGeocodedLocation | null); // Here we set the destination chosen by the user with the prev query

  // On change search query:
  const onChangeSearch = (query: string) => {
    setSearchQuery(query);
    if (query === '') {
      setDestination(null); // Needed to remove the markers when we delete the text
    }
  };
  // On submit search query:
  const onSubmitEditing = async () => {
    // When we submit the direction, we transform it to coordinates
    const locationQuery = searchQuery ? await Location.geocodeAsync(searchQuery) : null;
    if (locationQuery) {
      setDestination(null); // We first remove all the markers from the map
      mapRef.current?.animateCamera(
        {
          center: {
            latitude: locationQuery[0].latitude, // We select the first object of the array
            longitude: locationQuery[0].longitude,
          },
          heading: 0,
          zoom: 16,
          pitch: 0,
          altitude: 0,
        },
        { duration: 500 }
      );
      setDestination(locationQuery[0]); // We set new markers in the map
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
          style={{ position: 'absolute', top: 60, right: 20, left: 20, zIndex: 3, height: 50 }}
          autoCapitalize="words"
          onChangeText={onChangeSearch}
          value={searchQuery}
          onSubmitEditing={onSubmitEditing}
        />
        <View onTouchEnd={() => Keyboard.dismiss()}>
          {location ? (
            <MapComponent
              latitude={location.coords.latitude}
              longitude={location.coords.longitude}
              destination={destination}
            />
          ) : (
            <SafeAreaView>
              <Text>Warm lentils alert! You have to enable the location to use ParkPal.</Text>
            </SafeAreaView>
          )}
        </View>
      </View>
      <BookingPopup />
    </View>
  );
};
