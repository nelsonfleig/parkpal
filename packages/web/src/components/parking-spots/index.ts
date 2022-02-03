import { Button } from '@mui/material';
import styled from 'styled-components';

export * from './parking-create-form';

// ParkingSpace Generic styles

export const ParkingSpotWrapper = styled.div`
  display: flex;
`;

export const ParkingInfoColumn = styled.div`
  width: 324px;
  padding-left: 24px;
`;

export const ParkingToggleButton = styled(Button)`
  margin-bottom: 20px;
`;
