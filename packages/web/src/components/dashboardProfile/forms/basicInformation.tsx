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
      <Typography variant="h6" fontWeight="700">
        First Name:
      </Typography>
      <Typography variant="body2" fontSize="1.1rem">
        {user.firstName}
      </Typography>
    </InfoText>
    <InfoText>
      <Typography variant="h6" fontWeight="700">
        Last Name:
      </Typography>
      <Typography variant="body2" fontSize="1.1rem">
        {user.lastName}
      </Typography>
    </InfoText>
    <InfoText>
      <Typography variant="h6" fontWeight="700">
        Email Adress:
      </Typography>
      <Typography variant="body2" fontSize="1.1rem">
        {user.email}
      </Typography>
    </InfoText>
    <InfoText>
      <Typography variant="h6" fontWeight="700">
        Phone:
      </Typography>
      <Typography variant="body2" fontSize="1.1rem">
        {user.phone}
      </Typography>
    </InfoText>
  </Box>
);
