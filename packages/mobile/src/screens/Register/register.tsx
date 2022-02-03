import { View } from 'react-native';
import { Formik } from 'formik';

import { FormikInput } from '../../components/Forms/formikInput';
import { StartScreen } from '../../components/StartScreen/startScreen';
import { CustomButton } from '../../components/Forms/button';
import { registerSchema } from '../../models/register.form';
import { useRegisterMutation } from '../../graphql/__generated__';
import { WelcomeProps } from '../../../types/rootStack';
import { sucessToast, errorToast } from '../../components';
import { AuthLayout } from '../../components/Layouts/authLayout';

export const RegisterScreen = ({ navigation }: WelcomeProps) => {
  const [register] = useRegisterMutation();
  return (
    <AuthLayout>
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
                loading={isSubmitting}
                disabled={!isValid || isSubmitting}
                type="welcome">
                Register
              </CustomButton>
            </View>
          )}
        </Formik>
      </StartScreen>
    </AuthLayout>
  );
};
