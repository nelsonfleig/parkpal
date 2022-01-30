import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { useApollo } from '../lib/apolloClient';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme';

import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps = {} }: AppProps) {
  const apolloClient = useApollo(pageProps);
  return (
    <ApolloProvider client={apolloClient}>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <Component {...pageProps} />
          </React.Fragment>
        </ThemeProvider>
      </MuiThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
