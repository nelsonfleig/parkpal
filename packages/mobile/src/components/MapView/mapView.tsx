import { createRef, useEffect, useState } from 'react';
import MapView from 'react-native-maps';
import { useSelector } from 'react-redux';
import { useGetSpotsQuery } from '../../graphql/__generated__';
import { RootState } from '../../redux';
import { DestinationMarker } from '../DestinationMarker/destinationMarker';
// eslint-disable-next-line import/no-cycle
import { MapViewRoute } from '../MapViewRoute/mapViewRoute';
import { ParkingSpots } from '../ParkingSpots/parkingSpots';
import { mapViewStyles } from './mapViewStyles';

type MapComponentProps = {
  latitude: number;
  longitude: number;
};

export const mapRef = createRef<MapView>();

export const MapComponent = ({ latitude, longitude }: MapComponentProps) => {
  const { currentSpot, bookingSpot } = useSelector((state: RootState) => state.parkingSpots);
  const { destination } = useSelector((state: RootState) => state.destination);
  const { showRoute } = useSelector((state: RootState) => state.showRoute);
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
        <>
          <DestinationMarker />
          <ParkingSpots />
        </>
      )}
      {showRoute && <MapViewRoute source={currentSpot} origin={origin} mapRef={mapRef} />}
      {showRoute && <MapViewRoute source={bookingSpot} origin={origin} mapRef={mapRef} />}
    </MapView>
  );
};
