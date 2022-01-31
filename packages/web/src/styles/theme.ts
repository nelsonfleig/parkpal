import { createTheme } from '@mui/material/styles';

const theme = createTheme({
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
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          color: '#fff',
          fontSize: '20px',
          fontWeight: '700',
          padding: '25px',
          borderRadius: '5px',
          // backgroundColor: '#7145D6',
        },
      },
    },
  },
});

export default theme;
