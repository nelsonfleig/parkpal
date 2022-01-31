import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Paper } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NextComponentType } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';

const StyledBurger = styled(MenuIcon)((props) => ({
  color: 'inherit',
  backgroundColor: props.theme.palette.primary.light,
  height: '88px',
  width: '115px',
  marginLeft: '-1.5rem',
}));

const StyledProfilePaper = styled(Paper)(() => ({
  color: 'inherit',
  background: 'none',
  outline: 'none',
  boxShadow: 'none',
  height: '88px',
  borderLeft: 'solid 2px #cfcfcf',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '0',
}));
function randomColor() {
  const hex = Math.floor(Math.random() * 0xffffff);
  return `#${hex.toString(16)}`;
}

const StyledAvatar = styled(Avatar)(() => ({
  margin: '20px',
  height: '60px',
  width: '60px',
  backgroundColor: randomColor(),
}));

export const NavBar: NextComponentType = () => {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, loading, router]);

  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: '#fff' }}>
        <Toolbar>
          <StyledBurger />

          <Box sx={{ flexGrow: 1 }}>
            <Image src="/result.svg" alt="ParkPal Logo" width={280} height={66} />
          </Box>
          <StyledProfilePaper>
            <StyledAvatar alt="Avatar Picture" src="/static/images/avatar/1.jpg" />
            <Box>
              <Typography sx={{ color: 'black' }} variant="h6">
                <h4>Ivan Wojczestwinsky</h4>
              </Typography>
              <Typography sx={{ color: 'gray' }} variant="body1">
                Renter
              </Typography>
            </Box>
          </StyledProfilePaper>
        </Toolbar>
      </AppBar>
    </Box>
  );
};