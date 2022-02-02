import { TextField, TextFieldProps } from '@mui/material';
import { FieldHookConfig, useField, useFormikContext } from 'formik';
import React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';

type FormikTimeProps = TextFieldProps & FieldHookConfig<string>;

export const FormikTime = (props: FormikTimeProps) => {
  const [field, meta] = useField(props);
  const { setFieldValue } = useFormikContext();
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        toolbarPlaceholder="hi"
        value={field.value}
        onChange={(newValue) => {
          const { name } = props;
          setFieldValue(name, newValue, true);
        }}
        renderInput={(params) => {
          const { label, size, margin } = props;
          return (
            <TextField
              {...params}
              label={label}
              name={field.name}
              size={size}
              margin={margin}
              onBlur={field.onBlur}
              fullWidth
              error={meta.touched && !!meta.error}
              helperText={meta.touched && meta.error}
            />
          );
        }}
        ampm={false}
        openTo="hours"
        views={['hours']}
        inputFormat="HH:mm"
      />
    </LocalizationProvider>
  );
};
