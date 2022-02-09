import { FieldHookConfig, useField } from 'formik';
import { TextInput } from 'react-native-paper';
import { Text } from 'react-native';
import styles from './styles';

type FormikInputProps = FieldHookConfig<string> & {
  name: string;
  label: string;
  secureTextEntry?: boolean;
  type?: string;
  customStyle: {};
};

export const FormikInput = ({
  customStyle,
  placeholder,
  label,
  type,
  ...props
}: FormikInputProps) => {
  const [field, meta] = useField(props);

  return (
    <>
      <TextInput
        mode="flat"
        onChangeText={field.onChange(field.name)}
        onBlur={field.onBlur(field.name)}
        style={{ ...styles.input, ...customStyle }}
        theme={{ colors: { primary: '#0A2540', text: 'black' } }}
        autoComplete="email"
        label={label}
        error={meta.touched && !!meta.error}
        secureTextEntry={props.secureTextEntry}
        autoCapitalize={type === 'email' ? 'none' : 'words'}
        keyboardType={type === 'email' ? 'email-address' : 'default'}
        clearButtonMode="while-editing"
      />
      {meta.touched && !!meta.error && <Text>{meta.error}</Text>}
    </>
  );
};
