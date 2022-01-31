import { Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Form, Formik } from 'formik';
import React from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { FormikSubmit } from '../components/formik/formik-submit';
import { FormikText } from '../components/formik/formik-text';
import { useLoginMutation } from '../graphql/__generated__';
import { loginSchema } from '../models/login.form';

type Props = {};

const HomeLayout = styled.div`
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url('/images/home-bg.jpg') no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageTitle = styled(Typography)`
  text-shadow: 0 1px 4px rgb(0 0 0 / 30%);
  span {
    font-weight: 300;
  }
`;

const FormWrapper = styled(Paper)`
  background: white;
  padding: 20px;
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
  margin-top: 50px;
`;

const Login = (props: Props) => {
  const [login] = useLoginMutation();
  const router = useRouter();

  return (
    <HomeLayout>
      <PageTitle variant="h1" color="white" textAlign="center" mt="80px">
        ParkPal <span>| Renters</span>
      </PageTitle>
      <FormWrapper elevation={3}>
        <Typography variant="h3" textAlign="center">
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
              <FormikText name="email" label="Email" fullWidth />
              <FormikText name="password" label="Password" type="password" fullWidth />
              <FormikSubmit loading={isSubmitting} disabled={!isValid || isSubmitting}>
                Sign in
              </FormikSubmit>
            </Form>
          )}
        </Formik>
      </FormWrapper>
    </HomeLayout>
  );
};

export default Login;
