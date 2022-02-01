import { useTheme } from 'react-native-paper';
import { Formik } from 'formik';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { StartScreen } from '../../components/StartScreen/startScreen';
import styles from './loginStyles';
import { CustomButton } from '../../components/Forms/button';
import { FormikInput } from '../../components/Forms/formikInput';
import { loginSchema } from '../../models/login.form';
import { WelcomeProps } from '../../../types/rootStack';
import { useLoginMutation } from '../../graphql/__generated__';
import { errorToast } from '../../components';

export const LoginScreen = ({ navigation }: WelcomeProps) => {
  const { colors } = useTheme();
  const [login] = useLoginMutation();

  return (
    <StartScreen>
      <View style={styles.container}>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const { data } = await login({ variables: { input: values } });
              await AsyncStorage.setItem('accessToken', data?.login.accessToken!);
              navigation.navigate('Home');
            } catch (error) {
              errorToast('Invalid email or password.');
            } finally {
              setSubmitting(false);
            }
          }}>
          {({ handleSubmit, isSubmitting, isValid }) => (
            <View>
              <FormikInput name="email" label="Email" />
              <FormikInput name="password" label="Password" value="password" secureTextEntry />
              <CustomButton
                press={handleSubmit}
                bg="#fff"
                color={colors.primary}
                loading={isSubmitting}
                disabled={!isValid || isSubmitting}>
                Log In
              </CustomButton>
            </View>
          )}
        </Formik>
      </View>
    </StartScreen>
  );
};
