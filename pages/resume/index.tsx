import React from 'react';

type Props = {};

export default function Resume() {
  return (
    <div className="h-screen">
      <iframe className="h-screen w-screen" src="/resume.pdf" />
    </div>
  );
}
