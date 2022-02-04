import { icon } from 'leaflet';
import React, { useEffect } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import { useSelector } from 'react-redux';
import { useFindMyParkingSpotsQuery } from '../../graphql/__generated__';
import { RootState } from '../../redux';

const ICON = icon({
  iconUrl: '/images/spot-marker.png',
  iconSize: [45, 45],
});

export const MyParkingSpots = () => {
  const { data, loading } = useFindMyParkingSpotsQuery({
    fetchPolicy: 'network-only',
  });

  const { center } = useSelector((state: RootState) => state.map);
  const map = useMap();

  useEffect(() => {
    if (center) {
      map.setView(center, 17);
    }
  }, [center, map]);

  if (!data || loading) return null;

  return (
    <>
      {data.parkingSpots.map(({ id, street, zipCode, city, lat, lng, price }) => (
        <Marker key={id} icon={ICON} position={{ lat, lng }}>
          <Popup>
            Id #{id} <br />
            {street}
            <br />
            {zipCode} {city}
            <br />
            {price} €/hr
          </Popup>
        </Marker>
      ))}
    </>
  );
};
