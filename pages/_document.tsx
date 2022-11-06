import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="bg-zinc-300 dark:bg-zinc-600">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}