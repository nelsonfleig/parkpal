import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileStackParams } from '../../../types/profileStack';
import { ChangeInfo } from '../ChangeInfo/changeInfo';
import { ChangePassword } from '../ChangePassword/changePassword';
import { UserInfo } from '../UserInfo/userInfo';

export const ProfileScreen = () => {
  const ProfileStack = createNativeStackNavigator<ProfileStackParams>();

  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="UserInfo" component={UserInfo} />
      <ProfileStack.Screen name="ChangeInfo" component={ChangeInfo} />
      <ProfileStack.Screen name="ChangePassword" component={ChangePassword} />
    </ProfileStack.Navigator>
  );
};
