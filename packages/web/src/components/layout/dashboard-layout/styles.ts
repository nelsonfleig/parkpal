import { Avatar, Box, Paper, Typography } from '@mui/material';
import { styled as styledMUI } from '@mui/material/styles';
import styled from 'styled-components';

import { randomColor } from '../../../helpers/navbar';

export const DashboardWrapper = styled.div`
  overflow: hidden;
  height: 100vh;
`;

export const DashboardContent = styled.div`
  display: grid;
  height: calc(100% - 88px);
  grid-template-columns: 115px 1fr;
  grid-template-rows: 1fr;
  overflow: hidden;
  position: relative;
`;

export const DashboardBody = styled.main`
  flex-grow: 1;
  min-height: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 10px;
`;

export const ProfileBox = styledMUI(Box)(() => ({
  display: 'flex',
  gap: '140px',
  flexWrap: 'wrap',
}));

export const StyledAvatar = styled(Avatar)(() => ({
  margin: '20px',
  height: '60px',
  width: '60px',
  backgroundColor: randomColor(),
}));

export const StyledBurger = styled(Box)((props) => ({
  color: 'inherit',
  backgroundColor: props.theme.palette.primary.light,
  height: '88px',
  width: '6rem',
  marginLeft: '-1.5rem',
}));

export const PopperButton = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '0.5rem',
  ':hover': {
    cursor: 'pointer',
  },
}));

export const StyledPopper = styled(Paper)(() => ({
  marginTop: '10px',
  padding: '20px 60px',
  boxShadow: ' rgba(0, 0, 0, 0.35) 0px 5px 15px;',
}));

export const StyledProfilePaper = styled(Paper)(() => ({
  minWidth: '280px',
  color: 'inherit',
  background: 'none',
  outline: 'none',
  boxShadow: 'none',
  height: '88px',
  borderLeft: 'solid 2px #cfcfcf',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '0',
  ':hover': {
    cursor: 'pointer',
  },
}));

export const LogoWrapper = styled(Box)`
  display: flex;
  padding: 0 10px;
`;

export const LogoTitle = styled(Typography)`
  padding: 0 10px;
  font-size: 30px;
  display: flex;
  span {
    margin-left: 7px;
    align-self: center;
    font-size: 30px;
    font-weight: 400;
  }
`;
