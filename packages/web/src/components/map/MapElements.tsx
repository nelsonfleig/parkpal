import React from 'react';
import { icon } from 'leaflet';
import { Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { setMarker } from '../../redux/marker/markerSlice';

const ICON = icon({
  iconUrl: '/images/marker.png',
  iconSize: [32, 32],
});

export const MapElements = () => {
  // const markerPos = useMarkerPos();

  const marker = useSelector((state: RootState) => state.marker);
  const dispatch = useDispatch();

  useMapEvents({
    click: (e) => {
      // setMarkerPos(e.latlng);
      const { lat, lng } = e.latlng;
      dispatch(setMarker({ lat, lng }));
    },
  });

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Circle center={coords} radius={10} /> */}
      {marker && (
        <Marker icon={ICON} position={marker}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      )}
    </>
  );
};
