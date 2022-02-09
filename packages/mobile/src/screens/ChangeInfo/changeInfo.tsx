import { Formik } from 'formik';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProfileProps } from '../../../types/profileStack';
import { errorToast, sucessToast } from '../../components';
import { CustomButton } from '../../components/Forms/button';
import { MeDocument, useUpdateProfileMutation } from '../../graphql/__generated__';
import { useAuth } from '../../hooks/useAuth';
import { changeInfoStyles } from './changeInfoStyles';

export const ChangeInfo = ({ navigation }: ProfileProps) => {
  const { user } = useAuth();
  const [updateProfile] = useUpdateProfileMutation({
    refetchQueries: [MeDocument],
    awaitRefetchQueries: true,
  });

  return (
    <SafeAreaView>
      <Text style={changeInfoStyles.title}>Change Your Info</Text>
      <Formik
        initialValues={{
          firstName: user?.firstName,
          lastName: user?.lastName,
          phone: user?.phone as string | undefined,
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            if (
              values.firstName === user?.firstName &&
              values.lastName === user?.lastName &&
              values.phone === user?.phone
            ) {
              errorToast('No change detected.');
            } else {
              await updateProfile({
                variables: {
                  input: values,
                },
              });
              sucessToast('Cool Beans! Your information has been updated!');
              navigation.goBack();
            }
          } catch (error) {
            errorToast('Oops! Something went wrong.');
          } finally {
            setSubmitting(false);
          }
        }}>
        {({ handleSubmit, handleChange, values, isSubmitting, isValid }) => (
          <View style={changeInfoStyles.form}>
            <TextInput
              label="First Name"
              autoComplete
              autoCapitalize="words"
              underlineColor="#7145D6"
              underlineColorAndroid="#7145D6"
              activeUnderlineColor="#7145D6"
              style={changeInfoStyles.input}
              theme={{ colors: { primary: '#0A2540', text: '#7145D6' } }}
              value={values.firstName}
              onChangeText={handleChange('firstName')}
              returnKeyType="done"
            />
            <TextInput
              label="Last Name"
              autoComplete
              autoCapitalize="words"
              underlineColor="#7145D6"
              underlineColorAndroid="#7145D6"
              activeUnderlineColor="#7145D6"
              style={changeInfoStyles.input}
              theme={{ colors: { primary: '#0A2540', text: '#7145D6' } }}
              value={values.lastName}
              onChangeText={handleChange('lastName')}
              returnKeyType="done"
            />
            <TextInput
              label="Email (non-changable)"
              autoComplete
              underlineColor="#7145D6"
              value={user?.email}
              style={[changeInfoStyles.input, { backgroundColor: '#e0e0e0' }]}
              theme={{ colors: { primary: '#0A2540', text: 'grey' } }}
              onChangeText={handleChange('email')}
              editable={false}
            />
            <TextInput
              label="Phone Number"
              autoComplete
              underlineColor="#7145D6"
              underlineColorAndroid="#7145D6"
              activeUnderlineColor="#7145D6"
              style={changeInfoStyles.input}
              theme={{ colors: { primary: '#0A2540', text: '#7145D6' } }}
              value={values.phone}
              onChangeText={handleChange('phone')}
              keyboardType="number-pad"
              returnKeyType="done"
              maxLength={9}
            />
            <CustomButton
              press={handleSubmit}
              type="save"
              color="white"
              loading={isSubmitting}
              disabled={!isValid || isSubmitting}>
              Save Changes
            </CustomButton>
            <CustomButton
              press={() => navigation.goBack()}
              type="welcome"
              disabled={!isValid || isSubmitting}>
              Cancel
            </CustomButton>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};
