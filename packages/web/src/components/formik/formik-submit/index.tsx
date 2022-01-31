import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const SubmitButton = styled(Button)`
  margin-top: 100px;
`;

type FormikSubmitProps = {
  children: React.ReactNode;
  disabled: boolean;
  loading: boolean;
};

export const FormikSubmit = ({ children, disabled, loading }: FormikSubmitProps) => (
  <SubmitButton
    size="large"
    type="submit"
    variant="contained"
    fullWidth
    disabled={disabled}
    // loading={loading}
  >
    {children}
  </SubmitButton>
);
