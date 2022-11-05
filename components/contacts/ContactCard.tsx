import React from 'react';

interface ContactProps {
  children: React.ReactNode;
  link: string;
}

export default function ContactCard({ children, link }: ContactProps) {
  return (
    <>
      <a href={link}>
        <div className="p-3 border rounded-xl hover:text-gray-200 hover:dark:text-gray-400">{children}</div>
      </a>
    </>
  );
}
