import { NextComponentType } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import { SidebarLink, SidebarText, StyledCalendar, StyledHomeIcon, StyledSidebar } from './styles';

export const DashboardSidebar: NextComponentType = () => {
  const [isShown, setIsShown] = useState('/logo.svg');
  return (
    <StyledSidebar>
      <Link href="/dashboard" passHref>
        <SidebarLink>
          <StyledHomeIcon />
          <SidebarText>home</SidebarText>
        </SidebarLink>
      </Link>
      <Link href="/dashboard/calendar" passHref>
        <SidebarLink>
          <StyledCalendar />
          <SidebarText>schedule</SidebarText>
        </SidebarLink>
      </Link>
      <Link href="/dashboard/parking-spots" passHref>
        <SidebarLink
          onMouseEnter={() => setIsShown('/logoPurple.svg')}
          onMouseLeave={() => setIsShown('/logo.svg')}>
          <Image src={isShown} alt="ParkPal Logo" width={50} height={50} />
          <SidebarText>my parking spots</SidebarText>
        </SidebarLink>
      </Link>
    </StyledSidebar>
  );
};
