import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { DashboardSidebar } from './dashboardSidebar';
import { NavBar } from './navbar';
import { DashboardBody, DashboardContent, DashboardWrapper } from './styles';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export const DashboardLayout = ({ children }: DashboardLayoutProps) => (
  // const { isAuthenticated, loading } = useAuth();
  // const router = useRouter();

  // useEffect(() => {
  //   if (!loading && !isAuthenticated) {
  //     router.push('/');
  //   }
  // }, [isAuthenticated, loading, router]);

  <DashboardWrapper>
    <NavBar />
    <DashboardContent>
      <DashboardSidebar />
      <DashboardBody>{children}</DashboardBody>
    </DashboardContent>
  </DashboardWrapper>
);
