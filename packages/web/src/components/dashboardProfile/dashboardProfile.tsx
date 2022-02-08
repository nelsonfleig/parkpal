import { Box, Typography } from '@mui/material';
import React, { FC } from 'react';
import {
  MeDocument,
  useLoginMutation,
  useUpdateProfileMutation,
} from '../../graphql/__generated__';
import { useAuth } from '../../hooks/useAuth';
import { BasicProfileInformationModal } from '../modals/profile/info-basic';
import { SensitiveProfileInformationModal } from '../modals/profile/info-sensitive';
import { BasicProfileInformation } from './forms/basicInformation';
import { ProfileImageUpload } from './forms/profileImageUpload';
import { SensitiveProfileInformation } from './forms/sensitiveInformation';
import { ProfileBox, StyledProfileBox } from './styles';

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
      <ProfileImageUpload pictureUrl={user.pictureUrl} />

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
