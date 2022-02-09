import { Modal } from '@mui/material';
import { Formik, Form } from 'formik';
import React from 'react';
import { toast } from 'react-toastify';
import { upgradeSchema } from '../../../models/upgradeUser.form';
import { CenteredPaper, ProfileLabel } from '../../common/dashboard';
import { FormikText, FormikSubmitProfile } from '../../formik';
import { MeDocument, useUpdateProfileMutation } from '../../../graphql/__generated__';

type Props = {
  addRenter: boolean;
  setAddRenter: (value: boolean) => void;
};

export const UpdateProfileModal = ({ addRenter, setAddRenter }: Props) => {
  const [updateProfile] = useUpdateProfileMutation({
    refetchQueries: [{ query: MeDocument }],
    awaitRefetchQueries: true,
  });

  return (
    <Modal open={addRenter} aria-labelledby="modal-modal-title">
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
  );
};
