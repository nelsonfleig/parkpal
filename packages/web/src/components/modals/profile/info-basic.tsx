import { Modal } from '@mui/material';
import { Form, Formik } from 'formik';
import React from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../../hooks/useAuth';
import { CenteredPaper, ProfileLabel } from '../../common/dashboard';
import { FormikSubmitProfile, FormikText } from '../../formik';

type Props = {
  openInfo: boolean;
  setOpenInfo: (value: boolean) => void;
  updateProfile: Function;
};

export const BasicProfileInformationModal = ({ openInfo, setOpenInfo, updateProfile }: Props) => {
  const { user } = useAuth();

  return (
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
              if (
                values.firstName === user.firstName &&
                values.lastName === user.lastName &&
                values.phone === user.phone
              ) {
                toast.warning('No change detected!');
              } else {
                await updateProfile({
                  variables: {
                    input: values,
                  },
                });
                toast.success('Information Updated!');
              }
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
  );
};
