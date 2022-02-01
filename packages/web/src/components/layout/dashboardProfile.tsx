import { Avatar, styled, Typography, Box } from '@mui/material';
import React, { FC } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import { StyledProfileBox } from '../common/dashboard';

const StyledAvatar = styled(Avatar)(() => ({
  color: 'inherit',
  height: '300px',
  width: '300px',
  ':hover': {
    opacity: '0.5',
  },
}));

// const ProfileBox = styled(Box)(() => ({
//   display: 'flex',
//   alignItems: 'center',
// }));

export const DashboardProfile: FC = () => (
  <StyledProfileBox sx={{ color: '#000', padding: '3rem' }}>
    <StyledAvatar alt="Profile Picture" src="/testProfilePic.jpg" />
    <Box>
      <Typography variant="h4">Ivan Wojczestwinsky</Typography>
      <Typography variant="h5" color="gray">
        Renter
      </Typography>
      <Box
        sx={{
          display: 'flex',
          backgroundColor: 'red',
          justifyContent: 'space-between',
          width: '100%',
          gap: '100px',
        }}>
        <Box>
          <AccountCircleIcon color="primary" fontSize="large" />
          <Box sx={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
            <Typography variant="h6" fontWeight="700">
              First Name:
            </Typography>
            <Typography variant="body2" fontSize="1.1rem">
              Ivan
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
            <Typography variant="h6" fontWeight="700">
              Last Name:
            </Typography>
            <Typography variant="body2" fontSize="1.1rem">
              Wojczestwinsky
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
            <Typography variant="h6" fontWeight="700">
              Email Adress:
            </Typography>
            <Typography variant="body2" fontSize="1.1rem">
              Ivan@bly.at
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
            <Typography variant="h6" fontWeight="700">
              Phone:
            </Typography>
            <Typography variant="body2" fontSize="1.1rem">
              +44 430 124 999
            </Typography>
          </Box>
        </Box>
        <Box>
          <LockIcon color="primary" fontSize="large" />
          <Box sx={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
            <Typography variant="h6" fontWeight="700">
              First Name:
            </Typography>
            <Typography variant="body2" fontSize="1.1rem">
              Ivan
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
            <Typography variant="h6" fontWeight="700">
              Last Name:
            </Typography>
            <Typography variant="body2" fontSize="1.1rem">
              Wojczestwinsky
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
            <Typography variant="h6" fontWeight="700">
              Email Adress:
            </Typography>
            <Typography variant="body2" fontSize="1.1rem">
              Ivan@bly.at
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
            <Typography variant="h6" fontWeight="700">
              Phone:
            </Typography>
            <Typography variant="body2" fontSize="1.1rem">
              +44 430 124 999
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  </StyledProfileBox>
);
