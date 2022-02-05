import { Popper } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NextComponentType } from 'next';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { StyledButton } from '../../common/dashboard';
import { useAuth } from '../../../hooks/useAuth';
import { MeDocument, useLogoutMutation } from '../../../graphql/__generated__';
import {
  StyledAvatar,
  StyledBurger,
  PopperButton,
  StyledPopper,
  StyledProfilePaper,
} from './styles';

export const NavBar: NextComponentType = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const [logout] = useLogoutMutation({
    refetchQueries: [MeDocument],
    awaitRefetchQueries: true,
  });

  const handleLogout = async () => {
    await logout();
  };

  const { user, loading } = useAuth();
  if (!user || loading) return <p>Loading State</p>;

  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: '#fff' }}>
        <Toolbar>
          <StyledBurger />

          <Box sx={{ flexGrow: 1 }}>
            <Image src="/result.svg" alt="ParkPal Logo" width={280} height={66} />
          </Box>
          <StyledProfilePaper onClick={handleClick}>
            <StyledAvatar alt="Avatar Picture" src="/static/images/avatar/1.jpg" />
            <Box>
              <Typography sx={{ color: 'black', fontWeight: '600' }} variant="h6">
                {`${user.firstName} ${user.lastName}`}
              </Typography>
              <Typography sx={{ color: 'gray' }} variant="body1">
                Renter
              </Typography>
            </Box>
            <Popper open={open} anchorEl={anchorEl}>
              <StyledPopper>
                <Link href="/dashboard/profile" passHref>
                  <PopperButton>
                    <AccountCircleIcon color="primary" fontSize="large" />
                    <Typography variant="h5" fontSize="1.1rem">
                      Profile
                    </Typography>
                  </PopperButton>
                </Link>
                <Link href="/dashboard/complaints" passHref>
                  <PopperButton>
                    <ErrorIcon color="primary" fontSize="large" />
                    <Typography variant="h5" fontSize="1.1rem">
                      Complaints
                    </Typography>
                  </PopperButton>
                </Link>
                <StyledButton onClick={() => handleLogout()}>Logout</StyledButton>
              </StyledPopper>
            </Popper>
          </StyledProfilePaper>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
