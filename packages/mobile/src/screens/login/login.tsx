import { useTheme } from 'react-native-paper';
import { Formik } from 'formik';
import { View } from 'react-native';
import { StartScreen } from '../../components/StartScreen/startScreen';
import styles from './loginStyles';
import { CustomButton } from '../../components/Forms/button';
import { FormikInput } from '../../components/Forms/formikInput';
import { loginSchema } from '../../models/login.form';

export const LoginScreen = () => {
  const { colors } = useTheme();

  return (
    <StartScreen>
      <View style={styles.container}>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginSchema}
          onSubmit={() => {}}>
          {({ handleSubmit, isSubmitting, isValid }) => (
            <View>
              <FormikInput name="email" label="Email" />
              <FormikInput name="password" label="Password" />
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
