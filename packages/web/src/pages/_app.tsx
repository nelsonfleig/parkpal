import { ApolloProvider } from '@apollo/client';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import { useApollo } from '../lib/apolloClient';
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import theme from '../styles/theme';

function MyApp({ Component, pageProps = {} }: AppProps) {
  const apolloClient = useApollo(pageProps);

  // Remove server-side generated stylesheets
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
      // eslint-disable-next-line no-console
      console.clear();
    }
  }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <StyledEngineProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <Head>
              <meta charSet="utf-8" />
              {/* Use minimum-scale=1 to enable GPU rasterization */}
              <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
              />
              {/* PWA primary color */}
              <meta name="theme-color" content={theme.palette.primary.main} />
            </Head>
            <CssBaseline />
            <ToastContainer />
            <Component {...pageProps} />
          </ThemeProvider>
        </MuiThemeProvider>
      </StyledEngineProvider>
    </ApolloProvider>
  );
}

export default MyApp;
