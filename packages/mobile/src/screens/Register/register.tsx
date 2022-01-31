import { View } from 'react-native';
import { Formik } from 'formik';
import { useTheme } from 'react-native-paper';
import { FormikInput } from '../../components/Forms/formikInput';
import { StartScreen } from '../../components/StartScreen/startScreen';
import { CustomButton } from '../../components/Forms/button';
import { registerSchema } from '../../models/register.form';

export const RegisterScreen = () => {
  const { colors } = useTheme();
  return (
    <StartScreen>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={registerSchema}
        onSubmit={() => {}}>
        {({ handleSubmit, isSubmitting, isValid }) => (
          <View>
            <FormikInput name="firstName" label="First Name" />
            <FormikInput name="lastName" label="Last Name" />
            <FormikInput name="email" label="Email" />

            <FormikInput name="password" label="Password" />
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
