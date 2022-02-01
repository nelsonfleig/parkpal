import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HomeIcon from '@mui/icons-material/Home';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { NextComponentType } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const StyledSidebar = styled(Box)((props) => ({
  color: '#fff',
  backgroundColor: props.theme.palette.secondary.light,
  height: 'calc(100vh - 88px)',
  width: '115px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem',
  paddingTop: '3rem',
}));

const StyledHomeIcon = styled(HomeIcon)((props) => ({
  color: 'inherit',
  height: '60px',
  width: '60px',
  ':hover': {
    color: props.theme.palette.primary.light,
  },
}));

const StyledCalendar = styled(CalendarTodayIcon)((props) => ({
  color: 'inherit',
  height: '50px',
  width: '50px',
  ':hover': {
    color: props.theme.palette.primary.light,
  },
}));

export const DashboardSidebar: NextComponentType = () => {
  const [isShown, setIsShown] = useState('/logo.svg');

  return (
    <StyledSidebar>
      <Link href="/dashboard" passHref>
        <StyledHomeIcon />
      </Link>
      <Link href="/calendar" passHref>
        <StyledCalendar />
      </Link>
      <Link href="/myParkingSpots" passHref>
        <div
          onMouseEnter={() => setIsShown('/logoPurple.svg')}
          onMouseLeave={() => setIsShown('/logo.svg')}>
          <Image src={isShown} alt="ParkPal Logo" width={60} height={60} />
        </div>
      </Link>
    </StyledSidebar>
  );
};
