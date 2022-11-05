import React from 'react';
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import Comments from '../../components/contacts/Comments';
import ContactCard from '../../components/contacts/ContactCard';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <>
      <div className="m-5">
        <div className="text-4xl mb-3">Contacts</div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-3">
          <motion.div
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
            <ContactCard link="mailto:xgmak94@gmail.com">
              <AiOutlineMail size={50} />
              <div>xgmak94@gmail.com</div>
            </ContactCard>
          </motion.div>
          <motion.div
            initial={{
              y: -500,
            }}
            animate={{
              y: 0,
            }}
            transition={{
              duration: 2,
            }}
          >
            <ContactCard link="https://github.com/xgmak94">
              <AiFillGithub size={50} />
              <div>xgmak94</div>
            </ContactCard>
          </motion.div>
          <motion.div
            initial={{
              x: 500,
            }}
            animate={{
              x: 0,
            }}
            transition={{
              duration: 2,
            }}
          >
            <ContactCard link="https://linkedin.com/in/makgary">
              <AiFillLinkedin size={50} />
              <div>makgary</div>
            </ContactCard>
          </motion.div>
        </div>
      </div>
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
