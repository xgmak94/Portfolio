import { Divider } from '@mui/material';
import React from 'react';

interface props {
  title?: String;
  text: React.ReactNode;
}

export default function ProjectSection({ title, text }: props) {
  return (
    <div className="p-1 flex flex-col">
      <div className="text-3xl self-center capitalize">{title}</div>
      {title ? <Divider className="bg-black dark:bg-white" /> : null}
      <div className="text-lg">{text}</div>
    </div>
  );
}
