import { icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { useSelector } from 'react-redux';
import useGeolocation from '../../hooks/useGeolocation';
import { RootState } from '../../redux';
import { MapElements } from './MapElements';
import { MyParkingSpots } from './MyParkingSpots';

const ICON = icon({
  iconUrl: '/images/marker.png',
  iconSize: [45, 45],
});

const Map = () => {
  const { isCreateMode } = useSelector((state: RootState) => state.parkingSpots);
  const { data } = useGeolocation();

  return (
    <MapContainer
      center={data}
      zoom={20}
      scrollWheelZoom
      style={{ height: '600px', width: '100%', flex: '1' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={data} icon={ICON} />
      {isCreateMode ? <MapElements /> : <MyParkingSpots />}
    </MapContainer>
  );
};
export default Map;
