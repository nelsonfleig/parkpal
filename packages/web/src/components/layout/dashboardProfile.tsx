import { Form, Formik } from 'formik';
import { Typography, Box, Modal } from '@mui/material';
import { toast } from 'react-toastify';
import React, { FC } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import {
  EditPen,
  InfoText,
  ProfileBox,
  StyledProfilePic,
  StyledProfileBox,
  CenteredPaper,
  ProfileLabel,
} from '../common/dashboard';
import { FormikText } from '../formik/formik-text';
import { FormikSubmitProfile } from '../formik/formik-submit';
import { useAuth } from '../../hooks/useAuth';
import { useUpdateProfileMutation, MeDocument } from '../../graphql/__generated__';

export const DashboardProfile: FC = () => {
  const [openSensitive, setOpenSensitive] = React.useState(false);
  const [openInfo, setOpenInfo] = React.useState(false);
  const { user, loading } = useAuth();

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
        </ProfileBox>
      </Box>
      <Modal
        open={openSensitive}
        onClose={() => setOpenSensitive(false)}
        aria-labelledby="modal-modal-title">
        <CenteredPaper>
          <Formik
            initialValues={{
              bankInfo: user.bankInfo,
            }}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                await updateProfile({
                  variables: {
                    input: values,
                  },
                });
                toast.success('Information Updated!');
                setOpenInfo(false);
              } catch (error) {
                if (error instanceof Error) {
                  toast.error(error.message);
                }
              } finally {
                setSubmitting(false);
              }
            }}>
            {({ isValid, isSubmitting }) => (
              <Form>
                <ProfileLabel>Current Password</ProfileLabel>
                <FormikText name="password" fullWidth value="0000" type="password" disabled />
                <ProfileLabel>Current Bank Information</ProfileLabel>
                <FormikText name="bankInfo" fullWidth />
                <FormikSubmitProfile loading={isSubmitting} disabled={!isValid || isSubmitting}>
                  Save Changes
                </FormikSubmitProfile>
              </Form>
            )}
          </Formik>
        </CenteredPaper>
      </Modal>
      <Modal open={openInfo} onClose={() => setOpenInfo(false)} aria-labelledby="modal-modal-title">
        <CenteredPaper>
          <Formik
            initialValues={{
              firstName: user.firstName,
              lastName: user.lastName,
              phone: user.phone,
            }}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                await updateProfile({
                  variables: {
                    input: values,
                  },
                });
                toast.success('Information Updated!');
                setOpenInfo(false);
              } catch (error) {
                if (error instanceof Error) {
                  toast.error(error.message);
                }
              } finally {
                setSubmitting(false);
              }
            }}>
            {({ isValid, isSubmitting }) => (
              <Form>
                <ProfileLabel>Current First Name</ProfileLabel>
                <FormikText name="firstName" fullWidth />
                <ProfileLabel>Current Last Name</ProfileLabel>
                <FormikText name="lastName" fullWidth />
                <ProfileLabel>Email (non-changable)</ProfileLabel>
                <FormikText name="email" fullWidth disabled value={`${user.email}`} />
                <ProfileLabel>Current Phone Number</ProfileLabel>
                <FormikText name="phone" fullWidth />

                <FormikSubmitProfile loading={isSubmitting} disabled={!isValid || isSubmitting}>
                  Save Changes
                </FormikSubmitProfile>
              </Form>
            )}
          </Formik>
        </CenteredPaper>
      </Modal>
    </StyledProfileBox>
  );
};
