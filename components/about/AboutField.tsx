import React from 'react';

interface aboutProps {
  children: React.ReactNode;
}

export default function AboutField({ children }: aboutProps) {
  return <div className="m-3">{children}</div>;
}
