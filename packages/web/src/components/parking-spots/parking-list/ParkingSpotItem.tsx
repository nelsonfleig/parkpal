import { Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { ParkingSpotDetailsFragment } from '../../../graphql/__generated__';
import { setCenter } from '../../../redux/map/mapSlice';

type Props = {
  parkingSpot: ParkingSpotDetailsFragment;
};

const ParkingItemWrapper = styled.div`
  background: ${(props) => props.theme.palette.secondary.main};
  padding: 10px;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background: ${(props) => props.theme.palette.secondary.light};
  }
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

const InfoItem = styled(Typography)`
  font-weight: 600;
  color: white;
  span {
    font-weight: 400;
  }
`;

export const ParkingSpotItem = ({
  parkingSpot: { id, street, zipCode, city, country, price, lat, lng },
}: Props) => {
  const dispatch = useDispatch();

  return (
    <ParkingItemWrapper onClick={() => dispatch(setCenter({ lat, lng }))}>
      <InfoItem variant="body1" gutterBottom>
        Parking spot #{id}
      </InfoItem>
      <InfoItem variant="body1" gutterBottom>
        <span>
          {street} <br />
          {zipCode} {city}, {country}
        </span>
      </InfoItem>
      <InfoItem variant="body1">{price} €/hr</InfoItem>
    </ParkingItemWrapper>
  );
};
