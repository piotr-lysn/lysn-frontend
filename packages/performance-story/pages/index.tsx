import type { NextPage } from 'next'
import Head from 'next/head'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Box from '@mui/material/Box';
import MuiTextField from '@mui/material/TextField';
import MuiButton from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';


const InputField = ({ name, label }) => {
  return (
    <Box>
      <Field name={name}>
        {({ form, field }) => console.log(form, field) || (
          <MuiTextField
            variant={'outlined'}
            fullWidth
            label={label}
            disabled={form.isSubmitting}
            value={field.value}
            onChange={event => form.setFieldValue(field.name, event.target.value)}
          />
        )}
      </Field>
      <ErrorMessage name={name}>
        {msg => <Box bgcolor={'red'}>{msg}</Box>}
      </ErrorMessage>
    </Box>
  );
}

const Button = ({ children, isLoading, ...rest}) => {
  return (
    <MuiButton variant={'outlined'} {...rest}>
      {isLoading
        ? <CircularProgress />
        : children
      }
    </MuiButton>
  )
}

const ContactForm = () => {
  return (
    <Formik
       initialValues={{
         name: '',
         phone: '',
         email: '',
         companyName: '',
         position: '',
        }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InputField name={'name'} label={'Name'} />
            </Grid>
            <Grid item xs={12}>
              <InputField name={'phone'} label={'Phone Number'} />
            </Grid>
            <Grid item xs={12}>
              <InputField name={'email'} label={'Email Address'} />
            </Grid>
            <Grid item xs={12}>
              <InputField name={'companyName'} label={'Company Name'} />
            </Grid>
            <Grid item xs={12}>
              <InputField name={'position'} label={'Position'} />
            </Grid>
            <Grid item xs={12}>
              <Button type={'submit'} size={'large'} fullWidth isLoading={isSubmitting}>
                Submit
              </Button>
            </Grid>
          </Grid>
         </Form>
       )}
     </Formik>
  );
}


const Home: NextPage = () => {
  return (
    <div>
      <Box component={'header'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Typography>
          Welcome to the Future
        </Typography>
        <Typography>
          A new generation in executive psychology
        </Typography>
      </Box>
      <Box component={'main'} p={4}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Box sx={{ borderRadius: '10px', bgcolor: 'primary' }}>
              <ContactForm />
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            CONTENT
          </Grid>
        </Grid>
      </Box>
      <Box component={'footer'}>
      </Box>
    </div>
  )
}

export default Home
