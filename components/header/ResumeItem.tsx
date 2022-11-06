import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

export default function ResumeItem() {
  return (
    <Link href="/resume.pdf" locale={false} rel="noopener noreferrer">
      <motion.button
        className="hover:bg-gray-300 dark:hover:bg-gray-600 rounded-xl text-xl p-2 capitalize"
        whileHover={{ scale: 1.1 }}
        initial={{
          x: -500,
        }}
        animate={{
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
      >
        resume
      </motion.button>
    </Link>
  );
}
