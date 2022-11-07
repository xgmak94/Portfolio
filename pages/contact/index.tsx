import React from 'react';

import Comments from '../../components/contacts/Comments';
import Contacts from '../../components/contacts/Contacts';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <>
      <motion.div
        className="m-5"
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
        className="flex justify-center text-center m-3"
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
    </>
  );
}

export default Contact;
