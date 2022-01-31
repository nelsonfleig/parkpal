import { Link, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import { toast } from 'react-toastify';
import { AuthFormWrapper, PageTitle, HomeLayout, AuthBottomText } from '../components/common';
import { FormikSubmit } from '../components/formik/formik-submit';
import { FormikText } from '../components/formik/formik-text';
import { useRegisterMutation } from '../graphql/__generated__';
import { registerSchema } from '../models/register.form';

const Register = () => {
  const [register] = useRegisterMutation();
  const router = useRouter();

  return (
    <HomeLayout>
      <PageTitle variant="h2" color="white" textAlign="center" mt="80px">
        ParkPal <span>| Renters</span>
      </PageTitle>
      <AuthFormWrapper elevation={3}>
        <Typography variant="h4" textAlign="center">
          Register
        </Typography>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={registerSchema}
          onSubmit={async ({ confirmPassword, ...values }, { setSubmitting }) => {
            try {
              await register({
                variables: {
                  input: values,
                },
              });
              toast.success("You've created an account. Please sign in.");
              router.push('/');
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
              <FormikText name="firstName" label="First Name" fullWidth />
              <FormikText name="lastName" label="Last Name" fullWidth />
              <FormikText name="email" label="Email" fullWidth />
              <FormikText name="password" label="Password" type="password" fullWidth />
              <FormikText
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                fullWidth
              />
              <FormikSubmit loading={isSubmitting} disabled={!isValid || isSubmitting}>
                Register
              </FormikSubmit>
              <AuthBottomText variant="body1">
                Already have an account?{' '}
                <Link href="/">
                  <a>Sign in here</a>
                </Link>
                .
              </AuthBottomText>
            </Form>
          )}
        </Formik>
      </AuthFormWrapper>
    </HomeLayout>
  );
};

export default Register;
