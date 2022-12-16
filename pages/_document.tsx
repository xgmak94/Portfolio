import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="snap-y overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400
      scrollbar-thumb-blue-500 dark:scrollbar-thumb-slate-300">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
