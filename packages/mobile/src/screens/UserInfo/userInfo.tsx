import { MaterialIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';
import { Text, View, Pressable } from 'react-native';
import { useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProfileProps } from '../../../types/profileStack';
import { useMeLazyQuery } from '../../graphql/__generated__';
import { formatNumber } from '../../helpers/formatPhoneNumber';
import { useAuth } from '../../hooks/useAuth';
import styles from './userInfoStyles';

export const UserInfo = ({ navigation }: ProfileProps) => {
  const { colors } = useTheme();
  const { user } = useAuth();
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
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Parkpaler Profile</Text>
      <View style={styles.mainView}>
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
          <Text
            style={[
              styles.userInfo,
              {
                backgroundColor: '#7145D6',
                color: 'white',
                paddingHorizontal: '2%',
                paddingVertical: '1%',
              },
            ]}>
            DRIVER
            {user?.roles.toString() === 'USER,RENTER'
              ? ` & ${user.roles.toString().split(',')[1]}`
              : null}
          </Text>
          <Text style={styles.userInfo}>{user?.email}</Text>
          {user?.phone && <Text style={styles.userInfo}>+34 {formatNumber(user.phone)}</Text>}
        </View>
        <View style={styles.buttonsView}>
          <Pressable style={styles.buttons} onPress={() => navigation.navigate('ChangePassword')}>
            <FontAwesome5 name="key" size={24} color="#00C0E7" style={{ width: 30 }} />
            <Text style={styles.buttonsText}>Change Password</Text>
          </Pressable>
          <Pressable onPress={onPress} style={styles.buttons}>
            <Ionicons name="log-out" size={30} color="#00C0E7" style={{ width: 30 }} />
            <Text style={styles.buttonsText}>Log Out</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};
