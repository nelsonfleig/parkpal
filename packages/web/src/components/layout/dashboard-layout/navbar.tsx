import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { CircularProgress, Popper } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NextComponentType } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MeDocument, useLogoutMutation } from '../../../graphql/__generated__';
import { useAuth } from '../../../hooks/useAuth';
import { StyledButton } from '../../common/dashboard';
import {
  LogoTitle,
  LogoWrapper,
  PopperButton,
  StyledAvatar,
  StyledBurger,
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
    refetchQueries: [{ query: MeDocument }],
    awaitRefetchQueries: true,
  });

  const handleLogout = async () => {
    await logout();
  };

  const { user, loading } = useAuth();
  if (!user || loading) return <CircularProgress size={20} />;

  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: '#fff' }}>
        <Toolbar>
          <StyledBurger />
          <LogoWrapper sx={{ flexGrow: 1, alignItems: 'center' }}>
            <Image src="/logoPurple.svg" alt="ParkPal Logo" width={45} height={45} />
            <LogoTitle variant="h1" color="primary">
              ParkPal |<span> Renters</span>
            </LogoTitle>
          </LogoWrapper>
          <StyledProfilePaper onClick={handleClick}>
            <StyledAvatar
              alt={`${user.firstName} ${user.lastName} profile picture`}
              src={user.pictureUrl || '/static/images/avatar/1.jpg'}
            />
            <Box>
              <Typography sx={{ color: 'black', fontWeight: '600' }} variant="h6" fontSize="1.1rem">
                {`${user.firstName} ${user.lastName}`}
              </Typography>
              <Typography sx={{ color: 'gray' }} variant="body1" fontSize="0.9rem">
                Renter
              </Typography>
            </Box>
            <Popper open={open} anchorEl={anchorEl}>
              <StyledPopper>
                <Link href="/dashboard/profile" passHref>
                  <PopperButton>
                    <AccountCircleIcon color="primary" fontSize="large" />
                    <Typography variant="body1" fontSize="1rem">
                      Profile
                    </Typography>
                  </PopperButton>
                </Link>
                <Link href="/dashboard/complaints" passHref>
                  <PopperButton>
                    <ErrorIcon color="primary" fontSize="large" />
                    <Typography variant="body1" fontSize="1rem">
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
