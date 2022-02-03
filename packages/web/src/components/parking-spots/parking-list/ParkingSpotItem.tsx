import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ParkingSpotDetailsFragment } from '../../../graphql/__generated__';
// import { getAddressForCoords } from '../../../lib/geocoding';

type Props = {
  parkingSpot: ParkingSpotDetailsFragment;
};

const ParkingItemWrapper = styled.div`
  background: ${(props) => props.theme.palette.secondary.main};
  padding: 10px;
`;

export const ParkingSpotItem = ({ parkingSpot }: Props) => {
  // const [address, setAddress] = useState('');

  useEffect(() => {
    // (async () => {
    //   const { lat, lng } = parkingSpot;
    //   getAddressForCoords({ lat, lng }).then((data) => {
    //     console.log(data);
    //   });
    // })();
  }, []);

  return (
    <ParkingItemWrapper>
      <Typography variant="body1">
        lat: {parkingSpot.lat.toFixed(4)}, lng: {parkingSpot.lng.toFixed(4)}
      </Typography>
      <br />
    </ParkingItemWrapper>
  );
};
