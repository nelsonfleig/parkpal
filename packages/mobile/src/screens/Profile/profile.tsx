import { KeyboardAvoidingView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';
import { HomeProps } from '../../../types/appStack';
import { CustomButton } from '../../components/Forms/button';
import styles from './profileStyles';
import { useMeLazyQuery } from '../../graphql/__generated__';

export const ProfileScreen = ({ navigation }: HomeProps) => {
  const [logout] = useMeLazyQuery();
  const onPress = async () => {
    await AsyncStorage.removeItem('accessToken');
    await logout();
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: 'Login' }],
      })
    );
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <CustomButton press={onPress} type="main" color="white">
        Log Out
      </CustomButton>
    </KeyboardAvoidingView>
  );
};
