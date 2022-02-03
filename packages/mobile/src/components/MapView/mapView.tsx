// @ts-ignore
import { DIRECTIONS_API_KEY } from '@env';
import { createRef, useEffect, useState } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { useSelector } from 'react-redux';
import { useGetSpotsQuery } from '../../graphql/__generated__';
import { RootState } from '../../redux';
import { DestinationMarker } from '../DestinationMarker/destinationMarker';
import { ParkingSpots } from '../ParkingSpots/parkingSpots';
import { mapViewStyles } from './mapViewStyles';

type MapComponentProps = {
  latitude: number;
  longitude: number;
};

export const mapRef = createRef<MapView>();

export const MapComponent = ({ latitude, longitude }: MapComponentProps) => {
  const { currentSpot } = useSelector((state: RootState) => state.parkingSpots);
  const { destination } = useSelector((state: RootState) => state.destination);
  const [origin, setOrigin] = useState({ latitude, longitude });
  const { data } = useGetSpotsQuery();

  useEffect(() => {
    setOrigin({ latitude, longitude });
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
      {destination && (
        <View>
          <DestinationMarker mapDest={destination} />
          <ParkingSpots />
        </View>
      )}
      {currentSpot && (
        <MapViewDirections
          origin={origin}
          destination={{ latitude: currentSpot.lat, longitude: currentSpot.lng }}
          apikey={DIRECTIONS_API_KEY} // insert your API Key here
          strokeWidth={10}
          strokeColor="#7145D6"
        />
      )}
    </MapView>
  );
};
