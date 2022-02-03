import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { AuthLayoutWrapper, PageTitle } from './styles';

type AuthLayoutProps = {
  children: React.ReactNode;
};

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  const { isAuthenticated } = useAuth();
  console.log('AUTH', isAuthenticated);
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) router.push('/dashboard');
  }, [isAuthenticated, router]);

  return (
    <AuthLayoutWrapper>
      <PageTitle variant="h2" textAlign="center" mt="60px">
        ParkPal <span>| Renters</span>
      </PageTitle>
      {children}
    </AuthLayoutWrapper>
  );
};
