import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParams = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

export type WelcomeProps = NativeStackScreenProps<RootStackParams>;
