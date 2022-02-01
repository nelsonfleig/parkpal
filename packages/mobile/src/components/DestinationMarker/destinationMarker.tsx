import { LocationGeocodedLocation } from 'expo-location';
import { View } from 'react-native';
import { Circle, Marker } from 'react-native-maps';

type DestProps = {
  mapDest: LocationGeocodedLocation;
};

export const DestinationMarker = ({ mapDest }: DestProps) => (
  <View>
    <Marker coordinate={{ latitude: mapDest.latitude, longitude: mapDest.longitude }} />
    <Circle
      center={{ latitude: mapDest.latitude, longitude: mapDest.longitude }}
      radius={300}
      fillColor="rgba(126, 113, 233, 0.3)"
      strokeColor="transparent"
    />
  </View>
);
