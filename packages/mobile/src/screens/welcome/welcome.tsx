import { View } from 'react-native';

import { WelcomeProps } from '../../../types/rootStack';
import { CustomButton } from '../../components/Forms/button';
import { StartScreen } from '../../components/StartScreen/startScreen';

export const WelcomeScreen = ({ navigation }: WelcomeProps) => {
  const signInPage = () => {
    navigation.navigate('Login');
  };
  const register = () => {
    navigation.navigate('Register');
  };

  return (
    <StartScreen>
      <View>
        <View>
          <CustomButton press={signInPage} type="welcome">
            Sign In
          </CustomButton>

          <CustomButton press={register} type="welcome">
            Sign Up
          </CustomButton>
        </View>
      </View>
    </StartScreen>
  );
};
