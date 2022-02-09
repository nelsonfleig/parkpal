import { useMeQuery } from '../graphql/__generated__';

export const useAuth = () => {
  const { data, error, loading } = useMeQuery({
    fetchPolicy: 'network-only',
  });

  return {
    user: data?.me,
    isAuthenticated: Boolean(data?.me),
    error,
    loading,
  };
};
