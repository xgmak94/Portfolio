import React from 'react';

import Comments from '../../components/contacts/Comments';
import Contacts from '../../components/contacts/Contacts';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="min-h-screen">
      <motion.div
        className="p-3"
        initial={{
          x: -500,
        }}
        animate={{
          x: 0,
        }}
        transition={{
          duration: 2,
        }}
      >
        <Contacts />
      </motion.div>
      <motion.div
        className="p-3"
        initial={{
          y: 500,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          duration: 2,
        }}
      >
        <Comments />
      </motion.div>
    </div>
  );
}
