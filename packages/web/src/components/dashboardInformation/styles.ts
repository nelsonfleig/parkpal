import { Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledPaper = styled(Paper)((props) => ({
  color: 'white',
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  width: '20%',
  height: 'min-content;',
  backgroundColor: props.theme.palette.secondary.main,
  ':hover': {
    backgroundColor: props.theme.palette.secondary.light,
  },
  boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;',
}));

export const StyledBox = styled(Box)(() => ({
  color: 'white',
  padding: '4rem 8rem',
  paddingBottom: '0rem',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  height: 'calc(100vh - 108px)',
}));
