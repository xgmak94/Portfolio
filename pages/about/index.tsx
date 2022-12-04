import { motion } from 'framer-motion';
import React from 'react';

import AboutInfo from '../../components/about/AboutInfo';
import Portrait from '../../components/portrait/Portrait';

export default function About() {
  return (
    <motion.div
      className="min-h-screen p-3"
      initial={{
        x: -500,
      }}
      animate={{
        x: 0,
      }}
      transition={{
        duration: 2,
      }}
    >
      <Portrait />
      <AboutInfo />
    </motion.div>
  );
}
