import { Typography } from '@mui/material';
import { Form, Formik, FormikValues } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createParkingSchema } from '../../../models/create-parking.form';
import { FormikText, FormikSubmit } from '../../formik';
import { ParkingSpotFormWrapper } from './style';
import { RootState } from '../../../redux';

const initialValues: FormikValues = {
  price: '',
};

export const ParkingCreateForm = () => {
  const marker = useSelector((state: RootState) => state.marker);

  return (
    <ParkingSpotFormWrapper>
      <Typography variant="h5" gutterBottom>
        Create Parking Space
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={createParkingSchema}
        onSubmit={(values) => {
          if (!marker) {
            toast.error('Please set a marker');
            return;
          }
          try {
            console.log(values);
          } catch (error) {
            if (error instanceof Error) {
              toast.error(error.message);
            }
          }
        }}>
        {({ isValid, isSubmitting }) => (
          <Form>
            <FormikText
              name="price"
              placeholder="Price (€)"
              type="number"
              fullWidth
              margin="dense"
              size="small"
            />
            <FormikSubmit disabled={!isValid || isSubmitting} loading={isSubmitting}>
              Create
            </FormikSubmit>
          </Form>
        )}
      </Formik>
    </ParkingSpotFormWrapper>
  );
};
