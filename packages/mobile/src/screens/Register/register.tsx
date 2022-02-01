import { View } from 'react-native';
import { Formik } from 'formik';
import { useTheme } from 'react-native-paper';
import React from 'react';

import { FormikInput } from '../../components/Forms/formikInput';
import { StartScreen } from '../../components/StartScreen/startScreen';
import { CustomButton } from '../../components/Forms/button';
import { registerSchema } from '../../models/register.form';
import { useRegisterMutation } from '../../graphql/__generated__';
import { WelcomeProps } from '../../../types/rootStack';
import { sucessToast, errorToast } from '../../components';

export const RegisterScreen = ({ navigation }: WelcomeProps) => {
  const { colors } = useTheme();
  const [register] = useRegisterMutation();
  return (
    <StartScreen>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
        validationSchema={registerSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await register({ variables: { input: values } });
            navigation.navigate('Login');
            sucessToast('Succesfully registered. Please login.');
          } catch (error) {
            errorToast('An error occured, please try again.');
          } finally {
            setSubmitting(false);
          }
        }}>
        {({ handleSubmit, isSubmitting, isValid }) => (
          <View>
            <FormikInput name="firstName" label="First Name" />
            <FormikInput name="lastName" label="Last Name" />
            <FormikInput name="email" label="Email" />
            <FormikInput name="password" label="Password" secureTextEntry />
            <CustomButton
              press={handleSubmit}
              color={colors.primary}
              bg="#fff"
              loading={isSubmitting}
              disabled={!isValid || isSubmitting}>
              Register
            </CustomButton>
          </View>
        )}
      </Formik>
    </StartScreen>
  );
};
