import { TextField, TextFieldProps } from '@mui/material';
import { FieldHookConfig, useField } from 'formik';

type FormikTextProps = TextFieldProps & {};

export const FormikText = (props: FormikTextProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);

  return (
    <TextField
      {...field}
      {...props}
      error={meta.touched && !!meta.error}
      helperText={meta.touched && meta.error}
    />
  );
};
