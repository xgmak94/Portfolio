import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactCard from '../../components/contacts/ContactCard';

export default function Contacts() {
  return (
    <>
      <div className="mb-3 text-4xl">Contacts</div>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        <ContactCard
          link="mailto:xgmak94@gmail.com"
          image={<EmailIcon fontSize="large" />}
          text="xgmak94@gmail.com"
        />
        <ContactCard
          link="https://github.com/xgmak94"
          image={<GitHubIcon fontSize="large" />}
          text="xgmak94"
        />
        <ContactCard
          link="https://linkedin.com/in/makgary"
          image={<LinkedInIcon fontSize="large" />}
          text="makgary"
        />
      </div>
    </>
  );
}
