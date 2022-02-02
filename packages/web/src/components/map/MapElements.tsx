import React from 'react';
import { icon } from 'leaflet';
import { Marker, Popup, TileLayer } from 'react-leaflet';
import { useMarkerPos } from '../../hooks/useMarkerPos';

const ICON = icon({
  iconUrl: '/images/marker.png',
  iconSize: [32, 32],
});

export const MapElements = () => {
  const markerPos = useMarkerPos();

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Circle center={coords} radius={10} /> */}
      {markerPos && (
        <Marker icon={ICON} position={markerPos}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      )}
    </>
  );
};
