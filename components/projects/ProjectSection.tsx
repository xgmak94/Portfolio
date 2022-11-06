import React from 'react';

interface props {
  title?: string;
  text: React.ReactNode;
}

export default function ProjectSection({ title, text }: props) {
  return (
    <div className="m-3 container flex flex-col gap-3">
      <div className="text-3xl self-center capitalize">{title}</div>
      <div className="text-lg">{text}</div>
    </div>
  );
}
