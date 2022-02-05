import { Modal } from '@mui/material';
import { Form, Formik } from 'formik';
import React from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../../hooks/useAuth';
import { changePasswordSchema } from '../../../models/change-password.form';
import { CenteredPaper, ProfileLabel, StyledButton } from '../../common/dashboard';
import { FormikSubmitProfile, FormikText } from '../../formik';

type Props = {
  openSensitive: boolean;
  setOpenSensitive: (value: boolean) => void;
  updateProfile: Function;
  login: Function;
};

export const SensitiveProfileInformationModal = ({
  openSensitive,
  setOpenSensitive,
  updateProfile,
  login,
}: Props) => {
  const { user } = useAuth();
  const [changePassword, setChangePassword] = React.useState(false);

  return (
    <Modal
      open={openSensitive}
      onClose={() => {
        setOpenSensitive(false);
        setChangePassword(false);
      }}
      aria-labelledby="modal-modal-title">
      <CenteredPaper>
        {changePassword ? (
          <Formik
            initialValues={{
              changePasswordNew: '',
              changePasswordConfirm: '',
              changePasswordCurrent: '',
            }}
            validationSchema={changePasswordSchema}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                await login({
                  variables: {
                    input: { password: values.changePasswordCurrent, email: user.email },
                  },
                });
                if (values.changePasswordCurrent === values.changePasswordNew) {
                  toast.warning("It's the same dumbass!");
                } else {
                  await updateProfile({
                    variables: {
                      input: { password: values.changePasswordNew },
                    },
                  });
                  toast.success('Information Updated!');
                }
                setChangePassword(false);
                setOpenSensitive(false);
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
                <FormikText name="changePasswordCurrent" fullWidth type="password" required />
                <ProfileLabel>New </ProfileLabel>
                <FormikText name="changePasswordNew" fullWidth type="password" required />
                <ProfileLabel>Confirm </ProfileLabel>
                <FormikText name="changePasswordConfirm" fullWidth type="password" required />
                <FormikSubmitProfile loading={isSubmitting} disabled={!isValid || isSubmitting}>
                  Save Password
                </FormikSubmitProfile>
              </Form>
            )}
          </Formik>
        ) : (
          <Formik
            initialValues={{
              bankInfo: user.bankInfo,
            }}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                if (values.bankInfo === user.bankInfo) {
                  toast.warning('Warm Lentins!');
                } else {
                  await updateProfile({
                    variables: {
                      input: values,
                    },
                  });
                  toast.success('Information Updated!');
                }
                setOpenSensitive(false);
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
                <StyledButton
                  onClick={() => setChangePassword(true)}
                  fullWidth
                  sx={{
                    backgroundColor: '#7145D6',
                    marginBottom: '1rem',
                    ':hover': { backgroundColor: '#7747e6' },
                  }}>
                  Change Password
                </StyledButton>
                <ProfileLabel>Current Bank Information</ProfileLabel>
                <FormikText name="bankInfo" fullWidth />
                <FormikSubmitProfile loading={isSubmitting} disabled={!isValid || isSubmitting}>
                  Save Changes
                </FormikSubmitProfile>
              </Form>
            )}
          </Formik>
        )}
      </CenteredPaper>
    </Modal>
  );
};
