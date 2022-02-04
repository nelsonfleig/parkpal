import { Box, CircularProgress, Typography } from '@mui/material';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React, { FC } from 'react';
import { SeriesDataItem, useGetMyBusinessStatsQuery } from '../../graphql/__generated__';
import { enhanceTimeSeries } from '../../helpers';
import { StyledBox, StyledPaper } from '../common/dashboard';

const buildChart = (timeSeries: Array<SeriesDataItem>) => ({
  title: {
    text: 'Daily Revenue',
    style: {
      color: '#fff',
    },
  },
  legend: {
    itemStyle: { color: 'white' },
  },
  series: [
    {
      name: 'Day',
      data: timeSeries.map(({ sum }) => sum),
    },
  ],
  xAxis: {
    title: {
      // text: 'TEST',
      style: {
        color: 'white',
      },
    },
    categories: timeSeries.map(({ date }) => date),
    lineColor: '#fff',
    tickColor: '#fff',
    labels: {
      style: {
        color: '#fff',
      },
    },
  },
  yAxis: {
    gridLineWidth: 0,
    minorGridLineWidth: 0,
    title: {
      text: 'EUR',
      style: {
        color: 'white',
      },
    },
    lineColor: '#fff',
    lineWidth: 1,
    tickWidth: 1,
    tickColor: '#fff',
    labels: {
      style: {
        color: '#fff',
      },
    },
  },
  chart: {
    backgroundColor: '#0A2540',
    borderRadius: '.5rem',
    style: {
      color: '#f00',
    },
    renderTo: 'container',
  },
});

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
