import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React from 'react';
import { Circle, MapContainer, TileLayer } from 'react-leaflet';
import { useSelector } from 'react-redux';
import { MapElements } from './MapElements';
import { RootState } from '../../redux';
import { MyParkingSpots } from './MyParkingSpots';

type MapProps = {
  coords: LatLngExpression;
};

const Map = ({ coords }: MapProps) => {
  const { isCreateMode } = useSelector((state: RootState) => state.parkingSpots);

  return (
    <MapContainer
      center={coords}
      zoom={20}
      scrollWheelZoom
      style={{ height: '500px', width: '100%', flex: '1' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Circle center={coords} radius={50} />
      {isCreateMode ? <MapElements /> : <MyParkingSpots />}
    </MapContainer>
  );
};
export default Map;
