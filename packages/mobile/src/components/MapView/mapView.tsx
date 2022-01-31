import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { SafeAreaView } from 'react-native-safe-area-context';

import { API_DIRECTIONS_KEY } from '@env';
import { mapViewStyles } from './mapViewStyles';

export const MapComponent = ({ latitude, longitude }: { latitude: number; longitude: number }) => {
  const [origin, setOrigin] = useState({ latitude, longitude });
  const [destination] = useState({ latitude: 41.39912511303243, longitude: 2.1943598288348753 });

  useEffect(() => {
    setOrigin({ latitude, longitude });
  }, [latitude, longitude]);

  return (
    <SafeAreaView>
      <Text>{origin.latitude}</Text>
      <MapView
        provider="google"
        style={mapViewStyles.map}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.01,
        }}
        showsUserLocation
        followsUserLocation>
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={API_DIRECTIONS_KEY} // insert your API Key here
          strokeWidth={10}
          strokeColor="#111111"
        />
      </MapView>
    </SafeAreaView>
  );
};
