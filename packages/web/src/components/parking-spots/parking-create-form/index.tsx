import { Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useCreateParkingSpotMutation } from '../../../graphql/__generated__';
import { createParkingSchema } from '../../../models/create-parking.form';
import { RootState } from '../../../redux';
import { FormikSubmit, FormikText } from '../../formik';
import { FormikMultiSelect } from '../../formik/formik-multiselect';
import { FormikTime } from '../../formik/formik-time';
import { ParkingSpotFormWrapper } from './style';

interface MyFormValues {
  price: string | number;
  startHour: string;
  endHour: string;
  daysAvailable: any[];
}

const initialValues: MyFormValues = {
  price: '',
  startHour: null,
  endHour: null,
  daysAvailable: [],
};

export const ParkingCreateForm = () => {
  const marker = useSelector((state: RootState) => state.marker);

  const [createParkingSpot] = useCreateParkingSpotMutation();

  return (
    <ParkingSpotFormWrapper>
      <Typography variant="h5" gutterBottom>
        Create Parking Space
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={createParkingSchema}
        enableReinitialize
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          if (!marker) {
            toast.error('Please set a marker');
            return;
          }
          try {
            const startHour = new Date(values.startHour).getHours();
            const endHour = new Date(values.endHour).getHours();
            await createParkingSpot({
              variables: {
                input: {
                  ...values,
                  ...marker,
                  price: Number(values.price),
                  startHour: Number(startHour),
                  endHour: Number(endHour),
                  daysAvailable: values.daysAvailable.map((day) => day.value),
                },
              },
            });
            resetForm();
            toast.success('Parking spot created!');
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
            <FormikText
              name="price"
              label="Price"
              placeholder="Price (€)"
              type="number"
              fullWidth
              margin="normal"
              size="medium"
            />
            <FormikTime label="Start hour" name="startHour" margin="normal" />
            <FormikTime label="End hour" name="endHour" margin="normal" />
            <FormikMultiSelect name="daysAvailable" margin="normal" />
            <FormikSubmit disabled={!isValid || isSubmitting} loading={isSubmitting}>
              Create
            </FormikSubmit>
          </Form>
        )}
      </Formik>
    </ParkingSpotFormWrapper>
  );
};
