import { CircularProgress } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FullPageLoader = () => (
  <LoaderWrapper>
    <CircularProgress size={40} />
  </LoaderWrapper>
);
