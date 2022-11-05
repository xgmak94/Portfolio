import React from 'react';
import Projects from '../../components/projects/Projects';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  return (
    <>
      <motion.div
        className="flex flex-col text-center justify-center m-5"
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
        <div className="flex justify-start text-4xl m-3">Projects</div>
        <Projects />
      </motion.div>
    </>
  );
}
