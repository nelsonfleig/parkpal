import { icon } from 'leaflet';
import React from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { setMarker } from '../../redux/map/mapSlice';

const ICON = icon({
  iconUrl: '/images/spot-marker.png',
  iconSize: [32, 32],
});

export const MapElements = () => {
  // const markerPos = useMarkerPos();

  const { marker } = useSelector((state: RootState) => state.map);
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
