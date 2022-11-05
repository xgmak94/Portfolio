import React from 'react';
import { MdOutlineLightMode, MdOutlineModeNight } from 'react-icons/md';

import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      className="hover:bg-gray-300 dark:hover:bg-gray-600 rounded-xl text-lg p-2"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? <MdOutlineLightMode /> : <MdOutlineModeNight />}
    </motion.button>
  );
}
