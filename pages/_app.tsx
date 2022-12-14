import React from 'react';
import '../styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Navbar from '../components/nav/Navbar';
import { ThemeProvider } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Gary Mak</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Portfolio" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="Gary Mak" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider attribute="class">
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.div
            className="bg-gradient-to-tr from-red-200 via-gray-200 to-blue-500 text-black dark:from-gray-400 dark:via-gray-600 dark:to-blue-900 dark:text-white"
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
              exitState: {
                clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
              },
            }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}
