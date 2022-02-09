import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ReactNativeFile } from 'apollo-upload-client';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { Modal } from 'react-native-paper';
import * as mime from 'react-native-mime-types';
import { Pressable, View, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { errorToast, sucessToast } from '..';
import { useCreateComplainMutation } from '../../graphql/__generated__';
import { reportSchema } from '../../models/report.form';
import { CustomButton } from '../Forms/button';
import { FormikInput } from '../Forms/formikInput';
import styles from './bookingTileStyles';

type Props = {
  setReportPaper: Function;
  id: string;
  reportPaper: boolean;
};

const ReportPopup = ({ setReportPaper, id, reportPaper }: Props) => {
  const [createReport] = useCreateComplainMutation();
  const [image, setImage] = useState<any>(null);

  const openImageLibrary = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
    });
    setImage(result);
  };

  return (
    <Modal style={styles.reportPaper} visible={reportPaper} onDismiss={() => setReportPaper(false)}>
      <Formik
        initialValues={{ description: '' }}
        validationSchema={reportSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            if (image) {
              const fileImage = new ReactNativeFile({
                uri: image.uri,
                type: mime.lookup(image.uri) || 'image',
                name: `image-${Date.now()}.${mime.lookup(image.uri).split('/')[1]}`,
              });
              await createReport({
                variables: {
                  image: fileImage,
                  input: {
                    description: values.description,
                    parkingSpotId: id,
                    pictureUrl: 'yes',
                  },
                },
              });
            } else {
              await createReport({
                variables: {
                  image: null,
                  input: { description: values.description, parkingSpotId: id },
                },
              });
            }

            resetForm({ values: { description: '' } });
            setReportPaper(false);
            sucessToast("Ladies and gentlemen, we got 'em!");
          } catch (error) {
            if (error instanceof Error) {
              errorToast(`${error.message}`);
            }
          } finally {
            setSubmitting(false);
          }
        }}>
        {({ handleSubmit, isSubmitting, isValid }) => (
          <View>
            <View>
              <FormikInput name="description" label="Description" customStyle={{ width: 290 }} />
              {/* <TextInput
                  value={descriptionQuery}
                  onChange={() => setDescriptionQuery(value)}
                  multiline
                  numberOfLines={7}
                  style={styles.reportTextField}
                  theme={{ colors: { primary: '#0A2540', text: 'black' } }}
                /> */}

              <Pressable onPress={openImageLibrary} style={styles.uploadImage}>
                <View>
                  <Text style={styles.uploadText}>Upload Image</Text>
                </View>
                <MaterialCommunityIcons name="camera-image" color="white" size={30} />
              </Pressable>
            </View>
            <View style={styles.button}>
              <CustomButton
                press={handleSubmit}
                loading={isSubmitting}
                disabled={!isValid || isSubmitting}
                type="start">
                Report
              </CustomButton>
            </View>
          </View>
        )}
      </Formik>
    </Modal>
  );
};
export default ReportPopup;
