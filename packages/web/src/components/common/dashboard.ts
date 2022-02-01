import { Box, Paper, Avatar, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import MenuIcon from '@mui/icons-material/Menu';

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
  marginBottom: '-12px',
  marginTop: '10px',
}));

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

export const StyledBox = styled(Box)(() => ({
  color: 'white',
  padding: '1rem',
  paddingBottom: '0rem',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  height: 'calc(100vh - 108px)',
}));

export const StyledProfileBox = styled(Box)(() => ({
  color: 'black',
  padding: '3rem',
  display: 'flex',
  flexWrap: 'wrap',
  height: 'calc(100vh - 88px)',
  gap: '30px',
  paddingTop: '3rem',
  paddingBottom: '3rem',
  paddingLeft: '3rem',
  paddingRight: '1rem',
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

export const StyledProfilePic = styled(Avatar)(() => ({
  color: 'inherit',
  height: '300px',
  width: '300px',
  ':hover': {
    opacity: '0.5',
  },
}));

export const ProfileBox = styled(Box)(() => ({
  display: 'flex',
  gap: '140px',
  flexWrap: 'wrap',
}));

export const InfoText = styled(Box)(() => ({
  display: 'flex',
  gap: '8px',
  alignItems: 'baseline',
  margin: '.8rem 0rem',
}));

export function randomColor() {
  const hex = Math.floor(Math.random() * 0xffffff);
  return `#${hex.toString(16)}`;
}

export const StyledAvatar = styled(Avatar)(() => ({
  margin: '20px',
  height: '60px',
  width: '60px',
  backgroundColor: randomColor(),
}));

export const StyledBurger = styled(MenuIcon)((props) => ({
  color: 'inherit',
  backgroundColor: props.theme.palette.primary.light,
  height: '88px',
  width: '115px',
  marginLeft: '-1.5rem',
}));

export const PopperButton = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '0.5rem',
  ':hover': {
    cursor: 'pointer',
  },
}));

export const StyledPopper = styled(Paper)(() => ({
  marginTop: '10px',
  padding: '20px 60px',
  boxShadow: ' rgba(0, 0, 0, 0.35) 0px 5px 15px;',
}));

export const StyledButton = styled(Button)((props) => ({
  padding: '5px 50px !important',
  fontSize: '0.8rem !important',
  marginTop: '1rem',
  backgroundColor: props.theme.palette.secondary.main,
  ':hover': {
    backgroundColor: props.theme.palette.secondary.light,
  },
}));

export const StyledProfilePaper = styled(Paper)(() => ({
  color: 'inherit',
  background: 'none',
  outline: 'none',
  boxShadow: 'none',
  height: '88px',
  borderLeft: 'solid 2px #cfcfcf',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '0',
}));

export const GraphStyle = {
  title: {
    text: 'Daily Revenue',
    style: {
      color: '#fff',
    },
  },
  series: [
    {
      name: 'revenue',
      data: [20, 50, 12.5, 20, 52, 10, 3],
    },
  ],
  xAxis: {
    title: {
      style: {
        color: 'white',
      },
    },
    categories: ['Monday', 'Tuesday', 'Wendesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    lineColor: '#fff',
    tickColor: '#fff',
    labels: {
      style: {
        color: '#fff',
      },
    },
  },
  yAxis: {
    gridLineWidth: 0,
    minorGridLineWidth: 0,
    title: {
      style: {
        color: 'white',
      },
    },
    lineColor: '#fff',
    lineWidth: 1,
    tickWidth: 1,
    tickColor: '#fff',
    labels: {
      style: {
        color: '#fff',
      },
    },
  },
  chart: {
    backgroundColor: '#0A2540',
    borderRadius: '.5rem',
    style: {
      color: '#f00',
    },
    renderTo: 'container',
  },
};
