import Typography from '@mui/material/Typography';
import { Form, Formik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { AuthFormWrapper, PageTitle, HomeLayout, AuthBottomText } from '../components/common';
import { FormikSubmit } from '../components/formik/formik-submit';
import { FormikText } from '../components/formik/formik-text';
import { useLoginMutation } from '../graphql/__generated__';
import { useAuth } from '../hooks/useAuth';
import { loginSchema } from '../models/login.form';

const Login = () => {
  const [login] = useLoginMutation();
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) router.push('/dashboard');
  }, [isAuthenticated]);

  return (
    <HomeLayout>
      <PageTitle variant="h1" textAlign="center" mt="80px">
        ParkPal <span>| Renters</span>
      </PageTitle>
      <AuthFormWrapper elevation={3}>
        <Typography variant="h4" textAlign="center">
          Login
        </Typography>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={loginSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              console.log(values);
              await login({
                variables: {
                  input: values,
                },
              });
              router.push('/dashboard');
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
              <FormikText name="email" label="Email" fullWidth />
              <FormikText name="password" label="Password" type="password" fullWidth />
              <FormikSubmit loading={isSubmitting} disabled={!isValid || isSubmitting}>
                Sign in
              </FormikSubmit>
              <AuthBottomText variant="body1">
                Don't have an account?{' '}
                <Link href="/register">
                  <a>Register here</a>
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

export default Login;
