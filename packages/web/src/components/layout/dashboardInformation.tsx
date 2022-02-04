import { Box, CircularProgress, Modal, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React, { FC, useEffect } from 'react';
import { toast } from 'react-toastify';
import {
  MeDocument,
  Role,
  SeriesDataItem,
  useGetMyBusinessStatsQuery,
  useUpdateProfileMutation,
} from '../../graphql/__generated__';
import { useAuth } from '../../hooks/useAuth';
import { upgradeSchema } from '../../models/upgradeUser.form';
import { CenteredPaper, ProfileLabel, StyledBox, StyledPaper } from '../common/dashboard';
import { FormikSubmitProfile } from '../formik/formik-submit';
import { FormikText } from '../formik/formik-text';
import { enhanceTimeSeries } from '../../helpers';

const buildChart = (timeSeries: Array<SeriesDataItem>) => ({
  title: {
    text: 'Daily Revenue',
    style: {
      color: '#fff',
    },
  },
  legend: {
    itemStyle: { color: 'white' },
  },
  series: [
    {
      name: 'Day',
      data: timeSeries.map(({ sum }) => sum),
    },
  ],
  xAxis: {
    title: {
      // text: 'TEST',
      style: {
        color: 'white',
      },
    },
    categories: timeSeries.map(({ date }) => date),
    lineColor: '#fff',
    tickColor: '#fff',
    labels: {
      style: {
        color: '#fff',
      },
    },
  },
  yAxis: {
    gridLineWidth: 0,
    minorGridLineWidth: 0,
    title: {
      text: 'EUR',
      style: {
        color: 'white',
      },
    },
    lineColor: '#fff',
    lineWidth: 1,
    tickWidth: 1,
    tickColor: '#fff',
    labels: {
      style: {
        color: '#fff',
      },
    },
  },
  chart: {
    backgroundColor: '#0A2540',
    borderRadius: '.5rem',
    style: {
      color: '#f00',
    },
    renderTo: 'container',
  },
});

export const DashboardInformation: FC = () => {
  const [AddRenter, setAddRenter] = React.useState(false);
  const { user, loading } = useAuth();
  const [updateProfile] = useUpdateProfileMutation({
    refetchQueries: [MeDocument],
    awaitRefetchQueries: true,
  });
  const { data, loading: statsLoading } = useGetMyBusinessStatsQuery();

  useEffect(() => {
    if (user) {
      if (!user.roles.includes(Role.Renter)) {
        setAddRenter(true);
      }
    }
  }, [AddRenter, user, loading]);

  if (statsLoading || !data) return <CircularProgress />;

  return (
    <StyledBox>
      <StyledPaper>
        <Typography variant="body2">Total Revenue This Week</Typography>
        <Typography variant="h3" color="white">
          {data.stats.totalRevenue}€
        </Typography>
      </StyledPaper>
      <StyledPaper>
        <Typography variant="body2">Total Bookings This Week</Typography>
        <Typography variant="h3" color="white">
          {data.stats.totalReservations}
        </Typography>
      </StyledPaper>
      <StyledPaper>
        <Typography variant="body2">Total Complains This Week</Typography>
        <Typography variant="h3" color="white">
          {data.stats.totalComplaints}
        </Typography>
      </StyledPaper>
      <Box style={{ width: '100%' }}>
        <HighchartsReact
          highcharts={Highcharts}
          options={buildChart(enhanceTimeSeries(data.stats.timeSeries))}
        />
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
