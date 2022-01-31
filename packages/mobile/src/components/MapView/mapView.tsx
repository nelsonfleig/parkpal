import MapView, { Circle, Marker, Polyline } from 'react-native-maps';

import { mapViewStyles } from './mapViewStyles';

export const MapComponent = ({ latitude, longitude }: { latitude: number; longitude: number }) => (
  <MapView
    provider="google"
    style={mapViewStyles.map}
    initialRegion={{
      latitude,
      longitude,
      latitudeDelta: 0.001,
      longitudeDelta: 0.01,
    }}>
    <Marker coordinate={{ latitude, longitude }} pinColor="blue" />
    <Circle
      center={{ latitude, longitude }}
      radius={400}
      strokeColor="blue"
      fillColor="rgba(126, 113, 233, 0.3)"
    />
    <Polyline
      coordinates={[
        { latitude, longitude },
        { latitude: 41.39912511303243, longitude: 2.1943598288348753 },
      ]}
    />
  </MapView>
);
