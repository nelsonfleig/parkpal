import { LocationGeocodedLocation } from 'expo-location';
import MapView from 'react-native-maps';
import { createRef, useEffect, useState } from 'react';
import MapViewDirections from 'react-native-maps-directions';

import { DIRECTIONS_API_KEY } from '@env';
import { View } from 'react-native';
import { mapViewStyles } from './mapViewStyles';

import { DestinationMarker } from '../DestinationMarker/destinationMarker';
import { getDistKm } from '../../helpers/linearDistance';
import { ParkingSpots } from '../ParkingSpots/parkingSpots';
import { useGetSpotsQuery, GetSpotsQuery } from '../../graphql/__generated__';

type MapComponentProps = {
  latitude: number;
  longitude: number;
  destination: LocationGeocodedLocation | null;
};

export const mapRef = createRef<MapView>();

export const MapComponent = ({ latitude, longitude, destination }: MapComponentProps) => {
  const [origin, setOrigin] = useState({ latitude, longitude });
  const [mapDest, setMapDest] = useState(null as LocationGeocodedLocation | null);
  const [markers, setMarkers] = useState<GetSpotsQuery['spaces']>([]);
  const { data } = useGetSpotsQuery();

  useEffect(() => {
    setOrigin({ latitude, longitude });
    setMapDest(destination);

    // We select the parking spots that are within the radius of 300m
    const spotsInZone =
      destination &&
      data?.spaces.filter(
        (spot) => getDistKm(destination.latitude, destination.longitude, spot.lat, spot.lng) < 0.3
      );
    if (spotsInZone) {
      setMarkers(spotsInZone);
    }
  }, [latitude, longitude, destination, data?.spaces]);

  return (
    <MapView
      ref={mapRef}
      showsScale
      provider="google"
      style={mapViewStyles.map}
      showsUserLocation
      followsUserLocation
      showsMyLocationButton
      initialCamera={{
        center: { latitude, longitude },
        heading: 0,
        zoom: 16,
        pitch: 0,
        altitude: 0,
      }}>
      {mapDest && (
        <View>
          <DestinationMarker mapDest={mapDest} />
          <ParkingSpots parkingSpots={markers} />
        </View>
      )}

      {destination && (
        <MapViewDirections
          origin={origin}
          destination={{ latitude: destination.latitude, longitude: destination.longitude }}
          apikey={DIRECTIONS_API_KEY} // insert your API Key here
          strokeWidth={10}
          strokeColor="#111111"
        />
      )}
    </MapView>
  );
};
