import { Typography, Box } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { EditPen, InfoText } from '../../../common/dashboard';

type Props = {
  setOpenSensitive: (value: boolean) => void;
  user: any;
};

export const SensitiveProfileInformation = ({ setOpenSensitive, user }: Props) => (
  <Box sx={{ position: 'relative' }}>
    <LockIcon color="primary" fontSize="large" sx={{ marginBottom: '1rem' }} />
    <InfoText>
      <EditPen onClick={() => setOpenSensitive(true)} />
      <Typography variant="h6" fontWeight="700">
        Password:
      </Typography>
      <Typography variant="body2" fontSize="1.1rem">
        *******
      </Typography>
    </InfoText>
    <InfoText>
      <Typography variant="h6" fontWeight="700">
        Bank Information:
      </Typography>
      <Typography variant="body2" fontSize="1.1rem">
        {user.bankInfo}
      </Typography>
    </InfoText>
  </Box>
);
