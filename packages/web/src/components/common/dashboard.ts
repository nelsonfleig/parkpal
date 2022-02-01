import { Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledPaper = styled(Paper)((props) => ({
  color: 'white',
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  width: '30%',
  height: 'min-content;',
  backgroundColor: props.theme.palette.secondary.main,
  ':hover': {
    backgroundColor: props.theme.palette.secondary.light,
  },
}));

export const StyledBox = styled(Box)(() => ({
  color: 'white',
  padding: '1rem',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  height: 'calc(100vh - 88px)',
  gap: '10px',
}));

export const StyledProfileBox = styled(Box)(() => ({
  color: 'black',
  padding: '3rem',
  display: 'flex',
  flexWrap: 'wrap',
  height: 'calc(100vh - 88px)',
  gap: '30px',
}));

export const GraphStyle = {
  title: {
    text: 'Daily Revenue',
    style: {
      color: '#fff',
    },
  },
  series: [
    {
      name: 'revenue',
      data: [20, 50, 12.5, 20, 52, 10, 3],
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
      color: '#f00',
    },
  },
};
