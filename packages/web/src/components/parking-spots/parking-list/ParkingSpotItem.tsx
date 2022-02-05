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
  },
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
