import { Button, Paper, Box } from '@mui/material';
import { styled } from '@mui/system';
import { withTheme } from '@material-ui/styles';

// const StyledButton = styled(Button)`
//   background-color: ${(props) => props.theme.palette.primary.main};
//   &:hover {
//     background-color: #a9a9a9;
//   }
// `;

export const StyledButton = styled(withTheme(Button))((props) => ({
  background: props.theme.palette.primary.main,
  ':hover': {
    backgroundColor: props.theme.palette.primary.light,
  },
}));

export const AnotherButton = styled(withTheme(Button))((props) => ({
  background: props.theme.palette.secondary.main,
  ':hover': {
    backgroundColor: props.theme.palette.secondary.light,
  },
}));
