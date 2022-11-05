import React from 'react';
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import Comments from '../../components/contacts/Comments';
import ContactCard from '../../components/contacts/ContactCard';

function Contact() {
  return (
    <>
      <div className="m-3">
        <div className="text-4xl mb-3">Contacts</div>
        <div className="grid grid-cols-3 gap-3">
          <a href="mailto:xgmak94@gmail.com">
            <ContactCard>
              <AiOutlineMail size={50} />
              <div>xgmak94@gmail.com</div>
            </ContactCard>
          </a>
          <a href="https://github.com/xgmak94">
            <ContactCard>
              <AiFillGithub size={50} />
              <div>xgmak94</div>
            </ContactCard>
          </a>
          <a href="https://linkedin.com/in/makgary">
            <ContactCard>
              <AiFillLinkedin size={50} />
              <div>makgary</div>
            </ContactCard>
          </a>
        </div>
      </div>
      <div className="container p-3">
        <div className="flex flex-col justify-center text-center">
          <div className="flex justify-center m-3">
            <Comments />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
