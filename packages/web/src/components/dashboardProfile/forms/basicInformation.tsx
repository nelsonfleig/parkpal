import { Typography, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { EditPen, InfoText } from '../../common/dashboard';

type Props = {
  setOpenInfo: (value: boolean) => void;
  user: any;
};

export const BasicProfileInformation = ({ setOpenInfo, user }: Props) => (
  <Box sx={{ position: 'relative' }}>
    <AccountCircleIcon color="primary" fontSize="large" sx={{ marginBottom: '1rem' }} />
    <InfoText>
      <EditPen onClick={() => setOpenInfo(true)} />
      <Typography variant="h6" fontWeight="600" fontSize="1.1rem">
        First name:
      </Typography>
      <Typography variant="body2" fontSize="1.0rem">
        {user.firstName}
      </Typography>
    </InfoText>
    <InfoText>
      <Typography variant="h6" fontWeight="600" fontSize="1.1rem">
        Last name:
      </Typography>
      <Typography variant="body2" fontSize="1.0rem">
        {user.lastName}
      </Typography>
    </InfoText>
    <InfoText>
      <Typography variant="h6" fontWeight="600" fontSize="1.1rem">
        Email address:
      </Typography>
      <Typography variant="body2" fontSize="1.0rem">
        {user.email}
      </Typography>
    </InfoText>
    <InfoText>
      <Typography variant="h6" fontWeight="600" fontSize="1.1rem">
        Phone:
      </Typography>
      <Typography variant="body2" fontSize="1.0rem">
        {user.phone}
      </Typography>
    </InfoText>
  </Box>
);
