import { FC } from 'react';
import { useParkingSpotComplainsQuery } from '../../graphql/__generated__';
import { FullPageLoader } from '../common/fullpage-loader.tsx';
import { ComplainCard } from './complainCard';
import { ComplainBox } from './dashboardComplainsStyles';

export const DashboardComplains: FC = () => {
  const { data, loading } = useParkingSpotComplainsQuery();
  if (!data || loading) return <FullPageLoader />;

  return (
    <ComplainBox>
      {data.complains.map((el) => (
        <ComplainCard key={el.id} complain={el} />
      ))}
    </ComplainBox>
  );
};
