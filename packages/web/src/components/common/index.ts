import { Typography, Paper } from '@mui/material';
import styled from 'styled-components';

// Generic Styled Components for Layouts

export const AuthFormWrapper = styled(Paper)`
  background: white;
  padding: 40px;
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
  margin-top: 50px;
`;

export const AuthBottomText = styled(Typography)`
  margin: 20px 0;
  a {
    color: ${(props) => props.theme.palette.primary.main};
    transition: all 0.2s ease-in-out;
    &:hover {
      color: ${(props) => props.theme.palette.primary.dark};
      text-decoration: underline;
    }
  }
`;
