import React from 'react';
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import Comments from '../../components/contacts/Comments';
import ContactCard from '../../components/contacts/ContactCard';

function Contact() {
  return (
    <>
      <div className="m-5">
        <div className="text-4xl mb-3">Contacts</div>
        <div className="grid grid-cols-3 gap-3">
          <ContactCard link="mailto:xgmak94@gmail.com">
            <AiOutlineMail size={50} />
            <div>xgmak94@gmail.com</div>
          </ContactCard>
          <ContactCard link="https://github.com/xgmak94">
            <AiFillGithub size={50} />
            <div>xgmak94</div>
          </ContactCard>
          <ContactCard link="https://linkedin.com/in/makgary">
            <AiFillLinkedin size={50} />
            <div>makgary</div>
          </ContactCard>
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
