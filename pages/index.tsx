import React from 'react';

import { Cursor, useTypewriter } from 'react-simple-typewriter';

import { motion } from 'framer-motion';

import Portrait from '../components/portrait/Portrait';
import AboutInfo from '../components/about/AboutInfo';

import Projects from './projects/index';
import Contact from './contact/index';

export default function Home() {
  const [text, count] = useTypewriter({
    words: ["Hello, I'm Gary Mak", 'Software Developer', 'Based in Los Angeles, California'],
    loop: true,
    typeSpeed: 60,
    delaySpeed: 2000,
  });

  return (
    <>
      <div className="m-3 text-black dark:text-white">
        <motion.div
          className="container text-center"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 2,
          }}
        >
          <Portrait />
        </motion.div>
        <div className="flex flex-col space-y-8 items-center justify-center text-center overflow-hidden p-3">
          <div className="flex text-4xl">
            <div>{text}</div>
            <Cursor />
          </div>
        </div>
        <hr className="border-white dark:border-black" />
      </div>
      <a id="projects" />
      <Projects />
      <a id="about" />
      <AboutInfo />
      <a id="contact" />
      <Contact />
    </>
  );
}
