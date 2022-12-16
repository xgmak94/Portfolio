import React from 'react';

import { motion } from 'framer-motion';

interface props {
  link: String;
  text: String;
  image: React.ReactNode;
}

export default function ContactCard({ link, image, text }: props) {
  return (
    <>
      <a href={link as string}>
        <motion.div
          className="flex items-center gap-3 p-3 border border-black dark:border-white rounded-xl hover:text-neutral-400 dark:hover:text-neutral-800"
          initial={{
            x: 200,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
        >
          {image}
          <div className="font-semibold">{text}</div>
        </motion.div>
      </a>
    </>
  );
}
