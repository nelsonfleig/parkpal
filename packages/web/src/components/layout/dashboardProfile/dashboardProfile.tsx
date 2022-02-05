import { Typography, Box } from '@mui/material';
import React, { FC } from 'react';
import { ProfileBox, StyledProfilePic, StyledProfileBox } from '../../common/dashboard';
import { useAuth } from '../../../hooks/useAuth';
import {
  useUpdateProfileMutation,
  useLoginMutation,
  MeDocument,
} from '../../../graphql/__generated__';
import { BasicProfileInformationModal } from '../../modals/profile/info-basic';
import { SensitiveProfileInformationModal } from '../../modals/profile/info-sensitive';
import { BasicProfileInformation } from './forms/basicInformation';
import { SensitiveProfileInformation } from './forms/sensitiveInformation';

export const DashboardProfile: FC = () => {
  const [openSensitive, setOpenSensitive] = React.useState(false);
  const [openInfo, setOpenInfo] = React.useState(false);
  const { user, loading } = useAuth();

  const [login] = useLoginMutation({});

  const [updateProfile] = useUpdateProfileMutation({
    refetchQueries: [MeDocument],
    awaitRefetchQueries: true,
  });

  if (!user || loading) return <p>Loading State</p>;

  return (
    <StyledProfileBox>
      <StyledProfilePic alt="Profile Picture" src="/testProfilePic.jpg" />
      <Box>
        <Typography variant="h4">{`${user.firstName} ${user.lastName}`}</Typography>
        <Typography variant="h5" color="gray" marginBottom="2rem">
          Renter
        </Typography>
        <ProfileBox>
          <BasicProfileInformation setOpenInfo={setOpenInfo} user={user} />
          <SensitiveProfileInformation setOpenSensitive={setOpenSensitive} user={user} />
        </ProfileBox>
      </Box>
      <SensitiveProfileInformationModal
        openSensitive={openSensitive}
        setOpenSensitive={setOpenSensitive}
        updateProfile={updateProfile}
        login={login}
      />

      <BasicProfileInformationModal
        openInfo={openInfo}
        setOpenInfo={setOpenInfo}
        updateProfile={updateProfile}
      />
    </StyledProfileBox>
  );
};
