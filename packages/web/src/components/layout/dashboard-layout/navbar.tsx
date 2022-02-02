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
import {
  StyledButton,
  PopperButton,
  StyledAvatar,
  StyledBurger,
  StyledPopper,
  StyledProfilePaper,
} from '../../common/dashboard';

export const NavBar: NextComponentType = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);

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
              <Typography sx={{ color: 'black' }} variant="h6">
                <h4>Vladimír Farkašovský</h4>
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
                <StyledButton>Logout</StyledButton>
              </StyledPopper>
            </Popper>
          </StyledProfilePaper>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
