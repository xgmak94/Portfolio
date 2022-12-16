import React from 'react';
import Projects from '../../components/projects/Projects';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  return (
    <>
      <motion.div
        className="min-h-screen flex flex-col text-center justify-center p-3"
      >
        <Projects />
      </motion.div>
    </>
  );
}
