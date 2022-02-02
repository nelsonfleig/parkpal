import { Box, Typography } from '@mui/material';
import React, { FC } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { StyledBox, StyledPaper, GraphStyle } from '../common/dashboard';

export const DashboardInformation: FC = () => (
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
    <Box style={{ width: '100%' }}>
      <HighchartsReact highcharts={Highcharts} options={GraphStyle} />
    </Box>
  </StyledBox>
);
