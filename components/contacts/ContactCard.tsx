import React from 'react';
import { motion } from 'framer-motion';

interface ContactProps {
  children: React.ReactNode;
  link: string;
}

export default function ContactCard({ children, link }: ContactProps) {
  return (
    <>
      <a href={link}>
        <motion.div
          className="p-3 border rounded-xl hover:text-gray-200 hover:dark:text-gray-400"
          whileHover={{ scale: 1.05 }}
        >
          {children}
        </motion.div>
      </a>
    </>
  );
}
