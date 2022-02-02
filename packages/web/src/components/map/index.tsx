import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React from 'react';
import { Circle, MapContainer } from 'react-leaflet';
import { MapElements } from './MapElements';

type MapProps = {
  coords: LatLngExpression;
};

const Map = ({ coords }: MapProps) => (
  // const [markerPos, setMarkerPos] = useState<LatLngExpression>(coords);

  <MapContainer
    center={coords}
    zoom={20}
    scrollWheelZoom
    style={{ height: '500px', width: '100%', flex: '1' }}>
    <Circle center={coords} radius={50} />
    <MapElements />
  </MapContainer>
);
export default Map;
