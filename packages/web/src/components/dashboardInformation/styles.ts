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
  paddingBottom: '0rem',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  height: 'calc(100vh - 108px)',
}));
