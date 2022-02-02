import { Form, Formik } from 'formik';
import { Typography, Box, Modal } from '@mui/material';
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

export const DashboardProfile: FC = () => {
  const [openSensitive, setOpenSensitive] = React.useState(false);
  const handleOpenSensitive = () => setOpenSensitive(true);
  const handleCloseSensitive = () => setOpenSensitive(false);

  const [openInfo, setOpenInfo] = React.useState(false);
  const handleOpenInfo = () => setOpenInfo(true);
  const handleCloseInfo = () => setOpenInfo(false);

  return (
    <StyledProfileBox>
      <StyledProfilePic alt="Profile Picture" src="/testProfilePic.jpg" />
      <Box>
        <Typography variant="h4">Ivan Wojczestwinsky</Typography>
        <Typography variant="h5" color="gray" marginBottom="2rem">
          Renter
        </Typography>
        <ProfileBox>
          <Box sx={{ position: 'relative' }}>
            <AccountCircleIcon color="primary" fontSize="large" sx={{ marginBottom: '1rem' }} />
            <InfoText>
              <EditPen onClick={handleOpenInfo} />
              <Typography variant="h6" fontWeight="700">
                First Name:
              </Typography>
              <Typography variant="body2" fontSize="1.1rem">
                Ivan
              </Typography>
            </InfoText>
            <InfoText>
              <Typography variant="h6" fontWeight="700">
                Last Name:
              </Typography>
              <Typography variant="body2" fontSize="1.1rem">
                Wojczestwinsky
              </Typography>
            </InfoText>
            <InfoText>
              <Typography variant="h6" fontWeight="700">
                Email Adress:
              </Typography>
              <Typography variant="body2" fontSize="1.1rem">
                Ivan@bly.at
              </Typography>
            </InfoText>
            <InfoText>
              <Typography variant="h6" fontWeight="700">
                Phone:
              </Typography>
              <Typography variant="body2" fontSize="1.1rem">
                +44 430 124 999
              </Typography>
            </InfoText>
          </Box>
          <Box sx={{ position: 'relative' }}>
            <LockIcon color="primary" fontSize="large" sx={{ marginBottom: '1rem' }} />
            <InfoText>
              <EditPen onClick={handleOpenSensitive} />
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
                Sum Bank Information
              </Typography>
            </InfoText>
          </Box>
        </ProfileBox>
      </Box>
      <Modal
        open={openSensitive}
        onClose={handleCloseSensitive}
        aria-labelledby="modal-modal-title">
        <CenteredPaper>
          <Formik
            initialValues={{}}
            onSubmit={async () => {
              // console.log('yep');
            }}>
            {({ isValid, isSubmitting }) => (
              <Form>
                <ProfileLabel>Current Password</ProfileLabel>
                <FormikText name="name" fullWidth value="Ivan" type="password" disabled />
                <ProfileLabel>Current Bank Information</ProfileLabel>
                <FormikText name="name" fullWidth value="Sum Bank Information" />
                <FormikSubmitProfile loading={isSubmitting} disabled={!isValid || isSubmitting}>
                  Save Changes
                </FormikSubmitProfile>
              </Form>
            )}
          </Formik>
        </CenteredPaper>
      </Modal>
      <Modal open={openInfo} onClose={handleCloseInfo} aria-labelledby="modal-modal-title">
        <CenteredPaper>
          <Formik
            initialValues={{}}
            onSubmit={async () => {
              // console.log('yep');
            }}>
            {({ isValid, isSubmitting }) => (
              <Form>
                <ProfileLabel>Current First Name</ProfileLabel>
                <FormikText name="name" fullWidth value="Ivan" />
                <ProfileLabel>Current Last Name</ProfileLabel>
                <FormikText name="name" fullWidth value="Polish Name" />
                <ProfileLabel>Email</ProfileLabel>
                <FormikText name="name" fullWidth disabled value="Cannot Change Email" />
                <ProfileLabel>Current Phone Number</ProfileLabel>
                <FormikText name="name" fullWidth value="323905 045" />

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
