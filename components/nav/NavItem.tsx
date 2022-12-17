import React from 'react';

import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

interface props {
  link: String;
  text: String;
  setMenu: Function;
}

export default function NavItem({ link, text, setMenu }: props) {
  const router = useRouter();

  return (
    <motion.button
      className="rounded-lg p-2 text-xl capitalize
      hover:bg-teal-500 dark:hover:bg-gray-600"
      whileHover={{ scale: 1.05 }}
      onClick={() => {
        setMenu(false);
        router.push(link as string);
      }}
    >
      {text}
    </motion.button>
  );
}
