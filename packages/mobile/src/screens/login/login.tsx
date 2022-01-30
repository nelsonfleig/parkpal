import { TextInput, useTheme } from 'react-native-paper';
import { Formik } from 'formik';
import { View } from 'react-native';
import { StartScreen } from '../../components/StartScreen/startScreen';
import styles from './loginStyles';
import { CustomButton } from '../../components/forms/button';
import { WelcomeProps } from '../../../types/rootStack';

export const LoginScreen = ({ navigation }: WelcomeProps) => {
  const { colors } = useTheme();
  const login = () => {
    navigation.navigate('Login');
  };
  return (
    <StartScreen>
      <View style={styles.container}>
        <Formik>
          <View>
            <TextInput
              label="Email"
              mode="outlined"
              style={styles.input}
              theme={{ colors: { primary: '#0A2540' } }}
            />
            <TextInput
              label="Password"
              mode="outlined"
              style={styles.input}
              theme={{ colors: { primary: '#0A2540' } }}
            />
            <CustomButton press={login} bg="#fff" color={colors.primary}>
              Log In
            </CustomButton>
          </View>
        </Formik>
      </View>
    </StartScreen>
  );
};
