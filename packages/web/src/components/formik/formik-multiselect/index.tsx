import { Autocomplete, TextField, TextFieldProps } from '@mui/material';
import { FieldHookConfig, useField, useFormikContext } from 'formik';
import React from 'react';

type FormikMultiSelectProps = TextFieldProps & FieldHookConfig<{ name: string; value: number }[]>;

export const FormikMultiSelect = (props: FormikMultiSelectProps) => {
  const [field, meta] = useField(props);
  const { setFieldValue } = useFormikContext();

  const days = [
    { name: 'Sunday', value: 0 },
    { name: 'Monday', value: 1 },
    { name: 'Tuesday', value: 2 },
    { name: 'Wednesday', value: 3 },
    { name: 'Thursday', value: 4 },
    { name: 'Friday', value: 5 },
    { name: 'Saturday', value: 6 },
  ];

  return (
    <Autocomplete
      multiple
      id="tags-standard"
      options={days}
      getOptionLabel={(day) => day.name}
      isOptionEqualToValue={(option, value) => option.value === value.value}
      filterSelectedOptions
      value={field.value}
      onChange={(_, value) => {
        const { name } = props;
        setFieldValue(
          name,
          value as {
            name: string;
            value: number;
          }[]
        );
      }}
      renderInput={(params) => {
        const { size, label, margin } = props;

        return (
          <TextField
            {...params}
            name={field.name}
            size={size}
            label={label}
            variant="outlined"
            margin={margin}
            onBlur={field.onBlur}
            error={meta.touched && !!meta.error}
            helperText={meta.touched && meta.error}
          />
        );
      }}
    />
  );
};
