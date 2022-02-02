import { LocationGeocodedLocation } from 'expo-location';
import { View } from 'react-native';
import { Circle, Marker } from 'react-native-maps';
import { FontAwesome5 } from '@expo/vector-icons';
import { useRef } from 'react';

type DestProps = {
  mapDest: LocationGeocodedLocation;
};

export const DestinationMarker = ({ mapDest }: DestProps) => {
  const circleRef = useRef<any>();
  return (
    <View>
      <Marker coordinate={{ latitude: mapDest.latitude, longitude: mapDest.longitude }}>
        <FontAwesome5 name="map-marker-alt" size={40} color="#E04040" />
      </Marker>
      <Circle
        ref={circleRef}
        onLayout={() => {
          if (circleRef.current) {
            circleRef.current.setNativeProps({
              strokeColor: 'transparent',
              fillColor: 'rgba(126, 113, 233, 0.3)',
            });
          }
        }}
        center={{ latitude: mapDest.latitude, longitude: mapDest.longitude }}
        radius={300}
      />
    </View>
  );
};
