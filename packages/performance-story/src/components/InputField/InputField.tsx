import React from 'react';
import MuiTextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Field, ErrorMessage } from 'formik';


const InputField = ({ name, label }: { name: string, label: string }) => {
  const color = 'primary';
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
            color={color}
            sx={{
              '& .MuiInputBase-input': {
                color: `${color}.contrastText2`,
              },
              '& .MuiInputLabel-root, & .MuiInputLabel-root.MuiFocused': {
                color: `${color}.contrastText2`,
              },
              '& .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: `${color}.main`,
                backgroundColor: `background.input`,
              },
            }}
          />
        )}
      </Field>
      <ErrorMessage name={name}>
        {msg => <Box bgcolor={'red'}>{msg}</Box>}
      </ErrorMessage>
    </Box>
  );
}

export default InputField;