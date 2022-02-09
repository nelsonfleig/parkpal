import { Formik } from 'formik';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';
import { StartScreen } from '../../components/StartScreen/startScreen';
import styles from './loginStyles';
import { CustomButton } from '../../components/Forms/button';
import { FormikInput } from '../../components/Forms/formikInput';
import { loginSchema } from '../../models/login.form';
import { WelcomeProps } from '../../../types/rootStack';
import { useLoginMutation } from '../../graphql/__generated__';
import { errorToast } from '../../components';
import { AuthLayout } from '../../components/Layouts/authLayout';

export const LoginScreen = ({ navigation }: WelcomeProps) => {
  const [login] = useLoginMutation();

  return (
    <AuthLayout>
      <StartScreen>
        <View style={styles.container}>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={loginSchema}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                const { data } = await login({ variables: { input: values } });
                await AsyncStorage.setItem('accessToken', data?.login.accessToken!);
                navigation.dispatch(
                  CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'Home' }],
                  })
                );
              } catch (error) {
                errorToast('Invalid email or password.');
              } finally {
                setSubmitting(false);
              }
            }}>
            {({ handleSubmit, isSubmitting, isValid }) => (
              <View>
                <FormikInput name="email" label="Email" autoCapitalize="none" type="email" />
                <FormikInput name="password" label="Password" value="password" secureTextEntry />
                <CustomButton
                  press={handleSubmit}
                  type="welcome"
                  loading={isSubmitting}
                  disabled={!isValid || isSubmitting}>
                  Log In
                </CustomButton>
              </View>
            )}
          </Formik>
        </View>
      </StartScreen>
    </AuthLayout>
  );
};
