import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

interface navProps {
  link: string;
  text: string;
  setMenu: Function;
}

export default function NavItem({ link, text, setMenu }: navProps) {
  const router = useRouter();

  return (
    <motion.button
      className="hover:bg-gray-300 dark:hover:bg-gray-600 rounded-3xl text-xl p-2 capitalize"
      whileHover={{ scale: 1.05 }}
      onClick={() => {
        setMenu(false);
        router.push(link);
      }}
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
      {text}
    </motion.button>
  );
}
