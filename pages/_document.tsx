import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="bg-zinc-400 dark:bg-zinc-600">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}