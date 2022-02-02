import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HomeIcon from '@mui/icons-material/Home';
import { styled } from '@mui/material/styles';
import { NextComponentType } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { StyledSidebar } from '../../common/dashboard';

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
      <Link href="/home" passHref>
        <a>
          <StyledHomeIcon />
        </a>
      </Link>
      <Link href="/calendar" passHref>
        <a>
          <StyledCalendar />
        </a>
      </Link>
      <Link href="/dashboard/parking-spots" passHref>
        <a
          onMouseEnter={() => setIsShown('/logoPurple.svg')}
          onMouseLeave={() => setIsShown('/logo.svg')}>
          <Image src={isShown} alt="ParkPal Logo" width={60} height={60} />
        </a>
      </Link>
    </StyledSidebar>
  );
};
