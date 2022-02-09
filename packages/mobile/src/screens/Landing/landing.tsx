import * as Location from 'expo-location';
import { LocationObject } from 'expo-location';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { BookingPopup, panelReference } from '../../components/BookingPopup/bookingPopup';
import { FindSpotsHere } from '../../components/FindSpotsHere/findSpotsHere';
import { MapComponent, mapRef } from '../../components/MapView/mapView';
import { RootState } from '../../redux';
import { changeDestination } from '../../redux/destination/destinationSlice';
import { showFindSpotButton } from '../../redux/findSpotButton/findSpotButtonSlice';
import { changeCurrentSpace } from '../../redux/parkingSpot/parkingSpotSlice';
import { changePopupContent } from '../../redux/popupContent/popupContentSlice';
import { displayRoute } from '../../redux/showRoute/showRoute';
import { landingStyles } from './landingStyles';

export const LandingScreen = () => {
  const [location, setLocation] = useState(null as LocationObject | null); // Here we get the user's current location
  const [searchQuery, setSearchQuery] = useState(''); // We set the query on the searchbar
  const dispatch = useDispatch();
  const { showFindButton } = useSelector((state: RootState) => state.showFindSpotButton);
  const { content } = useSelector((state: RootState) => state.popupContent);

  // On change search query:
  const onChangeSearch = (query: string) => {
    setSearchQuery(query);
    if (query === '') {
      dispatch(changeDestination(null)); // Needed to remove the markers when we delete the text
    }
  };

  // On submit search query:
  const onSubmitEditing = async () => {
    // When we submit the direction, we transform it to coordinates
    const locationQuery = searchQuery ? await Location.geocodeAsync(searchQuery) : null;
    if (locationQuery) {
      dispatch(changeDestination(null)); // We first remove all the markers from the map
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
      dispatch(changeDestination(locationQuery[0])); // We set new markers in the map
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
          distanceInterval: 50,
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
        {showFindButton && (
          <Searchbar
            autoComplete
            placeholder="Enter a destination"
            iconColor="#7145D6"
            theme={{ colors: { text: 'black' } }}
            style={{
              position: 'absolute',
              top: 60,
              right: 20,
              left: 20,
              zIndex: 3,
            }}
            autoCapitalize="words"
            onChangeText={onChangeSearch}
            value={searchQuery}
            onSubmitEditing={onSubmitEditing}
            onPressOut={() => {
              if (content !== 'booking') {
                // We remove the route if the user discards going to navigation mode
                dispatch(displayRoute(false));
                dispatch(changeCurrentSpace(null));
                if (content === 'start') {
                  dispatch(showFindSpotButton(true));
                }
                dispatch(changePopupContent('booking'));
              }
            }}
          />
        )}
        <View
          onTouchEnd={() => {
            panelReference.current.hide();
          }}>
          {location ? (
            <MapComponent
              latitude={location.coords.latitude}
              longitude={location.coords.longitude}
            />
          ) : (
            <SafeAreaView>
              <Text>Warm lentils alert! You have to enable the location to use ParkPal.</Text>
            </SafeAreaView>
          )}
        </View>
        <View style={landingStyles.findHere}>
          <FindSpotsHere location={location} />
        </View>
      </View>
      <BookingPopup />
    </View>
  );
};
