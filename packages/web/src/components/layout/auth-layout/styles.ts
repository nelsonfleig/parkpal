import { Typography } from '@mui/material';
import styled from 'styled-components';

export const AuthLayoutWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('/images/home-bg.jpg') no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PageTitle = styled(Typography)`
  text-shadow: 0 1px 4px rgb(0 0 0 / 30%);
  color: white;
  span {
    font-weight: 300;
  }
`;
