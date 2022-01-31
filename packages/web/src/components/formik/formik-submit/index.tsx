import { Button, CircularProgress } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const SubmitButton = styled(Button)`
  margin-top: 20px;
  padding: 12px !important;
`;

type FormikSubmitProps = {
  children: React.ReactNode;
  disabled: boolean;
  loading: boolean;
};

export const FormikSubmit = ({ children, disabled, loading }: FormikSubmitProps) => (
  <SubmitButton type="submit" size="small" variant="contained" fullWidth disabled={disabled}>
    {loading ? <CircularProgress color="secondary" size={30} /> : children}
  </SubmitButton>
);
