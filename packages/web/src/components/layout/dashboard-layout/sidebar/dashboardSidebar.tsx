import { NextComponentType } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { StyledCalendar, StyledHomeIcon, StyledSidebar } from './styles';

export const DashboardSidebar: NextComponentType = () => {
  const [isShown, setIsShown] = useState('/logo.svg');

  return (
    <StyledSidebar>
      <Link href="/dashboard" passHref>
        <a>
          <StyledHomeIcon />
        </a>
      </Link>
      <Link href="/dashboard/calendar" passHref>
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
