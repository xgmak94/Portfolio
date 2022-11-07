import React from 'react';

import { motion } from 'framer-motion';

interface props {
  link: string;
  text: string;
  image: React.ReactNode;
}

export default function ContactCard({ link, image, text }: props) {
  return (
    <>
      <a href={link}>
        <motion.div
          className="p-3 border rounded-xl hover:text-gray-200 hover:dark:text-gray-400"
          whileHover={{ scale: 1.05 }}
        >
          {image}
          <div>{text}</div>
        </motion.div>
      </a>
    </>
  );
}
