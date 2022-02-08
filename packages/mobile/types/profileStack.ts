import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type ProfileStackParams = {
  UserInfo: undefined;
  ChangeInfo: undefined;
  ChangePassword: undefined;
};

export type ProfileProps = NativeStackScreenProps<ProfileStackParams>;
