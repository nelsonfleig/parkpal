import { Box, Typography, Modal } from '@mui/material';
import React, { FC, useEffect } from 'react';
import Highcharts from 'highcharts';
import { Form, Formik } from 'formik';
import { toast } from 'react-toastify';
import HighchartsReact from 'highcharts-react-official';
import { FormikText } from '../formik/formik-text';
import { FormikSubmitProfile } from '../formik/formik-submit';
import { upgradeSchema } from '../../models/upgradeUser.form';

import {
  StyledBox,
  StyledPaper,
  GraphStyle,
  CenteredPaper,
  ProfileLabel,
} from '../common/dashboard';
import { useAuth } from '../../hooks/useAuth';
import { useUpdateProfileMutation, MeDocument, Role } from '../../graphql/__generated__';

export const DashboardInformation: FC = () => {
  const [AddRenter, setAddRenter] = React.useState(false);
  const { user, loading } = useAuth();
  const [updateProfile] = useUpdateProfileMutation({
    refetchQueries: [MeDocument],
    awaitRefetchQueries: true,
  });

  useEffect(() => {
    if (user) {
      if (!user.roles.includes(Role.Renter)) {
        setAddRenter(true);
      }
    }
  }, [AddRenter, user, loading]);

  return (
    <StyledBox>
      <StyledPaper>
        <Typography variant="body2">Total Revenue This Week</Typography>
        <Typography variant="h3" color="white">
          150€
        </Typography>
      </StyledPaper>
      <StyledPaper>
        <Typography variant="body2">Total Bookings This Week</Typography>
        <Typography variant="h3" color="white">
          12
        </Typography>
      </StyledPaper>
      <StyledPaper>
        <Typography variant="body2">Total Complains This Week</Typography>
        <Typography variant="h3" color="white">
          3
        </Typography>
      </StyledPaper>
      <Box style={{ width: '100%' }}>
        <HighchartsReact highcharts={Highcharts} options={GraphStyle} />
      </Box>
      <Modal open={AddRenter} aria-labelledby="modal-modal-title">
        <CenteredPaper>
          <Formik
            initialValues={{
              phone: '',
              bankInfo: '',
            }}
            validationSchema={upgradeSchema}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                await updateProfile({
                  variables: {
                    input: values,
                  },
                });
                toast.success('Information Added!');
                setAddRenter(false);
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
                <ProfileLabel>Phone Number</ProfileLabel>
                <FormikText name="phone" fullWidth />
                <ProfileLabel>Bank Information</ProfileLabel>
                <FormikText name="bankInfo" fullWidth />
                <FormikSubmitProfile loading={isSubmitting} disabled={!isValid || isSubmitting}>
                  Add Information
                </FormikSubmitProfile>
              </Form>
            )}
          </Formik>
        </CenteredPaper>
      </Modal>
    </StyledBox>
  );
};
