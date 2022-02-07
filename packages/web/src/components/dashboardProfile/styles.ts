import { Avatar, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledProfileBox = styled(Box)(() => ({
  color: 'black',
  padding: '3rem',
  display: 'flex',
  flexWrap: 'wrap',
  height: 'calc(100vh - 88px)',
  gap: '30px',
  paddingTop: '3rem',
  paddingBottom: '3rem',
  paddingLeft: '3rem',
  paddingRight: '1rem',
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
