import { createTheme } from '@mui/material';

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
    h4: {
      fontWeight: 600,
      color: '#263238',
    },
    h5: {
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
      dark: '#633cbd',
      light: '#7747e6',
    },
    secondary: {
      main: '#0A2540',
      light: '#0d3257',
      dark: '#051626',
    },
  },
});

export default theme;
