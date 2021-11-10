import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import InputField from '../src/components/InputField';
import Button from '../src/components/Button';
import UnorderedList from '../src/components/UnorderedList';
import Text from '../src/components/Text';
import Logo1 from '../public/logo/logo1.png';
import Logo2 from '../public/logo/logo2.svg';
import BackgroundImageHeader from '../public/images/backgroundImageHeader.png';
import BackgroundImageContent from '../public/images/backgroundImageContent.jpg';
import { styled } from '@mui/system';

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
            <Grid container spacing={4}>
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
                <Button type={'submit'} color={'primary'} size={'large'} fullWidth isLoading={isSubmitting}>
                  Submit
                </Button>
              </Grid>
          </Grid>
         </Form>
       )}
     </Formik>
  );
}

const Header = () => {
  return (
    <>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        sx={{
           bgcolor: 'background.background3',
           py: 2,
           pl: 17.5,
        }}
      >
        <Image src={Logo1} />
      </Box>
      <Box
        component={'header'}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        sx={{
          background: `url('${BackgroundImageHeader.src}')`,
          paddingTop: 79,
          paddingBottom: 62,
        }}
      >
        <Text variant={'h2'} font={'secondary'} textAlign={'center'}>
          Welcome to the Future
        </Text>
        <Text variant={'h1'} font={'secondary'} textAlign={'center'}>
          A new generation in executive psychology
        </Text>
        <Box pt={15} pb={2}>
          <Text variant={'caption'}>
            Sign up to our Beta
          </Text>
        </Box>
        <Button
          color={'primary'}
          size={'large'}
          onClick={() => {
            // document.getElementsByName(name)[0]
           const elem =  document.querySelector('[name="name"]');
           if (elem) {
            elem.scrollIntoView({ 
              behavior: 'smooth' 
            });
            elem.focus({ preventScroll: true });
           }
          }}
        >
          Contact us
        </Button>
      </Box>
    </>
  );
}

const Footer = () => (
  <Box
    component={'footer'}
    display={'flex'}
    justifyContent={'space-between'}
    sx={{
      bgcolor: 'background.background3',
      height: '64px',
      fill: 'primary.contrastText',
      padding: 2,
    }}
  >
    <Box></Box>
    <Image src={Logo2} />
    <Box></Box>
  </Box>
);


const Main = () => (
  <Grid
    component={'main'}
    container
    columnSpacing={0}
    p={[5, 10, 20]}
    sx={{
      background: `url('${BackgroundImageContent.src}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center -300px',
    }}
  >
    <Grid item xs={12} mb={[5, 10, 20]}>
      <Text variant={'h2'} font={'secondary'} fontWeight={'700'}>
        Sign up for our beta now.
      </Text>
    </Grid>

    <Grid item xs={12} md={5}>
      <Paper sx={{ bgcolor: 'background.background2', padding: [6, 8, 12.5] }}>
        <ContactForm />
      </Paper>
    </Grid>

    <Grid item xs={12} md={7} pl={[0, 0, 9]} mt={[10, 10, 0]}>
      <Box>
        <Text variant={'body1'} font={'secondary'} fontWeight={'700'}>
          Bringing together the spectrum of high performance and mental health for the world's leaders and professionals.
        </Text>
        <UnorderedList
          items={['Psychology', 'Coaching', 'Leadership Profiling', 'High Performance']}
        />
      </Box>

      <Box>
        <Text variant={'body1'} font={'secondary'} fontWeight={'700'}>
          Our leadership team
        </Text>
        <UnorderedList
          items={[
            'Peta Slocombe, CEO/Psychologist',
            'Kate Bennett Eriksson, Global Digital Health Tech',
            'A DaneWell Health Company Channel partners with Peter Berry Consulting and Hogan Assessment Systems, Clinicom, and supported by APACS best Coaches and Psychologists'
          ]}
        />
      </Box>

    </Grid>
  </Grid>
);


const Home: NextPage = () => {
  return (
    <div>
      <Header />    
      <Main />
      <Footer />
    </div>
  )
}

export default Home
