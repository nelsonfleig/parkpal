import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Role } from '../../../graphql/__generated__';
import { useAuth } from '../../../hooks/useAuth';
import { FullPageLoader } from '../../common/fullpage-loader.tsx';
import { UpdateProfileModal } from '../../modals/update-profile/update-profile';
import { DashboardSidebar } from './dashboardSidebar';
import { NavBar } from './navbar';
import { DashboardBody, DashboardContent, DashboardWrapper } from './styles';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { user, isAuthenticated, loading } = useAuth();
  const [addRenter, setAddRenter] = React.useState(false);

  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/');
    }
    if (isAuthenticated) {
      if (!user.roles.includes(Role.Renter)) {
        setAddRenter(true);
      }
    }
  }, [isAuthenticated, loading, router, user]);

  if (loading || !isAuthenticated) {
    return <FullPageLoader />;
  }

  return (
    <DashboardWrapper>
      <NavBar />
      <DashboardContent>
        <DashboardSidebar />
        {addRenter ? (
          <UpdateProfileModal addRenter={addRenter} setAddRenter={setAddRenter} />
        ) : (
          <DashboardBody>{children}</DashboardBody>
        )}
      </DashboardContent>
    </DashboardWrapper>
  );
};
