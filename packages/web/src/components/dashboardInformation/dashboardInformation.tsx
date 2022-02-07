import { Box, CircularProgress, Typography } from '@mui/material';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Link from 'next/link';
import React, { FC } from 'react';
import {
  useGetMyBusinessStatsQuery,
  useParkingSpotComplainsQuery,
} from '../../graphql/__generated__';
import { enhanceTimeSeries } from '../../helpers';
import { buildChart } from './graph';
import { StyledPaper, StyledBox } from './styles';

export const DashboardInformation: FC = () => {
  const { data, loading } = useGetMyBusinessStatsQuery();
  const { data: complains } = useParkingSpotComplainsQuery();

  if (loading || !data || !complains) return <CircularProgress />;
  return (
    <StyledBox>
      <StyledPaper>
        <Typography variant="body2">Total Revenue This Week</Typography>
        <Typography variant="h3" color="white">
          {data.stats.totalRevenue}€
        </Typography>
      </StyledPaper>
      <Link href="/dashboard/calendar" passHref>
        <StyledPaper>
          <Typography variant="body2">Total Bookings This Week</Typography>
          <Typography variant="h3" color="white">
            {data.stats.totalReservations}
          </Typography>
        </StyledPaper>
      </Link>
      <Link href="/dashboard/complaints" passHref>
        <StyledPaper>
          <Typography variant="body2">Total Complaints This Week</Typography>
          <Typography variant="h3" color="white">
            {complains.complains.length}
          </Typography>
        </StyledPaper>
      </Link>
      <Box style={{ width: '100%' }}>
        <HighchartsReact
          highcharts={Highcharts}
          options={buildChart(enhanceTimeSeries(data.stats.timeSeries))}
        />
      </Box>
    </StyledBox>
  );
};
