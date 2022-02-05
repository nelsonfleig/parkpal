import { Box, CircularProgress, Typography } from '@mui/material';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React, { FC } from 'react';
import { useGetMyBusinessStatsQuery } from '../../../graphql/__generated__';
import { enhanceTimeSeries } from '../../../helpers';
import { StyledBox, StyledPaper } from '../../common/dashboard';
import { buildChart } from './graph';

export const DashboardInformation: FC = () => {
  const { data, loading } = useGetMyBusinessStatsQuery();

  if (loading || !data) return <CircularProgress />;

  return (
    <StyledBox>
      <StyledPaper>
        <Typography variant="body2">Total Revenue This Week</Typography>
        <Typography variant="h3" color="white">
          {data.stats.totalRevenue}€
        </Typography>
      </StyledPaper>
      <StyledPaper>
        <Typography variant="body2">Total Bookings This Week</Typography>
        <Typography variant="h3" color="white">
          {data.stats.totalReservations}
        </Typography>
      </StyledPaper>
      <StyledPaper>
        <Typography variant="body2">Total Complains This Week</Typography>
        <Typography variant="h3" color="white">
          {data.stats.totalComplaints}
        </Typography>
      </StyledPaper>
      <Box style={{ width: '100%' }}>
        <HighchartsReact
          highcharts={Highcharts}
          options={buildChart(enhanceTimeSeries(data.stats.timeSeries))}
        />
      </Box>
    </StyledBox>
  );
};
