import EditIcon from '@mui/icons-material/Edit';

import { Box, Button, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CenteredPaper = styled(Paper)(() => ({
  maxWidth: '360px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '2rem',
}));

export const ProfileLabel = styled(Typography)(() => ({
  fontSize: '0.9rem',
  fontWeight: '600',
  marginTop: '10px',
}));

export const EditPen = styled(EditIcon)((props) => ({
  position: 'absolute',
  right: '0',
  top: '0',
  color: props.theme.palette.primary.light,
  ':hover': {
    cursor: 'pointer',
    color: props.theme.palette.primary.dark,
  },
}));

export const InfoText = styled(Box)(() => ({
  display: 'flex',
  gap: '8px',
  alignItems: 'baseline',
  margin: '.8rem 0rem',
}));

export const StyledButton = styled(Button)((props) => ({
  padding: '15px 50px !important',
  fontSize: '0.8rem !important',
  marginTop: '1rem',
  color: '#fff',
  backgroundColor: props.theme.palette.secondary.main,
  ':hover': {
    backgroundColor: props.theme.palette.secondary.light,
  },
}));
