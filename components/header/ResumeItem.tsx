import React from 'react';

import Link from 'next/link';

import { motion } from 'framer-motion';

export default function ResumeItem() {
  return (
    <Link href="/resume.pdf" locale={false} rel="noopener noreferrer">
      <motion.button
        className="hover:bg-gray-300 dark:hover:bg-gray-600 rounded-xl text-xl p-2 capitalize"
        whileHover={{ scale: 1.05 }}
      >
        resume
      </motion.button>
    </Link>
  );
}
