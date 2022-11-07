import React from 'react';

import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import ContactCard from '../../components/contacts/ContactCard';

export default function Contacts() {
  return (
    <>
      <div className="text-4xl mb-3">Contacts</div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-3">
        <ContactCard
          link="mailto:xgmak94@gmail.com"
          image={<AiOutlineMail size={50} />}
          text="xgmak94@gmail.com"
        />
        <ContactCard
          link="https://github.com/xgmak94"
          image={<AiFillGithub size={50} />}
          text="xgmak94"
        />
        <ContactCard
          link="https://linkedin.com/in/makgary"
          image={<AiFillLinkedin size={50} />}
          text="makgary"
        />
      </div>
    </>
  );
}
