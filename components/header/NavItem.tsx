import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface navProps {
  link: string;
  text: string;
}

export default function NavItem({ link, text }: navProps) {
  return (
    <Link href={link}>
      <motion.button
        className="hover:bg-gray-300 dark:hover:bg-gray-600 rounded-xl text-lg p-2 capitalize"
        whileHover={{ scale: 1.1 }}
      >
        {text}
      </motion.button>
    </Link>
  );
}
