import { Button, Paper, Box } from '@mui/material';
import { styled } from '@mui/system';
import { withTheme } from '@material-ui/styles';

const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.palette.primary.main};
`;

// export const StyledButton = styled(withTheme(Button))((props) => ({
//   background: props.theme.palette.primary.main,
//   color: props.theme.palette.secondary.main,
// }));

const StyledButtons = () => {
  return (
    <div>
      <StyledButton>rgoerjgo</StyledButton>
    </div>
  );
};

export default StyledButtons;
