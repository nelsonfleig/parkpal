import { FieldHookConfig, useField } from 'formik';
import { TextInput } from 'react-native-paper';
import { Text } from 'react-native';
import styles from './styles';

type FormikInputProps = FieldHookConfig<string> & {
  name: string;
  label: string;
  secureTextEntry?: boolean;
};

export const FormikInput = ({ placeholder, label, ...props }: FormikInputProps) => {
  const [field, meta] = useField(props);

  return (
    <>
      <TextInput
        mode="flat"
        onChangeText={field.onChange(field.name)}
        onBlur={field.onBlur(field.name)}
        style={styles.input}
        theme={{ colors: { primary: '#0A2540', text: 'black' } }}
        autoComplete="email"
        label={label}
        error={meta.touched && !!meta.error}
        secureTextEntry={props.secureTextEntry}
      />
      {meta.touched && !!meta.error && <Text>{meta.error}</Text>}
    </>
  );
};
