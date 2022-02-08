import { Formik } from 'formik';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProfileProps } from '../../../types/profileStack';
import { errorToast, sucessToast } from '../../components';
import { CustomButton } from '../../components/Forms/button';
import {
  MeDocument,
  useLoginMutation,
  useUpdateProfileMutation,
} from '../../graphql/__generated__';
import { useAuth } from '../../hooks/useAuth';
import { changePasswordSchema } from '../../models/change-password.form';
import { changePasswordStyles } from './changePasswordStyles';

export const ChangePassword = ({ navigation }: ProfileProps) => {
  const { user } = useAuth();
  const [login] = useLoginMutation({});
  const [updateProfile] = useUpdateProfileMutation({
    refetchQueries: [MeDocument],
    awaitRefetchQueries: true,
  });

  return (
    <SafeAreaView>
      <Text style={changePasswordStyles.title}>Change Your Password</Text>
      <Formik
        initialValues={{
          changePasswordCurrent: '',
          changePasswordNew: '',
          changePasswordConfirm: '',
        }}
        validationSchema={changePasswordSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            if (user) {
              await login({
                variables: {
                  input: { password: values.changePasswordCurrent, email: user.email },
                },
              });
            }
            if (values.changePasswordCurrent === values.changePasswordNew) {
              errorToast("It's the same dumbass!");
            } else {
              await updateProfile({
                variables: {
                  input: { password: values.changePasswordNew },
                },
              });
              sucessToast('Information Updated!');
              navigation.goBack();
            }
          } catch (error) {
            errorToast('Oops! Something went wrong.');
          } finally {
            setSubmitting(false);
          }
        }}>
        {({ handleSubmit, handleChange, values, isSubmitting, isValid }) => (
          <View style={changePasswordStyles.form}>
            <TextInput
              label="Current Password"
              autoComplete
              secureTextEntry
              underlineColor="#7145D6"
              underlineColorAndroid="#7145D6"
              activeUnderlineColor="#7145D6"
              style={changePasswordStyles.input}
              theme={{ colors: { primary: '#0A2540', text: '#7145D6' } }}
              value={values.changePasswordCurrent}
              onChangeText={handleChange('changePasswordCurrent')}
            />
            <TextInput
              label="New Password"
              autoComplete
              secureTextEntry
              underlineColor="#7145D6"
              underlineColorAndroid="#7145D6"
              activeUnderlineColor="#7145D6"
              style={changePasswordStyles.input}
              theme={{ colors: { primary: '#0A2540', text: '#7145D6' } }}
              value={values.changePasswordNew}
              onChangeText={handleChange('changePasswordNew')}
            />
            <TextInput
              label="Confirm New Password"
              autoComplete
              secureTextEntry
              underlineColor="#7145D6"
              underlineColorAndroid="#7145D6"
              activeUnderlineColor="#7145D6"
              style={changePasswordStyles.input}
              theme={{ colors: { primary: '#0A2540', text: '#7145D6' } }}
              value={values.changePasswordConfirm}
              onChangeText={handleChange('changePasswordConfirm')}
            />
            <CustomButton
              press={handleSubmit}
              type="save"
              color="white"
              loading={isSubmitting}
              disabled={!isValid || isSubmitting}>
              Save Changes
            </CustomButton>
            <CustomButton press={() => navigation.goBack()} type="welcome" disabled={isSubmitting}>
              Cancel
            </CustomButton>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};
