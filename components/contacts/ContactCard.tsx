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
          className="p-3 border rounded-xl hover:text-neutral-500"
          whileHover={{ scale: 1.05 }}
        >
          {image}
          <div className="font-semibold">{text}</div>
        </motion.div>
      </a>
    </>
  );
}
