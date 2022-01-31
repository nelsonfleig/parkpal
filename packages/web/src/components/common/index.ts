import { Typography, Paper } from '@mui/material';
import styled from 'styled-components';

// Generic Styled Components for Layouts
export const HomeLayout = styled.div`
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

export const AuthFormWrapper = styled(Paper)`
  background: white;
  padding: 20px;
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
