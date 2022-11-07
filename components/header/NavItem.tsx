import React from 'react';

import { motion } from 'framer-motion';
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
      className="hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg text-xl p-2 capitalize"
      whileHover={{ scale: 1.05 }}
      onClick={() => {
        setMenu(false);
        router.push(link);
      }}
    >
      {text}
    </motion.button>
  );
}
