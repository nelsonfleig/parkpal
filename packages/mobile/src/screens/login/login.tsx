import { TextInput, useTheme } from 'react-native-paper';
import { Formik } from 'formik';
import { View } from 'react-native';
import { StartScreen } from '../../components/StartScreen/startScreen';
import styles from './loginStyles';
import { CustomButton } from '../../components/Forms/button';

export const LoginScreen = () => {
  const { colors } = useTheme();

  return (
    <StartScreen>
      <View style={styles.container}>
        <Formik initialValues={{ email: '', password: '' }} onSubmit={() => {}}>
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                label="Email"
                mode="outlined"
                style={styles.input}
                theme={{ colors: { primary: '#0A2540', text: 'black' } }}
                autoComplete="email"
              />
              <TextInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                label="Password"
                mode="outlined"
                style={styles.input}
                theme={{ colors: { primary: '#0A2540', text: 'black' } }}
                autoComplete="password"
              />
              <CustomButton press={handleSubmit} bg="#fff" color={colors.primary}>
                Log In
              </CustomButton>
            </View>
          )}
        </Formik>
      </View>
    </StartScreen>
  );
};
