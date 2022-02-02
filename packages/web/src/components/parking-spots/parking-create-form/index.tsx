import { Typography } from '@mui/material';
import { Form, Formik, FormikValues } from 'formik';
import React from 'react';
import { createParkingSchema } from '../../../models/create-parking.form';
import { FormikText, FormikSubmit } from '../../formik';
import { ParkingSpotFormWrapper } from './style';

const initialValues: FormikValues = {
  price: '',
};

export const ParkingCreateForm = () => (
  <ParkingSpotFormWrapper>
    <Typography variant="h5" gutterBottom>
      Create Parking Space
    </Typography>
    <Formik
      initialValues={initialValues}
      validationSchema={createParkingSchema}
      onSubmit={() => {
        // console.log(values);
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
