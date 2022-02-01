import { Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledPaper = styled(Paper)((props) => ({
  color: 'white',
  padding: '2rem',
  display: 'flex',

  flexDirection: 'column',
  gap: '10px',
  width: '300px',
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
