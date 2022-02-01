import { TextField, TextFieldProps } from '@mui/material';
import { FieldHookConfig, useField } from 'formik';

// type FormikTextProps = TextFieldProps & {};

export const FormikText = (props: TextFieldProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);

  return (
    <TextField
      {...field}
      {...props}
      margin="normal"
      size="medium"
      error={meta.touched && !!meta.error}
      helperText={meta.touched && meta.error}
    />
  );
};
