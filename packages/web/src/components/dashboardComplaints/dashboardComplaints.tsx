import { Masonry } from '@mui/lab';
import { FC } from 'react';
import { useParkingSpotComplainsQuery } from '../../graphql/__generated__';
import { FullPageLoader } from '../common/fullpage-loader.tsx';
import { ComplainCard } from './complainCard';

export const DashboardComplains: FC = () => {
  const { data, loading } = useParkingSpotComplainsQuery();
  if (!data || loading) return <FullPageLoader />;

  return (
    <Masonry columns={2} spacing={1}>
      {data.complains.map((el) => (
        <ComplainCard key={el.id} complain={el} />
      ))}
    </Masonry>
  );
};
