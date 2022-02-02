import Typography from '@mui/material/Typography';
import { Form, Formik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { toast } from 'react-toastify';
import { AuthBottomText, AuthFormWrapper } from '../components/common';
import { FormikSubmit } from '../components/formik/formik-submit';
import { FormikText } from '../components/formik/formik-text';
import { AuthLayout } from '../components/layout/auth-layout';
import { useLoginMutation } from '../graphql/__generated__';
import { loginSchema } from '../models/login.form';

const Login = () => {
  const [login] = useLoginMutation();
  const router = useRouter();
  return (
    <AuthLayout>
      <AuthFormWrapper elevation={3}>
        <Typography variant="h4" textAlign="center" gutterBottom>
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
              <FormikText name="email" label="Email" fullWidth size="medium" margin="dense" />
              <FormikText
                name="password"
                label="Password"
                type="password"
                size="medium"
                margin="dense"
                fullWidth
              />
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
    </AuthLayout>
  );
};

export default Login;
