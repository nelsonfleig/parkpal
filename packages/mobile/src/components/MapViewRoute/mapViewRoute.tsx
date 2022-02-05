// @ts-expect-error
import { DIRECTIONS_API_KEY } from '@env';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { Image } from 'react-native';
import { ParkingSpotDetailsFragment } from '../../graphql/__generated__';
import SpotIcon from '../../../assets/images/Spot-icon.png';

type MapViewRouteProps = {
  source:
    | ParkingSpotDetailsFragment
    | {
        lat: number;
        lng: number;
      }
    | null;
  origin: {
    latitude: number;
    longitude: number;
  };
  mapRef: React.RefObject<MapView>;
};

export const MapViewRoute = ({ source, origin, mapRef }: MapViewRouteProps) => {
  if (!source) return null;

  return (
    <>
      <MapViewDirections
        origin={origin}
        destination={{ latitude: source.lat, longitude: source.lng }}
        apikey={DIRECTIONS_API_KEY}
        strokeWidth={10}
        strokeColor="#7145D6"
        onReady={() => {
          mapRef.current?.animateCamera(
            {
              center: {
                latitude: (source.lat + origin.latitude) / 2,
                longitude: (source.lng + origin.longitude) / 2,
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
      <Marker coordinate={{ latitude: source.lat, longitude: source.lng }}>
        <Image source={SpotIcon} style={{ width: 50, height: 50 }} />
      </Marker>
    </>
  );
};
