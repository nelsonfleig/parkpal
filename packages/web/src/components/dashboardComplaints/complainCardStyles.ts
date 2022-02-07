import { Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ComplainPaper = styled(Paper)(() => ({
  position: 'relative',
  padding: '1rem',
  backgroundColor: '#e63946',
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
}));

export const ComplainButton = styled(Button)(() => ({
  backgroundColor: '#fff',
  color: '#e63946',
  position: 'absolute',
  marginBottom: '1rem',
  bottom: '0',
  height: 'fit-content',
  ':hover': {
    backgroundColor: '#ffebeb',
  },
}));
