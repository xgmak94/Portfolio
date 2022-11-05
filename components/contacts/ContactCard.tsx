import React from 'react';

interface ContactProps {
  children: React.ReactNode;
}

export default function ContactCard({ children }: ContactProps) {
  return (
    <>
      <div className="p-3 border rounded-xl">{children}</div>
    </>
  );
}
