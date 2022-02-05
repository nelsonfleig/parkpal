// @ts-expect-error
import { DIRECTIONS_API_KEY } from '@env';
import { createRef, useEffect, useState } from 'react';
import { Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { useSelector } from 'react-redux';

import SpotIcon from '../../../assets/images/Spot-icon.png';

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
      {showRoute && currentSpot && (
        <MapViewDirections
          origin={origin}
          destination={{ latitude: currentSpot.lat, longitude: currentSpot.lng }}
          apikey={DIRECTIONS_API_KEY}
          strokeWidth={10}
          strokeColor="#7145D6"
          onReady={() => {
            mapRef.current?.animateCamera(
              {
                center: {
                  latitude: (currentSpot.lat + origin.latitude) / 2,
                  longitude: (currentSpot.lng + origin.longitude) / 2,
                },
                heading: 0,
                zoom: 14,
                pitch: 0,
                altitude: 0,
              },
              { duration: 500 }
            );
          }}
        />
      )}
      {showRoute && currentSpot && (
        <Marker coordinate={{ latitude: currentSpot.lat, longitude: currentSpot.lng }}>
          <Image source={SpotIcon} style={{ width: 50, height: 50 }} />
        </Marker>
      )}
    </MapView>
  );
};
