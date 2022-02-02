import { icon } from 'leaflet';
import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { useFindMyParkingSpotsQuery } from '../../graphql/__generated__';

const ICON = icon({
  iconUrl: '/images/marker.png',
  iconSize: [32, 32],
});

export const MyParkingSpots = () => {
  const { data, loading } = useFindMyParkingSpotsQuery({
    fetchPolicy: 'network-only',
  });

  if (!data || loading) return null;

  return (
    <>
      {data.parkingSpots.map(({ id, lat, lng }) => (
        <Marker key={id} icon={ICON} position={{ lat, lng }}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      ))}
    </>
  );
};
