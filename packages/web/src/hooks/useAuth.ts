import { useMeQuery } from '../graphql/__generated__';

export const useAuth = () => {
  const { data, error, loading } = useMeQuery();

  return {
    user: data?.me,
    isAuthenticated: Boolean(data),
    error,
    loading,
  };
};
