import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HomeIcon from '@mui/icons-material/Home';
import styledComponent from 'styled-components';

export const StyledSidebar = styled(Box)((props) => ({
  color: '#fff',
  backgroundColor: props.theme.palette.secondary.light,
  height: 'calc(100vh - 88px)',
  width: '6rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem',
  paddingTop: '3rem',
}));

export const StyledHomeIcon = styled(HomeIcon)((props) => ({
  color: 'inherit',
  height: '45px',
  width: '45px',
  ':hover': {
    color: props.theme.palette.primary.light,
  },
}));

export const StyledCalendar = styled(CalendarTodayIcon)(() => ({
  color: 'inherit',
  height: '40px',
  width: '40px',
}));

export const SidebarLink = styledComponent.a`
 display:flex;
 flex-direction:column;
 text-align:center;
 align-items:center;
 color:#fff;
 text-transform:uppercase;
 &:hover {
  color:#7747e6
}
`;

export const SidebarText = styledComponent.span`
  margin-top:0.5rem;
  color:#fff;
  font-size:0.7rem;

`;
