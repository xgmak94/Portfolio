import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import Navbar from '../components/header/Navbar';
import react, { useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Gary Mak</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
