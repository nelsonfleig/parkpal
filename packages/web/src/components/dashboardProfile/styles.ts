import { Avatar, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import styledComponent from 'styled-components';

export const StyledProfileBox = styled(Box)(() => ({
  color: 'black',
  padding: '4rem 8rem',
  display: 'flex',
  flexWrap: 'wrap',
  height: 'calc(100vh - 88px)',
  gap: '30px',
}));

export const StyledProfilePic = styled(Avatar)(() => ({
  color: 'inherit',
  height: '300px',
  width: '300px',
  marginBottom: '20px',
  ':hover': {
    opacity: '0.5',
  },
}));

export const ProfileBox = styled(Box)(() => ({
  display: 'flex',
  gap: '140px',
  flexWrap: 'wrap',
}));

export const ProfileImageWrapper = styledComponent.div`  
  margin-right:2rem
`;
