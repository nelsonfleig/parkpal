import { Avatar, styled, Typography, Box } from '@mui/material';
import React, { FC } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import EditIcon from '@mui/icons-material/Edit';
import { StyledProfileBox } from '../common/dashboard';

const StyledAvatar = styled(Avatar)(() => ({
  color: 'inherit',
  height: '300px',
  width: '300px',
  ':hover': {
    opacity: '0.5',
  },
}));

const ProfileBox = styled(Box)(() => ({
  display: 'flex',
  gap: '140px',
  flexWrap: 'wrap',
}));

const InfoText = styled(Box)(() => ({
  display: 'flex',
  gap: '8px',
  alignItems: 'baseline',
  margin: '.8rem 0rem',
}));

const EditPen = styled(EditIcon)((props) => ({
  position: 'absolute',
  right: '0',
  top: '0',
  color: props.theme.palette.primary.light,
  ':hover': {
    cursor: 'pointer',
    color: props.theme.palette.primary.dark,
  },
}));

export const DashboardProfile: FC = () => (
  <StyledProfileBox>
    <StyledAvatar alt="Profile Picture" src="/testProfilePic.jpg" />
    <Box>
      <Typography variant="h4">Ivan Wojczestwinsky</Typography>
      <Typography variant="h5" color="gray" marginBottom="2rem">
        Renter
      </Typography>
      <ProfileBox>
        <Box sx={{ position: 'relative' }}>
          <AccountCircleIcon color="primary" fontSize="large" sx={{ marginBottom: '1rem' }} />
          <InfoText>
            <EditPen />
            <Typography variant="h6" fontWeight="700">
              First Name:
            </Typography>
            <Typography variant="body2" fontSize="1.1rem">
              Ivan
            </Typography>
          </InfoText>
          <InfoText>
            <Typography variant="h6" fontWeight="700">
              Last Name:
            </Typography>
            <Typography variant="body2" fontSize="1.1rem">
              Wojczestwinsky
            </Typography>
          </InfoText>
          <InfoText>
            <Typography variant="h6" fontWeight="700">
              Email Adress:
            </Typography>
            <Typography variant="body2" fontSize="1.1rem">
              Ivan@bly.at
            </Typography>
          </InfoText>
          <InfoText>
            <Typography variant="h6" fontWeight="700">
              Phone:
            </Typography>
            <Typography variant="body2" fontSize="1.1rem">
              +44 430 124 999
            </Typography>
          </InfoText>
        </Box>
        <Box sx={{ position: 'relative' }}>
          <LockIcon color="primary" fontSize="large" sx={{ marginBottom: '1rem' }} />

          <InfoText>
            <EditPen />
            <Typography variant="h6" fontWeight="700">
              Password:
            </Typography>
            <Typography variant="body2" fontSize="1.1rem">
              *******
            </Typography>
          </InfoText>
          <InfoText>
            <Typography variant="h6" fontWeight="700">
              Bank Information:
            </Typography>
            <Typography variant="body2" fontSize="1.1rem">
              Sum Bank Information
            </Typography>
          </InfoText>
        </Box>
      </ProfileBox>
    </Box>
  </StyledProfileBox>
);
