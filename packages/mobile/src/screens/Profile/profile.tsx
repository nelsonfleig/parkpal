import { KeyboardAvoidingView, View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'react-native-paper';
import { HomeProps } from '../../../types/appStack';
import { CustomButton } from '../../components/Forms/button';
import styles from './profileStyles';
import { useAuth } from '../../hooks/useAuth';
import { formatNumber } from '../../helpers/formatPhoneNumber';

export const ProfileScreen = ({ navigation }: HomeProps) => {
  const { colors } = useTheme();
  const { user } = useAuth();
  const onPress = async () => {
    await AsyncStorage.removeItem('accessToken');
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: 'Login' }],
      })
    );
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text>Parkpaler Profile</Text>
      <View>
        <View>
          <MaterialIcons name="account-circle" size={30} color={colors.primary} />
          <MaterialIcons name="edit" size={24} color={colors.primary} />
        </View>
        <Text>{user?.firstName}</Text>
        <Text>{user?.lastName}</Text>
        <Text>{user?.email}</Text>
        {user?.phone && <Text>{formatNumber(user.phone)}</Text>}
        <Text>DRIVER {`& ${user?.roles.toString().split(',')[1]}`}</Text>
      </View>
      <View />
      <CustomButton press={onPress} type="main" color="white">
        Log Out
      </CustomButton>
    </KeyboardAvoidingView>
  );
};
