import React from 'react';
import Projects from '../../components/projects/Projects';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  return (
    <>
      <motion.div className="flex min-h-screen flex-col justify-center p-3 text-center">
        <Projects />
      </motion.div>
    </>
  );
}
