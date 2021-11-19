import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { SnackbarProvider } from '../src/components/Snackbar';
import createEmotionCache from '../styles/createEmotionCache';
import theme from '../styles/theme';
import 'regenerator-runtime/runtime';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Performance Story</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="Performance Story brings together the spectrum of high performance coaching, psychology and mental health for the world's leaders and professionals, leveraging technology to deliver an on-demand, deeply human experiences. Sign up for our Beta today." />
        <meta name="keywords" content="Executive Psychology,High Performance,Coaching,Business Coaching,Psychology,Leadership Profiling,Mental Health" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider>
          <Component {...pageProps} />
        </SnackbarProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}