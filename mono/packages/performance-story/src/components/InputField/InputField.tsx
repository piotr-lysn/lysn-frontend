import React from 'react';
import MuiTextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Field, ErrorMessage } from 'formik';
import Text from '../Text';

const InputField = ({ name, label }: { name: string, label: string }) => {
  return (
    <Box>
      <Field name={name}>
        {({ form, field }) => (
          <MuiTextField
            fullWidth
            label={label}
            disabled={form.isSubmitting}
            value={field.value}
            name={name}
            onChange={event => form.setFieldValue(name, event.target.value)}
            variant={'outlined'}
            color={'primary'}
            error={Boolean(form.errors[name])}
            helperText={form.errors[name]}
          />
        )}
      </Field>
    </Box>
  );
}

export default InputField;