import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../../types/rootStack';
import { useAuth } from '../../hooks/useAuth';

type AuthLayoutProps = {
  children: React.ReactNode;
};

type WelcomeProps = StackNavigationProp<RootStackParams, 'Home'>;

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  const { isAuthenticated } = useAuth();
  const navigation = useNavigation<WelcomeProps>();

  useEffect(() => {
    if (isAuthenticated) navigation.navigate('Home');
  }, [isAuthenticated, navigation]);

  return <>{children}</>;
};
