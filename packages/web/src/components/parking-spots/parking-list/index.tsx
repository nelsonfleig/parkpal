import React from 'react';
import { useFindMyParkingSpotsQuery } from '../../../graphql/__generated__';

export const ParkingList = () => {
  const { data, loading } = useFindMyParkingSpotsQuery();

  if (!data || loading) return <h1>loading...</h1>;

  return (
    <div>
      {data.parkingSpots.map((p) => (
        <div key={p.id}>
          <p>
            lat: {p.lat}, lng: {p.lng}
          </p>
          <br />
        </div>
      ))}
    </div>
  );
};
