import { Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {
  FindMyParkingSpotsDocument,
  useCreateParkingSpotMutation,
} from '../../../graphql/__generated__';
import { createParkingSchema } from '../../../models/create-parking.form';
import { RootState } from '../../../redux';
import { FormikSubmit, FormikText } from '../../formik';
import { FormikMultiSelect } from '../../formik/formik-multiselect';
import { FormikTime } from '../../formik/formik-time';
import { ParkingSpotFormWrapper } from './style';
import { toggleCreateMode } from '../../../redux/parking-spot/parkingSpotSlice';
import { clearMarker } from '../../../redux/marker/markerSlice';

interface InitialValues {
  price: number | string;
  startHour: string;
  endHour: string;
  daysAvailable: { name: string; value: number }[];
}

const initialValues: InitialValues = {
  price: '',
  startHour: null,
  endHour: null,
  daysAvailable: [],
};

export const ParkingCreateForm = () => {
  const { marker } = useSelector((state: RootState) => state.marker);
  const dispatch = useDispatch();

  const [createParkingSpot] = useCreateParkingSpotMutation({
    refetchQueries: [FindMyParkingSpotsDocument],
    awaitRefetchQueries: true,
  });

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
                  startHour,
                  endHour,
                  daysAvailable: values.daysAvailable.map((day) => day.value),
                },
              },
            });
            resetForm();
            dispatch(clearMarker());
            toast.success('Parking spot created!');
            dispatch(toggleCreateMode());
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
            <FormikMultiSelect label="Days available" name="daysAvailable" margin="normal" />
            <FormikSubmit
              disabled={!isValid || isSubmitting}
              loading={isSubmitting}
              color="secondary">
              Create
            </FormikSubmit>
          </Form>
        )}
      </Formik>
    </ParkingSpotFormWrapper>
  );
};
