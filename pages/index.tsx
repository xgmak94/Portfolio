import React from 'react';

import { Cursor, useTypewriter } from 'react-simple-typewriter';

import { motion } from 'framer-motion';

import Portrait from '../components/portrait/Portrait';
import Projects from './projects/index';

export default function Home() {
  const [text, count] = useTypewriter({
    words: ["Hello, I'm Gary Mak", 'Software Developer', 'Based in Los Angeles, California'],
    loop: true,
    typeSpeed: 60,
    delaySpeed: 2000,
  });

  return (
    <>
      <motion.div className="m-3 text-black dark:text-white">
        <div className="container text-center">
          <Portrait />
        </div>
        <div className="flex flex-col space-y-8 items-center justify-center text-center overflow-hidden p-3">
          <div className="flex text-4xl">
            <div>{text}</div>
            <Cursor />
          </div>
        </div>
        <hr className="border-white dark:border-black" />
      </motion.div>
      <Projects />
    </>
  );
}
