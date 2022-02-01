import { LocationGeocodedLocation } from 'expo-location';
import MapView from 'react-native-maps';
import { useEffect, useState } from 'react';
// import MapViewDirections from 'react-native-maps-directions';

// import { API_DIRECTIONS_KEY } from '@env';
import { View } from 'react-native';
import { mapViewStyles } from './mapViewStyles';

import { DestinationMarker } from '../DestinationMarker/destinationMarker';
import { mockParkingSpots, ParkingSpotType } from '../../mockParkings';
import { getDistKm } from '../../helpers/linearDistance';
import { ParkingSpots } from '../ParkingSpots/parkingSpots';

type MapComponentProps = {
  latitude: number;
  longitude: number;
  destination: LocationGeocodedLocation | null;
};

export const MapComponent = ({ latitude, longitude, destination }: MapComponentProps) => {
  // const [origin, setOrigin] = useState({ latitude, longitude });
  const [mapDest, setMapDest] = useState(null as LocationGeocodedLocation | null);
  const [markers, setMarkers] = useState([] as ParkingSpotType[] | null);

  useEffect(() => {
    // setOrigin({ latitude, longitude });
    setMapDest(destination);
    const spotsInZone =
      destination &&
      mockParkingSpots.filter(
        (spot) =>
          getDistKm(destination.latitude, destination.longitude, spot.latitude, spot.longitude) <
          0.3
      );
    setMarkers(spotsInZone);
  }, [latitude, longitude, destination]);

  return (
    <MapView
      provider="google"
      style={mapViewStyles.map}
      initialRegion={{
        latitude,
        longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      showsUserLocation
      followsUserLocation
      showsMyLocationButton
      region={
        mapDest
          ? {
              latitude: mapDest.latitude,
              longitude: mapDest.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }
          : {
              latitude,
              longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }
      }>
      {mapDest && (
        <View>
          <DestinationMarker mapDest={mapDest} />
          <ParkingSpots parkingSpots={markers} />
        </View>
      )}

      {/* <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={API_DIRECTIONS_KEY} // insert your API Key here
          strokeWidth={10}
          strokeColor="#111111"
        /> */}
    </MapView>
  );
};
