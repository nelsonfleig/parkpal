import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    h1: {
      fontWeight: 600,
      color: '#263238',
    },
    h2: {
      fontWeight: 600,
      color: '#263238',
    },
    h3: {
      fontWeight: 600,
      color: '#263238',
    },
    body1: {
      color: '#1a2027',
    },
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#7145D6',
    },
    secondary: {
      main: '#000',
    },
  },
});

export default theme;
