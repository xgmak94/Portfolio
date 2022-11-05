import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/header/Navbar';

import { ThemeProvider } from 'next-themes';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class">
        <Navbar />
        <Component {...pageProps}/>
      </ThemeProvider>
    </>
  );
}

