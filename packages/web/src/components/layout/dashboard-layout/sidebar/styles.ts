import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HomeIcon from '@mui/icons-material/Home';

export const StyledSidebar = styled(Box)((props) => ({
  color: '#fff',
  backgroundColor: props.theme.palette.secondary.light,
  height: 'calc(100vh - 88px)',
  width: '115px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem',
  paddingTop: '3rem',
}));

export const StyledHomeIcon = styled(HomeIcon)((props) => ({
  color: 'inherit',
  height: '60px',
  width: '60px',
  ':hover': {
    color: props.theme.palette.primary.light,
  },
}));

export const StyledCalendar = styled(CalendarTodayIcon)((props) => ({
  color: 'inherit',
  height: '50px',
  width: '50px',
  ':hover': {
    color: props.theme.palette.primary.light,
  },
}));
