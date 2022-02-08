import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';
import { Text, View, Pressable } from 'react-native';
import { useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProfileProps } from '../../../types/profileStack';
import { formatNumber } from '../../helpers/formatPhoneNumber';
import { useAuth } from '../../hooks/useAuth';
import styles from './userInfoStyles';

export const UserInfo = ({ navigation }: ProfileProps) => {
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
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Parkpaler Profile</Text>
      <View style={styles.keyboardAvoid}>
        <View style={styles.userInfoView}>
          <View style={styles.iconsView}>
            <MaterialIcons name="account-circle" size={35} color={colors.primary} />
            <MaterialIcons
              name="edit"
              size={30}
              color={colors.primary}
              onPress={() => {
                navigation.navigate('ChangeInfo');
              }}
            />
          </View>
          <Text style={[styles.userInfo, { fontWeight: '600', fontSize: 25, marginBottom: '2%' }]}>
            {user?.firstName}
          </Text>
          <Text style={[styles.userInfo, { fontWeight: '600', fontSize: 25 }]}>
            {user?.lastName}
          </Text>
          <Text style={[styles.userInfo, { fontStyle: 'italic', marginTop: '2%' }]}>
            DRIVER {`& ${user?.roles.toString().split(',')[1]}`}
          </Text>
          <Text style={styles.userInfo}>{user?.email}</Text>
          {user?.phone && <Text style={styles.userInfo}>+34 {formatNumber(user.phone)}</Text>}
        </View>
        <View style={styles.buttonsView}>
          <Pressable style={styles.buttons}>
            <MaterialIcons name="lock" size={30} color="#00C0E7" />
            <Text style={styles.buttonsText}>Change Password</Text>
          </Pressable>
          <Pressable onPress={onPress} style={styles.buttons}>
            <MaterialIcons name="logout" size={30} color="#00C0E7" />
            <Text style={styles.buttonsText}>Log Out</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};
