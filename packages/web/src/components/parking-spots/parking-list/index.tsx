import { Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { useFindMyParkingSpotsQuery } from '../../../graphql/__generated__';
import { ParkingSpotItem } from './ParkingSpotItem';

const ParkingColumn = styled.div``;

export const ParkingList = () => {
  const { data, loading } = useFindMyParkingSpotsQuery();

  if (!data || loading) return <h1>loading...</h1>;

  return (
    <ParkingColumn>
      {data.parkingSpots.length ? (
        data.parkingSpots.map((p) => <ParkingSpotItem key={p.id} parkingSpot={p} />)
      ) : (
        <Typography variant="h6" align="center">
          You have no parking spots
        </Typography>
      )}
    </ParkingColumn>
  );
};
