import { Typography } from '@mui/material';
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { StyledBox, StyledPaper } from '../common/dashboard';

const options = {
  title: {
    text: 'Daily Revenue',
    style: {
      color: '#fff',
    },
  },
  series: [
    {
      data: [20, 50, 15, 20, 5],
    },
  ],
  xAxis: {
    title: {
      style: {
        color: 'white',
      },
    },
    categories: ['Monday', 'Tuesday', 'Wendesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    lineColor: '#fff',
    tickColor: '#fff',
    labels: {
      style: {
        color: '#fff',
        font: '11px Trebuchet MS, Verdana, sans-serif',
      },
    },
  },
  yAxis: {
    gridLineWidth: 0,
    minorGridLineWidth: 0,
    title: {
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
      fontFamily: 'monospace',
      color: '#f00',
    },
  },
};

export const Earnings = () => (
  <StyledBox>
    <StyledPaper>
      <Typography variant="body2">Total Revenue This Week</Typography>
      <Typography variant="h3" color="white">
        150€
      </Typography>
    </StyledPaper>
    <StyledPaper>
      <Typography variant="body2">Total Bookings This Week</Typography>
      <Typography variant="h3" color="white">
        12
      </Typography>
    </StyledPaper>
    <StyledPaper>
      <Typography variant="body2">Total Complains This Week</Typography>
      <Typography variant="h3" color="white">
        3
      </Typography>
    </StyledPaper>
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      styles={{ backgroundColor: 'red' }}
    />
  </StyledBox>
);
