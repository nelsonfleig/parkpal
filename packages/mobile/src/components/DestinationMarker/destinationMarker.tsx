import { View } from 'react-native';
import { Circle, Marker } from 'react-native-maps';
import { FontAwesome5 } from '@expo/vector-icons';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';

export const DestinationMarker = () => {
  const circleRef = useRef<any>();
  const { destination } = useSelector((state: RootState) => state.destination);

  return (
    destination && (
      <View>
        <Marker coordinate={{ latitude: destination.latitude, longitude: destination.longitude }}>
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
          center={{ latitude: destination.latitude, longitude: destination.longitude }}
          radius={300}
        />
      </View>
    )
  );
};
