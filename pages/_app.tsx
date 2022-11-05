import React from 'react';
import '../styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Navbar from '../components/header/Navbar';
import { ThemeProvider } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Gary Mak</title>
      </Head>
      <ThemeProvider attribute="class">
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={router.route}
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{
              duration: 1,
            }}
            variants={{
              initialState: {
                opacity: 0,
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
              },
              animateState: {
                opacity: 1,
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
              },
              exitState: { clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)' },
            }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}
